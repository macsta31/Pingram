import { Queue } from "bullmq";
import { connection } from "../connection";

let reminderQueue: Queue;

if (process.env.NODE_ENV !== 'test') {
	reminderQueue = new Queue('reminders', { connection })
}
else {
	reminderQueue = {} as unknown as Queue
}

export { reminderQueue }
