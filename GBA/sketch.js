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
let redscore = 0;
let bluescore = 0;
let tiescore = 0;
let clicks = 9;
let wowloser = 0; 

let state = "menu"


function setup() {
  background(220);
  grid = createArray(3,3);
}

function draw() {
  background(220);
  if (state === "menu"){
    showMenu();
  }
  if (state === "red"){
    displayGrid(grid);
  }  
  if (state === "blu"){
    displayGrid(grid);
  }
  else if (state === "rin"){
    RedwinScreen();
  }
  else if (state === "bin"){
    BluewinScreen();
  }
  else if (state === "tie"){
    tieScreen(); 
  }
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

function RedwinScreen() {
  background(255);
  fill(0);
  textSize(85);
  if (windowWidth > windowHeight) {
    textAlign(windowHeight/2, windowHeight/2);
    text("RED WIN!", windowHeight/2, windowHeight/2);
  }
  else {
    textAlign(windowWidth/2, windowWidth/2);
    text("RED WIN!", windowWidth/2, windowWidth/2);  }
}

function BluewinScreen() {
  background(255);
  fill(0);
  textSize(85);
  if (windowWidth > windowHeight) {
    textAlign(windowHeight/2, windowHeight/2);
    text("BLUE WIN!", windowHeight/2, windowHeight/2);
  }
  else {
    textAlign(windowWidth/2, windowWidth/2);
    text("BLUE WIN!", windowWidth/2, windowWidth/2);  }
}

function tieScreen() {
  background(255);
  fill(0);
  textSize(85);
  if (windowWidth > windowHeight) {
    textAlign(windowHeight/2, windowHeight/2);
    text("WOW NEITHER OF YOU WIN!", windowHeight/2, windowHeight/2);
  }
  else {
    textAlign(windowWidth/2, windowWidth/2);
    text("WOW NEITHER OF YOU WIN!", windowWidth/2, windowWidth/2);  }
}


function showMenu() {
  // shows play button 
  if (windowWidth > windowHeight) {
    fill(255, 105, 105);
    rect(windowHeight/2-(windowHeight/4), windowHeight/2 - (windowHeight/4), windowHeight/2, windowHeight/5);
    textSize(windowHeight*0.15);
    fill(0);
    text("PLAY", windowHeight/2, windowHeight/2);
  }
  else {
    fill(255, 105, 105);
    rect(windowWidth/2-(windowWidth/4), windowWidth/2-100 -(windowWidth/4), windowWidth/2, windowWidth/5);
    textSize(windowWidth*0.15);
    fill(0);
    text("PLAY", windowWidth/2, windowWidth/2);
}
}

// function isButtonClicked() {
//   if (mouseIsPressed) {
//     // check if the play button is pressed
//     if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
//         state = "red";
//     }
//   }
// 