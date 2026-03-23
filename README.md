# MySketches

Interactive sketches developed with **p5.js** exploring the relationship between **image, language, and physical behavior**.

This repository is designed as a set of **educational examples for ISTEC students**, introducing creative coding through interactive systems, while also engaging with concepts from **media art and affective computing**.

---

## 🎯 Overview

The sketches demonstrate how digital elements (images, text, voice) can be transformed into **dynamic, interactive systems**.

Each project explores a different transformation:

* **Image → Particles**
* **Voice → Text → Physics**

The goal is to understand programming not only as logic, but as a way to design **behavior, interaction, and meaning**.

---

## 🧪 Projects

### 1. Circle Matrix (Image → Particles)

An image is decomposed into a grid of colored circles.
Each circle represents a sampled pixel and behaves as an independent agent.

#### ✨ Interaction

* Upload an image
* Move the mouse to repel particles
* Adjust:

  * grid resolution (rows & columns)
  * circle size
  * interaction radius

#### 🧠 Concept

This sketch explores the idea of an image as a **field of autonomous elements**, rather than a fixed representation.

The original image remains recognizable, but becomes unstable under interaction — revealing its underlying structure.

#### 🛠 Topics covered

* Image processing (pixel sampling)
* Coordinate mapping
* Object-oriented programming (classes)
* Interaction forces (distance-based behavior)
* Responsive canvas design

---

### 2. The Weight of Words (Voice → Physics)

Speech is captured through the microphone and transformed into floating letters.
These letters behave as physical objects and can fall under gravity.

#### ✨ Interaction

* Click to activate speech recognition
* Speak → letters appear
* Press **SPACE** → letters fall
* Adjust:

  * font size
  * font type

#### 🧠 Concept

Language is transformed from a symbolic system into a **material one**.

Words are no longer only interpreted — they **exist, move, collide, and disappear**.

The piece explores:

* the tension between **ephemeral speech and physical presence**
* the idea that **meaning can have weight**

#### 🛠 Topics covered

* Speech recognition (Web Speech API)
* Text rendering in p5.js
* Physics simulation (gravity, collision)
* Time-based deletion (memory decay)
* Real-time interaction

---

## 🧑‍🏫 Educational Goals

These sketches are designed to help students:

* Understand **interactive systems**
* Learn **event-driven programming**
* Work with **real-time input** (mouse, keyboard, microphone)
* Explore **mapping between data and behavior**
* Think about code as a **creative and expressive tool**

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MySketches.git
```

### 2. Open the project

You can simply open `index.html` in your browser.

> ⚠️ For speech recognition, it is recommended to run a local server.

Example using Python:

```bash
python -m http.server
```

Then open:

```
http://localhost:8000
```

---

## 📁 Structure

```
MySketches/
│
├── index.html
├── style.css
├── script.js
│
├── proyecto1/
│   ├── proyecto1.html
│   ├── sketch.js
│   └── style.css
│
├── proyecto2/
│   ├── proyecto2.html
│   ├── sketch.js
│   └── style.css
```

---

## 🧩 Technologies

* **p5.js**
* **JavaScript (ES6)**
* **Web Speech API**
* HTML5 / CSS3

---

## 🔬 Research Context

These sketches are aligned with ongoing research in:

* **Affective Computing**
* **Speech Emotion Recognition**
* **Multimodal Interaction**
* **Prosodic Expression and Irony**

They explore how **voice, language, and perception** can be translated into **visual and physical systems**.

---

## ✨ Future Extensions

Possible directions for development:

* Mapping **voice features (pitch, intensity)** to visual behavior
* Adding **sound feedback**
* Exporting animations (video / data)
* Extending interaction to **multimodal inputs**

---

## 📄 License

This project is open for educational use.

---

## 👤 Author

Jorge Forero
Artist & Media Researcher
PhD Researcher – University of Porto

---

## 💡 Final Note

These sketches are not just demonstrations of code —
they are experiments in thinking about **interaction, perception, and meaning**.
