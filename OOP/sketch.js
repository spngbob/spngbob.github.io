// Class demo on classes (oop (object oriented programming) demo)
// Jenna Doucette
// Date

let george;
let jenna;
let gargoyle;

function setup() {  
  createCanvas(windowWidth, windowHeight);
  background(0);
  george = new Walker(width/2, height/2);
  jenna = new Walker(width/2+6, height/2);
  gargoyle = new Walker (width/2 + 3, height/2)
}

function draw() {
  george.move();
  jenna.move();
  gargoyle.move();
  george.display();
  jenna.display();
  gargoyle.display();
  
}

class Walker {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.fillColor = color(random(200),random(200),random(200));
    this.stepSize = 9;
    this.radius = 3;
  }

  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) { // up
      this.y -= this.stepSize;
    }
    else if (choice < 50) { // down
      this.y += this.stepSize; 
    }
    else if (choice < 75) { // left
      this.x -= this.stepSize;
    }
    else {
      this.x += this.stepSize;
    }
  }
}