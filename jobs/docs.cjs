var fs = require("fs"),
  summ = {
    accessibility:
      "Functions to help ensure your palettes and color scales are accessible for a wider audience.",
    wrappers:
      'Wrapper functions for creating "read-manipulate-output " chains (via method chaining) for a more concise syntax.',
    generators:
      "Utilites for creating palettes by mapping strategic values to target channels on color tokens.",
    palettes:
      "Precomputed color maps from Tailwind and ColorBrewer exposed as wrapper functions making it easy to get your designs started.",
    utils:
      "Functions for general purpose set/get snd conversion operations on color tokens.",
    collection:
      "Utilities for querying statistics,soring,filtering and distributing properties on collections of colors. ",
  };

function page(title, date, lastmod, summary, content, canonicalUrl) {
  return `---
title: ${title}
date: ${date}
lastmod: ${lastmod}
${summary ? `summary: ${summary}` : ""}
canonicalUrl: ${canonicalUrl}
---
\n
${content}
`;
}
var pathToMD = `./.temp/`;

for (const doc of [
  "accessibility",
  "collection",
  "generators",
  "palettes",
  "wrappers",
  "utilities",
]) {
  const meta = fs.statSync(`./src/${doc}/index.js`);
  //   for each doc append its data to the template and write to the www/ dir
  // after that delete the temp folder and regenerate  the toc component using data from navigation.json

  fs.writeFileSync(
    `./www/data/blog/${doc}.mdx`,
    page(
      doc,
      meta.birthtime.toISOString().split("T")[0],
      meta.mtime.toISOString().split("T")[0],
      summ[doc],
      fs.readFileSync(pathToMD + doc + ".mdx", "utf8"),
      `https://huetiful-js.com/api/${doc}`
    )
  );
}

//fs.rmdirSync("./.temp", { force: true, recursive: true });
const meta = fs.statSync(`./README.md`);
fs.writeFileSync(
  `./www/data/blog/index.mdx`,
  page(
    `Home`,
    meta.birthtime.toISOString().split("T")[0],
    meta.mtime.toISOString().split("T")[0],
    undefined,
    fs.readFileSync(pathToMD + "index.mdx", "utf8"),
    "https://huetiful-js.com"
  )
);
