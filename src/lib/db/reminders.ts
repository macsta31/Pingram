
import { Reminder } from '@/generated/prisma'
import { logger } from '../logs/logger'
import prisma from './prisma'

export interface ReminderRepo {
	createReminder: (data: any) => Promise<any>
	getReminderById: (id: string) => Promise<any | null>
	updateReminder: (id: string, data: any) => Promise<any>
	deleteReminder: (id: string) => Promise<any>
	getRemindersByAccount: (accountId: string) => Promise<any[]>
	getRemindersByCustomer: (customerId: string) => Promise<any[]>
	getRemindersBySequenceAndCustomer: (sequenceId: string, customerId: string) => Promise<any[]>
	cancelRemindersBySequence: (sequenceId: string) => Promise<Reminder[]>
	getRemindersBySequenceAndStep: (sequenceId: string, stepId: string) => Promise<any>
}

export const reminderRepo: ReminderRepo = {
	createReminder: (data) => prisma.reminder.create({ data }),
	getReminderById: (id) => prisma.reminder.findUnique({ where: { id } }),
	updateReminder: (id, data) => prisma.reminder.update({ where: { id }, data }),
	deleteReminder: (id) => prisma.reminder.delete({ where: { id } }),
	getRemindersByAccount: (accountId) => prisma.reminder.findMany({ where: { accountId } }),
	getRemindersByCustomer: (customerId) => prisma.reminder.findMany({ where: { customerId } }),
	getRemindersBySequenceAndCustomer: (sequenceId, customerId) => prisma.reminder.findMany({ where: { sequenceId, customerId } }),
	cancelRemindersBySequence: async (sequenceId) => {
		const result = await prisma.reminder.updateManyAndReturn(
			{
				where: {
					sequenceId,
					status: {
						equals: "pending"
					}
				},
				data: {
					status: 'cancelled',
					cancelledAt: new Date()
				}
			}
		)

		return result
	},
	getRemindersBySequenceAndStep: (sequenceId, stepId) => {
		return prisma.reminder.findFirst({
			where: {
				sequenceId,
				stepId,
				status: 'pending'
			}
		})
	}
} 
