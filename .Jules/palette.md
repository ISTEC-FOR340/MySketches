# Palette Journal

Critical UX/accessibility learnings for MySketches.

## 2026-05-25 - Card-based Navigation Accessibility

**Learning:** When using large interactive containers (like cards) for navigation, adding `role="link"` and `tabindex="0"` is essential, but any nested interactive elements (like `<button>`) should be converted to non-interactive elements (like `<span>` with `aria-hidden="true"`) to avoid confusing screen reader users with nested interactive points.

**Action:** Always audit large clickable cards for nested buttons and ensure both 'Enter' and 'Space' keyboard events are handled for navigation.
