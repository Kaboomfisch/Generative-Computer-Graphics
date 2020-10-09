// Based on the code P_2_0_02.pde from
// Generative Gestaltung, ISBN: 978-3-87439-759-9

// Global var
var b = 255, p = false;
 
function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Colors and drawing modes
  background(255);
  smooth();
  // Init Var
}

function draw() {
  background(255)
  smooth();
  noFill();

if (p) {
  
  s = map(mouseY, 0, windowHeight, 0, 1000)
  r = map(size, 0, windowHeight, 0, 255)
  b = map(size, 0, windowHeight, 255, 0)

    x = windowWidth/2
    y = windowHeight/2
    diameter = 10
    size = s
    angle = 1
    oldX = x;
    oldY = y;
    beginShape();
    for (let i = 0; i < size; i++) {
      newAngle = (angle/10) * i;
      newX = (x) + (diameter * newAngle) * Math.sin(newAngle);
      newY = (y) + (diameter * newAngle) * Math.cos(newAngle);
      
     // r = random(10);
     // g = random(250);
     // b = random(100);
      
      let rColor = color(0, 200, 0);
      //drawCircle(newX, newY, 50, rColor);
      //drawPolygon(newX, newY, 100, 6);
      stroke(r, 0, b);
     
      strokeWeight(60)
      line(oldX, oldY, newX, newY);
      oldX = newX;
      oldY = newY;
    }
    endShape();
  }

  /*if (p) {
    r = random(200);
    g = random(10);
    b = random(255);
    // push();

    translate(windowWidth/2, windowHeight/2);

    var circleResolution = toInt(map(mouseY + 100, 0, height, 2, 10));
    var radius = mouseX - width / 2 + 0.5;
    var angle = TWO_PI / circleResolution;

    strokeWeight(2);
    stroke(r, g, b, r);
    strokeWeight(10)

    beginShape();
    for (i = 0; i <= circleResolution; i++) {
      var x = 0 + cos(angle * i) * radius;
      var y = 0 + sin(angle * i) * radius;
      vertex(x, y);
    }
    endShape();

    // pop();
  }*/
}

function mousePressed() {
  p = true;
}

function mouseReleased() {
  p = false;
}

function keyPressed() {
  // Clear sketch
  if (keyCode === 32) background(255) // 32 = SPACE BAR 
  if (key == 's' || key == 'S') saveThumb(650, 350);
}

// Tools

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}

// Int conversion
function toInt(value) {
  return ~~value;
}

// Timestamp
function timestamp() {
  return Date.now();
}

// Thumb
function saveThumb(w, h) {
  let img = get( width/2-w/2, height/2-h/2, w, h);
  save(img,'thumb.jpg');
}
