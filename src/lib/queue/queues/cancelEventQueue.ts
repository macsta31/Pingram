import { Queue } from "bullmq";
import { connection } from "../connection";

let cancelEventQueue: Queue;

if (process.env.NODE_ENV !== 'test') {
	cancelEventQueue = new Queue('cancel-events', { connection })
}
else {
	cancelEventQueue = {} as unknown as Queue
}

export { cancelEventQueue }
