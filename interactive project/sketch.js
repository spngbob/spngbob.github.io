// Interactive Project  - Tic Tac Toe
// Jenna Doucette
// September 12, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let my;
let mx;
let mode;
let counter;
counter  = 0;
mode = "turnX";

let xturn = [];
let yturn = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  fill(0);
  x = windowWidth/2;
  y = windowHeight/2;
}

function whoWins(){

}



function setUpLines(){
  line(x-350, y+100, x+350, y+100 );         // horizontal line
  line(x-350, y-125, x+350, y-125 );         // horizontal line
  line(x-125, y-350, x-125, y+300 );         // vertical line
  line(x + 100, y-350, x+100, y+300 );       // vertical line
}





function reset(){    // resetting the playing field
  clear();
  background(255);
  setUpLines(); 
  counter = 0;
  mode = "turnX";
}




function draw() {
  setUpLines()          // sets up lines
}




function mouseReleased(){
  if (counter < 9){  
    if (mode === "turnX"){
      line(mouseX-50, mouseY - 50, mouseX +50, mouseY +50);               // alternates turn X
      line(mouseX + 50, mouseY - 50, mouseX -50 , mouseY + 50);
      xturn.push(mouseX, mouseY)
      counter++;
      mode = "turnY";
      console.log(xturn);
    }

    else if (mode === "turnY"){               // alternates turn Y
      fill("white");
      circle(mouseX, mouseY, 100);
      yturn.push(mouseX, mouseY)
      counter++;
      mode = "turnX";
      console.log(yturn);
    }
    }

  else{
    // whoWins(); PUT THIS BACK IN EVENTUALLY 
    if (keyIsPressed){
      if (key === " "){   fix this broooo oo o o osadf4 53 34534 5345345 34 534 534 5
        reset();
      }
    }  // resets to let them play again 
  }
}
