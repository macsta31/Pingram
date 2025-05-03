import { SequenceTemplate } from '@/generated/prisma'
import prisma from './prisma'

export interface SequenceTemplateRepo {
	createSequenceTemplate: (data: any) => Promise<any>
	getSequenceTemplateById: (id: string) => Promise<any | null>
	updateSequenceTemplate: (id: string, data: any) => Promise<any>
	deleteSequenceTemplate: (id: string) => Promise<any>
	getSequenceTemplatesByAccount: (accountId: string) => Promise<any[]>
	getSequenceTemplateByCancelEventAndAccount: (cancelOnEvent: string, accountId: string) => Promise<SequenceTemplate[]>
}

export const sequenceTemplateRepo: SequenceTemplateRepo = {
	createSequenceTemplate: (data) => prisma.sequenceTemplate.create({ data }),
	getSequenceTemplateById: (id) => prisma.sequenceTemplate.findUnique({ where: { id } }),
	updateSequenceTemplate: (id, data) => prisma.sequenceTemplate.update({ where: { id }, data }),
	deleteSequenceTemplate: (id) => prisma.sequenceTemplate.delete({ where: { id } }),
	getSequenceTemplatesByAccount: (accountId) => prisma.sequenceTemplate.findMany({ where: { accountId } }),
	getSequenceTemplateByCancelEventAndAccount: (cancelOnEvent, accountId) => prisma.sequenceTemplate.findMany({ where: { cancelOnEvent, accountId } })
}
