# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Accessible Interactive Cards
**Learning:** For large interactive containers that trigger navigation, using `role="link"` and `tabindex="0"` on the container, combined with keyboard event listeners (Enter/Space), provides a better experience than just having a small link inside. However, any nested interactive elements (like buttons) must be converted to non-interactive elements (like `<span>` with `aria-hidden="true"`) to avoid "interactive element inside another" accessibility errors.
**Action:** Always convert nested buttons to decorative elements when making a parent container the primary link, and ensure `:focus-visible` styles are high-contrast and not obscured by neighboring elements (using `z-index`).
