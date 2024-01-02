#!/usr/bin / env node
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

var { readFileSync, writeFileSync, renameSync } = require('fs');

//// Refactor
// 1 change folder final output output to webapp. Pick up templates from docs site
// change path segments
// Add typedoc deps
// Inject actual emojis.

////// Documentation generator script
///// Each subdir in src is an .md file
///// Start and end tags in the files in docs will guide the md injection
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
  return readFileSync(`./${rootDir}/${filenameSegment}.${extension}`, 'utf8');
}

const markdownHeadingEmojiMap = {
  '### Functions': ':toolbox:',
  '## Module:': ':package:',
  'Module:': ':package:',
  '## Table of contents': ':scroll:',
  '### Parameters': ':abacus:',
  '#### Returns': ':back:',
  '#### Defined in': ':memo:',
  '### Modules': ':package:',
  '### Constructors': ':hammer_and_wrench:',
  '### Properties': ':microscope:',
  '# Class:': ':card_file_box:',
  '### Methods': ':wrench:',
  '## Constructors': ':hammer_and_wrench:',
  '### constructor': ':hammer_and_wrench:',
  '### Classes': ':card_file_box:'
};
// webapp\data\api
//const reHtmlComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
//const replace = (data) => `\n${data}\n`;
const re = (pattern) => new RegExp(pattern, 'gi');
const generateDocs = (filenameSegment) => {
  let typeDocMarkdownOutput = fileContents(
    `docs/modules`,
    filenameSegment,
    `md`
  );
  //  let templateMarkdownFile = fileContents("templates", filenameSegment, `mdx`);

  console.log(`[info] Adding emojis in ${filenameSegment}.md`);

  for (const heading of Object.keys(markdownHeadingEmojiMap)) {
    typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
      re(heading),
      `${heading}${markdownHeadingEmojiMap[heading]}`
    );
  }
  typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
    /\*\*`Description`\*\*/g,
    '**`Description`** :information_source:'
  );

  typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
    /\*\*`Example`\*\*/g,
    '**`Example`** :clipboard:'
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

console.log(`Done`);

for (const heading of Object.keys(markdownHeadingEmojiMap)) {
  writeFileSync(
    `./docs/modules.md`,
    fileContents('docs', 'modules').replace(
      re(heading),
      `${heading}${markdownHeadingEmojiMap[heading]}`
    )
  );
}

for (const heading of Object.keys(markdownHeadingEmojiMap)) {
  for (const i of ['Color.ColorArray', 'Color.Color']) {
    writeFileSync(
      `./docs/classes/${i}.md`,
      fileContents('docs', 'modules').replace(
        re(heading),
        `${heading}${markdownHeadingEmojiMap[heading]}`
      )
    );
  }
}

writeFileSync(
  './docs/modules.md',
  (indexFile = fileContents('docs', 'modules').replace(
    '# huetiful-js',
    `![Logo](./huetiful-logo.png)`
  ))
);

renameSync('./docs/modules.md', './docs/index.md');
