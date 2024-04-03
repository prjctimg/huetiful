// Get the toc component from the DOM
var toc = document.getElementById('toc'),
  mainContent = document.getElementById('main-content'),
  listItem = document.createElement('li'),
  link = document.createElement('a');

document.addEventListener('DOMContentLoaded', () =>
  mainContent?.querySelectorAll('h3').forEach((el) => {
    listItem.innerText = el.innerText;
    link.href = document.URL.concat(`$#{el.id}`);
    listItem.appendChild(link);
    toc?.appendChild(listItem);
  })
);
