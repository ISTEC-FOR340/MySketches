# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Semantic Navigation and Focus States
**Learning:** Using non-semantic `div` elements with `onclick` handlers for navigation prevents screen readers from identifying interactive elements and breaks native browser behaviors (like middle-click to open in new tab). Additionally, missing `:focus-visible` states make keyboard navigation nearly impossible as users cannot tell which element is active.
**Action:** Always prioritize semantic `<a>` tags for navigation and ensure every interactive element has a clear, high-contrast `:focus-visible` state that mirrors its hover affordances.
