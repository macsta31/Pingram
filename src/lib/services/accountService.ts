import { AccountRepo } from "../db/accounts";
import { Account, Prisma } from "@/generated/prisma";

export interface AccountService {
	createAccount: (data: Prisma.AccountCreateInput) => Promise<Account>
	getAccountById: (id: string) => Promise<Account | null>
	updateApiToken: (id: string, token: string) => Promise<Account>
}

export const makeAccountService = (deps: { accountRepo: AccountRepo }): AccountService => {
	const { accountRepo } = deps

	return {
		createAccount: async (data) => {
			return accountRepo.createAccount(data)
		},

		getAccountById: async (id) => {
			return accountRepo.getAccountById(id)
		},

		updateApiToken: async (id: string, token: string) => {
			return accountRepo.updateAccount(id, {
				apiToken: token
			})
		}
	}
}
