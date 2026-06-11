# Palette Journal - UX & Accessibility Learnings

## 2025-05-14 - Semantic Interactive Cards
**Learning:** Using non-semantic `div` elements with `onclick` for navigation prevents keyboard accessibility and confuses screen readers. Refactoring to semantic `<a>` tags provides native focus states and clearer intent.
**Action:** Always prefer semantic `<a>` tags for large clickable containers that trigger navigation, and ensure nested interactive elements are converted to non-interactive spans with `aria-hidden="true"`.
