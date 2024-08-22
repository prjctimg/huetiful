import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeStarryNight from "rehype-starry-night";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";

import rehypeToc from "rehype-toc";
async function markdownToHtml({ filePath, outPath, description, title }) {
  function template() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${title}</title>
   <meta name="keywords" content="simple,color,library,culori,github,npm,javascript,color-scales,tailwind,functional,plain,fast,accessible,performance">
        <meta name="description" content=${description}>
        <meta name="twitter:card" content="summary">
        <meta name="twitter:site" content="@prjctimg" />
        <meta name="twitter:title" content="huetiful-js" />
        <meta
            name="twitter:description"
            content="JavaScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation."
        />
        <meta name="twitter:image" content="https://huetiful-js.com/img/twitter.jpg">
        <meta property="og:url" content="https://huetiful-js.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="huetiful-js" />
        <meta
            property="og:description"
            content="JavaScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation."
        />
      

        <!-- Disable tap highlight on IE -->
        <meta name="msapplication-tap-highlight" content="no" />

        <!-- Web Application Manifest -->
        <link rel="manifest" href="manifest.json" />
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" href="/css/starry-night.css">
</head>
<body>
<main>
  ${result.toString()}
  </main>
</body>
</html>`;
  }

  var result = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStarryNight)
    .use(rehypeToc, {
      nav: true,
      position: "afterbegin",
      headings: ["h2", "h3", "h4", "h5"],
    })
    .use(rehypeStringify)
    .process(filePath);
  writeFileSync(outPath, template());

  // Is this statement necessary ?
  return 0;
}

/**
 * For each array, the first element is the markdown file name and the second element is the name of the output html file
 */
const pages = [
  ["globals", "api", "huetiful-js - API"],
  ["README", "index", "huetiful-js - Home"],
];

/**
 * Inserts title and content per page
 *
 */

for (const page of pages) {
  markdownToHtml({
    content: readFileSync(`./.temp/${page[0]}.md`),
    outPath: `./www/${page[1]}.html`,
    title: page[2],
  });
}
