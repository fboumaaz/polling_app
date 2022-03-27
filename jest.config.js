module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/src/main.tsx'],
  verbose: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 93,
      branches: 60,
      functions: 85,
      lines: 93,
    },
  },
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src$1',
    '\\.(css|less)$': '<rootDir>/config/jest/StyleMock.js',
    '\\.(jpg|ico|jpeg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/FileMock.js',
  },
};
