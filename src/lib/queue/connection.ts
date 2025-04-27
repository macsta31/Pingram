
import IORedis from 'ioredis'
import { logger } from '../logs/logger';

console.log(`Using redis url: ${process.env.REDIS_URL}`)

let connection: IORedis;

if (process.env.NODE_ENV !== "test") {
	connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
		maxRetriesPerRequest: null,
		family: 0
	})
} else {
	connection = {} as any
	logger.info("Not starting redis in test mode")
}
export { connection }

