
let idle
let start
let title
let idle2
let xcite
let pots
let dreamland
let dark
let kee

let startLevelBool=true
let levelOneBool=false
let screenTwoBool=false
let screenThreeBool=false
let screenFourBool=false
let screenFiveBool=false
let screenSixBool=false
let screenSevenBool=false
let screenEightBool=false
let screenNineBool=false
let screenTenBool=false

let mouseDist
let sklDist

let sklX
let sklY
let skl
function preload(){
  idle=loadImage('gl.gif')
  start=loadImage('giphy.gif')
  title=loadImage('kkcode.png')
  idle2=loadImage('ber.png')
  xcite=loadImage('umbrellakirb.gif')
  pots=loadImage('grreat.gif')
  dreamland=loadSound('dreamland.mp3')
  dark=loadSound('gourmetrace.mp3')
  kee=loadImage('keyy.png')
  skl=loadImage('skl.gif')
}


function setup(){
createCanvas(windowWidth,windowHeight)
imageMode(CENTER)
textAlign(CENTER)

sklX= 20
sklY = windowHeight-200
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

  if(screenSixBool==true){
    screenSix()
  }

  if(screenSevenBool==true){
    screenSeven()
  }

  if(screenEightBool==true){
    screenEight()
  }

  if(screenNineBool==true){
    screenNine()
  }

  if(screenTenBool==true){
    screenTen()
  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

function startLevel(){
  background('black')

  fill('white')
  textSize(20)
  text('This game involves sound! Click anywhere to enable it!', width/2,height/2-200)

  image(title, width/2, 100)
  image(start,width/2, 600)

  mouseDist = dist(mouseX,mouseY,width/2,600)
  if(mouseDist<=40){
    startLevelBool=false
    levelOneBool=true
   dreamland.play()
  }
}

function levelOne(){
  background(0)
  image(idle,width/2,height/2,300,300)

  textSize(20)
  fill('white')
  text('Hover the mouse over your choice! Choose wisely!', 400, 100)
  textSize(32)
  text('こんにちは元気ですか', width/2, height/2-150)
  text('|', width/2, height/2-115)
  text('What?', width/2-200, height-200)
  text('なんで気にするの...', width/2+200, height-200)

  mouseDist = dist(mouseX,mouseY,width/2-200, height-200)
  if(mouseDist<=35){
    alert("Kirby frowns at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=true
  }

  mouseDist = dist(mouseX,mouseY,width/2+200, height-200)
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
  text('Anyway... I have a quest for you!',width/2, height/2-150)
  text('|', width/2, height/2-115)
  text('What is it?', width/2, height/2+250)


  mouseDist = dist(mouseX,mouseY,width/2,height/2+250)
  print(mouseDist)

  if(mouseDist<=40){
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=true

  }

}

function screenThree(){
  background(0)
  image(xcite,width/2,height/2,300,300)

  text('I seem to have lost my keys...Can you help me find them?',width/2, height/2-200)
  text('|', width/2, height/2-150)
  text('Sure!', width/2-200, height/2+250)
  text('You\'re just making me do your dirty work...', width/2+200, height/2+250)

  mouseDist = dist(mouseX,mouseY,width/2-200, height/2+250)
  if(mouseDist<=35){
    alert("Kirby smiles at your response...")
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=true
  }

  mouseDist = dist(mouseX,mouseY,width/2+200, height/2+250)
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

  text('Great! I\'m so glad I can count on you!',width/2, height/2-150)
  text('|', width/2, height/2-115)
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
    dreamland.stop()
    dark.play()
  }
}

function screenFive(){
  background(0)


  mouseDist = dist(mouseX,mouseY,width/2+300,height/2-250)
  if(mouseDist<=35){
    image(kee,width/2+300,height/2-250,200,200)
    if(mouseIsPressed===true){
      alert('You found the first key!')
      startLevelBool=false
      levelOneBool=false
      screenTwoBool=false
      screenThreeBool=false
      screenFourBool=false
      screenFiveBool=false
      screenSixBool=true
      dark.stop()
      dreamland.play()
    }
  }
}

function screenSix(){
  background(0)

  image(pots,width/2,height/2,290,300)
  text('You found the first key! On to the next one!',width/2, height/2-150)
  text('|', width/2, height/2-115)
  text('Find the second key!',width/2, 800)

  mouseDist = dist(mouseX,mouseY,width/2,800)
  if(mouseDist<=35){
    alert('Starting Game...')
      startLevelBool=false
      levelOneBool=false
      screenTwoBool=false
      screenThreeBool=false
      screenFourBool=false
      screenFiveBool=false
      screenSixBool=false
      screenSevenBool=true
      dreamland.stop()
      dark.play()
    }
}

function screenSeven(){
  background(0)

  image(skl, sklX, sklY, 100, 100)

  if(keyIsDown(LEFT_ARROW)){
    sklX = sklX-5
  }
  if(keyIsDown(RIGHT_ARROW)){
    sklX = sklX+5
   }
  if(keyIsDown(UP_ARROW)){
    sklY = sklY -5
  }
  if(keyIsDown(DOWN_ARROW)){
    sklY = sklY +5
  }

  sklDist = dist(sklX,sklY,width/2-200, height-100)
  if(sklDist<=35){
    image(kee,width/2-200,height-100,200,200)
      if(mouseIsPressed===true){
        alert("You found the second key!")
        startLevelBool=false
        levelOneBool=false
        screenTwoBool=false
        screenThreeBool=false
        screenFourBool=false
        screenFiveBool=false
        screenSixBool=false
        screenSevenBool=false
        screenEightBool=true
        dark.stop()
        dreamland.play()
      }
  }

}

function screenEight(){
  background(0)
  image(xcite,width/2,height/2,300,300)

  text('Great! You found the second key...huh?',width/2, height/2-200)
  text('|', width/2, height/2-150)
  text('What?', width/2-200, height/2+250)
  text('It was easy', width/2+200, height/2+250)



  mouseDist = dist(mouseX,mouseY,width/2-200, height/2+250)
  if(mouseDist<=35){
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=false
    screenFiveBool=false
    screenSixBool=false
    screenSevenBool=false
    screenEightBool=false
    screenNineBool=true

  }

  mouseDist = dist(mouseX,mouseY,width/2+200, height/2+250)
  if(mouseDist<=35){
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=false
    screenFiveBool=false
    screenSixBool=false
    screenSevenBool=false
    screenEightBool=false
    screenNineBool=true
  }
}

function screenNine(){
  background(0)

  image(idle2,width/2,height/2,240,200)
  image(kee,width/2+200,height/2-100,200,200)

  text('Oh.. it seems my third and final key was in my back pocket...',width/2, height/2-200)
  text('|', width/2, height/2-150)
  text('Glad you found it!', width/2, height/2+250)

  mouseDist = dist(mouseX,mouseY,width/2, height/2+250)
  if(mouseDist<=35){
    startLevelBool=false
    levelOneBool=false
    screenTwoBool=false
    screenThreeBool=false
    screenFourBool=false
    screenFiveBool=false
    screenSixBool=false
    screenSevenBool=false
    screenEightBool=false
    screenNineBool=false
    screenTenBool=true
    }
}

function screenTen(){
  background(0)

  image(idle,width/2,height/2,300,300)

  text('Thanks for helping me! See you!',width/2, height/2-150)
  text('|', width/2, height/2-115)

}
