## 2025-05-14 - Accessible focus rings on glassmorphism cards
**Learning:** For dark-themed glassmorphism cards with `overflow: hidden` (often used to clip internal gradients), custom focus rings implemented via `box-shadow` are frequently clipped and invisible. High-contrast focus rings (e.g., 2px accent color) are essential for visibility on dark backgrounds.
**Action:** Switch to `overflow: visible` for interactive cards and use pseudo-elements (like `::after` with `z-index: -1`) to handle internal clipping or background gradients without obscuring the focus indicator.
