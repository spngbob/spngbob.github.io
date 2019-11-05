// gonna make that tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//types of states ========== xturn, yturn, xwin, ywin, menu

let grid = [];
let rows = 3;
let cols = 3;
let cellSize;
let yscore = 0;
let xscore = 0;
let tiescore = 0;
let wowloser = 0; 

let state = "xturn"


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createArray(3,3);

}






function draw() {
  background(220);
  displayGrid(grid);
  // if (state === "menu"){
  // }
  // else if (state === "xt"){
  // }
  // else if (state === "yt"){
  // }
  // else if (state === "yw"){
  // }
  // else if (state === "xw"){
  // }
  // else if (state === "tie"){
  // }
  // else if (state === "exit"){
  // }
}



function displayGrid(theGrid){
  // assumes the grid is a square 
  for (let y = 0; y < theGrid[0].length; y++){
    for (let x = 0; x < theGrid[0].length; x++){
      let cellSize = width/ theGrid[0].length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
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


function createArray(cols, rows){
  let someArray = [];
  for (let i = 0; i < cols; i++){
    someArray.push([]);
    for (let j = 0; j < rows; j++){

      if (random(100) < 50){
        someArray[i].push(1);
      }

      else {
        someArray[i].push(0);
      }
    }
  } 
  return someArray;
}