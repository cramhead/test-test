module.exports = async () => {
  return {
    moduleFileExtensions: ['js', 'json', 'ts'],
    verbose: true,
    rootDir: 'test',
    testRegex: '.*\\.test\\.js',
    logHeapUsage: true,
    testEnvironment: 'node',
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
  };
};
