## 2025-05-14 - Semantic Navigation & Accessibility
**Learning:** Converting non-semantic interactive containers (divs with click listeners) to semantic `<a>` tags significantly improves accessibility and restores native browser functionality like "Open in new tab". When doing so, any nested interactive elements (like buttons) must be converted to non-interactive elements (like spans) to avoid invalid nested interactive content.
**Action:** Always prefer semantic `<a>` tags for navigation cards and ensure high-contrast `:focus-visible` states are implemented to support keyboard users.
