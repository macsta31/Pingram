import express, { Request, Response } from 'express'
import { makeReminderService } from '../lib/services/reminderService'
import { reminderRepo } from '../lib/db/reminders'
import { isValid, parseISO } from 'date-fns'
import { makeSequenceStepService } from '../lib/services/sequenceStepService'
import { sequenceStepRepo } from '../lib/db/sequenceSteps'
import { ReminderSchema } from '@/lib/validators/reminderValidators'
import { logger } from '@/lib/logs/logger'

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
		stepId,
		sendAt,
		message,
		channels
	} = parsed.data

	const step = await stepService.getSequenceStepById(stepId);

	if (!step && !sendAt) {
		res.status(400).json({ errors: { stepId: 'Step has no template ID and no sendAt provided' } })
	}



	if (sendAt) {
		const parsedSendAt = parseISO(sendAt)
		if (!isValid(parsedSendAt)) {
			return res.status(400).json({ error: 'Invalid sendAt timestamp' })
		}
	}
	if (!step?.templateId && !message) {
		res.status(400).json({ errors: { stepId: 'Step has no template ID and no message provided' } })
		return
	}

	if (!step?.templateId && !channels) {
		res.status(400).json({ errors: { stepId: 'Step has no template ID and no channels provided' } })
		return
	}

	logger.info('input', req.body);

	// Create reminder with job id for possible job removal (if step completion event is triggered)
	let result;
	try {
		result = await reminderService.createReminder(parsed.data, step)
	}
	catch (err: any) {
		res.status(500).json({ message: "Error creating reminder", error: err.message })
	}

	res.json(result)
})

reminderRouter.get('/:id', async (req: Request, res: Response) => {
	const result = await reminderService.getReminderById(req.params.id)
	if (result) {
		res.json(result)
	}
	else {
		res.status(404).json({ message: "Entity not found" })
	}
	return
})

reminderRouter.put('/:id', async (req: Request, res: Response) => {
	const result = await reminderService.updateReminder(req.params.id, req.body)
	if (result) {
		res.json(result)
	}
	else {
		res.status(404).json({ error: "Entity not found" })
	}
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
