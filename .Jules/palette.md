## 2025-05-15 - Enhancing Card Accessibility with Semantic Roles and Keyboard Support

**Learning:** When turning a layout container (like a card) into an interactive element using `role="link"` or `role="button"`, any pre-existing interactive elements inside (like buttons) must be converted to non-interactive spans with `aria-hidden="true"`. This prevents "nested interactive controls" which confuse screen readers and disrupt the tab order. Additionally, using `:focus-visible` with a high-contrast focus ring and an increased `z-index` ensures that focus indicators are never clipped by neighboring elements in a grid.

**Action:** Always audit the children of interactive containers for semantic elements like `<button>` or `<a>` and demote them to decorative spans when making the parent container the primary interaction point. Use `z-index` on `:focus-visible` to ensure focus rings are fully visible.
