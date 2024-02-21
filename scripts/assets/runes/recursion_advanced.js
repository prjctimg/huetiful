// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

drawRect(100, 100, r.width - 200, r.height - 200);


function drawRect(x, y, w, h)
{
  // first draw a rectangle
  r.rect(x, y, w, h)
    .fill(false)
    .strokeWidth(3);

  // then figure out if we need to draw another
  var splitWidth = Rune.random(1) > 0.5;
  var splitWhere = Rune.random(0.3, 0.8);

  // if we're splitting the width
  if(splitWidth && w > 100)
  {
    drawRect(x, y, w * splitWhere, h);
    drawRect(x +- (w * splitWhere), y, w * (1 - splitWhere), h);
  }
  // else if we're splitting the height
  else if(h > 100)
  {
    drawRect(x, y, w, h * splitWhere);
    drawRect(x, y +- (h * splitWhere), w, h * (1 - splitWhere));
  }
}

r.draw();