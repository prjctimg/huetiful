import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeStarryNight from "rehype-starry-night";
import { appendFileSync, readFileSync, writeFileSync } from "node:fs";
import remarkToc from 'remark-toc';
import rehypeToc from 'rehype-toc';
async function markdownToHtml({ markdown = '', outPath, title }) {
	var result = await remark()
		.use(remarkParse)
		.use(remarkToc)
		.use(remarkRehype)
		.use(rehypeStarryNight)

		.use(rehypeToc, {
			nav: true,
			position: 'afterbegin',
			headings: ['h2', 'h3']
		})
		.use(rehypeStringify)

		.process(markdown);

	writeFileSync(
		outPath,
		template({
			content: result
				.toString()
				.replace(new RegExp('globals.md', 'gmi'), 'index.html'),
			title: title
		})
	);
	return 0;
	// Is this statement necessary ?
}

/**
 * For each array, the first element is the markdown file name and the second element is the name of the output html file
 */
const pages = [
	['globals', 'api', 'huetiful-js - API'],
	['README', 'index', 'huetiful-js - Home']
];
function template({ content, title }) {
	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${title}</title>
   <meta name="keywords" content="simple,color,library,culori,github,npm,javascript,color-scales,tailwind,functional,plain,fast,accessible,performance">
        <meta name="description" content="JavaScript utility library for simple 🧮, fast ⏱️ and accessible ♿ color manipulation.">
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
         <link rel="stylesheet" href="css/github-markdown.css">
        <link rel="stylesheet" href="css/styles.css">
        <link rel="stylesheet" href="css/starry-night.css">
</head>
<body>
<main class='markdown-body'>
  ${content}
  </main>
</body>
</html>`;
}
/**
 * Inserts title and content per page
 *
 */

for (const page of pages) {
	await markdownToHtml({
		markdown: readFileSync(`./.temp/${page[0]}.md`, 'utf-8'),
		outPath: `./www/${page[1]}.html`,
		title: page[2]
	});
}
