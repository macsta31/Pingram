import prisma from './prisma'

export interface TemplateRepo {
	createTemplate: (data: any) => Promise<any>
	getTemplateById: (id: string) => Promise<any | null>
	updateTemplate: (id: string, data: any) => Promise<any>
	deleteTemplate: (id: string) => Promise<any>
	getTemplatesByAccount: (accountId: string) => Promise<any[]>
}

export const templateRepo: TemplateRepo = {
	createTemplate: (data) => prisma.template.create({ data }),
	getTemplateById: (id) => prisma.template.findUnique({ where: { id } }),
	updateTemplate: (id, data) => prisma.template.update({ where: { id }, data }),
	deleteTemplate: (id) => prisma.template.delete({ where: { id } }),
	getTemplatesByAccount: (accountId) => prisma.template.findMany({ where: { accountId } }),
}
