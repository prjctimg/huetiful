var emoji = require('github-emoji');

/**
 *
 * Creates a typical post page with default actions and next/prev pagination
 * @features
 * - Reading progress
 * Edit this page button
 * Link to source file button
 * Syntax-highlighting of code blocks
 * Custom styling of surfaces of common elements like foot notes
 * Link to the test file
 * Link to the wiki page about the module
 *
 * @data The data shown on the page
 * title- Page title
 * mainContent - The docs output from the module d.ts files
 * lastUpdated - Last time the d.ts file was modified
 * page - Links and names of modules next/prev
 *
 *
 * @returns string
 */
function postFragment({
  title = '',
  mainContent = '',
  lastUpdated = '',
  srcFile = '',
  wikiPage = '',
  declFile = '',
  specFile = '',
  description = '',
  page = {},
  references = []
}) {
  return `
    <title class='first-letter:uppercase'>${title}</title>
   
     
      
    
    <article class='markdown-body'>
    <div class="flex justify-start w-full space-x-2"> 

<div class='flex flex-row w-full justify-end'>


<a href=${declFile} ><button class="p-2.5 bg-blue-400  rounded-md shadow-sm"></button> Edit this page <span class="inline-block ml-1"><span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

    </span></a>

<div class='block text-slate-600 text-xs font-sans font-semibold'> <span class='font-normal text-sm text-slate-500'>last updated</span class='font-normal'> ${lastUpdated}</div>

</div>

    
</div>




<div class="flex flex-row space-x-1 pt-8 pb-1 w-fit">
<a href=${specFile} class="flex">
    <span>Tests ${emoji.stringOf('test_tube')}</span>
    
    
</a>
<a href=${srcFile} class="flex">
    <span>Source ${emoji.stringOf('scroll')}</span>
</a>
</div>

</article>

<!-- main content injected here -->

${mainContent}
<!-- Next/Prev pages -->
<div class="flex w-full justify-between px-2 py-2">


<a href=${page.previous.href} class='inline-flex space-x-2 p-4'>
  <button><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg><span>Previous page</span></button>
  <h5>${page.previous.title}</h5>
</a>
<div class='divide-y-1 divide-slate-700 ' />
<a href=${page.next.href} class='inline-flex space-x-2 p-4'>
 <button>Next page <spa><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span></button>
 <h5>${page.previous.title}</h5>
</a>



</div>


 </article>
   
   `;
}

module.exports = postFragment;
