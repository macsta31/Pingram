import express, { Request, Response } from 'express'
import { makeCustomerService } from '../lib/services/customerService'
import { customerRepo } from '../lib/db/customers'

const customerRouter = express.Router()
const customerService = makeCustomerService({ customerRepo })

customerRouter.post('/', async (req: Request, res: Response) => {
	const result = await customerService.createCustomer(req.body)
	res.json(result)
})

customerRouter.get('/:id', async (req: Request, res: Response) => {
	const result = await customerService.getCustomerById(req.params.id)
	res.json(result)
})

customerRouter.get('/account/:accountId/', async (req: Request, res: Response) => {
	const result = await customerService.getCustomersByAccountId(req.params.accountId)
	res.json(result)
})

export default customerRouter
