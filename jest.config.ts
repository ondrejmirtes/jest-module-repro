import type {Config} from 'jest';

const config: Config = {
	rootDir: "frontend",
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'node',
};

export default config;
