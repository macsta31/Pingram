import express, { Request, Response } from 'express'
import { makeCustomerService } from '../lib/services/customerService'
import { customerRepo } from '../lib/db/customers'
import { CustomerSchema } from '@/lib/validators/customerValidator'

const customerRouter = express.Router()
const customerService = makeCustomerService({ customerRepo })

customerRouter.post('/', async (req: Request, res: Response) => {
	const parsed = CustomerSchema.safeParse(req.body)

	if (!parsed.success) {
		res.status(400).json({
			message: 'Validation error',
			errors: parsed.error.flatten().fieldErrors
		})
		return
	}

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
