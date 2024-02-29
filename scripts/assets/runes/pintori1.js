// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800
});

// Find random points for the gray line
// -------------------------------------

var noise = new Rune.Noise();
var linePoints = [];

var x = -300;
var y = 0;

while(x < 1000) {

  // increment x with a random amount
  x += Rune.random(60, 150);

  // use noise to find a y value from 500 to 600.
  y = 500 + (noise.get(x / 150) * 100);

  // push this point into the array
  linePoints.push(new Rune.Vector(x, y));
}

// Draw shapes based on those points
// -------------------------------------

// loop through each point but the last one
for(var i = 0; i < linePoints.length - 1; i++)
{
  // first find a random height for this rectangle
  var ranHeight = Rune.random(150, 350);

  // then find all the points we need for this rectangle
  var bottomLeft  = linePoints[i];