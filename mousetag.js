//position of variables
let xPos
let yPos

let ySpeed = 3
let xSpeed = 3

//game object
let kirby

//calculation
let mouseDist

//score
let score = 0

function preload(){
kirby = loadImage('umbrellakirb.gif')
}

function setup(){
  createCanvas(windowWidth,windowHeight)
    xPos = random(width)
    yPos = random(height)

}

function draw(){
  background(0)

  textAlign(CENTER)
  fill(255)
  textSize(27)
  text('Score: ' + score, width/2, 50)

mouseDist = dist(mouseX,mouseY,xPos,yPos)

  image(kirby,xPos, yPos, 50, 50)
  xPos = xPos+xSpeed
  yPos = yPos+ySpeed

  if(xPos>=width-15||xPos<=0){
    //reverse
    xSpeed=xSpeed*-1
  }

  if(yPos>=height-15||yPos<=0){
    ySpeed=ySpeed*-1
  }

  if(mouseDist<=30){
    xPos = random(15,width,-15)
    yPos = random(15,height,-15)
    score++
  }
}
