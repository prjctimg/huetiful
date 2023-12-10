In this post I'll share a handy script that allows you to spice up documentation by adding emojis to markdown headings and TSDoc tags. I made it for the docs of [this open source project](https://github.com/prjctimg/huetiful). The original implementation was made by [@peterpeterparker](https://github.com/peterpeterparker/tsdoc-markdown)

## Prerequisities

I'm assuming that you already have NodeJS installed and have some understanding of JavaScript and know how to run scripts and use the command line.

### Setting up

To make our function we'll need to install a few packages\:

```bash
npm i typedoc typedoc-plugin-markdown
```

We need typedoc to generate the markdown files from our TypeScript source files via a plugin called typedoc-plugin files that we'll work with.

Create a file called `docs.cjs` or open up bash if you prefer the CLI and type in the following commands\:

```bash
touch docs.cjs

```

In my setup I need 3 folders to achieve my end result; a `temp/` folder to store the typedoc Markdown files output, `templates/` folder to store the Markdown files which we'll inject our final result after we have played around with the typedoc output and finally a `docs/` folder to put our result files. We'll also need to configure typedoc to use the plugin we installed and behave in the way we want

```bash

# Create the directories and create the typedoc config file
mkdir temp && mkdir docs && mkdir templates && touch typedoc.cjs

```

In your `typedoc.cjs` file add the following lines of code\:

```js

module.exports = {
    entryPoints: ['./src/*/index.ts'],
    entryPointStrategy: 'resolve',
    out: 'temp',
}

```

We are using the `index.ts` file in our source folder as the entrypoint for typedoc and use the 'resolve' strategy which will treat each export as a directory with an index.ts file inside of it. Our final output will be stored in the `temp/` folder.

Inside of our `docs.cjs` let's define what we wish to do with the output files after typedoc has finished building them\:

```js

#!/usr/bin / env node

var { readFileSync, writeFileSync } = require('fs')

// Each subdir in src is an .md file
// Start and end tags in the files in docs will guide the md injection
const pathSegments = ['accessibility', 'colors', 'filterBy', 'converters', 'getters_and_setters', 'palettes', 'sortBy']

```

In the code above, we're requiring the `fs` module which comes along with Node and it works with the filesystem allowing us to read and write files.

After that I defined a variable `pathSegments` which contains the paths to the sub directories in my source folder that I want to deal with. Each element will also be the filename of the output files in all our folders.

Create a helper function to read the file contents which will take parameters that enable us to build file paths dynamically. It will take # parameters; `rootDir` will be the folder we want to match the `filenameSegment` we want in the defined `extension`.


```js

const fileContents = (rootDir, filenameSegment, extension) => readFileSync(`./${rootDir}/${filenameSegment}.${extension}`, 'utf8')

```

I also define an object that has the Markdown headings I want to replace as keys and their replacing value as the value\:

```js

const markdownHeadingEmojiMap = {
    '### Functions': ':toolbox:',
    'Module\:': ':package:',
    '## Table of contents': ':scroll:',
    '### Parameters': ':abacus:',
    '#### Returns': ':back:',
    '#### Defined in': ':memo:'
}


```

Create the regular expression which we'll call `reHtmlComment` ,we want to match in order to inject the contents of files from `temp/` folder into the files in the `templates/` folder. And finally we create a `replace` helper function which will create a newline before injecting the markdown.


```js

const reHtmlComment = /(<!-- TSDOC_START -->)[\s\S]*?(<!-- TSDOC_END -->)$/gm;
const replace = data => `\n${data}\n`;

```

Define the main function `generateDocs()` which will do the actual operations on our files.

```js

// This runs after typedoc builds the docs

const generateDocs = (filenameSegment) => {

    // Store the typedoc markdown results. Note that the modules sub directory has all the md files with fileNames defined in pathSegments
    let tempFile = fileContents(`temp/modules`,
        filenameSegment, `md`)

        // Store the contents of the corresponding template file which we will test for that html coment before injecting it with new data
    let destFile = fileContents(`templates`, filenameSegment, `mdx`)
    
    // If the template file has the comment  Then we deal with it
    if (destFile.match(reHtmlComment)) {

        console.log(`[info] Adding emojis in ${filenameSegment}.md`)
        const re = pattern => new RegExp(pattern, 'gi')


// For every heading replace it with the heading + emoji shortcode
        for (const heading of Object.keys(markdownHeadingEmojiMap)) {

            tempFile = tempFile.replace(re(heading), `${heading}${markdownHeadingEmojiMap[heading]}`)
        }
        tempFile = tempFile.replace(/\*\*`Description`\*\*/g, '**`Description`** :information_source:'
        )

        tempFile = tempFile.replace(/\*\*`Example`\*\*/g, '**`Example`** :clipboard:'
        )

        tempFile = tempFile.replace(/\*\*`Function`\*\*/g, ''
        )
// Finally we write the results stored in our tempFile to the destFile which will be stored in the docs fo;lder
        writeFileSync(`./docs/${filenameSegment}.mdx`,
            // This is the source .mdx file in ./docs we're writing to
            destFile.replace(reHtmlComment, replace(tempFile)), 'utf-8');
        return
    } else {
        writeFileSync(destFile, tempFile, 'utf-8')
    }
}

// For each path segment generate docs with emojis
for (const pathSeg of pathSegments) {

    generateDocs(pathSeg)
}

// After we're done we log to the console
console.log(`Done`)

```

To make our function work as expected we need to add the HTML comment to our template file. Let's do that\:

```bash
cd templates && touch add.md
```

And then add the following lines of code. The html comment will not be present in final output file in the `docs/` folder.

```markdown


This text will not be removed when we inject new data from the typedoc output. This module simply adds two numbers.

<!-- TSDOC_START -->

<!-- TSDOC_END -->


```

Open up your `package,json` file and add the following script\:


```json
  

  "scripts": {
    "docs": "npx typedoc --plugin typedoc-plugin-markdown  && rm -r docs  && mkdir docs && node docs.cjs"
  }

```

The script will first run typedoc using the typedoc-plugin-markdown plugin to return markdown instead of the default HTML output. It will also delete the `docs/` folder and creating a fresh one before adding new files and then run  our docs.cjs script which will inject the emojis.

> Note that you have created the docs folder before first run otherwise the script will exit prematurely with an error.

[See the gist here for the complete source code.]()