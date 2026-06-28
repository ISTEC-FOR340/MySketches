## 2025-05-15 - [Semantic Card Navigation]
**Learning:** Converting `div` elements with `onclick` handlers to semantic `<a>` tags provides native keyboard focus, better SEO, and a more predictable user experience. To maintain valid HTML, internal interactive elements (like buttons) must be converted to non-interactive elements (like spans) when wrapped in an anchor.
**Action:** Always prefer semantic anchors for clickable containers that trigger navigation. Ensure nested interactive elements are refactored to avoid nested interactivity.

## 2025-05-15 - [Visible Focus for Glassmorphism]
**Learning:** Standard browser outlines can be hard to see on glassmorphism designs with dark backgrounds. A custom `box-shadow` that matches the theme's accent color provides a much clearer focus indicator.
**Action:** Use high-contrast custom focus indicators for dark-themed or glassmorphism UIs to ensure keyboard accessibility is not lost in the visual design.
