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
    collectCoverage: true,
    coverageReporters: ['lcov', 'text', 'cobertura', 'html', 'json'],
    testMatch: [
        '**/tests/**/*.js',
        '**/tests/**/*.jsx'
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "json",
        "node"
    ],
    testPathIgnorePatterns: ['node_modules']
};
