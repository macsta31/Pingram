import { reminderQueue } from "../queues/reminderQueue";
import type { Job } from "bullmq";

export const addReminderJob = async (data: any, delayMs: number): Promise<Job> => {
	const job = await reminderQueue.add('send-reminder', data, {
		delay: delayMs,
		removeOnComplete: true,
		removeOnFail: false,
	})

	return job
}
