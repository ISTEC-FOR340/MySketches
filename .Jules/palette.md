## 2025-05-14 - Accessible Card Navigation Pattern
**Learning:** When using large cards as navigation links, converting the container to an `<a>` tag and changing nested interactive elements (like buttons) to non-interactive `<span>` elements provides the best balance of native accessibility, SEO, and visual consistency without creating invalid nested interactive elements.
**Action:** Use semantic `<a>` tags for navigation cards and ensure internal "buttons" are visual-only (`<span>`) while providing clear `:focus-visible` states on the parent container.
