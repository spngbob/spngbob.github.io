// gonna make that tic tac toe finally
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond" maybe a computer player
//types of states ========== red, blu, rin, bin, menu, tie

let grid = [];
let picked = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
let turns = 0;
let whoWon = " ";


let rows;
let cols;
let cellSize;


let p1 = "red"; // red player or ONE
let p2 = "blue"; // blue plaer or NEGATIVE ONE
let tie = "purple";


let state = "p1";


function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }  
  grid = createArray(3,3);
  displayGrid(grid);

}

function draw(){
  
  //gameover(whoWon);
  
}



function displayGrid(theGrid){ 
// makes square playing "board"
  let cellSize = width/ theGrid.length;
  for (let y = 0; y < theGrid[0].length; y++){
    for (let x = 0; x < theGrid[0].length;x++){
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}





function createArray(cols, rows){ // fills in empty grid with an array.
  let someArray = [];
  for (let i = 0; i < rows; i++){
    someArray.push([]);
    for (let j = 0; j < cols; j++){
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
  let cellSize = width/ grid.length;
  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  console.log(xCoord, yCoord);
  if (state === "p1") { // player one gets to put colour down
    if (picked[yCoord][xCoord] === 0){
      fill(255, 0, 0, 100);
      noStroke();
      rect(xCoord*cellSize, yCoord *cellSize, cellSize, cellSize);
      picked[yCoord][xCoord] = 1;
      state = "p2";
      checkWinner();
      turns++;
    }
  }

  else if (state === "p2"){ // player two gets to put colour down! 
    if (picked[yCoord][xCoord] === 0){
      fill(0, 0, 255, 100);
      noStroke();
      rect(xCoord*cellSize, yCoord *cellSize, cellSize, cellSize);
      picked[yCoord][xCoord] = -1;
      state = "p1";
      checkWinner();
      turns++;
    } 
  }
}

function checkWinner(){
  
  if (picked[0][0] + picked[0][1] + picked[0][2] === 3 || picked[1][0] + picked[1][1] + picked[1][2] === 3 || picked[2][0] + picked[2][1] + picked[2][2] === 3 || picked[0][0] + picked[1][1] + picked[2][2] === 3 || picked[0][2] + picked[1][1] + picked[2][0] === 3 || picked[0][0] + picked[1][0] + picked[2][0] === 3 || picked[0][1] + picked[1][1] + picked[2][1] === 3 || picked[0][2] + picked[1][2] + picked[2][2] === 3){
    whoWon = p1;
  }
  else if (picked[0][0] + picked[0][1] + picked[0][2] === -3 || picked[1][0] + picked[1][1] + picked[1][2] === -3 || picked[2][0] + picked[2][1] + picked[2][2] === -3 || picked[0][0] + picked[1][1] + picked[2][2] === -3 || picked[0][2] + picked[1][1] + picked[2][0] === -3 || picked[0][0] + picked[1][0] + picked[2][0] === -3 || picked[0][1] + picked[1][1] + picked[2][1] === -3 || picked[0][2] + picked[1][2] + picked[2][2] === -3){
    whoWon = p2;
  }
  else if (turns === 8){
    whoWon = tie;
  }
}

function gameover(winner){
  clear();
  if (winner === p1){
    fill("red");
  }
  else if (winner === p2){
    fill("blue");
  }
  else if(winner === tie){
    fill("purple");
  }

  rectMode(CENTER, CENTER);
  rect(width/3, height/3, height/3, width/3);
  console.log("whoWon", whoWon);
}



