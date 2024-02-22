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

var { readFileSync, writeFileSync, readdirSync } = require('node:fs');

var showdown = require('../docs/assets/js/showdown.cjs');

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

function generateDocs(source = PATH_TO_MARKDOWN_FILES) {
  return function (
    outputDir = './docs',
    pathToTemplate = './docs/assets/fragments/post.html'
  ) {
    for (const file of readdirSync(source, {
      encoding: 'utf-8'
    })) {
      // The html comment to match before injecting data
      const reHtmlComment =
        /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
      const injectMarkdownInHtmlComment = (data) =>
        `<!-- TSDOC_START -->\n${data}\n<!-- TSDOC_END -->`;
      const current = readFileSync(source + '/' + file, 'utf-8');
      writeFileSync(
        `${outputDir}/${file.split('.')[0] + '.html'}`,
        readFileSync(pathToTemplate, 'utf-8').replace(
          reHtmlComment,
          injectMarkdownInHtmlComment($.makeHtml(current))
        ),
        'utf-8'
      );
    }

    console.info(
      `[md-emoji] Done. Generated HTML docs at ${outputDir} successfully. on ${new Date().getFullYear()}`
    );
  };
}

generateDocs()();
