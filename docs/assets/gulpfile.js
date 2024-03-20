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
var BASE_URL = `https://huetiful-js.com/api`;

// export async function links() {
//   moduleNames.map((srcFile) =>
//     writeFileSync(
//       `../www/api/${srcFile}/index.html`,
//       _.rel2absURL()(readFileSync(`../www/api/${srcFile}/index.html`, 'utf-8'))
//     )
//   );

//   ['../www/index.html', '../www/demo.html', '../www/api/index.html'].map((f) =>
//     writeFileSync(f, _.rel2absURL()(readFileSync(f, 'utf-8')))
//   );
// }

export async function xml() {
  function ApiDocsEnv(source, extra) {
    return (env) => {
      env.addGlobal('page', extra);

      env.addGlobal('data', _.buildDataObject(source, _.rel2absURLAlt()));
    };
  }
  function demoDocsEnv(spec) {
    return (env) => {
      return env
        .addGlobal('isColorCollection', _.isColorCollection)
        .addGlobal('demoData', spec);
    };
  }

  function indexPageEnv(env) {
    env.addGlobal('home', {
      content: _.generateDocs('./pages/home.md')
    });

    env.addGlobal('api', { content: _.generateDocs('./pages/api.md') });
  }
  // Making the documentation per module
  moduleNames.map((srcFile, idx) => {
    src(`./xml/views/post.njk`)
      .pipe(
        _njk({
          path: ['./xml/'],
          manageEnv: ApiDocsEnv(srcFile, {
            previous: {
              href: idx > 0 ? `/api/${moduleNames[--idx]}` : '/index.html',
              title: idx > 0 ? moduleNames[--idx] : `Return to home page`
            },
            next: {
              href:
                idx < moduleNames.length
                  ? `/api/${moduleNames[++idx]}`
                  : `/api`,
              title:
                idx < moduleNames.length
                  ? moduleNames[++idx]
                  : `Return to home page`
            }
          }),

          ext: '.html',
          inheritExtension: false
        })
      )
      .pipe(dest(`../www/api/${srcFile}`));
  });

  src(`./xml/views/demo.njk`)
    .pipe(
      _njk({
        path: ['./xml/'],
        manageEnv: demoDocsEnv(_demo),

        ext: '.html',
        inheritExtension: false
      })
    )
    .pipe(dest(`../www`));

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

  src(`./xml/views/api.njk`)
    .pipe(
      _njk({
        path: ['./xml/'],
        manageEnv: indexPageEnv,

        ext: '.html',
        inheritExtension: false
      })
    )
    .pipe(dest(`../www/api`));
}

async function renameFiles() {
  moduleNames.map((srcFile) => {
    writeFileSync(
      `../www/api/${srcFile}/index.html`,
      readFileSync(`../www/api/${srcFile}/post.html`, 'utf-8'),
      'utf8'
    );
  });

  writeFileSync(
    `../www/api/index.html`,
    readFileSync(`../www/api/api.html`, 'utf-8'),
    'utf-8'
  );

  writeFileSync(`../www/.nojekyll`, '', 'utf-8');
}

export async function clean() {
  moduleNames.map((srcFile) =>
    rmSync(`../www/api/${srcFile}/post.html`, {
      force: true,
      recursive: true,
      retryDelay: 1500
    })
  );

  rmSync(`../www/api/api.html`, {
    force: true,
    recursive: true,
    retryDelay: 1500
  });
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
//export const clean = clean;
export const rename = renameFiles;
export const dev = series(xml, assets, watchFiles);
export const deploy = series(xml, assets);
