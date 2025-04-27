
import type { Config } from 'jest';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env.test' });

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	testMatch: ['**/__tests__/**/*.test.ts'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup.ts']
};

export default config;

