// State Variable Project  - colourful single player ping pong
// Jenna Doucette
// September 12, 2019 
// Extra for Experts: 




let x;
let y;
let radius = 20;
let dx;
let dy;
let r = 255;
let g = 255;
let b = 255;
let score = 1;
let myScore = 0;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (windowWidth-paddleWidth) / 2;




function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2; 
  dx = random(-10, 10);      //setting up speed and 
  dy = random(-10, 10);
}



function paddle(){
  rect(mouseX+50, windowHeight-100, 100, 10)

}


function bouncyBoi(){
  x += dx;
  y += dy;
 
  text('score: ' + myScore, 200, 200); // explains your score
 
  if (x > windowWidth - radius/2 || x < 0  + radius/2) { //sets up boucing off sides
    dx *= -1; 
   }
  
  
  if (y  < 0  + radius/2) { // bounces off top
    dy *= -1;}
  
  
  if (x >= mouseX-50 && x <= mouseX + 50 && y > windowHeight-110){  // adds point when the ball hits the paddle
    dy *= -1;
    myScore = myScore+1;
    textSize(40);
    noStroke();
    fill('white');
    textFont('Georgia');

    text('score: ' + myScore, 200, 200)
  }

  
  if ( y > windowHeight - 105){  // sets up fail screen ! 
    clear();
    background(220, 20, 60);
    textSize(40);
    textFont('Georgia');
    text('YOU FAILED', windowWidth/2, windowHeight/2, 500, 500);
    text('press space to continue', windowWidth/2-100, windowHeight/2+200, 500, 500)
    text('you lost' + score + " game(s)", 200, 200)
    
    
    
    if (keyIsPressed){ // clears screen and resets the paddle, score = 0, and restarts the game
      if (keyCode === 32){
        background(0);
        x = width/2;
        y = height/2;
        dx = random(-10, 10);
        dy = random(-10, 10);
        bouncyBoi();
        paddle();
        clear();
        score = score +1;}}
        myScore = 0;
  }
} 





function draw() {   // moving around + bouncing 
  background(0);
  circle(x, y, radius);
  bouncyBoi();
  paddle();
}
