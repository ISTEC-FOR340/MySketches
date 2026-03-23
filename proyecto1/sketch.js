let img;
let circles = [];

let cols = 60;
let rows = 60;
let r = 6;
let mouseSize = 80;

// dimensiones adaptadas
let displayW, displayH;
let offsetX, offsetY;

class Circle {
  constructor(x, y, col) {
    this.base = createVector(x, y);
    this.pos = createVector(x, y);
    this.col = col;
  }

  update() {
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    if (d < mouseSize) {
      let force = p5.Vector.sub(this.pos, createVector(mouseX, mouseY));
      force.normalize();
      force.mult(5);
      this.pos.add(force);
    }

    // retorno suave
    let back = p5.Vector.sub(this.base, this.pos);
    back.mult(0.05);
    this.pos.add(back);
  }

  draw() {
    noStroke();
    fill(this.col);
    circle(this.pos.x, this.pos.y, r * 2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  document.getElementById('imageLoader').addEventListener('change', handleImage);

  document.getElementById('cols').oninput = e => {
    cols = +e.target.value;
    processImage();
  };

  document.getElementById('rows').oninput = e => {
    rows = +e.target.value;
    processImage();
  };

  document.getElementById('radius').oninput = e => {
    r = +e.target.value;
  };

  document.getElementById('mouseSize').oninput = e => {
    mouseSize = +e.target.value;
  };
}

function draw() {
  background(0);

  for (let c of circles) {
    c.update();
    c.draw();
  }
}

// 🔄 RESPONSIVE
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  processImage();
}

// 📁 CARGAR IMAGEN
function handleImage(e) {
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onload = function(event) {
    loadImage(event.target.result, loaded => {
      img = loaded;
      processImage();
    });
  };

  reader.readAsDataURL(file);
}

// 🧠 PROCESAMIENTO RESPONSIVO
function processImage() {
  if (!img) return;

  circles = [];

  let canvasRatio = width / height;
  let imgRatio = img.width / img.height;

  // mantener proporción
  if (imgRatio > canvasRatio) {
    displayW = width;
    displayH = width / imgRatio;
  } else {
    displayH = height;
    displayW = height * imgRatio;
  }

  offsetX = (width - displayW) / 2;
  offsetY = (height - displayH) / 2;

  // imagen reducida para muestreo
  let tempImg = img.get();
  tempImg.resize(cols, rows);
  tempImg.loadPixels();

  let cellW = displayW / cols;
  let cellH = displayH / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {

      let index = (i + j * tempImg.width) * 4;

      let rr = tempImg.pixels[index];
      let gg = tempImg.pixels[index + 1];
      let bb = tempImg.pixels[index + 2];

      let x = offsetX + i * cellW + cellW / 2;
      let y = offsetY + j * cellH + cellH / 2;

      circles.push(new Circle(x, y, color(rr, gg, bb)));
    }
  }
}
