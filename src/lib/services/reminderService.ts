
import { ReminderRepo } from '../db/reminders'
import { Reminder, Prisma } from '@/generated/prisma'
import { addReminderJob } from '../queue/producers/reminderProducer'
import { logger } from '../logs/logger'
import type { CreateReminderInput } from '../validators/reminderValidators'

export interface ReminderService {
	createReminder: (data: CreateReminderInput) => Promise<Reminder>
	getReminderById: (id: string) => Promise<Reminder | null>
	updateReminder: (id: string, data: Prisma.ReminderUpdateInput) => Promise<Reminder | null>
	cancelReminder: (id: string) => Promise<Reminder>
	markAsSent: (id: string, sentAt?: Date) => Promise<Reminder>
	markAsFailed: (id: string, failedAt?: Date) => Promise<Reminder>
	getRemindersByCustomer: (customerId: string) => Promise<Reminder[]>
}

export const makeReminderService = (deps: { reminderRepo: ReminderRepo }): ReminderService => {
	const { reminderRepo } = deps

	return {
		createReminder: async (data) => {
			// Get Time until job execution in Ms
			const delayMs = new Date(data.sendAt).getTime() - Date.now();

			if (delayMs < 0) {
				throw new Error('sendAt cannot be in the past')
			}

			logger.info('delayMS', delayMs)

			const reminder = await reminderRepo.createReminder(data)

			const job = await addReminderJob(data, delayMs, reminder.id)

			logger.info('JobId', job.id)

			return reminder
		},

		getReminderById: async (id) => {
			return reminderRepo.getReminderById(id)
		},

		updateReminder: async (id, data) => {
			const reminder = await reminderRepo.getReminderById(id);
			if (reminder) {
				return reminderRepo.updateReminder(id, data)
			}
			else {
				return null
			}
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
		markAsFailed: async (id, failedAt = new Date()) => {
			return reminderRepo.updateReminder(id, {
				status: 'failed',
				failedAt
			})
		},

		getRemindersByCustomer: async (customerId) => {
			return reminderRepo.getRemindersByCustomer(customerId)
		},
	}
}
