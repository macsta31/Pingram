import { Prisma, SequenceStep } from '@/generated/prisma'
import { SequenceStepRepo } from '../db/sequenceSteps'

export interface SequenceStepService {
	createSequenceStep(data: Prisma.SequenceStepCreateInput): Promise<SequenceStep>
	getSequenceStepById(id: string): Promise<SequenceStep | null>
	updateSequenceStep(id: string, data: Prisma.SequenceStepUpdateInput): Promise<SequenceStep>
	deleteSequenceStep(id: string): Promise<SequenceStep>
	getStepsByTemplateId(sequenceTemplateId: string): Promise<SequenceStep[]>
}

export const makeSequenceStepService = (deps: { sequenceStepRepo: SequenceStepRepo }): SequenceStepService => {
	const { sequenceStepRepo } = deps

	return {
		createSequenceStep: (data) => sequenceStepRepo.createSequenceStep(data),
		getSequenceStepById: (id) => sequenceStepRepo.getSequenceStepById(id),
		updateSequenceStep: (id, data) => sequenceStepRepo.updateSequenceStep(id, data),
		deleteSequenceStep: (id) => sequenceStepRepo.deleteSequenceStep(id),
		getStepsByTemplateId: (sequenceTemplateId) => sequenceStepRepo.getStepsByTemplateId(sequenceTemplateId),
	}
}
