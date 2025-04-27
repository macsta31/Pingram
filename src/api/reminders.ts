import express, { Request, Response } from 'express'
import { makeReminderService } from '../lib/services/reminderService'
import { reminderRepo } from '../lib/db/reminders'
import { addReminderJob } from '../lib/queue/producers/reminderProducer'
import { isValid, parseISO } from 'date-fns'
import { makeSequenceStepService } from '../lib/services/sequenceStepService'
import { sequenceStepRepo } from '../lib/db/sequenceSteps'
import { ReminderSchema } from '@/lib/validators/reminderValidators'

const reminderRouter = express.Router()
const reminderService = makeReminderService({ reminderRepo })
const stepService = makeSequenceStepService({ sequenceStepRepo })

reminderRouter.post('/', async (req: Request, res: Response) => {
	const parsed = ReminderSchema.safeParse(req.body)

	if (!parsed.success) {
		res.status(400).json({
			message: "Validation failed",
			errors: parsed.error.flatten().fieldErrors
		})
		return
	}

	const {
		sequenceId,
		customerId,
		accountId,
		stepId,
		sendAt,
		status,
		message,
		title,
		channels
	} = parsed.data

	const parsedSendAt = parseISO(sendAt)
	if (!isValid(parsedSendAt)) {
		return res.status(400).json({ error: 'Invalid sendAt timestamp' })
	}
	// Get Time until job execution in Ms
	const delayMs = new Date(sendAt).getTime() - Date.now();

	if (delayMs < 0) {
		return res.status(400).json({ error: 'sendAt cannot be in the past' })
	}

	const queueData = {
		sequenceId,
		customerId,
		accountId,
		stepId,
		message,
		title,
		channels
	}

	const step = await stepService.getSequenceStepById(stepId);

	if (!step?.templateId && !message) {
		res.status(400).json({ errors: { stepId: 'Step has no template ID and no message provided' } })
		return
	}

	if (!step?.templateId && !channels) {
		res.status(400).json({ errors: { stepId: 'Step has no template ID and no channels provided' } })
		return
	}

	// Create job with id without fetching data in case information on any doc changes between now and job execution
	const job = await addReminderJob(queueData, delayMs)

	// Create reminder with job id for possible job removal (if step completion event is triggered)
	const result = await reminderService.createReminder({
		...req.body,
		jobId: job.id
	})

	res.json(result)
})

reminderRouter.get('/:id', async (req: Request, res: Response) => {
	const result = await reminderService.getReminderById(req.params.id)
	res.json(result)
})

reminderRouter.put('/:id', async (req: Request, res: Response) => {
	const result = await reminderService.updateReminder(req.params.id, req.body)
	res.json(result)
})

reminderRouter.post('/:id/cancel', async (req: Request, res: Response) => {
	const result = await reminderService.cancelReminder(req.params.id)
	res.json(result)
})

reminderRouter.post('/:id/send', async (req: Request, res: Response) => {
	const result = await reminderService.markAsSent(req.params.id)
	res.json(result)
})

reminderRouter.get('/customer/:customerId', async (req: Request, res: Response) => {
	const result = await reminderService.getRemindersByCustomer(req.params.customerId)
	res.json(result)
})

export default reminderRouter
