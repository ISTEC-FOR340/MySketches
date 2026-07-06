## 2025-07-06 - Semantic Navigation and Keyboard Focus

**Learning:** Replacing JavaScript-driven navigation (`div` with `onclick`) with semantic `<a>` tags not only improves screen reader compatibility but also enables native browser behaviors like opening in new tabs. Pairing this with `:focus-visible` styles that mirror hover effects ensures a consistent and accessible experience for keyboard users.

**Action:** Always prefer semantic `<a>` tags for navigation containers. When converting containers to links, ensure nested interactive elements are changed to non-interactive spans to avoid invalid nested links, and apply `:focus-visible` to the container.
