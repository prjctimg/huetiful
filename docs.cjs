#!/usr/bin / env node


var { readdirSync, readFileSync, writeFileSync } = require('fs')


////// Documentation generator script
///// Each subdir in src is an .md file
///// Start and end tags in the files in docs will guide the md injection
const pathSegments = ['colors', 'filterBy', 'converters', 'getters_and_setters', 'palettes', 'sortBy']
const fileContents = (rootDir, filenameSegment, extension) => readFileSync(`./${rootDir}/${filenameSegment}.${extension}`, 'utf8')

// Check if the source file to be injected have the comments
// This runs after typedoc builds the docs

const reComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
const replace = data => `<!-- TSDOC_START -->\n\n${data}\n<!-- TSDOC_END -->`;


const generateDocs = (filenameSegment) => {
    const tempFile = fileContents(`temp/modules`,
        filenameSegment, `md`)
    const destFile = fileContents(`docs`, filenameSegment, `mdx`)
    if (destFile.match(reComment)) {

        writeFileSync(`./docs/${filenameSegment}.mdx`,
            // This is the source .mdx file in ./docs we're writing to
            destFile.replace(reComment, replace(tempFile)), 'utf-8');

        return
    } else {
        writeFileSync(destFile, tempFile, 'utf-8')
    }
}

for (const pathSeg of pathSegments) {
    generateDocs(pathSeg)
}