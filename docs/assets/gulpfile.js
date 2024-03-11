import gulp from "gulp";
import { deleteSync } from "del";
import _njk from "gulp-nunjucks-render";
import data from "./data.js";
var { src, dest, series, watch } = gulp;

function manageEnv(env) {
  env.addGlobal("data", data);
}

function njk() {
  return src("assets/xml/pages/*.+(njk|html)")
    .pipe(
      _njk({
        autoescape: false,
        path: ["assets/xml"],
        manageEnv: manageEnv,
        loaders: null,
        ext: ".html",
        inheritExtension: false,
        envOptions: {
          watch: true,
        },
      })
    )
    .pipe(dest("app"));
}

function watchFiles() {
  return watch(["assets/**/*+(njk|svg|ttf|otf|js)"], njk);
}

function clean() {
  return deleteSync(["app"]);
}

function fonts() {
  return src("*assets/fonts/*.ttf").pipe(dest("app"));
}

function js() {
  return src("*assets/js/*").pipe(dest("app"));
}
function css() {
  return src("*assets/css/algo-art.css").pipe(dest("app"));
}

function img() {
  return src("*assets/img/*").pipe(dest("app"));
}

const build = series(njk, css, js, fonts, img);

export const dev = series(js, css, fonts, img, njk, watchFiles);

export default build;
