import express, { Request, Response } from 'express'
import { makeAccountService } from '../lib/services/accountService'
import { accountRepo } from '../lib/db/accounts'

const accountRouter = express.Router()
const accountService = makeAccountService({ accountRepo })

accountRouter.post('/', async (req: Request, res: Response) => {
	const result = await accountService.createAccount(req.body)
	res.json(result)
})

accountRouter.get('/:id', async (req: Request, res: Response) => {
	const result = await accountService.getAccountById(req.params.id)
	res.json(result)
})

export default accountRouter
