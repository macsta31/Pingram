import { Prisma, Sequence } from '@/generated/prisma'
import { SequenceRepo } from '../db/sequences'

export interface SequenceService {
	createSequence(data: Prisma.SequenceCreateInput): Promise<Sequence>
	getSequenceById(id: string): Promise<Sequence | null>
	updateSequence(id: string, data: Prisma.SequenceUpdateInput): Promise<Sequence>
	deleteSequence(id: string): Promise<Sequence>
	getSequencesByAccount(accountId: string): Promise<Sequence[]>
	getSequencesByCustomer(customerId: string): Promise<Sequence[]>
}

export const makeSequenceService = (deps: { sequenceRepo: SequenceRepo }): SequenceService => {
	const { sequenceRepo } = deps

	return {
		createSequence: (data) => sequenceRepo.createSequence(data),
		getSequenceById: (id) => sequenceRepo.getSequenceById(id),
		updateSequence: (id, data) => sequenceRepo.updateSequence(id, data),
		deleteSequence: (id) => sequenceRepo.deleteSequence(id),
		getSequencesByAccount: (accountId) => sequenceRepo.getSequencesByAccount(accountId),
		getSequencesByCustomer: (customerId) => sequenceRepo.getSequencesByCustomer(customerId),
	}
}
