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
  page = {}
}) {
  return `
    <title class='first-letter:uppercase'>${title}</title>
   
     
      
    
    <article class='markdown-body'>
    <div class="flex justify-start w-full space-x-2"> 

<div class='flex flex-row w-full justify-end'>


<a class='flex w-fit align-bottom' href=${declFile} ><button class="px-2 py-2 border-2 border-blue-600  rounded-md shadow-sm text-sm">Edit this page</button><span class="inline ml-1"><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

    </span></a>

<div class='flex flex-col'><span class='font-normal text-sm text-slate-500'>last updated</span'> <p class='text-slate-600 text-xs font-sans font-semibold' >${lastUpdated}</p></div>

</div>

    
</div>




<div class="flex flex-row space-x-2 pt-8 pb-1 mb-4 w-fit">
<a href=${specFile} class="flex border-[2px] border-gray-400 p-1 no-underline">
    <span>Tests ${emoji.stringOf('test_tube')}</span>
    
    
</a>
<a href=${srcFile} class="flex border-[2px] border-gray-400 p-1 no-underline">
    <span>Source ${emoji.stringOf('scroll')}</span>
</a>
</div>

</article>

<!-- main content injected here -->

${mainContent}
<!-- Next/Prev pages -->
<div class="flex w-full justify-between px-2 py-2">


<a href=${page.previous.href} class='flex align-middle space-x-2 p-4'>
  <button><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg><span>Previous page</span></button>
  <h5>${page.previous.title}</h5>
</a>
<div class='divide-y-1 divide-slate-700 ' />
<a href=${page.next.href} class='flex align-middle space-x-2 p-4'>
 <button>Next page <spa><svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span></button>
 <h5>${page.previous.title}</h5>
</a>



</div>


 </article>
   
   `;
}

module.exports = postFragment;
