var r = new Rune({
  container: 'body',
  width: 1080,
  height: 1400
});

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
  '#ffc43f',
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

var radius = 200;
var numRects = 26;
var angle = 360 / numRects;
var group = r.group(r.width / 2, r.height / 2);

for (var i = 0; i < numRects; i++) {
  var x = Math.cos(Rune.radians(i * angle)) * radius;
  var y = Math.sin(Rune.radians(i * angle)) * radius;
  r.rect(x, y, 7.5 * i, 10.5 * i, group)
    .rotate(i * angle, 0, 0, true)
    .fill(hueshiftedColors[i]);
}

r.draw();


