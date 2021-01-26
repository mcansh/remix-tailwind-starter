const path = require('path');

module.exports = {
  extends: ['@mcansh/eslint-config/typescript'],
  parserOptions: {
    project: [path.join(process.cwd(), 'app/tsconfig.json')],
  },
};
