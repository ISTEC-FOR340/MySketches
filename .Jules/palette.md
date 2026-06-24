## 2024-05-15 - Semantic Navigation & Focus States

**Learning:** When refactoring interactive containers (like cards) that were previously driven by JS `onclick` to semantic `<a>` tags, any nested interactive elements (like `<button>`) must be converted to non-interactive elements (like `<span>`) to avoid nested interactive content which is invalid HTML and confuses screen readers.

**Action:** Always check for nested buttons/links when converting a wrapper to a semantic link.

**Learning:** For dark-themed, glassmorphic interfaces, using `box-shadow` for `:focus-visible` provides a cleaner, more integrated focus indicator than the default browser outline, especially when the element already has a large `border-radius`.

**Action:** Use `box-shadow: 0 0 0 2px var(--accent-color)` and `outline: none` for a custom, high-visibility focus state.
