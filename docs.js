#!/usr/bin / env node

/*
 * @license
 * docs.js - Custom documentation generator script for huetiful-js.
Copyright 2023 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/


import {
  readFileSync,
  writeFileSync,
  renameSync,
  readdirSync,
  appendFileSync,
  rmSync,
  cpSync,
  copyFileSync
} from 'fs';
import { stringOf } from 'github-emoji';
import { log } from 'console';

// Global paths and refs
var pathToContent = './spacebook/content/pages';
var rootDir = './docs/out';
var mainIndex = fileContents(rootDir, 'modules');
var pathToMainIndex = String(rootDir + '/modules.md');
var pathToTemplates = './docs' + '/templates';

// The filenames of source files and .md files
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
      `./docs/out/classes/${i}.md`,
      fileContents(rootDir, 'modules').replace(
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

renameSync(pathToMainIndex, `${rootDir}/index.md`);

var templates = readdirSync(pathToTemplates);

// Loop through previous files and delete each
for (const template of templates) {
  rmSync(`${pathToContent}/${template}`);
  log(`Deleted ${template}.`);
}

// Loop through each template file and append them into the pages folder
for (let index = 0; index < pathSegments.length; index++) {
  var toPath = `${pathToContent}/${pathSegments[index]}.md`,
    currentPath = pathSegments[index];
  writeFileSync(
    `${pathToContent}/${currentPath}.md`,
    fileContents(pathToTemplates, currentPath),
    'utf-8'
  );

  appendFileSync(
    toPath,
    `\n${fileContents(rootDir, `modules/${currentPath}`)}`
  );
  console.log(
    `Injected data to ${toPath} from ${rootDir}/modules/${currentPath}.md`
  );
}

// Copy index file template and append data to it
copyFileSync(pathToTemplates + '/home.md', `${pathToContent}/home.md`);
appendFileSync(`${pathToContent}/home.md`, fileContents(rootDir, 'index'));
log(`Generated index.md file successfully`);


// var notes = readdirSync('notes').map((el) => el.split('.')[0]);

// for (const note of notes) {
//   appendFileSync(
//     `spacebook/content/pages/notes/${note}.md`,
//     fileContents(`notes`, note)
//   );

//   console.log(
//     `Injected data to ${pathToContent}/${note} from notes/${note}.md`
//   );
// }

