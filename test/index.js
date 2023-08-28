// Get the DOM elements
var colorTile = document.getElementById("color-tile");
var colorTileContainer = document.getElementById("container");
var colorPicker = document.getElementById("color-picker");
var paletteCount = document.getElementById("palette-count"); // Select component

function run() {
  [colorPicker, paletteCount].forEach((input) => {
    input.addEventListener("input", () => {
      // Call a function which generates colors.
      generatePalette();
    });
  });
}

// Add params such as mode,overrides etc for interpolation
function generatePalette() {
  colorTileContainer.innerHTML = "";

  var colorPalette = huetiful.hueShift(colorPicker.value, {
    num: paletteCount.value,
  });

  colorPalette.forEach((color) => {
    colorTile.style.backgroundColor = color;
    colorTileContainer.appendChild(colorTile);
  });
}

window.addEventListener("load", () => {
  run();
});
