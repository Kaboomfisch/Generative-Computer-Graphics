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

  colors = [
    color(100, 232, 82),
    color(241, 82, 59),
    color(101, 101, 255),
    color(208, 108, 198)
  ];
}

function draw() {
  smooth();
  noFill();

  if (p) {
    r = map(mouseY, 0, height, 0, 255)
    //r = random(200);
    g = random(255);
    b = random(10);
    // push();
    xx = random(width)
    yy = random(height)

    translate(xx, yy);
    rotate(b)
    fill(random(colors))

    corner = random(5, 9)


    var circleResolution = toInt(map(400, 0, height, 3, corner));
    var radius = random(100, 220);
    var angle = TWO_PI / circleResolution;


    stroke(0);
    strokeWeight(20)


    beginShape();
    for (i = 0; i <= circleResolution; i++) {
      var x = 0 + cos(angle * i) * radius;
      var y = 0 + sin(angle * i) * radius;
      vertex(x, y);
    }



    endShape();

    // pop();
  }
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
  if (key == 's' || key == 'S') saveThumb(windowWidth, windowHeight);
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
  let img = get(width / 2 - w / 2, height / 2 - h / 2, w, h);
  save(img, 'thumb.jpg');
}
