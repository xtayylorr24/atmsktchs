let kerb

function preload(){
kerb = loadImage('kirbyy.png')
}


function setup() {
  createCanvas(windowWidth, windowHeight)

  background('pink')



  for(let i = 0; i < windowWidth; i = i+10) {
    line(i, 0, i, height)
  }
  for(let i=0; i<height; i=i+10){
    line(0,i,width,i)
  }
  for(let i = 0; i<200; i++){
    image(kerb, random(windowWidth),random(windowHeight), 50,50)
  }
imageMode(CENTER)
}

function draw() {


fill('black')
textSize(32)
text('츄', width/2, height/2)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}
