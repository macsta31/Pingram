import { SequenceTemplate } from '@/generated/prisma'
import prisma from './prisma'

export interface SequenceRepo {
	createSequence: (data: any) => Promise<any>
	getSequenceById: (id: string) => Promise<any | null>
	updateSequence: (id: string, data: any) => Promise<any>
	deleteSequence: (id: string) => Promise<any>
	getSequencesByAccount: (accountId: string) => Promise<any[]>
	getSequencesByCustomer: (customerId: string) => Promise<any[]>
	getSequencesByCustomerAndTemplate: (customerId: string, sequenceTemplateId: string) => Promise<any[]>
	cancelSequence: (id: string) => Promise<any>
}

export const sequenceRepo: SequenceRepo = {
	createSequence: (data) => prisma.sequence.create({ data }),
	getSequenceById: (id) => prisma.sequence.findUnique({ where: { id } }),
	updateSequence: (id, data) => prisma.sequence.update({ where: { id }, data }),
	deleteSequence: (id) => prisma.sequence.delete({ where: { id } }),
	getSequencesByAccount: (accountId) => prisma.sequence.findMany({ where: { accountId } }),
	getSequencesByCustomer: (customerId) => prisma.sequence.findMany({ where: { reminders: { some: { customerId } } } }),
	getSequencesByCustomerAndTemplate: (customerId, sequenceTemplateId) => prisma.sequence.findMany({ where: { sequenceTemplateId, reminders: { some: { customerId } } } }),
	cancelSequence: (id) => prisma.sequence.update({ where: { id }, data: { status: 'cancelled', cancelledAt: new Date() } })
}
