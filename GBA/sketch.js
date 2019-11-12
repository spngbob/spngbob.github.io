//TIC TAC TOE
// Jenna Doucette
// NOVEMBER 12th, 2019  


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


function setup() { //creates canvas that works for square board. 
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
  if (state === "endgame"){
    if (keyIsPressed === true){ //restarts game 
      console.log("beans"); 
      clear();
      fill("white");  
      turns = 0;
      state ="p1";
      grid = [];
      picked = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      grid = createArray(3,3);
      displayGrid(grid);
    }
  }
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


function mousePressed(){

  let cellSize = width/ grid.length;
  let xCoord = floor(mouseX / cellSize);  //sets values for the individual squares
  let yCoord = floor(mouseY / cellSize);

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
  
  if (picked[0][0] + picked[0][1] + picked[0][2] === 3 || picked[1][0] + picked[1][1] + picked[1][2] === 3 || 
    picked[2][0] + picked[2][1] + picked[2][2] === 3 || picked[0][0] + picked[1][1] + picked[2][2] === 3 || 
    picked[0][2] + picked[1][1] + picked[2][0] === 3 || picked[0][0] + picked[1][0] + picked[2][0] === 3 || 
    picked[0][1] + picked[1][1] + picked[2][1] === 3 || picked[0][2] + picked[1][2] + picked[2][2] === 3){

    gameover(p1);
  // checks all possible win situations for red or player 1
  
  }
  else if (picked[0][0] + picked[0][1] + picked[0][2] === -3 || picked[1][0] + picked[1][1] + picked[1][2] === -3 ||  
    picked[2][0] + picked[2][1] + picked[2][2] === -3 || picked[0][0] + picked[1][1] + picked[2][2] === -3 ||
    picked[0][2] + picked[1][1] + picked[2][0] === -3 || picked[0][0] + picked[1][0] + picked[2][0] === -3 || 
    picked[0][1] + picked[1][1] + picked[2][1] === -3 || picked[0][2] + picked[1][2] + picked[2][2] === -3){

    gameover(p2);
    // checks all possible win situations for blue or player 2
  }
  else if (turns === 8){
    gameover(tie);
    //says its a tie if neither of those work out
  }
}


function gameover(winner){ ///end screen! 
  clear();
  state = "endgame"; 
  if (winner === p1){
    fill("red");
  } 

  else if (winner === p2){
    fill("blue");
  }
  
  else if(winner === tie){
    fill(255, 0, 255, 100);
  }

  rect(width/3, height/3, height/3, width/3);
  textAlign(CENTER, CENTER);
  textSize((width+ height)/30);
  fill(0);
  text("Who Won?", width/2, height/2);
  
}



