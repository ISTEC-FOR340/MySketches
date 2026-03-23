let letters = [];
let recognition;
let listening = false;

let gravity = 0.5;
let floorY;

let fontSize = 32;
let selectedFont = "Arial";

// GUI elements
let sizeSlider;
let fontSelect;
let reloadButton;


// ----------------------------
// WAIT UNTIL HTML LOADS
// ----------------------------

window.addEventListener("DOMContentLoaded", () => {

  sizeSlider = document.getElementById("sizeSlider");
  fontSelect = document.getElementById("fontSelect");
  reloadButton = document.getElementById("reloadButton");

  sizeSlider.addEventListener("input", () => {
    fontSize = +sizeSlider.value;

    // keep letters inside bounds after resizing
    for (let l of letters) {
      l.y = constrain(l.y, 0, floorY - fontSize / 2);
    }
  });

  fontSelect.addEventListener("change", () => {
    selectedFont = fontSelect.value;
  });

  reloadButton.addEventListener("click", () => {
    location.reload();
  });

});


// ----------------------------
// P5 SETUP
// ----------------------------

function setup() {

  pixelDensity(1);

  createCanvas(window.innerWidth, window.innerHeight);

  textAlign(CENTER, CENTER);

  floorY = height - 40;

  // speech recognition
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onresult = function (event) {

      let transcript =
        event.results[event.results.length - 1][0].transcript;

      addLetters(transcript);

    };

  } else {

    alert("Speech Recognition not supported");

  }

}


// ----------------------------
// DRAW
// ----------------------------

function draw() {

  background(20);

  floorY = height - 40;

  // floor
  fill(80);
  rect(0, floorY, width, 40);

  // 🔥 set font globally once per frame
  textFont(selectedFont);
  textSize(fontSize);

  for (let i = letters.length - 1; i >= 0; i--) {

    letters[i].update();
    letters[i].display();

    if (letters[i].shouldDelete) {
      letters.splice(i, 1);
    }

  }

}


// ----------------------------

function windowResized() {

  resizeCanvas(window.innerWidth, window.innerHeight);

  floorY = height - 40;

  for (let l of letters) {
    l.x = constrain(l.x, 0, width);
    l.y = constrain(l.y, 0, floorY);
  }

}


// ----------------------------

function mousePressed() {

  if (!listening && recognition) {
    recognition.start();
    listening = true;
  }

}


// ----------------------------

function keyPressed() {

  if (key === " ") {
    for (let l of letters) {
      l.falling = true;
    }
  }

}


// ----------------------------

function addLetters(text) {

  for (let char of text) {
    if (char !== " ") {
      letters.push(new FloatingLetter(char));
    }
  }

}


// =====================================================
// LETTER CLASS
// =====================================================

class FloatingLetter {

  constructor(char) {

    this.char = char;

    this.x = random(width);
    this.y = random(height / 2);

    this.vx = random(-2, 2);
    this.vy = random(-1, 1);

    this.falling = false;

    this.hitFloorTime = null;
    this.shouldDelete = false;

  }


  update() {

    let letterHeight = fontSize;

    if (!this.falling) {

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;

      if (this.y < 0 || this.y > floorY - letterHeight / 2) {
        this.vy *= -1;
      }

    } else {

      this.vy += gravity;
      this.y += this.vy;

      if (this.y > floorY - letterHeight / 2) {

        this.y = floorY - letterHeight / 2;
        this.vy = 0;

        if (!this.hitFloorTime) {
          this.hitFloorTime = millis();
        }

        if (millis() - this.hitFloorTime > 4000) {
          this.shouldDelete = true;
        }

      }

    }

  }


  display() {

    fill(255);
    text(this.char, this.x, this.y);

  }

}