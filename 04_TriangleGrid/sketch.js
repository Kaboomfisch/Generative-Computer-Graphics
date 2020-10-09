
// Global var
var tileCount, actRandomSeed, actStrokeCap;


function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  var density = displayDensity();
  pixelDensity(density);
  // Colors and drawing modes
  smooth();
  // Init Var
  tileCount = 20;
  actRandomSeed = 0;
  actStrokeCap = ROUND;
}

function draw() {
  // Canvas draw options
  background(255);
  smooth();
  noFill();

  // Stroke options
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = width / tileCount * gridX;
      let posY = width / tileCount * gridY;

      // A vector that points to the mouse location
      let mouse = createVector(mouseX - posX, mouseY - posY);
      // A vector that points to each of grid spaces
      var center = createVector(posX, posY);

      stroke(255, 0, 0);
      strokeWeight(0);
      point(mouseX, mouseY);
      stroke(0, 255, 0);
      strokeWeight(0);
      point(center.x, center.y);

      let m = mouse.mag();

      mouse.sub(center);
      line(posX, posY, mouseX, mouseY);

      let toggle = toInt(random(0, 1));

      f = map(m, 0, 500, 0, 255)



      //strokeWeight(2);
      push()
      noStroke()
      translate(posX, posY)
      fill(200, f, f)
      triangle(0, 0, 0 + width / tileCount, 0 + height / tileCount, 0 + height / tileCount, 0 + width / tileCount);
      pop()



    }

  }
}

function mousePressed() {
  actRandomSeed = toInt(random(100000));
}

function keyPressed() {
  if (key == 's' || key == 'S') saveThumb(650, 350);
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
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

