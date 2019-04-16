module.exports = {
    rootDir: './',
    roots: ['<rootDir>/src'],
    testMatch: [
        '**/__tests__/?(*.)+(spec|test).js?(x)',
    ],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.js'],
    coverageDirectory: '<rootDir>/coverage/jest',
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],
    coverageReporters: [
        'text',
    ],
    transform: {
        '\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    },
    globals: { __DEV__: true },
};
