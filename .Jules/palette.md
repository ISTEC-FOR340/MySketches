## 2026-06-07 - Semantic Cards and Keyboard Navigation
**Learning:** Converting non-semantic interactive containers (like divs with onclick) to semantic tags (like <a>) not only improves accessibility but also simplifies the codebase by leveraging native browser behaviors. Adding a skip link and explicit :focus-visible states provides a much better experience for power users and those relying on assistive technology in a dark-themed glassmorphism UI.

**Action:** Always prefer semantic <a> or <button> tags for interactive elements and ensure nested interactive elements are handled (e.g., converting inner buttons to decorative spans) to avoid accessibility tree conflicts.
