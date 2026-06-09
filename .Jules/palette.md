## 2025-05-24 - [p5.js Scroll Prevention]
**Learning:** In interactive web environments (like p5.js sketches), keys used for gameplay (e.g., Spacebar) can trigger default browser behaviors like scrolling, which disrupts the user experience.
**Action:** Always return `false` from the `keyPressed()` function in p5.js for keys that have default browser actions (like Space or Arrow keys) to ensure focus remains on the interactive element.

## 2025-05-24 - [Semantic Navigation & Focus Visibility]
**Learning:** Using non-semantic `div` elements with `onclick` for navigation breaks core accessibility features like keyboard tab order and focus rings.
**Action:** Prefer semantic `<a>` tags for interactive cards and implement high-contrast `:focus-visible` styles to ensure parity between mouse and keyboard navigation feedback.
