import gulp from 'gulp';
import _njk from 'gulp-nunjucks-render';
import gulpPostcss from 'gulp-postcss';
import * as tailwndcss from 'tailwindcss';

import * as autoprefixer from 'autoprefixer';
import * as heropatterns from 'tailwind-heropatterns';
import { writeFileSync } from 'node:fs';
import * as _ from './js/docs.cjs';
import _demo from './json/demo.json' assert { type: 'json' };

var { src, dest, series, watch } = gulp;

var BASE_URL = `https://huetiful-js.com/api`;

export async function xml() {
  function indexPageEnv(env) {
    env.addGlobal('home', {
      content: _.generateDocs('./pages/home.md'),
      isColorCollection: _.isColorCollection,
      demoData: _demo
    });
  }

  src(`./xml/views/index.njk`)
    .pipe(
      _njk({
        path: ['./xml/'],
        manageEnv: indexPageEnv,

        ext: '.html',
        inheritExtension: false
      })
    )
    .pipe(dest(`../www`));
}

async function meta() {
  writeFileSync(`../www/.nojekyll`, '', 'utf-8');
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
export async function css(cb) {
  src('*css/*.css')
    .pipe(gulpPostcss([tailwndcss, autoprefixer, heropatterns]))
    .pipe(dest('../www/assets'));
  cb();
}

export async function img() {
  return src('*img/*').pipe(dest('../www/assets'));
}

export const assets = series(css, js, fonts);
//export const clean = clean;
export const dev = series(xml, assets, watchFiles);
export const deploy = series(xml, assets, meta);
