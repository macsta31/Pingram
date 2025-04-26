import { processReminder } from '../../src/lib/queue/workers/reminderWorker';

const run = async () => {
	await processReminder({
		sequenceId: 'b82ad51d-be1b-400a-a575-03ad5030ca02',
		customerId: 'a8a0a0ad-5d17-4012-97d4-03285071fca1',
		accountId: '5fcd4f73-51be-4612-9ed6-4a68b9ca75b0',
		id: 'real-reminder-id-in-db',
		channel: 'email'
	});
};

run().catch(console.error);


