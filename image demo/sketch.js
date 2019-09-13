// Project
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let width = 300
let height = 150

function preload() {
  squidward = loadImage("assets/sqdwrd.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  }

function draw() {
  background(255);
  imageMode(CENTER);
  if (keyIsPressed){ // make image bigger
    if (keyCode === UP_ARROW){
      width = width *1.05
      height = height*1.05
    }
    else if (keyCode === DOWN_ARROW){
      width = width /1.05
      height = height /1.05
    }

  }


  image(squidward, mouseX, mouseY, width, height);
}

