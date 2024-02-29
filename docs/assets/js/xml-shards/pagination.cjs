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

