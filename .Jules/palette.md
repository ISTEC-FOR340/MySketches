# Palette's Journal - MySketches

## 2025-05-14 - Semantic Navigation Cards
**Learning:** Using non-semantic `div` elements with JavaScript `onclick` for navigation prevents keyboard accessibility and standard browser behaviors (like middle-click to open in new tab).
**Action:** Always prefer semantic `<a>` tags for interactive cards that lead to other pages. When nesting visual "buttons" inside these cards, convert them to `<span>` elements to maintain valid HTML and avoid nested interactive elements.
