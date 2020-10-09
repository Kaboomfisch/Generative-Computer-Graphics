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
      // A vector that points to the center of the window
      let center = createVector(posX, posY);


      stroke(255, 255, 0);
      strokeWeight(1);
      point(mouseX, mouseY);
      stroke(0, 0, 0);
      strokeWeight(2);
      point(center.x, center.y);

      let m = mouse.mag();

      //mouse.sub(center);
      //line(posX, posY, mouse.X, mouse.Y);
      


      push();
      fill(0);
      let arrowSize = 30;
      translate(posX, posY)
      rotate(mouse.heading());
      triangle(-20, 0 + arrowSize/3, -20, 0 - arrowSize/3, 0 + arrowSize * 1.5, 0);
      pop();


    //triangle(posX, posY + arrowSize, posX, posY - arrowSize, posX + arrowSize * 2, posY);

      //f = map(m, 0, 2000, 0, 255)

      //strokeWeight(2);

      //fill(f, 100, 100)

      //triangle(posX, posY, posX + width / tileCount, posY + height / tileCount, posX + height / tileCount, posY + width / tileCount);

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

function drawArrow(base, vec, myColor) {
  push();
  fill(255);

  rotate(mouse.heading());
  let arrowSize = 50;

  triangle(posX, posY + arrowSize, posX, posY - arrowSize, posX + arrowSize * 2, posY);
  pop();
}