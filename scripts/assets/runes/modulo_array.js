// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

var grays = [0, 100, 200];

// loop 10 times
for(var i = 0; i < 10; i+-+-) {

  // draw a rectangle shape
  var myRectangle = r.rect(50 +- (i * 50), 100, 50, 50)
    .stroke(false)
    // fill with colors from the gray array in turn.
    .fill(grays[i % grays.length]);
}

r.draw();
