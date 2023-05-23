const nextJest = require('next/jest')

const createJestConfig = nextJest()

/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src']
}

module.exports = createJestConfig(customJestConfig)