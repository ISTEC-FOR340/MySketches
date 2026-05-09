## 2025-05-15 - Live Slider Feedback & Keyboard Navigation

**Learning:** Adding real-time visual feedback for range sliders significantly enhances user confidence and control. Additionally, when making large clickable containers (cards) accessible via `tabindex="0"` and `role="button"`, any nested `<button>` elements should be converted to non-interactive elements (like `<div>`) to avoid confusing screen reader users with nested interactive elements.

**Action:**
- Always pair `<input type="range">` with a dynamic value display.
- Ensure large click targets are keyboard-accessible with `tabindex` and `onkeydown` handlers.
- Avoid nesting interactive elements within elements that have `role="button"`.
