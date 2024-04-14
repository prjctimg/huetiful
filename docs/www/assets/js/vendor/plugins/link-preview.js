const getOpenGraph = async (url) => {
  if (!window.$docsify.linkpreview.key)
    throw new Error(
      `Please get a key on linkpreview.net and add it as
       a configuration in $docsify.linkpreview.key as follows:
       
       window.$docsify = {
        linkpreview: {
          key : "123123",
        }
      }
       `
    );
  const key = window.$docsify.linkpreview.key;
  const linkpreview = `https://api.linkpreview.net/?key=${key}&q=${url}`;
  const response = await fetch(linkpreview);
  return await response.json();
};

const getPreview = async (link) => {
  const { title, description, image, url } = await getOpenGraph(link);
  return `
  <a class="docsify-link-preview" href="${url}" alt="${title}" target="_blank">
  <div class="docsify-link-preview__image" style="background-image: url(${image})"></div>
  <div class="docsify-link-preview__text">
    <span class="docsify-link-preview__link">${url}</span>
    <div class="docsify-link-preview__content">
      <div style="margin-top:5px">
        <div class="docsify-link-preview__title">${title}</div>
      </div>
      <span class="docsify-link-preview__description">${description}</span>
    </div>
  </div>
  </a>
`;
};

const plugin = (hook, vm) => {
  hook.afterEach((html, next) => {
    var htmlElement = document.createElement("div");
    htmlElement.innerHTML = html;

    htmlElement
      .querySelectorAll("pre[data-lang=link-preview]")
      .forEach((element) => {
        const link = element.textContent;
        const previewContainer = document.createElement("div");
        getPreview(link).then((preview) => {
          previewContainer.innerHTML = preview;
          element.parentNode.replaceChild(previewContainer, element);
          next(htmlElement.innerHTML);
        });
      });
  });
};

if (!window.$docsify) {
  window.$docsify = {};
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin);
