


// CANNON BALL DEMO NOT BALL DEMO IT WONT LET ME RENAME


let cannonX;
let cannonY;
let cannonLength;
let cannonWidth;
let cannonAngle;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cannonX = windowWidth/2 ;
  cannonY = windowHeight/2;
  cannonWidth = 50;
  cannonLength = 125;
  cannonAngle = 0;
}



function draw() { 
  background(100);
  displayCannon();
  noStroke();
  updateBullets();
}



function displayCannon() {
  push(); // save the transformation matrix
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  rect(0, -cannonWidth/2, cannonLength, cannonWidth);
  circle(0,0,cannonWidth);
  pop(); // reload the old transformation matrix

}


function mouseClicked() {
  fire();
}

function fire(){
  let thisBullet = {
    x: cannonX, 
    y: cannonY,
    radius: cannonWidth - 10,
    angle: cannonAngle,
    speed: 5 };
  bullets.push(thisBullet); 
}


function updateBullets() {
  for (let thisBullet of bullets){
    thisBullet.x  +=  thisBullet.speed * cos(thisBullet.angle);
    thisBullet.y += thisBullet.speed * sin(thisBullet.angle);
    circle(thisBullet.x, thisBullet.y, thisBullet.radius);

  }
}