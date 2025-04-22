import prisma from './prisma'

export interface SequenceStepRepo {
	createSequenceStep: (data: any) => Promise<any>
	getSequenceStepById: (id: string) => Promise<any | null>
	updateSequenceStep: (id: string, data: any) => Promise<any>
	deleteSequenceStep: (id: string) => Promise<any>
	getStepsByTemplateId: (sequenceTemplateId: string) => Promise<any[]>
}

export const sequenceStepRepo: SequenceStepRepo = {
	createSequenceStep: (data) => prisma.sequenceStep.create({ data }),
	getSequenceStepById: (id) => prisma.sequenceStep.findUnique({ where: { id } }),
	updateSequenceStep: (id, data) => prisma.sequenceStep.update({ where: { id }, data }),
	deleteSequenceStep: (id) => prisma.sequenceStep.delete({ where: { id } }),
	getStepsByTemplateId: (sequenceTemplateId) => prisma.sequenceStep.findMany({ where: { sequenceTemplateId } }),
}
