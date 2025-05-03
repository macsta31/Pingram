import { Job, Worker } from "bullmq";
import { connection } from "../connection";
import { sequenceRepo } from "../../db/sequences";
import { makeSequenceService } from "../../services/sequenceService";
import { customerRepo } from "../../db/customers";
import { makeCustomerService } from "../../services/customerService";
import { accountRepo } from "../../db/accounts";
import { makeAccountService } from "../../services/accountService";
import { makeTemplateService } from "../../services/templateService";
import { templateRepo } from "../../db/templates";
import { logger } from "../../logs/logger";
import { makeSequenceStepService } from "../../services/sequenceStepService";
import { sequenceStepRepo } from "../../db/sequenceSteps";
import { makeReminderService } from "@/lib/services/reminderService";
import { reminderRepo } from "@/lib/db/reminders";
import { makeSequenceTemplateService } from "@/lib/services/sequenceTemplateService";
import { sequenceTemplateRepo } from "@/lib/db/sequenceTemplates";
import { Reminder } from "@/generated/prisma";
import { ReminderStatusEnum } from "@/lib/validators/reminderValidators";

const customerService = makeCustomerService({ customerRepo })
const accountService = makeAccountService({ accountRepo })
const templateService = makeTemplateService({ templateRepo })
const sequenceService = makeSequenceService({ sequenceRepo })
const stepService = makeSequenceStepService({ sequenceStepRepo })
const reminderService = makeReminderService({ reminderRepo })
const sequenceTemplateService = makeSequenceTemplateService({ sequenceTemplateRepo })

export const processReminder = async (job: Job): Promise<Reminder | void> => {
	if (!job.id) {
		throw new Error("Job without id")
	}
	const { stepId, sequenceId, customerId, accountId, message, title, channels } = job.data;

	const customer = await customerService.getCustomerById(customerId);
	const account = await accountService.getAccountById(accountId);
	const sequence = await sequenceService.getSequenceById(sequenceId)
	const step = await stepService.getSequenceStepById(stepId)
	const reminder = await reminderService.getReminderById(job.id)

	if (!reminder) {
		throw new Error('Reminder not found')
	}


	if (!step?.templateId && !message) {
		logger.error(`No template on step and no message in reminder`)
		return
	}

	const template = step?.templateId ?
		await templateService.getTemplateById(step.templateId) :
		null;

	if (!customer || !account || !sequence || !step) {
		logger.error(`Missing data for sending reminder`, { customer, account });
		return;
	}

	const message_out = message ?? template?.content;
	const title_out = title ?? template?.title;
	const channels_out = channels ?? template?.channels;

	logger.info(`Sending message to [${channels_out.map((channel: string) => channel)}] channels with message: ${message_out} with title: ${title_out}`)

	// TODO: send notification

	const updatedReminder = await reminderService.markAsSent(reminder.id)

	logger.info('Updated reminder', updatedReminder)
	return updatedReminder
};


export const reminderWorker = new Worker(
	'reminders',
	async (job: Job): Promise<Reminder | void> => {
		const updatedReminder = await processReminder(job);
		return updatedReminder
	},
	{ connection }
)


reminderWorker.on('failed', async (job: Job | undefined, error: Error) => {
	if (!job) {
		logger.error("Worker failed, no job")
		return
	}

	if (job?.id === undefined || job?.id === null) {
		logger.error("Worker failed, job undefined or null")
		return
	}
	logger.error('Worker failed', {
		jobId: job?.id,
		error: error.message
	})

	const failedReminder = await reminderService.markAsFailed(job.id)
	return failedReminder
})


reminderWorker.on('error', (err: Error) => {
	logger.error("Worker error", err)
})

reminderWorker.on('completed', async (job: Job | undefined, result: Reminder) => {

	if (!job) {
		logger.error("Job completed, no Job")
		return
	}

	if (job?.id === undefined || job?.id === null) {
		logger.error("Job completed, no Job id")
		return
	}

	if (!result?.stepId) {
		logger.info("No stepId on reminder, this is a one off reminder, return")
		return
	}

	const step = await stepService.getSequenceStepById(result.stepId)
	logger.info("Currently completed step", step)
	if (!step) {
		logger.error("Step not found")
		return
	}


	const sequenceTemplate = await sequenceTemplateService.getSequenceTemplateById(step.sequenceTemplateId)
	if (!sequenceTemplate) {
		logger.error("Sequence Template not found")
		return
	}

	const steps = await stepService.getStepsByTemplateId(sequenceTemplate.id)

	logger.info("Steps", steps)

	const sortedNextSteps = steps.sort((a, b) => a.order - b.order).filter((currStep) => currStep.id !== step.id && currStep.order > step.order)
	if (sortedNextSteps.length === 0) {
		logger.info("No more steps in sequence template, return")
		return
	}

	logger.info("sorted next steps", sortedNextSteps)

	// const nextSendAt = (new Date()).getUTCDate

	const nextReminderData = {
		sequenceId: result.sequenceId,
		customerId: result.customerId,
		accountId: result.accountId,
		status: ReminderStatusEnum.Enum.pending,
		stepId: sortedNextSteps[0].id
	}

	const nextReminder = await reminderService.createReminder(nextReminderData, sortedNextSteps[0])
	return nextReminder
})
