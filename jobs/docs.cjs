var fs = require("fs"),
  summ = require("../www/data/summary.json");

function page(title, date, lastmod, summary, content) {
  return `---
title: ${title}
date: ${date}
lastmod: ${lastmod}
summary: ${summary}
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
      meta.birthtime.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      meta.mtime.toLocaleDateString("en-US", {
        dayPeriod: "short",
        day: "2-digit",
        month: "short",

        weekday: "short",
      }),
      summ[doc],
      fs.readFileSync(pathToMD + doc + ".mdx", "utf8")
    )
  );
}

fs.rmdirSync("./.temp", { force: true, recursive: true });
