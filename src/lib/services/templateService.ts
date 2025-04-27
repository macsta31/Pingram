import { Prisma, Template } from '@/generated/prisma'
import { TemplateRepo } from '../db/templates'

export interface TemplateService {
	createTemplate(data: Prisma.TemplateCreateInput): Promise<Template>
	getTemplateById(id: string): Promise<Template | null>
	updateTemplate(id: string, data: Prisma.TemplateUpdateInput): Promise<Template>
	deleteTemplate(id: string): Promise<Template>
	getTemplatesByAccount(accountId: string): Promise<Template[]>
}

export const makeTemplateService = (deps: { templateRepo: TemplateRepo }): TemplateService => {
	const { templateRepo } = deps

	return {
		createTemplate: (data) => templateRepo.createTemplate(data),
		getTemplateById: (id) => templateRepo.getTemplateById(id),
		updateTemplate: (id, data) => templateRepo.updateTemplate(id, data),
		deleteTemplate: (id) => templateRepo.deleteTemplate(id),
		getTemplatesByAccount: (accountId) => templateRepo.getTemplatesByAccount(accountId),
	}
}
