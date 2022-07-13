let canvas
let playButton

let modem

let modemSlider
let modemRateSlider

let skl
let sklX = 0

let amplitude

let level

function preload(){
  modem=loadSound('ModemSound.mp3')
  skl=loadImage('skl.gif')
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  canvas.style('z-index','-1')
  canvas.position(0,0)

  playButton=createButton('Play Audio')
  playButton.mousePressed(audioToggle)
  //playButton.position(0,0)

  modemSlider=createSlider(0,1,1,0.01)
  modemRateSlider=createSlider(0,3,1,0.01)



  amplitude=new p5.Amplitude()

}

function audioToggle(){
  if(!modem.isPlaying()){
    modem.loop()
    playButton.html('Pause Audio')
  }else{
    modem.pause()
    playButton.html('Play Audio')
  }
}

function draw(){
  background(0)
  modem.rate(modemRateSlider.value())
  modem.setVolume(modemSlider.value())

  level=amplitude.getLevel()
  let size=map(level,0,1,0,900)

  ellipse(windowWidth/2,windowHeight/2,size,size)
}
