// ball demo but with state variable and also a start page!!!!!!!!!!!!!!!!!!!!
// Jenna Doucette
// September 26th, 2019


let x;
let y;
let radius = 100;
let dx;
let dy;
let r = 255;
let g = 255;
let b = 255;
let rectS = 100
let state = "menu";

 
function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random(-10, 10)
  dy = random(-10, 10)
  fill(r, g ,b);
}

function draw() {   // moving around + bouncing 
  background(0);
  circle(x, y, radius);
  fill(r, g ,b);
  x += dx;
  if (mode === "circle"){
    if (x > width - radius/2 || x < 0  + radius/2) {
      dx *= -1;
      r = random(0, 255) // changing colour whenever it bounces off a side 
      g = random(0, 255)
      b = random(0, 255)
   }
     y += dy;
    if (y > height - radius/2 || y  < 0  + radius/2) {
      dy *= -1; 
      r = random(0, 255) // changing colour whenever it bounces off the top or bottom
      g = random(0, 255)
      b = random(0, 255)}
      }
  

}