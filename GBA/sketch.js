// gonna make tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//different states = x, y, xwin, ywin, tie, menu

let p1;
let p2;
let turn;
let rows = 3;
let cols = 3;
let y;
let x;
let state = "x";


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid, cols, rows);
}

function displayGrid(grid, rows, cols) {
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(EMPTY);
    }
  }
  return emptyGrid;
}