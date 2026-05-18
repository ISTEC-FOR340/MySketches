## 2026-05-18 - Accessible Card Navigation
**Learning:** For large interactive containers that trigger navigation, using `role="link"` with `tabindex="0"` and handling both 'Enter' and 'Space' keys provides a superior experience for keyboard users. Additionally, converting nested buttons to `aria-hidden` elements prevents "double-stop" confusion for screen readers while maintaining visual affordance.
**Action:** Always convert nested interactive elements within clickable cards to non-interactive, aria-hidden decorators, and use a high-contrast focus ring for `:focus-visible` states.
