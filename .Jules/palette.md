## 2026-05-13 - Improving Card Accessibility and Slider Feedback

**Learning:** When using large containers as interactive elements (e.g., cards for navigation), it is crucial to use `role="link"`, `tabindex="0"`, and explicit keyboard listeners for both 'Enter' and 'Space' to ensure full parity with native links. Additionally, any nested interactive elements (like buttons) should be neutralized with `aria-hidden="true"` to prevent confusing redundant focus points for screen readers.

**Action:** Always verify that custom interactive containers have correct ARIA roles and comprehensive keyboard support. Convert nested buttons to styled `div`s with `aria-hidden="true"` when the parent container is the primary interaction point.

**Learning:** Range sliders without numerical readouts lack precision and confidence for users. Providing a real-time value display next to the label significantly improves the UX of fine-tuning parameters in interactive systems.

**Action:** Whenever implementing or modifying `<input type="range">`, always include a corresponding `<span>` or element to display its current value and update it on input.
