const path = require('path');

module.exports = {
  "extends": ["wesbos/typescript"],
  // Define the root directory for TypeScript files.
  "parserOptions": {
    "project": path.resolve(__dirname, "./tsconfig.json"),
  },
  // Ignore config files
  "ignorePatterns": [
    '.eslintrc.cjs',
  ],
}
