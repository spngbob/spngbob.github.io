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
  textAlign(CENTER, CENTER);
  text("RED WIN!", width/2, height/2);
}

function BluewinScreen() {
  background(255);
  fill(0);
  textSize(85);
  textAlign(CENTER, CENTER);
  text("BLUE WIN!", width/2, height/2);
}

function tieScreen() {
  background(255);
  fill(0);
  textSize(85);
  textAlign(CENTER, CENTER);
  text("WOW NEITHER OF YOU WIN!", width/2, height/2);
}


// function showMenu() {
//   // shows play button  
//   rectMode(CENTER);
//   fill(255, 105, 105);
//   rect(windowWidth/2, windowHeight/2 - 100, 400, 150);
//   textAlign(CENTER, CENTER);
//   textSize(50);
//   fill(0);
//   text("PLAY", windowWidth/2, windowHeight/2 - 100);
// }

// function isButtonClicked() {
//   if (mouseIsPressed) {
//     // check if the play button is pressed
//     if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
//         state = "red";
//     }
//   }
// }



NEED TO FIGURE OUT BUTTON CUZ IT AINT WORKIN MAN FIGURE IT OUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
YEEHAW



YEEEEEEEEEEEEEEEEEEEHAW