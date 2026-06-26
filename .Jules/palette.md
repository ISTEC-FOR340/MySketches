# Palette's Journal - MySketches

## 2025-05-15 - Semantic navigation for glassmorphism cards
**Learning:** In a glassmorphism design with cards that act as navigation links, using semantic `<a>` tags instead of `div` with `onclick` handlers is crucial for accessibility. To ensure a clear `:focus-visible` state without clipping the focus ring, the card must have `overflow: visible`. If background clipping was used to contain child elements, consider moving the background styling to a pseudo-element with a lower `z-index`.
**Action:** Always prefer `<a>` tags for navigation cards. Convert nested `<button>` elements to `<span>` to maintain valid HTML (no nested interactive elements) while preserving the visual CTA.

## 2025-05-15 - Global accessibility consistency
**Learning:** For educational repositories (like ISTEC), maintaining consistent language metadata (`lang="es"`) and semantic navigation patterns across all sub-pages is as important as the primary landing page.
**Action:** Audit subdirectories for redundant JavaScript-based navigation and incorrect `lang` attributes when refactoring the main entry point.
