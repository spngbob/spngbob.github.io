// gonna make that tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond" maybe a computer player
//types of states ========== red, blu, rin, bin, menu, tie

let grid = [];


let rows;
let cols;
let cellSize;

let p1; // red player
let p2; // blue plaer

let state = "p1";

function setup() {
  createCanvas(windowHeight, windowWidth);
  grid = createArray(3,3);
}


function draw() {
  displayGrid(grid);
}




function displayGrid(theGrid){ 
// makes square playing "board"
  for (let y = 0; y < theGrid[0].length; y++){
    for (let x = 0; x < theGrid[0].length; x++){
      let cellSize = width/ theGrid.length;
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      fill(125);
    }
  }
}





function createArray(cols, rows){ // fills in empty grid with an array.
  let someArray = [];
  for (let i = 0; i < cols; i++){
    someArray.push([]);
    for (let j = 0; j < rows; j++){
      someArray[i].push(0);
      
    }
  }
  return someArray;
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




function mousePressed(){
  let xcord = floor(mouseX / cellSize);
  let ycord = floor(mouseY / cellSize);
  if (state === "p1"){
    fill("red");  
  }


}