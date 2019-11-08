// OOP BULLET CLASS

let theBullets = [];
let r;
let g;
let b;

function setup() {  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < theBullets.length; i++){
    theBullets[i].move();
    theBullets[i].display();
    
  }
  if (mouseIsPressed){
    let myBullet = new Bullet(mouseX, mouseY, random(-3, 3),random(-3, 3), 10);
    theBullets.push(myBullet);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    o = random(55, 255);
  }

}



class Bullet {
  
  constructor(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  display(){
    fill(r, g, b, o);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    this.x += this.dx;
    this.y += this.dy;
  }
}

