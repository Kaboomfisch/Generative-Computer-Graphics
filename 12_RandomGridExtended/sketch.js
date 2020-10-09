
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
  z = 0
  q = width / tileCount
  g = width / tileCount / 2

  vertex = [
    z, q
  ]

  colors = [
    color(100, 232, 82),
    color(241, 82, 59),
    color(101, 101, 255),
    color(208, 108, 198)
  ];


}

function draw() {
  // Canvas draw options
  background(250, 200, 100);

  smooth();
  noFill();

  // Stroke options
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  for (let gridX = 0; gridX < tileCount; gridX++) {
    for (let gridY = 0; gridY < tileCount; gridY++) {

      let posX = width / tileCount * gridX;
      let posY = width / tileCount * gridY;


      //strokeWeight(2);
      push()
      stroke(0)
      strokeWeight(10)
      strokeJoin(ROUND)
      translate(posX, posY)
      fill(random(colors))
      quad(0, 0, 0, width / tileCount, width / tileCount, width / tileCount, width / tileCount, 0)

      switch (int(random(1, 11))) {
        case 1:
          fill(random(colors))
          quad(0, 0, 0, width / tileCount, width / tileCount, width / tileCount, width / tileCount, 0)
          break;
        case 2:
          fill(random(colors))
          ellipse(g, g, g, g);
          break;
        case 3:
          fill(random(colors))
          triangle(0, 0, width / tileCount, 0, 0, width / tileCount);
          break;
        case 4:
          fill(random(colors))
          triangle(width / tileCount, width / tileCount, width / tileCount, 0, 0, width / tileCount);
          break;
        case 5:
          fill(random(colors))
          quad(width / tileCount / 2, 0, width / tileCount, width / tileCount / 2, width / tileCount / 2, width / tileCount, 0, width / tileCount / 2);
          break;
        case 6:
          fill(random(colors))
          triangle(q, 0, 0, 0, q, q);
          break;
        case 7:
          fill(random(colors))
          ellipse(g, g, q, q);
          break;
        case 8:
          fill(random(colors))
          ellipse(g, g, q, q);
          fill(random(colors))
          ellipse(g, g, g, g);
          break;
        case 9:
          fill(random(colors))
          quad(g / 2, g / 2, g / 2, q - g / 2, q - g / 2, q - g / 2, q - g / 2, g / 2)
          break;
        case 10:
          fill(random(colors))
          quad(-(width / tileCount), -(width / tileCount), -(width / tileCount), width / tileCount, width / tileCount, width / tileCount, width / tileCount, -(width / tileCount));
          break;
      }

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

