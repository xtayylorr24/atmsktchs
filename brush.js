let lineBrushBool = false
let squareBrushBool = false

function setup(){
  createCanvas(windowWidth, windowHeight)

  rectMode(CENTER)

  background(255)
}

function draw(){

  if(lineBrushBool == true){
  lineBrush()
  }

  if(squareBrushBool == true){
  squareBrush()
  }

}

//custom lineBrush function
function lineBrush(){
  if(mouseIsPressed){
    stroke('purple')
    strokeWeight(5)
    line(pmouseX,pmouseY, mouseX,mouseY)
  }
}

//custom squareBrush function
function squareBrush(){
  if(mouseIsPressed){
    noStroke()
    fill('black')
    rect(mouseX,mouseY,50,50)
  }
}

function keyTyped(){
  if(key === 'b'){
    lineBrushBool = true
    squareBrushBool = false
  }
  if(key === 'c'){
    lineBrushBool = false
    squareBrushBool = true
  }
  if(key == 's'){
    save('drawing.jpg')
  }
}
