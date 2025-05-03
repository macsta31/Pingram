import express, { Request, Response } from 'express'
import { makeCancelService } from '@/lib/services/cancelEventService'
import { logger } from '@/lib/logs/logger'

const router = express.Router({ mergeParams: true })
const cancelService = makeCancelService()

router.post('/', async (req: Request, res: Response) => {
	logger.info("params", Object.keys(req.params))
	const { cancel_event, sequenceId } = req.body;
	const customerId = req.params.customerId;

	logger.info("cancel event:", { cancel_event, sequenceId, customerId })
	const result = await cancelService.cancel(cancel_event, customerId, sequenceId)

	res.json(result)
})

export default router;

