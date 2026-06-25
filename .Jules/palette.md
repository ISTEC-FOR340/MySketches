## 2024-06-25 - [Semantic Navigation & High-Contrast Focus]
**Learning:** For interactive card components in dark-themed glassmorphism designs, using semantic `<a>` tags instead of `div` with `onclick` improves both native accessibility and SEO. Focus states should mirror hover transforms (like `translateY`) to provide consistent feedback across input methods.
**Action:** Always prefer `<a>` tags for large clickable areas and ensure `:focus-visible` triggers the same visual affordances as `:hover`.
