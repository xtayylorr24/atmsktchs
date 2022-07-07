let ballX = 600
let ballY = 700

let kirby

function preload(){
kirby = loadImage('kirbyy.png')
umbrella = loadImage('umbrellakirb.gif')

}



function setup() {
noCursor()
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER)
}

function draw() {
background('pink')

image(umbrella, mouseX, mouseY,100,100)

fill(0,0,0)
textSize(32)
text('kirby.', windowWidth/2, windowHeight/2)
  }
