const { quote: escape } = require('shell-quote');

const isWin = process.platform === 'win32';

function escapeFileNames(filenames) {
  return filenames
    .map(filename => `"${isWin ? filename : escape([filename])}"`)
    .join(' ');
}

module.exports = {
  'package.json': () => [`npx sort-package-json`],
  '**/*.{js,jsx,ts,tsx}': filenames => {
    const escapedFileNames = escapeFileNames(filenames);
    return [`eslint --cache --fix ${escapedFileNames}`];
  },
  '**/*.{json,yml,yaml,css,less,scss,md,graphql,mdx}': filenames => {
    const escapedFileNames = escapeFileNames(filenames);
    return [`prettier --write ${escapedFileNames}`];
  },
};
