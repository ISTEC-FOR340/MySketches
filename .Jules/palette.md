## 2026-06-30 - [Semantic Navigation & Focus Indication]
**Learning:** Using semantic `<a>` tags for large interactive cards instead of `div` with `onclick` provides native accessibility (keyboard navigation, history) and simplifies code by removing redundant JS. Matching the HTML `lang` attribute to the actual content language (English) is critical for screen readers, even if the target audience is localized.
**Action:** Prioritize refactoring non-semantic interactive containers to `<a>` or `<button>` and ensure `:focus-visible` states mirror `:hover` affordances.
