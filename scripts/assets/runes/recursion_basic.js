// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

drawCircle(r.width/2, r.height/2, 700);

function drawCircle(x, y, size)
{

  // draw circle
  r.circle(x, y, size)
    .fill(Rune.random(30, 200))
    .stroke(false);

  // call the function again. We need an if statement,
  // otherwise it goes on forever
  if(size > 10)
  {
    drawCircle(x, y, size - 30);
  }
}

r.draw();