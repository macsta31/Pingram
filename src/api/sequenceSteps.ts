import express, { Request, Response } from 'express'
import { makeSequenceStepService } from '../lib/services/sequenceStepService'
import { sequenceStepRepo } from '../lib/db/sequenceSteps'
import { SequenceStepSchema } from '@/lib/validators/sequenceStepValidator'

const router = express.Router()
const service = makeSequenceStepService({ sequenceStepRepo })

router.post('/', async (req: Request, res: Response) => {
	const parsed = SequenceStepSchema.safeParse(req.body)

	if (!parsed.success) {
		res.status(400).json({
			message: 'Validation error',
			errors: parsed.error.flatten().fieldErrors
		})
		return
	}

	const result = await service.createSequenceStep(req.body)
	res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
	const result = await service.getSequenceStepById(req.params.id)
	res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
	const result = await service.updateSequenceStep(req.params.id, req.body)
	res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
	const result = await service.deleteSequenceStep(req.params.id)
	res.json(result)
})

router.get('/template/:templateId', async (req: Request, res: Response) => {
	const result = await service.getStepsByTemplateId(req.params.templateId)
	res.json(result)
})

export default router
