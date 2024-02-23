/**
 * Script for the huetiful-js docs site. Contains JS powered perks
 */

// Reading progress

var [progressBar, body, html] = [
  document.getElementById('progress-bar'),
  document.body,
  document.documentElement
];
var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

function setProgress() {
  var scrollFromTop = (html.scrollTop || body.scrollTop) + html.clientHeight;
  var width = (scrollFromTop / height) * 100 + '%';
  progressBar.style.width = width;
}

window.addEventListener('scroll', setProgress);

setProgress();
