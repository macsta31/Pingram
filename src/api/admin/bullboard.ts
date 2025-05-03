import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import express from "express";
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'

import { reminderQueue } from "../../lib/queue/queues/reminderQueue";
import { cancelEventQueue } from "@/lib/queue/queues/cancelEventQueue";

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/api/admin/queues')

if (process.env.NODE_ENV !== 'test') {
	createBullBoard({
		queues: [
			new BullMQAdapter(reminderQueue),
			new BullMQAdapter(cancelEventQueue)
		],
		serverAdapter
	})
}
const router = express.Router()
router.use('/queues', serverAdapter.getRouter())

export default router
