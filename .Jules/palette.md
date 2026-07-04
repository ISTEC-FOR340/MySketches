## 2025-05-14 - Semantic Navigation and Keyboard Discovery

**Learning:** Transitioning from JavaScript-driven `div` navigation to semantic `<a>` tags is a major win for both UX (enables native browser features like 'Open in New Tab') and accessibility (natural screen reader discovery). When doing this with card layouts that contain their own call-to-action buttons, those nested elements must be converted to non-interactive tags (like `<span>`) to maintain valid HTML and avoid confusing focus traps. Additionally, explicit `:focus-visible` styles using `box-shadow` are essential for glassmorphism designs where default browser outlines often have poor contrast.

**Action:** Always prefer semantic `<a>` tags for navigation containers and ensure a high-contrast `:focus-visible` state is implemented for all interactive elements in the design system.
