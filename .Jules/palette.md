## 2024-05-24 - [Semantic Navigation vs JS Triggers]
**Learning:** In projects where interactivity is prioritized (like p5.js collections), developers often use JS event listeners on non-semantic elements (like divs or buttons) for navigation. Converting these to semantic `<a>` tags not only improves accessibility but also simplifies the codebase by allowing the removal of manual routing logic.
**Action:** Always check if a JS-triggered navigation can be replaced by a native anchor tag, especially when it targets a static HTML file.

**Learning:** When converting a large clickable container to an `<a>` tag, any nested interactive elements (like `<button>`) must be changed to non-interactive elements (like `<span>`) to maintain valid HTML and avoid confusing assistive technologies.
**Action:** Use `<span>` with the original class name to preserve visual styling while ensuring the outer link remains the sole primary interaction.
