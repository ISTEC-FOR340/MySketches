## 2024-05-24 - Semantic Navigation & Focus Visibility
**Learning:** Converting non-semantic interactive containers (divs with onclick) to semantic <a> tags requires specific CSS adjustments to maintain visual fidelity: `text-decoration: none` to prevent default underlines, and `overflow: visible` to ensure custom focus indicators (like box-shadow rings) are not clipped by glassmorphism containers.
**Action:** When refactoring to semantic links, explicitly audit overflow properties and link decorations to ensure accessibility enhancements don't break the intended aesthetic.
