module.exports = {
    collectCoverageFrom: [
        '**/src/**/*.js',
        '**/src/**/*.jsx',
        '!**/src/*.js'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageReporters: ['lcov', 'text', 'html', 'json'],
    testMatch: [
        '**/tests/**/*.test.js',
        '**/tests/**/*.test.jsx'
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "node"
    ],
    testPathIgnorePatterns: ['/node_modules/']
};
