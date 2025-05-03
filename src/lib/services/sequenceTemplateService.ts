import { Prisma, SequenceTemplate } from '@/generated/prisma'
import { SequenceTemplateRepo } from '../db/sequenceTemplates'


export interface SequenceTemplateService {
	createSequenceTemplate(data: Prisma.SequenceTemplateCreateInput): Promise<SequenceTemplate>
	getSequenceTemplateById(id: string): Promise<SequenceTemplate | null>
	updateSequenceTemplate(id: string, data: Prisma.SequenceTemplateUpdateInput): Promise<SequenceTemplate>
	deleteSequenceTemplate(id: string): Promise<SequenceTemplate>
	getSequenceTemplatesByAccount(accountId: string): Promise<SequenceTemplate[]>
	getSequenceTemplatesByCancelEventAndAccount(cancelOnEvent: string, accountId: string): Promise<SequenceTemplate[]>
}

export const makeSequenceTemplateService = (deps: { sequenceTemplateRepo: SequenceTemplateRepo }): SequenceTemplateService => {
	const { sequenceTemplateRepo } = deps

	return {
		createSequenceTemplate: (data) => sequenceTemplateRepo.createSequenceTemplate(data),
		getSequenceTemplateById: (id) => sequenceTemplateRepo.getSequenceTemplateById(id),
		updateSequenceTemplate: (id, data) => sequenceTemplateRepo.updateSequenceTemplate(id, data),
		deleteSequenceTemplate: (id) => sequenceTemplateRepo.deleteSequenceTemplate(id),
		getSequenceTemplatesByAccount: (accountId) => sequenceTemplateRepo.getSequenceTemplatesByAccount(accountId),
		getSequenceTemplatesByCancelEventAndAccount: (cancelOnEvent, accountId) => sequenceTemplateRepo.getSequenceTemplateByCancelEventAndAccount(cancelOnEvent, accountId)
	}
}
