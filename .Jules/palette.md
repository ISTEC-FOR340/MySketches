## 2025-05-15 - Accessible Interactive Cards
**Learning:** When making large containers (like cards) interactive via `tabindex="0"`, use `role="link"` if they trigger navigation. Avoid nested interactive elements (like `<button>`) as they confuse screen readers and can lead to invalid HTML; instead, use a `div` with `aria-hidden="true"` to maintain the visual look of a button.
**Action:** Always convert nested buttons to decorative `div`s when their parent container is made focusable and given an interactive role.
