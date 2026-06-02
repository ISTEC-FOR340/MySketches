## 2025-05-14 - [High-Contrast Focus Rings for Glassmorphism Cards]
**Learning:** For dark-themed glassmorphism cards, using a high-contrast focus ring (e.g., `box-shadow: 0 0 0 2px var(--accent-color)`) combined with a higher `z-index` (e.g., `z-index: 10`) and `overflow: visible` (or ensuring enough gap) provides significantly better accessibility and visibility by preventing the ring from being obscured or clipped by neighboring elements.
**Action:** Always combine focus rings with `z-index` elevations on interactive cards in grid layouts to ensure the focus state is unmistakable.
