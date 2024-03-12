import gulp from 'gulp';
import _njk from 'gulp-nunjucks-render';
import {
  readdirSync,
  rename,
  renameSync,
  rm,
  rmSync,
  unlinkSync
} from 'node:fs';
import buildDataObject from './js/docs.cjs';
import { setTimeout } from 'node:timers';

var { src, dest, series, watch, parallel } = gulp;

var PATH_TO_MD_FILES = './markdown';
var moduleNames = readdirSync(PATH_TO_MD_FILES + '/modules', 'utf-8').map(
  (s) => s.split('.')[0]
);

function manageEnv(source) {
  return (env) => env.addGlobal('data', buildDataObject(source));
}

async function njk() {
  // Making the documentation per module
  moduleNames.map((srcFile) =>
    src(`./xml/views/post.njk`)
      .pipe(
        _njk({
          path: ['./xml/'],
          manageEnv: manageEnv(srcFile),

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
}

async function deleteFiles() {
  moduleNames.map((srcFile) =>
    rmSync(`../www/api/${srcFile}/post.html`, {
      force: true,
      recursive: true,
      retryDelay: 1500
    })
  );
}

async function watchFiles() {
  return watch(['./**/*+(njk|svg|ttf|otf|js)'], njk);
}

function fonts() {
  return src('*fonts/*.ttf').pipe(dest('../www/assets'));
}

async function js() {
  return src('*js/**/*.js').pipe(dest('../www/assets'));
}
async function css() {
  return src('*css/*.css').pipe(dest('../www/assets'));
}

async function img() {
  return src('*img/*').pipe(dest('../www/assets'));
}

export const dev = series(njk, css, js, watchFiles);
const build = series(njk, css, js, fonts, img);
export default build;
