var inc = 0.1;
var scl = 20;
var cols;
var rows;
var zoff = 0;
var particleObejct = 7000;
var particles = [];
var flowField;
function setup() {
background(255);
createCanvas(windowWidth,windowHeight);
cols = floor(width/scl);
rows = floor(height/scl);
flowField = new Array(cols*rows);
for(var i=0; i<particleObejct;i++){
particles[i] = new Particle();
}
}
function draw() {
beginShape();
var yoff =0;
for(var y=0; y<rows;y++){
xoff =0;
for(var x=0; x<cols;x++){
var index = x+y*cols;
var angle = noise(xoff,yoff,zoff)* TWO_PI;
var v = p5.Vector.fromAngle(angle);
v.setMag(1);
flowField[index] = v;//store all of the vectors calculated into flow field
//push();
//translate(x*scl,y*scl)
//rotate(angle);
//strokeWeight(1);
//stroke(0,5);
//line(0,0,scl,0);
//pop();
xoff +=inc;
}
yoff +=inc;
}
for(var i=0; i<particles.length;i++){
particles[i].follow(flowField);
particles[i].edges();
particles[i].show();
particles[i].update();
}
}
function Particle(){
this.pos = createVector(random(width),random(height));
this.vel= createVector(0,0);
this.acc= createVector(0,0);
this.maxspeed = 10;
this.prePos = this.pos.copy();
this.update = function(){
this.vel.add(this.acc);
this.vel.limit(this.maxspeed);
this.pos.add(this.vel); this.acc.mult(0);
}
this.applyForce = function(force){
this.acc.add(force);
}
this.show = function(){
stroke(0,20); strokeWeight(1); line(this.pos.x,this.pos.y,this.prePos.x,this.prePos.y);
this.updatePrev();
}
this.updatePrev = function(){
this.prePos.x = this.pos.x; this.prePos.y = this.pos.y;
}
this.edges = function(){
if(this.pos.x>width){
this.pos.x = 0;
this.updatePrev();
}
if(this.pos.x<0){
this.pos.x = width;
this.updatePrev();
}
if(this.pos.y<0){ this.pos.y = height; this.updatePrev(); } if(this.pos.y>height){
this.pos.y = 0;
this.updatePrev();
}
}
this.follow = function(vectors){
var x = floor(this.pos.x/scl);//position in relationship to scale "vector" unit or grid"
var y = floor(this.pos.y/scl);
var index = x+y * cols;
var force = vectors[index];
this.applyForce(force);
}
}