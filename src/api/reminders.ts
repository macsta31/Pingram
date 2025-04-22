import express, { Request, Response } from 'express'
import { makeReminderService } from '../lib/services/reminderService'
import { reminderRepo } from '../lib/db/reminders'

const reminderRouter = express.Router()
const reminderService = makeReminderService({ reminderRepo })

reminderRouter.post('/', async (req: Request, res: Response) => {
	const result = await reminderService.createReminder(req.body)
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
