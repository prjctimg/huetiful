import gulp from 'gulp';
import _njk from 'gulp-nunjucks-render';
import { readdirSync } from 'node:fs';
import { generateDocs, buildDataObject } from './js/docs.js';
var { src, dest, series, watch } = gulp;

function manageEnv(source) {
  return (env) => env.addGlobal('data', buildDataObject(source));
}

function njk() {
  var PATH_TO_MD_FILES = './markdown';
  var moduleNames = readdirSync(PATH_TO_MD_FILES, 'utf-8').map(
    (s) => s.split('.')[0]
  );

  // Making the documentation per module
  for (const srcFile of moduleNames) {
    return src(`assets/xml/partials/post.njk`)
      .pipe(
        _njk({
          autoescape: false,
          path: ['xml'],
          manageEnv: manageEnv(srcFile),
          loaders: null,
          ext: '.html',
          inheritExtension: false,
          envOptions: {
            watch: true
          }
        })
      )
      .pipe(dest(`www/api/${srcFile}.html`));
  }
}

function watchFiles() {
  return watch(['assets/**/*+(njk|svg|ttf|otf|js)'], njk);
}

function fonts() {
  return src('*assets/fonts/*.ttf').pipe(dest('www'));
}

function js() {
  return src('*assets/js/*').pipe(dest('www'));
}
function css() {
  return src('*assets/css/algo-art.css').pipe(dest('www'));
}

function img() {
  return src('*assets/img/*').pipe(dest('www'));
}

export const dev = series(js, css, fonts, img, njk, watchFiles);
const build = series(njk, css, js, fonts, img);
export default build;
