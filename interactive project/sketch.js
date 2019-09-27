// Interactive Project  - single person against no one table tennis??? not a great time
// Jenna Doucette
// September 12, 2019 
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x;
let y;
let radius = 20;
let dx;
let dy;
let r = 255;
let g = 255;
let b = 255;
let score = 1;

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
  rect(mouseX-50, windowHeight-100, 100, 10)

}


function bouncyBoi(){
  x += dx;
  y += dy;
 
 
  if (x > windowWidth - radius/2 || x < 0  + radius/2) {
    dx *= -1;
   }
  
  
  if (y  < 0  + radius/2) {
    dy *= -1;}
  
  
  if (x <= mouseX-50 && x >= mouseX + 50 && y > windowHeight-100){
    dy *= -1;
  }

  
  if ( y > windowHeight - radius/2){
    clear();
    background(220, 20, 60);
    textSize(40);
    textFont('Georgia');
    text('YOU FAILED', windowWidth/2, windowHeight/2, 500, 500);
    text('press space to continue', windowWidth/2-100, windowHeight/2+200, 500, 500)
    text('you have lost ' + score + " game(s)", 200, 200)
    if (keyIsPressed){ // clear
      if (keyCode === 32){
        background(0);
        x = width/2;
        y = height/2;
        dx = random(-10, 10);
        dy = random(-10, 10);
        bouncyBoi();
        paddle();
        clear();
        score = score + 1;}}
  }
  

} 
function draw() {   // moving around + bouncing 
  background(0);
  circle(x, y, radius);
  bouncyBoi();
  paddle();
  if (x >= mouseX - 50 && x > mouseX + 50 && y === windowHeight- 100 ){
    dy *= -1;
  }
}
