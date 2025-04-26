import { Worker } from "bullmq";
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

const customerService = makeCustomerService({ customerRepo })
const accountService = makeAccountService({ accountRepo })
const templateService = makeTemplateService({ templateRepo })
const sequenceService = makeSequenceService({ sequenceRepo })
const stepService = makeSequenceStepService({ sequenceStepRepo })

export const processReminder = async (jobData: any) => {
	const { stepId, sequenceId, customerId, accountId, message, title, channels } = jobData;

	const customer = await customerService.getCustomerById(customerId);
	const account = await accountService.getAccountById(accountId);
	const sequence = await sequenceService.getSequenceById(sequenceId)
	const step = await stepService.getSequenceStepById(stepId)

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

	logger.info('Ready to send reminder', {
		customer,
		account,
		sequence,
		template,
		step
	});

	logger.info(`Sending message to [${channels_out.map((channel: string) => channel)}] channels with message: ${message_out} with title: ${title_out}`)

	// TODO: send notification
};


export const reminderWorker = new Worker(
	'reminders',
	async job => {
		await processReminder(job.data);
	},
	{ connection }
)
