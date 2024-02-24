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
  renameSync
} = require('node:fs');

var showdown = require('./showdown.cjs');

var $ = new showdown.Converter({
    emoji: true,
    ghCompatibleHeaderId: true,
    ghMentions: true,
    omitWLInCodeBlocks: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true
  }),
  PATH_TO_MARKDOWN_FILES = './docs/assets/markdown/modules';

// The html comment to match before injecting data
const reHtmlComment = /(<!-- DOC_START -->)[\s\S]*?(<!-- DOC_END -->)$/gm;
const injectMarkdownInHtmlComment = (data) =>
  `<!-- DOC_START -->\n${data}\n<!-- DOC_END -->`;
function generateDocs(source = PATH_TO_MARKDOWN_FILES) {
  return function (
    outputDir = './docs',
    pathToTemplate = './docs/assets/fragments/post.html'
  ) {
    for (const file of readdirSync(source, {
      encoding: 'utf-8'
    })) {
      const current = readFileSync(source + '/' + file, 'utf-8');
      writeFileSync(
        `${outputDir}/${file.split('.')[0] + '.html'}`,
        readFileSync(pathToTemplate, 'utf-8')
          .replace(
            reHtmlComment,
            injectMarkdownInHtmlComment($.makeHtml(current))
          )
          .replace(new RegExp('README.md', 'gm'), 'modules.html')
          .replace(new RegExp('modules.md', 'gm'), 'modules.html')
          .replace(new RegExp('.md', 'gm'), '.html'),
        'utf-8'
      );
    }

    console.info(
      `[md-emoji] Done. Generated HTML docs at ${outputDir} successfully. on ${new Date().getFullYear()}`
    );
  };
}

generateDocs()();

var navigatoryFiles = ['modules.md', 'README.md'];

for (const file of navigatoryFiles) {
  var current = readFileSync('docs/assets/markdown/' + file, 'utf-8');
  if (file === navigatoryFiles[0]) {
    var modulePaths = [
      'colors.md',
      'types.md',
      'converters.md',
      'generators.md',
      'utils.md',
      'filterBy.md',
      'sortBy.md'
    ];

    for (const path of modulePaths) {
      current = current.replace(
        new RegExp('modules/' + path, 'gm'),
        path.split('.')[0] + '.html'
      );
    }
  }

  writeFileSync(
    './docs/' + file.split('.')[0] + '.html',
    $.makeHtml(
      current
        .replace(new RegExp('README.md', 'gm'), 'modules.html')
        .replace(new RegExp('modules.md', 'gm'), 'modules.html')
    )
  );
}

for (const page of navigatoryFiles) {
  writeFileSync(
    './docs/' + page.split('.')[0] + '.html',
    readFileSync('./docs/assets/fragments/post.html', 'utf-8').replace(
      reHtmlComment,
      injectMarkdownInHtmlComment(
        readFileSync('./docs/' + page.split('.')[0] + '.html')
      )
    )
  );
}

renameSync('./docs/README.html', './docs/index.html');
console.log(`Generated navigatory files successfully`);
