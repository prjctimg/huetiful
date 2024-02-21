/**
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

var showdown = require('./assets/showdown.cjs');
var { readdirSync, readFileSync, writeFileSync } = require('node:fs');

var $ = new showdown.Converter({
    emoji: true,
    ghCompatibleHeaderId: true,
    ghMentions: true,
    omitWLInCodeBlocks: true,
    simplifiedAutoLink: true,
    tables: true,
    tasklists: true
  }).setFlavor('github'),
  PATH_TO_MARKDOWN_FILES = './docs/assets/markdown';

/**
 * All the markdown pages in the `./docs/markdown` directory.
 */
var pages = readdirSync(PATH_TO_MARKDOWN_FILES);

/*
 For each page:
1.Inject default classes for theme customization using Tailwind
2. Convert the Markdown to HTML
3. Inject into an HTML file with page layout. Put the HTML file into the root of docs
4 Use HTMX to swap the page being rendered (Using JS)

 */
for (let page = 0; page < pages.length; page++) {}
