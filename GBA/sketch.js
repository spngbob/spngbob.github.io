// gonna make that tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let rows = 3;
let cols = 3;
let cellSize;

function setup() {  
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}






function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  if (state === "menu"){
  }
  else if (state === "xt"){
  }
  else if (state === "yt"){
  }
  else if (state === "yw"){
  }
  else if (state === "xw"){
  }
  else if (state === "tie"){
  }
  else if (state === "exit"){
  }
}






function displayGrid(grid, rows, cols) {
  if (windowWidth > windowHeight){
    cellSize = windowHeight/cols;
  }
  else {
    cellSize = windowWidth/cols;
  } 
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}





function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}