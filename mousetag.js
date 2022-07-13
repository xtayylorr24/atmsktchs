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

//sound
let doop

//game state booleans
let startGameBool = true
let winScreenBool = false

//rotation
let rotation = 1

function preload(){
  kirby = loadImage('umbrellakirb.gif')
  doop = loadSound('Bloop.mp3')
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  xPos = random(width)
  yPos = random(height)

  imageMode(CENTER)
}

function draw(){
  if(startGameBool == true){
    startGame()

  }

  if(winScreenBool == true){
    winScreen()
  }

}

function startGame(){
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
    doop.play()
  }
  if(score>=20){
    startGameBool = false
    winScreenBool = true
  }
}

function winScreen(){
  background('white')
  fill('black')
  textSize(27)
  text('You won! ^_^', width/2, 50)
  rotation++

  push()
  translate(windowWidth/2,windowHeight/2)
  rotate(radians(rotation))
  image(kirby,0,0, 50,50)
  pop()
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
