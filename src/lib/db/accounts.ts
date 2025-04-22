import prisma from './prisma'

export interface AccountRepo {
	createAccount: (data: any) => Promise<any>
	getAccountById: (id: string) => Promise<any | null>
	updateAccount: (id: string, data: any) => Promise<any>
	deleteAccount: (id: string) => Promise<any>
}

export const accountRepo: AccountRepo = {
	createAccount: (data) => prisma.account.create({ data }),
	getAccountById: (id) => prisma.account.findUnique({ where: { id } }),
	updateAccount: (id, data) => prisma.account.update({ where: { id }, data }),
	deleteAccount: (id) => prisma.account.delete({ where: { id } }),
}
