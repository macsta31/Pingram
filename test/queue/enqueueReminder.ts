import dotenv from 'dotenv'
dotenv.config()

import { addReminderJob } from '../../src/lib/queue/producers/reminderProducer'

const run = async () => {
	const delay = 3000 // 3 seconds
	await addReminderJob(
		{
			id: 'test-reminder-id',
			message: 'This is a test run!',
		},
		delay
	)

	console.log('Reminder job enqueued!')
}

run().catch(err => {
	console.error('Error enqueuing reminder:', err)
})
