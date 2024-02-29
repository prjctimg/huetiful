var r = new Rune({
  container: 'body',
  width: 1080,
  height: 960
});

drawPattern(0, 0, 900, 700, 10);
drawPattern(0, 0, 900, 700, 30);
var hueshiftedColors = [
  '#561600',
  '#004a00',
  '#0067ae',
  '#497400',
  '#6f8a00',
  '#e08100',
  '#f59e0b',
  '#f3a800',
  '#ff8583',
  '#ff8896',
  '#00d2ff',
  '#ff91bd',
  '#ffc43f'
];
function drawPattern(startX, startY, width, height, size) {
  var parent = r.group(startX, startY);

  var a = size;
  var b = size * 2;
  var c = size * 3;
  var d = size * 4;

  for (var y = 0; y <= height; y += c) {
    for (var x = 0; x <= width; x += d) {
      var centerX = x;
      var centerY = y;

      // shift every other row to the left to
      // fit inside the row above.
      if ((y / c) % 2 == 0) {
        centerX -= b;
      }

      r.polygon(centerX, centerY, parent)
        .fill('orange')
        .lineTo(0, -c)
        .lineTo(b, -b)
        .lineTo(0, -a)
        .lineTo(-b, -b);

      r.polygon(centerX, centerY, parent)
        .fill('purple')
        .lineTo(-b, -b)
        .lineTo(0, -a)
        .lineTo(0, a)
        .lineTo(-b, 0);
    }
  }
}

r.draw();