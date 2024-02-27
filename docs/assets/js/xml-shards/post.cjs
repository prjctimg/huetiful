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
       <header class="pb-8 sticky top-0 left-0  w-full text-gray-700">
      <nav
        class="py-4 flex flex-wrap items-center justify-between w-full py-4.html:py-0 px-4 text-lg text-gray-700 bg-white dark:bg-slate-800 dark:text-gray-200 shadow-lg shadow-gray-300 dark:shadow-black"
      >
      
        <a class="inline-flex space-y-1 items-center font-medium text-base"
          href="./index.html"
          id="home"
        ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span 
            >Home</span>
          
        </a>
        
        <a href="./modules.html" id="docs-link" class="inline-flex space-y-1 items-center font-medium text-base">
         <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block mr-1"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path
                d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
              ></path></svg> <span>Docs</span>
        </a>
        <a class="inline-flex space-y-1 items-center font-medium text-base"href="https://github.com/prjctimg/huetiful/wiki" id="wiki-link">
         <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block mr-1"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              ></path></svg>
               <span>Wiki</span
          >
        </a>
        <a class="inline-flex space-y-1 items-center font-medium text-base" href="https://github.com/prjctimg/huetiful" id="source-link">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block mr-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> <span>Source</span
          >
        </a>
        
      </nav>
      
    </header>
    <article class='markdown-body'>
    <div class="flex justify-start w-fit p-4 space-x-2"> 
    <a href=${srcFile} class="px 2"> View source <span class="inline-block ml-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span></a>
    <a href=${declFile} class="px 2"> Edit this page <span class="inline-block ml-1"><span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
</span></a>
<h6 class='block mt-1'>last updated ${lastUpdated}</h6>
</article>
<!-- main content injected here -->
<div class="bg-blue-200 p-3 w-full h-fit flex flex-col">


  <h4 class="">${description}</h4>


</div>
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
