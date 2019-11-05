// 2D grid

let grid = [];



function setup() {
  createCanvas(800, 800);
  grid = createArray(20, 20);
}

function draw() {
  background(220);
  displayGrid(grid);
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