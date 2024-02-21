// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});
+IAs
var rects = [];
+IAs
// First, let's create ten rectangles at random positions on the screen.
for(var i = 0; i < 10; i+-+-) {
  var x = Rune.random(r.width);
  var y = Rune.random(r.height);
  var myRect = r.rect(x, y, 20, 20)
    .stroke(false)
    .fill(30);
  rects.push(myRect);
}
+IAs
r.on('update', function() {
+IAs
  // loop through all the rectangles
  for(var i = 0; i < rects.length; i+-+-) {
+IAs
    // move the rectangle
    rects[i].move(1, 0, true);
+IAs
    // if the rectangle is outside the screen, reset back to beginning
    if(rects[i].state.x > r.width) {