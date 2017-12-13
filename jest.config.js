const path = require('path');
module.exports = {
  verbose: true,
  rootDir: './app/javascript',
  setupTestFrameworkScriptFile: '<rootDir>/testing/setupTests.js',
  coverageDirectory: path.resolve(__dirname, 'coverage', 'javascript'),
};
