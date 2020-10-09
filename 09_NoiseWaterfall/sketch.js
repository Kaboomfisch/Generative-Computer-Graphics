// Noise generated image

// Global var
var canvas, backgroundGrey, noiseXRange, noiseYRange, noiseMode, octaves, falloff, colorCount;
let step_row, step_col;
let c, c1;

function setup() {
  // Canvas setup
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Container");
  // Detect screen density (retina)
  // Comment it out if the sketch is too slow
  var density = displayDensity();
  pixelDensity(density);
  // Init var
  backgroundGrey = 0;
  background(backgroundGrey);
  octaves = 4;
  falloff = 0.5;
  noiseMode = 1;
  downSample = 4;
  colorCount = 24;
  step_row = 10;
  step_col = 20;
  c = 0;
  c1 = 0;
}

function draw() {

  background(backgroundGrey);
  strokeWeight(1);
  noStroke();
  fill(255, 100);
  noFill();
  smooth();

  noiseDetail(octaves, falloff);

  noiseXRange = 100;
  noiseYRange = 100;
  c1 -= 1;
  c = 1;
  console.log(c1)
  let t = millis() / 10000;
  for (var y = 0; y < height; y++) {
    beginShape();
    c += 0.1
    stroke(100, 100, 255);
    for (var x = 0; x < width; x++) {
      if (x % step_col == 0 && y % step_row == 0) {

        let noiseX = map(x, 0, width, 0, noiseXRange);
        let noiseY = map(y, 0, height, 0, noiseYRange);

        var noiseValue = noise(noiseX, c1 + c);
        curveVertex(x, y - noiseValue * 200)

      }
    }
    endShape();
  }



}


// Tools
function setPixelColor(x, y, r, g, b, a) {
  var d = pixelDensity();
  for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
      // loop over
      idx = 4 * ((y * d + j) * width * d + (x * d + i));
      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = a;
    }
  }
}

// resize canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, false);
}

//  conversion
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