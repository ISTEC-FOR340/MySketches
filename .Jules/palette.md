## 2025-05-14 - Accessible Clickable Cards
**Learning:** When converting large containers (like cards) into interactive elements, use `role="link"` for navigation or `role="button"` for actions. Ensure `tabindex="0"` is present and handle both `Enter` and `Space` keys. Most importantly, convert any nested interactive elements (like buttons) into non-interactive `div`s with `aria-hidden="true"` to prevent "nested interactive control" accessibility errors.
**Action:** Use this pattern for any "clickable card" UI component to ensure both screen reader and keyboard accessibility.
