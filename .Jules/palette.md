## 2026-05-20 - Accessible Interactive Cards and Real-time Slider Feedback

**Learning:** Large interactive containers (cards) that trigger navigation should have `role="link"` and explicit keyboard listeners for both 'Enter' and 'Space' to be fully accessible. Any nested buttons should be aria-hidden to avoid nested focus. Additionally, range sliders significantly benefit from immediate numerical feedback to improve user confidence in precise adjustments.

**Action:** When implementing clickable cards, use `role="link"`, `tabindex="0"`, and `aria-labelledby`. Always pair range sliders with a dynamic value display.
