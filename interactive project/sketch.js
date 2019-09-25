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


let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (windowWidth-paddleWidth) / 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = 5;
  dy = 5;
}

function bouncyBoi(){
  x += dx;
  y += dy;
  if (x > windowWidth - radius/2 || x < 0  + radius/2) {
    dx *= -1;
   }
  if (y > windowHeight - radius/2 || y  < 0  + radius/2) {
    dy *= -1; 
  }
}

function draw() {   // moving around + bouncing 
  background(0);
  circle(x, y, radius);
  bouncyBoi();
}