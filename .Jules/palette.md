## 2025-05-15 - [Interactive Card Accessibility]
**Learning:** Large clickable containers (like project cards) need explicit roles and keyboard support to be truly accessible. Simply wrapping them in a link or adding a click listener is not enough for screen readers.
**Action:** Use `role="button"`, `tabindex="0"`, and `aria-labelledby` on the container. Ensure nested interactive elements are converted to non-interactive ones with `aria-hidden="true"` to avoid confusion. Implement "Enter" and "Space" key listeners for consistency with standard button behavior.
