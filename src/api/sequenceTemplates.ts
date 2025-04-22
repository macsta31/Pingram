import express, { Request, Response } from 'express'
import { makeSequenceTemplateService } from '../lib/services/sequenceTemplateService'
import { sequenceTemplateRepo } from '../lib/db/sequenceTemplates'

const router = express.Router()
const service = makeSequenceTemplateService({ sequenceTemplateRepo })

router.post('/', async (req: Request, res: Response) => {
	const result = await service.createSequenceTemplate(req.body)
	res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
	const result = await service.getSequenceTemplateById(req.params.id)
	res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
	const result = await service.updateSequenceTemplate(req.params.id, req.body)
	res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
	const result = await service.deleteSequenceTemplate(req.params.id)
	res.json(result)
})

router.get('/account/:accountId', async (req: Request, res: Response) => {
	const result = await service.getSequenceTemplatesByAccount(req.params.accountId)
	res.json(result)
})

export default router
