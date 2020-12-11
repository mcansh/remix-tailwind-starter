const { promises: fs } = require('fs');
const { promisify } = require('util');
const path = require('path');

const glob = require('glob');

const asyncGlob = promisify(glob);

function copyFile(inputRelativePath) {
  const outPath = inputRelativePath.replace(/^app\//, '');

  return fs.copyFile(
    path.join(process.cwd(), inputRelativePath),
    path.join(process.cwd(), 'app-build', outPath)
  );
}

async function fileOrDirectoryExists(dirPath) {
  try {
    await fs.access(dirPath);
    return true;
  } catch (error) {
    return false;
  }
}

async function copy() {
  const outDirExists = await fileOrDirectoryExists('app-build');

  if (!outDirExists) {
    await fs.mkdir('app-build');
  }

  const files = await asyncGlob('app/**/*.css');
  return Promise.all(files.map(file => copyFile(file)));
}

copy();
