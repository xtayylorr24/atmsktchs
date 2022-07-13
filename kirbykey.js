
let idle
let start
let title
let idle2
let xcite
let pots


let startLevelBool=true
let levelOneBool=false
let screenTwoBool=false
let screenThreeBool=false
let screenFourBool=false
let screenFiveBool=false

let mouseDist

function preload(){
  idle=loadImage('gl.gif')
  start=loadImage('giphy.gif')
  title=loadImage('kkcode.png')
  idle2=loadImage('ber.png')
  xcite=loadImage('umbrellakirb.gif')
  pots=loadImage('grreat.gif')
}


function setup(){
createCanvas(windowWidth,windowHeight)
imageMode(CENTER)
textAlign(CENTER)
}


function draw(){


  if(startLevelBool==true){
    startLevel()

  }
  if(levelOneBool==true){
    levelOne()
}
  if(screenTwoBool==true){
    screenTwo()
}


  if(screenThreeBool==true){
    screenThree()
  }

  if(screenFourBool==true){
    screenFour()
}

  if(screenFiveBool==true){
    screenFive()
  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function startLevel(){
  background('black')

  image(title, width/2, 100)
  image(start,width/2, 600)

  mouseDist = dist(mouseX,mouseY,width/2,600)
  if(mouseDist<=40){
    startLevelBool=false
    levelOneBool=true
  }
}

function levelOne(){
  background(0)
  image(idle,width/2,height/2,300,300)

  textSize(20)
  fill('white')
  text('Hover the mouse over your choice! Choose wisely!', 400, 100)
  textSize(32)
  text('こんにちは元気ですか', width/2, 400)
  text('|', width/2, 440)
  text('What?', 700, 800)
  text('なんで気にするの...', 1200, 800)

  mouseDist = dist(mouseX,mouseY,700,800)
  if(mouseDist<=35){
    alert("Kirby frowns at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=true
  }

  mouseDist = dist(mouseX,mouseY,1200,800)
  if(mouseDist<=35){
    alert("Kirby frowns at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=true

  }
}


function screenTwo(){
  background(0)



  image(idle2,width/2,height/2,240,200)

  fill('white')
  text('Anyway... I have a quest for you!',width/2, 400)
  text('|', width/2, 440)
  text('What is it?', width/2, 800)


  mouseDist = dist(mouseX,mouseY,width/2,800)
  print(mouseDist)

  if(mouseDist<=40){
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=true
    print('got it!')
  }

}

function screenThree(){
  background(0)
  image(xcite,width/2,height/2,300,300)

  text('I seem to have lost my keys...Can you help me find them?',width/2, 300)
  text('|', width/2, 350)
  text('Sure!', 700, 800)
  text('You\'re just making me do your dirty work...', 1200, 800)

  mouseDist = dist(mouseX,mouseY,700,800)
  if(mouseDist<=35){
    alert("Kirby smiles at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=true
  }

  mouseDist = dist(mouseX,mouseY,1200,800)
  if(mouseDist<=35){
    alert("Kirby rolls his eyes at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=true

  }

}

function screenFour(){
  background(0)

  image(pots,width/2,height/2,290,300)

  text('Great! I\'m so glad I can count on you!',width/2, 300)
  text('|', width/2, 350)
  text('Find the first key!',width/2, 800)

  mouseDist = dist(mouseX,mouseY,width/2,800)
  if(mouseDist<=35){
    alert("Starting game...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=false
    screenFiveBool=true
  }
}

function screenFive(){
  background(0)
}
