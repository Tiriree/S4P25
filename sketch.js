let walkerX, walkerY;
let isActive = false;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-container");
  canvas.style("position", "fixed");
  canvas.style("top", "0");
  canvas.style("left", "0");
  canvas.style("z-index", "-1");

  background(255);
  stroke(111, 0, 255, 100); // grey with alpha
  strokeWeight(1);
}

function draw() {
  if (windowWidth < 600) return;

  if (isActive) {
    const stepSize = 2; // increase for faster drift
    const angle = random(TWO_PI);
    const newX = walkerX + cos(angle) * stepSize;
    const newY = walkerY + sin(angle) * stepSize;

    line(walkerX, walkerY, newX, newY);

    walkerX = newX;
    walkerY = newY;
  }
}

function mouseMoved() {
  if (windowWidth < 600) return;

  walkerX = mouseX;
  walkerY = mouseY;
  isActive = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
  isActive = false;
}






// function setup() {
//     const canvas = createCanvas(windowWidth, windowHeight);
//     canvas.parent("p5-container");
//     canvas.style("position", "fixed");
//     canvas.style("top", "0");
//     canvas.style("left", "0");
//     canvas.style("z-index", "-1"); // behind content
  
//     background(255); // white background
//     noStroke();
//     fill(100, 100); // grey with alpha
//   }
  
//   function draw() {
//     background(255, 20); // white with low alpha
//     if (windowWidth >= 600) {
//       ellipse(mouseX, mouseY, 5, 5);
//     }
//   }
  
//   function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//   }
  