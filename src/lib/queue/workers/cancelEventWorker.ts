import { Job, Worker } from "bullmq";
import { connection } from "../connection";
import { makeReminderService } from "@/lib/services/reminderService";
import { reminderRepo } from "@/lib/db/reminders";
import { makeSequenceService } from "@/lib/services/sequenceService";
import { sequenceRepo } from "@/lib/db/sequences";
import { makeSequenceTemplateService } from "@/lib/services/sequenceTemplateService";
import { sequenceTemplateRepo } from "@/lib/db/sequenceTemplates";
import { logger } from "@/lib/logs/logger";
import { makeCustomerService } from "@/lib/services/customerService";
import { customerRepo } from "@/lib/db/customers";


const sequenceTemplateService = makeSequenceTemplateService({ sequenceTemplateRepo })
const sequenceService = makeSequenceService({ sequenceRepo })
const reminderService = makeReminderService({ reminderRepo })
const customerService = makeCustomerService({ customerRepo })

export const cancelReminders = async (type: string, customerId: string): Promise<void> => {
	const customer = await customerService.getCustomerById(customerId)
	if (!customer) {
		logger.error("Customer not found", customerId)
		throw new Error("Customer not found")
	}

	const sequenceTemplatesToCancel = await sequenceTemplateService.getSequenceTemplatesByCancelEventAndAccount(type, customer.accountId)

	if (sequenceTemplatesToCancel.length <= 0) {
		logger.info("No sequence templates associates with cancelOnEvent: ", type)
	}


	const settledCustomerSequences = await Promise.allSettled(sequenceTemplatesToCancel.map(async (sequenceTemplate) => {
		const customerSequences = await sequenceService.getSequencesByCustomerAndTemplate(customer.id, sequenceTemplate.id)

		logger.info(`Found ${customerSequences.length} sequences`)

		const settledCustomerReminders = await Promise.allSettled(customerSequences.map(async (customerSequence) => {
			const remindersCancelled = await reminderService.cancelRemindersBySequence(customerSequence.id)
			logger.info(`Cancelled ${remindersCancelled} reminders from sequence ${customerSequence.id}`)
		}))

		const failedCancels = settledCustomerReminders.filter(settledReminder => settledReminder.status === 'rejected');
		if (failedCancels.length > 0) {
			logger.error(`Failed to cancel ${failedCancels.length}`, failedCancels)
		}

		return
	})
	)

	const failedSequenceParses = settledCustomerSequences.filter(customerSequence => customerSequence.status === 'rejected')
	if (failedSequenceParses.length > 0) {
		logger.error(`Failed to parse ${failedSequenceParses.length} sequences`, failedSequenceParses)
	}
	return
}


export const cancelEventsWorker = new Worker(
	'reminders',
	async (job: Job): Promise<void> => {
		const { type, customerId } = job.data;
		return await cancelReminders(type, customerId);
	},
	{ connection }
)
