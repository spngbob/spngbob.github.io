// State Variable Assigment - kind of uhhhhh ping pong
// Jenna Doucette
// October 16, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx;
let dy;
let radius = 10;
let rectSize = 100;
let state = "menu";
let couleur;

let r = 255;
let g = 255;
let b = 255;
let fails = 1;
let myScore = 0;

let paddleHeight;
let paddleWidth;
let paddleX;

let colours = ["red", "green", "blue", "purple", "yellow", "orange"]

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(5, 10);
  dy = random(5, 10);
  background(100);
  let paddleHeight = 10;
  let paddleWidth = 75;
  let paddleX = (windowWidth-paddleWidth) / 2;


}

function draw() {
  background(220);
  if (state === "menu") {
    showMenu();
    isButtonClicked();
  }
  else if (state === "circle") {    
    paddle();
    kingJulien();
    displayCircle();
  }
  else if (state === "fail") {
    failure();
  }
  
  else if (state === "you suck"){
    really();
    isButtonClicked();
  }


}


function paddle(){
  rect(mouseX-50, windowHeight-100, 100, 10)
  fill('black');

}


function showMenu() {
  // shows play button
  rectMode(CENTER);
  fill(255, 105, 105);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(0);
  text("PLAY", width/2, height/2 - 100);
}

function isButtonClicked() {
  if (mouseIsPressed) {
    // check if the play button is pressed
    if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 100 - 75 && mouseY < height/2 - 100 + 75) {
        state = "circle";
    }
  }
}

function windowResized() {
  setup();
}

function kingJulien() {
  // I like to move it move it 
  x += dx;
  y += dy;
}


function displayCircle() {
  // bounce if needed
  text('score: ' + myScore, 200, 200); // explains your score

  if (x > windowWidth - radius/2 || x < 0  + radius/2) { //sets up boucing off sides
    dx *= -1; 
  }
  
  
  if (y  < 0  + radius/2) { // bounces off top
    dy *= -1;}
  
  
  if (x >= mouseX-100 && x <= mouseX && y > windowHeight-110){  // adds point when the ball hits the paddle
    dy *= -1;
    myScore = myScore+1;
    textSize(40);
    fill('white');
    textFont('Georgia');
    text('score: ' + myScore, 200, 200);}

  if ( y > windowHeight - 100){
    state = "fail";
    }
  
  noStroke(); 
  fill(colours[0]);
  circle(x, y, radius);
  
}

function failure(){
  clear();
  background(220, 20, 60);
  textSize(40);
  fill("black");
  textFont('Georgia');
  text('YOU FAILED', windowWidth/2, windowHeight/2, 500, 500);
  text('press space to continue', windowWidth/2-100, windowHeight/2+200, 500, 500)
  text('you lost ' + fails + " game(s)", 200, 200)
  
  
  if (keyIsPressed){ // clears screen and resets the paddle, score = 0, and restarts the game
    if (keyCode === 32){
      myScore = 0;
      x = width/2;
      y = height/2; 
      dx = random(5, 15);
      dy = random(5, 15);
      fails = fails + 1;
    
      if (fails > 1){
        state = "you suck"
      }
  
      else{ 
        state = "menu"
      }
    }
  }
}

function really(){
  rectMode(CENTER);
  fill(255, 105, 105);
  rect(width/2, height/2 - 100, 400, 150);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
  text("are you sure you want to keep playing", width/2, height/2 - 100);
  textSize(40);
  isButtonClicked();
}



