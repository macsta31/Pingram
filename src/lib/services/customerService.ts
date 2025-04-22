import { Prisma, Customer } from "../../generated/prisma";
import { CustomerRepo } from "../db/customers";

export interface CustomerService {
	getCustomerById: (id: string) => Promise<Customer>
	getCustomersByAccountId: (id: string) => Promise<Customer[]>
	getCustomerByExternalId: (externalId: string, accountId: string) => Promise<Customer[]>
	createCustomer: (data: Prisma.CustomerCreateInput) => Promise<Customer>
	updateCustomer: (id: string, data: Prisma.CustomerUpdateInput) => Promise<Customer>
}

export const makeCustomerService = (deps: { customerRepo: CustomerRepo }): CustomerService => {
	const { customerRepo } = deps

	return {
		getCustomerById: async (id: string) => {
			return await customerRepo.getCustomerById(id);
		},

		getCustomersByAccountId: async (id: string) => {
			return await customerRepo.getCustomersByAccount(id);
		},

		getCustomerByExternalId: async (externalId: string, accountId: string) => {
			return await customerRepo.getCustomerByExternalId(externalId, accountId);
		},

		createCustomer: async (data: Prisma.CustomerCreateInput) => {
			return await customerRepo.createCustomer(data);
		},

		updateCustomer: async (id: string, data: Prisma.CustomerUpdateInput) => {
			return await customerRepo.updateCustomer(id, data)
		}


	}
} 
