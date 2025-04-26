import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import express from "express";
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'

import { reminderQueue } from "../../lib/queue/queues/reminderQueue";

const serverAdapter = new ExpressAdapter()
serverAdapter.setBasePath('/api/admin/queues')

createBullBoard({
	queues: [
		new BullMQAdapter(reminderQueue)
	],
	serverAdapter
})

const router = express.Router()
router.use('/queues', serverAdapter.getRouter())

export default router
