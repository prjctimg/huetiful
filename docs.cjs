#!/usr/bin / env node


var { readdirSync, readFileSync, writeFileSync } = require('fs')


////// Documentation generator script
///// Each subdir in src is an .md file
///// Start and end tags in the files in docs will guide the md injection
const pathSegments = ['accessibility', 'colors', 'filterBy', 'converters', 'getters_and_setters', 'palettes', 'sortBy']
const fileContents = (rootDir, filenameSegment, extension) => readFileSync(`./${rootDir}/${filenameSegment}.${extension}`, 'utf8')

// Check if the source file to be injected have the comments
// This runs after typedoc builds the docs

const emojiMap = {
    '### Functions': ':toolbox:',
    'Module\:': ':books:',

    '## Table of contents': ':scroll:',
    '### Parameters': ':abacus:',
    '#### Returns': ':back:',

    '#### Defined in': ':spiral_notepad:'
}
//const reMarkdownHeading = heading => /^(#{1,6})\s+(heading)$/gm
const reHtmlComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
const replace = data => `\n${data}\n`;
//const reEmojiInjector = (pattern = '') => /^(pattern)$/gm

const generateDocs = (filenameSegment) => {
    let tempFile = fileContents(`temp/modules`,
        filenameSegment, `md`)
    let destFile = fileContents(`templates`, filenameSegment, `mdx`)
    if (destFile.match(reHtmlComment)) {




        for (const heading of Object.keys(emojiMap)) {
            const re = pattern => new RegExp(pattern, 'gi')
            tempFile = tempFile.replace(re(heading), `${heading}${emojiMap[heading]}`)
        }
        tempFile = tempFile.replace(/\*\*`Description`\*\*/g, '**`Description`** :information_source:'
        )
        tempFile = tempFile.replace(/\*\*`Example`\*\*/g, '**`Example`** :clipboard:')

        writeFileSync(`./docs/${filenameSegment}.mdx`,
            // This is the source .mdx file in ./docs we're writing to
            destFile.replace(reHtmlComment, replace(tempFile)), 'utf-8');
        return
    } else {
        writeFileSync(destFile, tempFile, 'utf-8')
    }
}

for (const pathSeg of pathSegments) {
    generateDocs(pathSeg)
}

