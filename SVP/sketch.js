// State Variable Assigment - kind of uhhhhh ping pong
// Jenna Doucette
// October 16, 2019


let x;
let y;
let dx;
let dy;
let radius = 10;
let rectSize = 100;
let state = "menu";
let colls = 0;

let fails = 1;
let myScore = 0;

let paddleHeight;
let paddleWidth;
let paddleX;

let colours = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];

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
  if (state === "menu") {    // creates menu + checks if the menu is clicked 
    showMenu();
    isButtonClicked();
  }
  

  else if (state === "circle") {      // creates paddle and circle and makes it move
    paddle();
    kingJulien();
    displayCircle();
  }


  else if (state === "fail") {   // sets up fail screen
    failure();
  }
  
  else if (state === "you suck"){  // asks if youre sure you want to keep playing
    really();
    isButtonClicked();
  }


}


function paddle(){        // paddle creation 
  rect(mouseX-50, windowHeight-100, 100, 10)

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
    coll = int(random(0, 16));  
    noStroke(); 
    fill((colours[coll]));
    textSize(40);
    textFont('Georgia');
    text('score: ' + myScore, 200, 200);}

  if ( y > windowHeight - 100){
    state = "fail";
    }
  

  
  circle(x, y, radius);
}

function failure(){    //sets yp fail screen but behind the curtain 
  clear();
  background(220, 20, 60);
  textSize(40);
  fill("black")
  textFont('Georgia');
  text('YOU FAILED', windowWidth/2, windowHeight/2, 500, 500);
  text('press space to continue', windowWidth/2-100, windowHeight/2+200, 500, 500)
  text('you lost ' + fails + " game(s)", 200, 200)
  
  
  if (keyIsPressed){ // clears screen and resets the paddle, score = 0, and restarts the game
    if (keyCode === 32){
      myScore = 0;
      x = width/2;
      y = height/2; 
      dx = random(5, 10);
      dy = random(5, 10);
      fails = fails + 1;
    
      if (fails > 5){         // after losing 5 games it asks ifyou wanna keep playing 
        state = "you suck"
      }
  
      else{ 
        state = "menu"
      }
    }
  }
}

function really(){            // are you sure you want to keep playing button 
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



