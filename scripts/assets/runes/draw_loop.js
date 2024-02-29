// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var movingRect = r.rect(0, r.height/2, 50, 50).stroke(false).fill(30);

r.on('update', function() {
  // move rectangle one pixel relative to current position
  movingRect.move(1, 0, true);
});

r.play();
