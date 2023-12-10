#!/usr/bin / env node
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

var { readFileSync, writeFileSync } = require("fs");

//// Refactor
// 1 change folder final output output to webapp. Pick up templates from docs site
// change path segments
// Add typedoc deps
// Inject actual emojis.

////// Documentation generator script
///// Each subdir in src is an .md file
///// Start and end tags in the files in docs will guide the md injection
const pathSegments = [
  "accessibility",
  "colors",
  "filterBy",
  "converters",
  "getters_and_setters",
  "palettes",
  "sortBy",
];
const fileContents = (rootDir, filenameSegment, extension = "md") =>
  readFileSync(
    `../webapp/data/${rootDir}/${filenameSegment}.${extension}`,
    "utf8"
  );

// Check if the source file to be injected have the comments
// This runs after typedoc builds the docs

const markdownHeadingEmojiMap = {
  "### Functions": ":toolbox:",
  "Module:": ":package:",
  "## Table of contents": ":scroll:",
  "### Parameters": ":abacus:",
  "#### Returns": ":back:",
  "#### Defined in": ":memo:",
};
// webapp\data\api
const reHtmlComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
const replace = (data) => `\n${data}\n`;

const generateDocs = (filenameSegment) => {
  let typeDocMarkdownOutput = fileContents(
    `temp/modules`,
    filenameSegment,
    `md`
  );
  let templateMarkdownFile = fileContents("templates", filenameSegment, `mdx`);
  if (templateMarkdownFile.match(reHtmlComment)) {
    console.log(`[info] Adding emojis in ${filenameSegment}.md`);
    const re = (pattern) => new RegExp(pattern, "gi");

    for (const heading of Object.keys(markdownHeadingEmojiMap)) {
      typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
        re(heading),
        `${heading}${markdownHeadingEmojiMap[heading]}`
      );
    }
    typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
      /\*\*`Description`\*\*/g,
      "**`Description`** :information_source:"
    );

    typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
      /\*\*`Example`\*\*/g,
      "**`Example`** :clipboard:"
    );

    typeDocMarkdownOutput = typeDocMarkdownOutput.replace(
      /\*\*`Function`\*\*/g,
      ""
    );

    writeFileSync(
      `../webapp/data/api/${filenameSegment}.mdx`,
      // This is the source .mdx file in ./docs we're writing to
      templateMarkdownFile.replace(
        reHtmlComment,
        replace(typeDocMarkdownOutput)
      ),
      "utf-8"
    );
    return;
  } else {
    writeFileSync(
      `../webapp/data/api${filenameSegment}.mdx`,
      typeDocMarkdownOutput,
      "utf-8"
    );
  }
};

for (const pathSeg of pathSegments) {
  generateDocs(pathSeg);
}

console.log(`Done`);
