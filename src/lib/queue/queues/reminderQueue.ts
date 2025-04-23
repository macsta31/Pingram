import { Queue } from "bullmq";
import { connection } from "../connection";

const reminderQueue = new Queue('reminders', { connection })

export { reminderQueue }
