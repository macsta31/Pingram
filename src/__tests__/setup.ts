
import { PrismaClient } from '@/generated/prisma';
import { logger } from '@/lib/logs/logger';

const prisma = new PrismaClient();

beforeAll(async () => {
	logger.info("Running setup for tests")
	await prisma.$connect();
});

beforeEach(async () => {
	// Truncate all tables if needed
	await prisma.$executeRaw`TRUNCATE TABLE "Reminder", "Customer", "Account", "Sequence", "SequenceStep" RESTART IDENTITY CASCADE;`
});

afterAll(async () => {
	await prisma.$disconnect();
});
