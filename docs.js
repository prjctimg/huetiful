#!/usr/bin / env node
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

import {
  readFileSync,
  writeFileSync,
  renameSync,
  rmSync,
  readdirSync,
  writeFile
} from 'fs';
import { stringOf } from 'github-emoji';
import { log } from 'console';

//// Refactor
// 1 change folder final output output to webapp. Pick up templates from docs site
// change path segments
// Add typedoc deps
// Inject actual emojis.

////// Documentation generator script
///// Each subdir in src is an .md file
///// Start and end tags in the files in docs will guide the md injection

var rootDir = './docs';
var mainIndex = fileContents(rootDir, 'modules');
var pathToMainIndex = String(rootDir + '/modules.md');

const pathSegments = [
  'helpers',
  'colors',
  'filterBy',
  'converters',
  'utils',
  'generators',
  'sortBy',
  'types'
];
function fileContents(rootDir, filenameSegment, extension = 'md') {
  return readFileSync(`${rootDir}/${filenameSegment}.${extension}`, 'utf8');
}

const markdownHeadingEmojiMap = {
  '### Functions': 'toolbox',
  '## Module:': 'package',
  'Module:': 'package',
  '## Table of contents': 'scroll',
  '### Parameters': 'abacus',
  '#### Returns': 'back',
  '#### Defined in': 'memo',
  '### Modules': 'package',
  '### Constructors': 'hammer_and_wrench',
  '### Properties': 'microscope',
  '# Class:': 'card_file_box',
  '### Methods': 'wrench',
  '## Constructors': 'hammer_and_wrench',
  '### constructor': 'hammer_and_wrench',
  '### Classes': 'card_file_box'
};
// webapp\data\api
//const reHtmlComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
//const replace = (data) => `\n${data}\n`;
const re = (pattern) => new RegExp(pattern, 'gi');
const generateDocs = (filenameSegment) => {
  let typeDocMarkdownOutput = fileContents(
    rootDir + `/modules`,
    filenameSegment,
    `md`
  );
  //  let templateMarkdownFile = fileContents("templates", filenameSegment, `mdx`);

  console.log(`[info] Adding utf8 emojis in ${filenameSegment}.md`);

  for (const heading of Object.keys(markdownHeadingEmojiMap)) {
    typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
      re(heading),
      `${heading}${stringOf(markdownHeadingEmojiMap[heading])}`
    );
  }
  typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
    /\*\*`Description`\*\*/g,
    `**\`Description\`** ${stringOf('information_source')}`
  );

  typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
    /\*\*`Example`\*\*/g,
    `**\`Example\`** ${stringOf('clipboard')}`
  );

  typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
    /\*\*`Function`\*\*/g,
    ''
  );

  writeFileSync(`./docs/modules/${filenameSegment}.md`, typeDocMarkdownOutput);
};

for (const pathSeg of pathSegments) {
  generateDocs(pathSeg);
}

for (const heading of Object.keys(markdownHeadingEmojiMap)) {
  writeFileSync(
    pathToMainIndex,
    fileContents(rootDir, 'modules').replace(
      re(heading),
      `${heading}${stringOf(markdownHeadingEmojiMap[heading])}`
    )
  );
}
for (const i of ['Color.ColorArray', 'Color.Color']) {
  for (const heading of Object.keys(markdownHeadingEmojiMap)) {
    writeFileSync(
      `./docs/classes/${i}.md`,
      fileContents('docs', 'modules').replace(
        re(heading),
        `${heading}${stringOf(markdownHeadingEmojiMap[heading])}`
      )
    );
  }
  log(`Added utf8 emojis to ` + i);
}


// Insert logo image and parse the emojis
writeFileSync(
  pathToMainIndex,
  mainIndex.replace('# huetiful-js', `![Logo](./huetiful-logo.png)`)
);
// writeFileSync(pathToMainIndex, rawGfmToGfm('/modules.md'));

renameSync(`${rootDir}/modules.md`, `${rootDir}/index.md`);

// Convert all the markdown files to html
// Remove the md version.
// Inject the generated html into the template file
// for (const pathSeg of pathSegments) {
//   // read the contents of thr template file.
//   writeFileSync(
//     `./docs/modules/${pathSeg}.html`,
//     micromark(fileContents(`${rootDir}/modules`, pathSeg),)
//   );

//   rmSync(`./docs/modules/${pathSeg}.md`);
// }

// console.log(`Done`);
