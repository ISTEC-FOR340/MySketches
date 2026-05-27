## 2026-05-27 - Card Navigation Accessibility
**Learning:** Large interactive cards that trigger navigation should use `role="link"` and be keyboard-accessible. Nested interactive elements (like buttons) inside these cards should be converted to non-interactive elements (like `span`) with `aria-hidden="true"` to prevent redundant tab stops and screen reader confusion.
**Action:** Always check for "cards as links" patterns and ensure they have `tabindex="0"`, appropriate ARIA roles, and both click and keyboard event handlers.
