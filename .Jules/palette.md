## 2026-05-16 - Accessible Cards and Slider Labels

**Learning:** Large clickable cards that act as primary navigation are more accessible when treated as `role="link"` with explicit keyboard event handling for both Enter and Space. Additionally, range sliders in creative coding applications significantly benefit from real-time value displays to provide users with precise control over parameters.

**Action:** When converting container elements to interactive components, always ensure redundant nested interactive elements are hidden from screen readers and that focus-visible styles are explicitly defined. Always pair `<input type="range">` with a dynamic display element.
