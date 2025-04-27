
import IORedis from 'ioredis'

console.log(`Using redis url: ${process.env.REDIS_URL}`)

const connection = new IORedis(process.env.REDIS_URL || 'redis://localhost:6379', {
	maxRetriesPerRequest: null,
	family: 0
})

export { connection }

