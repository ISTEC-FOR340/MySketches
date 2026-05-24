## 2025-05-15 - Accessible Interactive Cards
**Learning:** When making large containers (like cards) interactive, using `role="link"` and `tabindex="0"` is essential for keyboard users. To avoid confusing screen readers, any nested interactive elements (like "Open" buttons) should be converted to non-interactive elements (like `<span>`) with `aria-hidden="true"`, as the entire card now handles the action.
**Action:** Always check for nested interactive elements when expanding a hit area, and ensure both 'Enter' and 'Space' (with `preventDefault`) are handled in JavaScript.

## 2025-05-15 - Focus Visibility in Dark Glassmorphism
**Learning:** Standard focus outlines often look poor or are invisible on dark, blurred glassmorphism backgrounds. A `box-shadow` based focus ring combined with an increased `z-index` ensures the focus indicator is clearly visible and not clipped or obscured by neighboring cards in a grid.
**Action:** Apply `box-shadow: 0 0 0 3px var(--accent-color)` and `z-index: 10` (or higher than peers) on `:focus-visible` for grid-based card layouts.
