
import { ReminderRepo } from '../db/reminders'
import { Reminder, Prisma, SequenceStep } from '@/generated/prisma'
import { addReminderJob } from '../queue/producers/reminderProducer'
import { logger } from '../logs/logger'
import type { CreateReminderInput } from '../validators/reminderValidators'

export interface ReminderService {
	createReminder: (data: CreateReminderInput, step: SequenceStep | null) => Promise<Reminder>
	getReminderById: (id: string) => Promise<Reminder | null>
	updateReminder: (id: string, data: Prisma.ReminderUpdateInput) => Promise<Reminder | null>
	cancelReminder: (id: string) => Promise<Reminder>
	cancelRemindersBySequence: (sequenceId: string) => Promise<Reminder[]>
	markAsSent: (id: string, sentAt?: Date) => Promise<Reminder>
	markAsFailed: (id: string, failedAt?: Date) => Promise<Reminder>
	getRemindersByCustomer: (customerId: string) => Promise<Reminder[]>
}

export const makeReminderService = (deps: { reminderRepo: ReminderRepo }): ReminderService => {
	const { reminderRepo } = deps

	return {
		createReminder: async (data, step) => {
			// If no step is passed, the concrete reminder information needs to be on the original request
			if (!(step || (data.sendAt && data.channels && data.message && data.title))) {
				throw new Error('Invalid state, no step and missing reminder information')
			}
			// Get Time until job execution in Ms
			let delayMs;
			if (data.sendAt) {
				delayMs = new Date(data.sendAt).getTime() - Date.now()
			}
			else {
				// this check should never be true because of the above state check
				if (!step) {
					throw new Error('Invalid state, no step and no sendAt, we should never arrive here')
				}
				// convert delay minutes to delay milliseconds
				delayMs = step.delayMinutes * 60000
				let now = (new Date()).getTime()
				let sendAtTime = now + delayMs
				data.sendAt = (new Date(sendAtTime)).toISOString()
			}

			if (delayMs < 0) {
				throw new Error('sendAt cannot be in the past')
			}

			logger.info('delayMS', delayMs)

			logger.info('create reminder data', data)

			const reminderExists = await reminderRepo.getRemindersBySequenceAndStep(data.sequenceId, data.stepId)
			if (reminderExists) {
				throw new Error(`Reminder for this sequence and step already exists: "${reminderExists.id}"`)
			}

			const reminder = await reminderRepo.createReminder(data)

			const job = await addReminderJob(data, delayMs, reminder.id)

			logger.info('JobId', job.id)

			const reminderWithJobId = await reminderRepo.updateReminder(reminder.id, {
				jobId: job.id
			})
			return reminderWithJobId
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
		cancelRemindersBySequence: async (sequenceId) => {
			return reminderRepo.cancelRemindersBySequence(sequenceId)
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
		}
	}
}
