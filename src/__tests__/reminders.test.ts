
import request from 'supertest'
import app from '@/server'

describe('Reminders API', () => {

	describe('POST /api/reminders', () => {
		it('should create a reminder with valid data', async () => {
			const response = await request(app)
				.post('/api/reminders')
				.send({
					sequenceId: 'valid-uuid',
					customerId: 'valid-uuid',
					accountId: 'valid-uuid',
					stepId: 'valid-uuid',
					sendAt: new Date(Date.now() + 60000).toISOString(),
					status: 'pending',
					channels: ['email'],
					message: 'Test message'
				});
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('id');
		});

		it('should reject invalid data', async () => {
			const response = await request(app)
				.post('/api/reminders')
				.send({}); // Empty body
			expect(response.status).toBe(400);
		});
	});

	describe('GET /api/reminders/:id', () => {
		it('should return reminder by id', async () => {
			// Ideally first create a reminder, then fetch
		});

		it('should return 404 if not found', async () => {
			const response = await request(app)
				.get('/api/reminders/non-existent-id');
			expect(response.status).toBe(404);
		});
	});

	describe('PUT /api/reminders/:id', () => {
		it('should update a reminder', async () => {
			// Create -> Update -> Verify
		});
	});

	describe('PUT /api/reminders/:id', () => {
		it('should return 404 if not found', async () => {
			const response = await request(app)
				.put('/api/reminders/bad-id')
				.send({
					hello: ''
				})
			expect(response.status).toBe(404);
		});
	});

	describe('POST /api/reminders/:id/cancel', () => {
		it('should mark reminder as cancelled', async () => {
			// Create -> Cancel -> Verify
		});
	});

	describe('POST /api/reminders/:id/send', () => {
		it('should mark reminder as sent', async () => {
			// Create -> Send -> Verify
		});
	});

	describe('GET /api/reminders/customer/:customerId', () => {
		it('should get reminders by customerId', async () => {
			// Create -> Fetch by customerId
		});
	});

});

