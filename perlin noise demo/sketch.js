// Project
// Jenna Doucette
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let heights = [];
const NUMBER = 1000;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i=0; i<NUMBER; i++) {
    let thisHeight = noise(time)* height;
    heights.push(thisHeight);
    time += 0.01; 
  }
}

function draw() {
  background(100);
  showTerrain();
}

function showTerrain (){
  for (let i = 0; i < heights.length; i++){
    let rectWidth = width/heights.length;
    fill(0);
    rect(i * rectWidth, height - heights[i], rectWidth, heights[i]);
  
  }
}