// Interactive Project  - Tic Tac Toe
// Jenna Doucette
// September 12, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let my;
let mx;
let mode;
let counter;
counter = 0

function setUpLines(){
  line(x-350, y+100, x+350, y+100 ); // horizontal line
  line(x-350, y-125, x+350, y-125 ); // horizontal line
  line(x-125, y-350, x-125, y+300 ); // vertical line
  line(x + 100, y-350, x+100, y+300 ); // vertical line
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  fill(0);
  x = windowWidth/2;
  y = windowHeight/2;
}

function draw() {
  setUpLines()
  mode = "turnX"
    if (mouseIsPressed === true){  
      if (counter < 9){
        console.log("turnX")
        if (mode === "turnX"){
          line(mouseX-50, mouseY - 50, mouseX +50, mouseY +50);
          line(mouseX + 50, mouseY - 50, mouseX -50 , mouseY + 50);
          counter = counter + 1;
          mode = "turnY";
        }
        else if (mode === "turnY"){
          fill("white");
          circle(mouseX, mouseY, 100);
          counter = counter + 1;
          mode = "turnX";                                                                          
        }
      }
    }
  }
