// inject css
const addCssLink = (url) => {
    const headID = document.getElementsByTagName('head')[0];
    const link = document.createElement("link");
    link.type = 'text/css';
    link.rel = "stylesheet";
    headID.appendChild(link);
    link.href = url;
}

// from https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area
const getContrastYIQ = (hex) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'black' : 'white';
}

// Ko-fi block regex
const regex = /<!--.*ko-fi[ ]*:(.+)-->\n+?(.+)\n+?<!-- ko-fi -->/gm;

// Codes regex
const codeRegex = /(```[\s\S]*?```)/gm;

const koFiPlugin = (hook) => {

    const args = [];

    hook.beforeEach((content) => {

        const codes = content.match(codeRegex);

        if (codes) {
            codes.forEach((match, i) => {
                content = content.replace(match, `<!-- code-${i} -->`);
            });
        }

        const matches = content.match(regex);

        if (matches) {
            addCssLink("https://fonts.googleapis.com/css?family=Quicksand:400,700");
            addCssLink("https://cdn.jsdelivr.net/npm/docsify-ko-fi@latest/dist/docsify-ko-fi.min.css");
            for (const match of matches) {
                const [, params, text] = regex.exec(match) || [];
                regex.lastIndex = 0;
                if (!params) continue;
                const [, id] = /id=([^ ]+)/g.exec(params);
                const [, color] = /color=([^ ]+)/.exec(params);
                content = content.replace(match, `<!-- ko-fi-${args.length} -->`);
                args.push({id, color, title: text.trim()});
            }
        }

        const resetCodes = content.match(/<!-- code-\d -->/g);

        if (resetCodes) {
            resetCodes.forEach((match, i) => {
                content = content.replace(match, codes[i]);
            });
        }

        return content;
    });

    hook.afterEach(function (html, next) {
        const matches = html.match(/<!-- ko-fi-\d -->/g);
        (matches || []).forEach((match, i) => {
            const {color, id, title} = args[i];
            const invertedColor = getContrastYIQ(color);
            html = html.replace(match, `<div class=btn-container>
               <a title="${title}" class="kofi-button" style="background-color:${color};" href="https://ko-fi.com/${id}" target="_blank">
                  <span class="kofitext" style="color:${invertedColor};">
                     <img width="22" src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg"/>
                     <span>${title}</span>
                  </span>
               </a>
            </div>`);
        });
        next(html);
    });

}

if (window) {
    window.$docsify = window.$docsify || {};
    window.$docsify.koFi = {version: "1.0.0"}
    window.$docsify.plugins = [].concat(
        koFiPlugin,
        (window.$docsify.plugins || [])
    );
}
