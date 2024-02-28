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
    blockquote: ' border-l-blue-400 bg-blue-200'
  },
  injectClasses = Object.keys(defaultClasses).map((key) => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class='${defaultClasses[key]}' $1>`
  }));
(showdown = require('./showdown.cjs')),
  (postFragment = require('./xml-shards/post.cjs')),
  (data = require('./data.cjs')),
  (layoutFragment = require('./xml-shards/layout.cjs')),
  ($ = new showdown.Converter({
    extensions: [...injectClasses],
    emoji: true,
    ghCompatibleHeaderId: true,
    ghMentions: true,
    omitWLInCodeBlocks: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true
  })),
  (PATH_TO_MARKDOWN_FILES = './docs/assets/markdown/modules'),
  (_moduleNames = [
    'colors',
    'types',
    'converters',
    'generators',
    'utils',
    'filterBy',
    'sortBy'
  ]);

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
  current
    .replace(new RegExp('README.md', 'gm'), 'modules.html')
    .replace(new RegExp('modules.md', 'gm'), 'modules.html')
    .replace(new RegExp('.md', 'gm'), '.html');

  return $.makeHtml(current);
}
// Loop through the markdown files for modules

for (const [k, v] of Object.entries(_moduleNames)) {
  var c = data[v],
    m = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      dayPeriod: 'short'
    }).format(lstatSync('./types/' + v + '.d.ts').mtime);

  var cb = (s, x, y) =>
    `https://github.com/prjctimg/huetiful/blob/main/${s}/${x}.${y}`;

  var page = postFragment({
    title: `${v}`,
    description: c['description'],
    mainContent: generateDocs(PATH_TO_MARKDOWN_FILES + '/' + v + '.md'),
    lastUpdated: m,
    srcFile: cb('src', v, 'js'),
    specFile: cb('spec', v, 'spec.js'),
    wikiPage: `https://github.com/prjctimg/huetiful/wiki/${v}`,
    declFile: cb('types', v, 'd.ts'),
    page: {
      previous: {
        title:
          parseInt(k) > 0
            ? _moduleNames[parseInt(k) - 1]
            : `Go back to the home page ?`,
        href: k > 0 ? `./${v}.html` : './index.html'
      },
      next: {
        title:
          parseInt(k) < _moduleNames.length - 1
            ? _moduleNames[parseInt(k) + 1]
            : `Learn more on our Wiki`,
        href:
          parseInt(k) < _moduleNames.length - 1
            ? `./${v}.html`
            : 'https://github.com/prjctimg/huetiful/wiki'
      }
    }
  });

  writeFileSync(`./docs/${v}.html`, layoutFragment(page));
}

// var navigatoryFiles = ['modules.md', 'README.md'];

// for (const file of navigatoryFiles) {
//   var current = readFileSync('docs/assets/markdown/' + file, 'utf-8');
//   if (file === navigatoryFiles[0]) {
//     for (const path of modulePaths) {
//       current = current.replace(
//         new RegExp('modules/' + path, 'gm'),
//         path.split('.')[0] + '.html'
//       );
//     }
//   }

//   writeFileSync(
//     './docs/' + file.split('.')[0] + '.html',
//     $.makeHtml(
//       current
//         .replace(new RegExp('README.md', 'gm'), 'modules.html')
//         .replace(new RegExp('modules.md', 'gm'), 'modules.html')
//     )
//   );
// }

// for (const page of navigatoryFiles) {
//   writeFileSync(
//     './docs/' + page.split('.')[0] + '.html',
//     readFileSync('./docs/assets/fragments/post.html', 'utf-8').replace(
//       reHtmlComment,
//       injectMarkdownInHtmlComment(
//         readFileSync('./docs/' + page.split('.')[0] + '.html')
//       )
//     )
//   );
// }

// renameSync('./docs/README.html', './docs/index.html');
// console.log(`Generated navigatory files successfully`);
console.info(`[prjctimg] Done. Generated HTML docs successfully.}`);
