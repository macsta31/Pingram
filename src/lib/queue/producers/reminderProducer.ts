import { reminderQueue } from "../queues/reminderQueue";

export const addReminderJob = async (data: any, delayMs: number) => {
	await reminderQueue.add('send-reminder', data, {
		delay: delayMs,
		removeOnComplete: true,
		removeOnFail: false,
	})
}
