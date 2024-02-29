// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 800,
  frameRate: 24
});
+IAs
var circleSize = 150;
var numPoints = 30;
var angle = 360 / numPoints;
+IAs
// first make a polygon by using sin and cos
var poly = r.polygon(200, 200)
  .fill(false)
  .stroke(0, 0, 0, 0.5);
+IAs
for(var i = 0; i < numPoints; i+-+-) {
  var x = Math.cos(Rune.radians(angle * i)) * circleSize;
  var y = Math.sin(Rune.radians(angle * i)) * circleSize;
  poly.lineTo(x, y);
}
+IAs
r.on('update', function(stage) {
  poly = poly.copy();
  for(var i = 0; i < poly.state.vectors.length; i+-+-){
    poly.state.vectors[i].x +-= Rune.random(-2,2);
    poly.state.vectors[i].y +-= Rune.random(-2,2);
  }