#!/usr/bin / env node

/*
 * @license huetiful-js Documentation script using showdown.js,Typedoc and github-markdown-css .  
 * Copyright 2024 Dean Tarisai.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

 */

var {
    readFileSync,
    writeFileSync,
    readdirSync,
    renameSync,
    lstatSync
  } = require('node:fs'),
  ge = require('github-emoji'),
  defaultClasses = {
    blockquote: ' border-l-blue-400 bg-blue-200',
    code: 'rounded-md shadow-md shadow-gray-300 dark:shadow-slate-300'
  },
  injectClasses = Object.keys(defaultClasses).map((key) => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class='${defaultClasses[key]}' $1>`
  })),
  showdown = require('./showdown.cjs'),
  postFragment = require('./xml-shards/post.cjs'),
  data = require('./data.cjs'),
  layoutFragment = require('./xml-shards/layout.cjs'),
  $ = new showdown.Converter({
    extensions: [...injectClasses],
    emoji: true,
    ghCompatibleHeaderId: true,
    ghMentions: true,
    omitWLInCodeBlocks: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true
  }),
  PATH_TO_MARKDOWN_FILES = './docs/assets/markdown/modules';

var _moduleNames = [
  'colors',
  'types',
  'converters',
  'generators',
  'utils',
  'filterBy',
  'sortBy'
];

// The html comment to match before injecting data
// const reHtmlComment = /(<!-- DOC_START -->)[\s\S]*?(<!-- DOC_END -->)$/gm;
// const injectMarkdownInHtmlComment = (data) =>
//   `<!-- DOC_START -->\n${data}\n<!-- DOC_END -->`;

function generateDocs(source) {
  var [current, markdownHeadingEmojiMap] = [
    readFileSync(source, 'utf-8'),
    {
      '### Functions': 'toolbox',
      '# Module': 'package',
      '## Table of contents': 'bookmark_tabs',
      '### Parameters': 'abacus',
      '#### Returns': 'back',
      '#### Defined in': 'memo'
    }
  ];

  // Emoji injection loop
  for (const [heading, emo] of Object.entries(markdownHeadingEmojiMap)) {
    current = current.replace(
      new RegExp(heading, 'gmi'),
      `${heading} ${ge.stringOf(emo)}`
    );
  }

  // Fixing links and extensions

  return $.makeHtml(current)
    .replace(new RegExp('README.md', 'gm'), 'modules.html')
    .replace(new RegExp('modules.md', 'gm'), 'modules.html')
    .replace(new RegExp('.md', 'gm'), '.html')
    .replace(new RegExp(`modules/`, 'g'), './');
}
// Loop through the markdown files for modules

for (const [k, v] of Object.entries(_moduleNames)) {
  var m = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',

    dayPeriod: 'short'
  }).format(lstatSync('./types/' + v + '.d.ts').mtime);

  var cb = (s, x, y) =>
    `https://github.com/prjctimg/huetiful/blob/main/${s}/${x}.${y}`;

  var page = postFragment({
    title: `${v}`,
    mainContent: generateDocs(PATH_TO_MARKDOWN_FILES + '/' + v + '.md'),
    lastUpdated: m,
    srcFile: cb('src', v, 'js'),
    specFile: cb('spec', v, 'spec.js'),
    wikiPage: `https://github.com/prjctimg/huetiful/wiki/${v}`,
    declFile: cb('types', v, 'd.ts'),
    page: {
      previous: {
        title:
          _moduleNames.length - k > 0
            ? _moduleNames[parseInt(k) - 1]
            : `Go back to the home page ?`,
        href:
          parseInt(k) !== 0 && parseInt(k) < _moduleNames.length - 1
            ? `./${_moduleNames[parseInt(k) - 1]}.html`
            : './index.html'
      },
      next: {
        title:
          parseInt(k) < _moduleNames.length - 1
            ? _moduleNames[parseInt(k) + 1]
            : `Learn more on our Wiki`,
        href:
          parseInt(k) < _moduleNames.length - 1
            ? `./${_moduleNames[v + 1]}.html`
            : 'https://github.com/prjctimg/huetiful/wiki/welcome'
      }
    }
  });

  writeFileSync(`./docs/${v}.html`, layoutFragment(page));
}

var navigatoryFiles = ['modules.md', 'README.md'];

for (const page of navigatoryFiles) {
  writeFileSync(
    './docs/' + page.split('.')[0] + '.html',
    layoutFragment(generateDocs('./docs/assets/markdown/' + page)),
    'utf-8'
  );

  if (page === 'README.md') {
    renameSync('./docs/README.html', './docs/index.html');
  }
}

console.log(`Generated navigatory files successfully`);
console.info(`[prjctimg] Done. Generated HTML docs successfully.}`);
