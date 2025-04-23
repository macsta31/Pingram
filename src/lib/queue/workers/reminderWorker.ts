import { Worker } from "bullmq";
import { connection } from "../connection";

export const reminderWorker = new Worker(
	'reminders',
	async job => {
		console.log('Process reminder:', job.data)
		// TODO: send notification
	}, { connection }
)
