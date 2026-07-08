# Palette's Journal - Critical UX Learnings

## 2025-05-14 - Initial Repository Review
**Learning:** The project uses non-semantic `div` elements with `onclick` listeners for navigation, which breaks standard browser behavior (like opening in a new tab) and accessibility (screen readers and keyboard navigation).
**Action:** Convert interactive containers to semantic `<a>` tags and ensure consistent `:focus-visible` styles across the application.
