import { reminderQueue } from "../queues/reminderQueue";
import type { Job } from "bullmq";

export const addReminderJob = async (data: any, delayMs: number, jobId: string): Promise<Job> => {
	const job = await reminderQueue.add('send-reminder', data, {
		delay: delayMs,
		removeOnComplete: true,
		removeOnFail: false,
		jobId
	})

	return job
}
