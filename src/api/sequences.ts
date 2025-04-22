import express, { Request, Response } from 'express'
import { makeSequenceService } from '../lib/services/sequenceService'
import { sequenceRepo } from '../lib/db/sequences'

const router = express.Router()
const service = makeSequenceService({ sequenceRepo })

router.post('/', async (req: Request, res: Response) => {
	const result = await service.createSequence(req.body)
	res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
	const result = await service.getSequenceById(req.params.id)
	res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
	const result = await service.updateSequence(req.params.id, req.body)
	res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
	const result = await service.deleteSequence(req.params.id)
	res.json(result)
})

router.get('/account/:accountId', async (req: Request, res: Response) => {
	const result = await service.getSequencesByAccount(req.params.accountId)
	res.json(result)
})

router.get('/customer/:customerId', async (req: Request, res: Response) => {
	const result = await service.getSequencesByCustomer(req.params.customerId)
	res.json(result)
})

export default router
