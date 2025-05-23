import express, { Request, Response } from 'express'
import { makeTemplateService } from '../lib/services/templateService'
import { templateRepo } from '../lib/db/templates'
import { TemplateSchema } from '@/lib/validators/templateValidator'

const router = express.Router()
const service = makeTemplateService({ templateRepo })

router.post('/', async (req: Request, res: Response) => {
	const parsed = TemplateSchema.safeParse(req.body)

	if (!parsed.success) {
		res.status(400).json({
			message: 'Validation error',
			errors: parsed.error.flatten().fieldErrors
		})
		return
	}

	const result = await service.createTemplate(req.body)
	res.json(result)
})

router.get('/:id', async (req: Request, res: Response) => {
	const result = await service.getTemplateById(req.params.id)
	res.json(result)
})

router.put('/:id', async (req: Request, res: Response) => {
	const result = await service.updateTemplate(req.params.id, req.body)
	res.json(result)
})

router.delete('/:id', async (req: Request, res: Response) => {
	const result = await service.deleteTemplate(req.params.id)
	res.json(result)
})

router.get('/account/:accountId', async (req: Request, res: Response) => {
	const result = await service.getTemplatesByAccount(req.params.accountId)
	res.json(result)
})

export default router
