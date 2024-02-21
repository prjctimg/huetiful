// JavaScript Document
var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 400,
  debug: true
});

// show will be true 50% of the time
var show = Rune.random(1) > 0.5;

if(show) {
  r.rect(200, 100, 200, 200)
    .stroke(false)
    .fill(255, 255, 0);
}

r.draw();
