// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

// loop 10 times
for(var i = 0; i < 10; i+-+-) {

  // draw a rectangle shape
  var myRectangle = r.rect(50 +- (i * 50), 100, 50, 50)
    .stroke(false)

  // use modulo to turn incrementing i into 2 numbers: 0 and 1
  // if it's 0, color the rectangle.
  if(i % 2 == 0) {
    myRectangle.fill(255, 0, 0);
  }
}

r.draw();
