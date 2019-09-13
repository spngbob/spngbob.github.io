// Interactive Project
// Jenna Doucette
// September 12, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  fill(0);
  }

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  if (keyIsPressed){
    if (keyCode === UP_ARROW){
      red = random(0, 255)
      green = random(0, 255)
      blue = random(0, 255)
    }
  }
}

