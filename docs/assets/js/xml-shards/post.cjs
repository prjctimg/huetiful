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
    <title>${title}</title>
   <body>
     
      
    
    <article class='markdown-body'>
    <div class="flex justify-start w-fit p-4 space-x-2"> 
    <a href=${srcFile} class="px 2"> View source <span class="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span></a>
    <a href=${declFile} class="px 2"> Edit this page <span class="inline-block ml-1"><span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</span></a></div>
<p class='block text-slate-700 text-xs font-mono font-light mt-1'>last updated ${lastUpdated}</p>
</article>
<!-- main content injected here -->
<blockquote class="border-l-blue-400 bg-blue-200 border-l-4 p-3 w-full h-fit flex flex-col rounde">


  <p class="font-light text-black text-sm tracking-tight line">${description}</p>


</blockquote>
${mainContent}
<!-- Next/Prev pages -->
<div class="flex w-full justify-between px-2 py-2">


<a href=${page.previous.href}>
  <button>Previous page</button>
  <h5>${page.previous.title}</h5>
</a>
<a href=${page.next.href}>
 <button>Next page</button>
 <h5>${page.previous.title}</h5>
</a>



</div>

<!-- References for further reading -->
<div id='references'>
${references.map(
  (ref) => `\n <a href=${ref.href} class='block '>${ref.title}</a>`
)}

</div>
 </article>
   
   </body>
   `;
}

module.exports = postFragment;
