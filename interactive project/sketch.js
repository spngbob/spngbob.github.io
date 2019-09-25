// Interactive Project  - that bouncing ball game that destroys bricks
// Jenna Doucette
// September 12, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let radius = 20;
let dx;
let dy;

let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  dx = random(-10, 10)
  dy = random(-10, 10)
  if (keyIsPressed){ // make image bigger
    if (keyCode === UP_ARROW){
      dx = dx + 1;
      dy = dy- 1;
    }
    else if (keyCode === DOWN_ARROW){
      dx = dx - 1;
      dy = dy - 1;
    }
}

function draw() {   // moving around + bouncing 
  background(0);
  circle(x, y, radius);
  fill(r, g ,b);
  x += dx;
  y += dy;
  if (x > width - radius/2 || x < 0  + radius/2) {
    dx *= -1;}

  if (y > height - radius/2 || y  < 0  + radius/2) {
    dy *= -1; }

}
}   
