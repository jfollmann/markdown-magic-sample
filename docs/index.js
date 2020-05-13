const path = require('path');
const markdownMagic = require('markdown-magic');

const dirTree = require('markdown-magic-directory-tree');
const dependencyTable = require('markdown-magic-dependency-table');

const config = {
  transforms: {
    dirTree,
    dependencyTable
  }
}

const markdownPath = path.join(__dirname, '..', 'README.md');
markdownMagic(markdownPath, config);
