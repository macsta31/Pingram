import { cancelEventQueue } from '../queues/cancelEventQueue'
import type { Job } from "bullmq"

export const addCancelJob = async (data: any, jobId: string): Promise<Job> => {
	const job = await cancelEventQueue.add('cancel-event', data, {
		delay: 10000,
		removeOnComplete: true,
		removeOnFail: false,
		jobId
	})
	return job
}
