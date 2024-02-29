/**
 * Script for the huetiful-js docs site. Contains JS powered perks
 */

/** Reading progress */

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

/* Dark/light mode toggle */

var lightSwitches = document.querySelectorAll('.light-switch');

if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, idx) => {
    if (localStorage.getItem('dark-mode') === true) {
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      let { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== idx) {
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
}

/* Icon styling; stroke-width and stroke */

var icons = document.querySelectorAll('svg');

for (const icon of icons) {
  icon.style.strokeWidth = '1.75px';
  icon.style.stroke = '#6b7280';
}
