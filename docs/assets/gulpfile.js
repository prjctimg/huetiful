import gulp from 'gulp';
import _njk from 'gulp-nunjucks-render';
import {
  readFileSync,
  readdirSync,
  renameSync,
  rmSync,
  rmdirSync,
  writeFileSync
} from 'node:fs';
import * as _ from './js/docs.cjs';
import _demo from './json/demo.json' assert { type: 'json' };

var { src, dest, series, watch } = gulp;

var PATH_TO_MD_FILES = './markdown';
var moduleNames = readdirSync(PATH_TO_MD_FILES + '/modules', 'utf-8').map(
  (s) => s.split('.')[0]
);

// generate demo pages
export async function demo() {
  src(`./xml/views/demo.njk`)
    .pipe(
      _njk({
        path: ['./xml/'],
        manageEnv: demoDocsEnv(Object(_demo)),

        ext: '.html',
        inheritExtension: false
      })
    )
    .pipe(dest(`../www`));
}

function demoDocsEnv(spec) {
  return (env) => {
    env.addGlobal('demoData', spec);
    env.addGlobal('isColorCollection', _.isColorCollection);
  };
}

function ApiDocsEnv(source) {
  return (env) => env.addGlobal('data', _.buildDataObject(source));
}

export async function links() {
  var BASE_URL = 'https://huetiful-js.com/';
  moduleNames.map((srcFile) =>
    writeFileSync(
      `../www/api/${srcFile}/index.html`,
      _.rel2absURL(
        BASE_URL,
        readFileSync(`../www/api/${srcFile}/index.html`, 'utf-8')
      )
    )
  );
}

export async function xml() {
  // Making the documentation per module
  moduleNames.map((srcFile) =>
    src(`./xml/views/post.njk`)
      .pipe(
        _njk({
          path: ['./xml/'],
          manageEnv: ApiDocsEnv(srcFile),

          ext: '.html',
          inheritExtension: false,
          envOptions: {
            watch: true
          }
        })
      )
      .pipe(dest(`../www/api/${srcFile}`))
  );
}

async function renameFiles() {
  moduleNames.map((srcFile) =>
    renameSync(
      `../www/api/${srcFile}/post.html`,
      `../www/api/${srcFile}/index.html`
    )
  );
  writeFileSync(`../www/.nojekyll`, '', 'utf-8');
}

export async function deleteFiles() {
  moduleNames.map((srcFile) =>
    rmSync(`../www/api/${srcFile}/post.html`, {
      force: true,
      recursive: true,
      retryDelay: 1500
    })
  );
}

async function _clean() {
  rmdirSync(`../www`, { recursive: true, force: true });
}

export default async function watchFiles() {
  return watch(['./**/*+(njk|svg|ttf|otf|js)'], xml);
}

export function fonts() {
  return src('*fonts/*.ttf').pipe(dest('../www/assets'));
}

export async function js() {
  return src('*js/**/*.js').pipe(dest('../www/assets'));
}
export async function css() {
  return src('*css/*.css').pipe(dest('../www/assets'));
}

export async function img() {
  return src('*img/*').pipe(dest('../www/assets'));
}

export const assets = series(css, js, fonts, img);
export const clean = _clean;
export const rename = renameFiles;
