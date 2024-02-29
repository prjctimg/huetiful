var emoji = require('github-emoji');

function cardFragment({
  title,
  subtitle,
  content,
  specFile,
  srcFile,
  declFile,
  action
}) {
  return `<section class="flex flex-col w-fit flex-wrap">
<h3 class="font-light">${title}</h3>
<h5 class="font-semibold text-gray-400 text-base">${subtitle}</h5>
<div class="font-light">${content}</div>
<div class="flex flex-row space-x-2 p-4 w-fit">
<a href=${specFile} class="flex">
    <span>Tests ${emoji.stringOf('test_tube')}</span>
    
    
</a>
<a href=${declFile} class="flex">
    <span>Types ${emoji.stringOf('bookmark_tabs')}</span>
</a>
<a href=${srcFile} class="flex">
    <span>Source ${emoji.stringOf('octocat')}</span>
</a>
</div>

<a class="flex" href=${action.link}>

    <button>${action.title}</button>
</a>
  </section>`;
}

module.exports = cardFragment;
