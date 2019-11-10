// gonna make that tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//types of states ========== red, blu, rin, bin, menu, tie

let grid = [];
let rows = 3;
let cols = 3;
let cellSize;



function setup() {
  background(220);
  grid = createArray(3,3);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(theGrid){ 
// makes square playing "board"
  for (let y = 0; y < theGrid[0].length; y++){
    for (let x = 0; x < theGrid[0].length; x++){
      let cellSize = width/ theGrid[0].length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      fill(125);
    }
  }
}

function windowResized() {
// deals with people being people and resizing the screen all the time
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function createArray(cols, rows){
  let someArray = [];
  for (let i = 0; i < cols; i++){
    someArray.push([]);
    for (let j = 0; j < rows; j++){
        someArray[i].push(0);
        
      }
    }
  return someArray;
}
