import prisma from './prisma'

export interface CustomerRepo {
	createCustomer: (data: any) => Promise<any>
	getCustomerById: (id: string) => Promise<any | null>
	updateCustomer: (id: string, data: any) => Promise<any>
	deleteCustomer: (id: string) => Promise<any>
	getCustomersByAccount: (accountId: string) => Promise<any[]>
	getCustomerByExternalId: (externalId: string, accountId: string) => Promise<any>
}

export const customerRepo: CustomerRepo = {
	createCustomer: (data) => prisma.customer.create({ data }),
	getCustomerById: (id) => prisma.customer.findUnique({ where: { id } }),
	updateCustomer: (id, data) => prisma.customer.update({ where: { id }, data }),
	deleteCustomer: (id) => prisma.customer.delete({ where: { id } }),
	getCustomersByAccount: (accountId) => prisma.customer.findMany({ where: { accountId } }),
	getCustomerByExternalId: (externalId, accountId) => prisma.customer.findMany({ where: { externalId, accountId } })

}
