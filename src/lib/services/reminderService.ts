
import { ReminderRepo } from '../db/reminders'
import { Reminder, Prisma } from '../../generated/prisma'
import { addReminderJob } from '../queue/producers/reminderProducer'

export interface ReminderService {
	createReminder: (data: Prisma.ReminderCreateInput) => Promise<Reminder>
	getReminderById: (id: string) => Promise<Reminder | null>
	updateReminder: (id: string, data: Prisma.ReminderUpdateInput) => Promise<Reminder>
	cancelReminder: (id: string) => Promise<Reminder>
	markAsSent: (id: string, sentAt?: Date) => Promise<Reminder>
	getRemindersByCustomer: (customerId: string) => Promise<Reminder[]>
}

export const makeReminderService = (deps: { reminderRepo: ReminderRepo }): ReminderService => {
	const { reminderRepo } = deps

	return {
		createReminder: async (data) => {
			const reminder = await reminderRepo.createReminder(data)
			const delayMs = new Date(data.sendAt).getTime() - Date.now()
			await addReminderJob({ id: reminder.id }, delayMs)

			return reminder
		},

		getReminderById: async (id) => {
			return reminderRepo.getReminderById(id)
		},

		updateReminder: async (id, data) => {
			return reminderRepo.updateReminder(id, data)
		},

		cancelReminder: async (id) => {
			return reminderRepo.updateReminder(id, { status: 'cancelled' })
		},

		markAsSent: async (id, sentAt = new Date()) => {
			return reminderRepo.updateReminder(id, {
				status: 'sent',
				sentAt,
			})
		},

		getRemindersByCustomer: async (customerId) => {
			return reminderRepo.getRemindersByCustomer(customerId)
		},
	}
}
