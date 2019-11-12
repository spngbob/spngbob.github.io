// OOP particle CLASS



let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = theFireworks.length - 1; i >= 0; i--) {
    theFireworks[i].move();
    if (theFireworks[i].isDone()){
      theFireworks.splice(i, 1);
    }
    else{
    theFireworks[i].display();
  }
}
}

function mousePressed() {
  for (let i = 0; i < 100; i++){
    let myFirework = new particle(mouseX, mouseY, random(-3, 3), random(-3, 3), 5);
    theFireworks.push(myFirework);  
  }
}

class particle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.alpha = 255;
    this.gravity = 0.05;
  }

  display() {
    noStroke();
    fill(255, 0, 255, this.alpha);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.dy += this.gravity;
    this.x += this.dx;
    this.y += this.dy;
    this.alpha -= 1;

  }

  isDone(){
    return this.alpha <= 0;
  }
}
