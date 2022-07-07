function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128, 204, 255);

  noStroke();

  fill(255, 237, 79);
  circle(380, 15, 150);

  fill(79, 52, 32);
  rect(100, 200, 30, 300);

  stroke(0,0,0)
  line(150,210,150,250)

  noStroke()
  fill(0,0,0)
  circle(150,260,20)

  stroke(12, 54, 20)
  strokeWeight(15)
  //bottom left v
  line(20,245,115,198)
  //top left v
  line(30,230,125,180)
  line(195,245,115,198)
  line(185,230,110,180)



  noStroke()
  fill(74, 186, 76);
  circle(30, 390, 150);
  circle(100, 350, 150);
  circle(200, 340, 150);
  circle(300, 370, 150);
  circle(400, 335, 150);

  fill(217, 29, 9)
  triangle(277,260,316,260,296,225)

  fill(189, 121, 79)
  square(277,260,40)

  fill(87, 47, 23)
  rect(296,275,12,25)

  strokeWeight(4)
  stroke('black')
  point(299,285)

  fill(255)
  noStroke()
  circle(60,70,40)
  circle(75,55,40)
  circle(90,70,40)

  stroke(25, 56, 25)
  line(1,330,400,330)
}
