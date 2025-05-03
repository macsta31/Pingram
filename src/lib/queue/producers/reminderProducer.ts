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

export const removeReminderJob = async (jobId: string): Promise<void> => {
	try {
		const job: Job = await reminderQueue.getJob(jobId);
		await job.remove();
	}
	catch (err) {
		console.error('Failed to remove reminder job')
	}
}
