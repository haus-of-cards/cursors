# Accessibility

We are committed to ensuring that our ReactCursor component is accessible to all users, including those with disabilities.

## Overview

The ReactCursor component is designed with accessibility as a core priority. By default, the component automatically detects and respects user accessibility preferences, disabling itself when it may interfere with assistive technologies or user experience preferences.

## Automatic Accessibility Detection

The component automatically disables itself when any of the following system preferences are detected:

### Reduced Motion (`prefers-reduced-motion: reduce`)

Users who have enabled reduced motion preferences in their operating system settings (to minimize motion-related distractions or vestibular disorders) will see the custom cursor automatically disabled, falling back to the native system cursor.

**Why this matters:** Custom cursors typically use animations and smooth transitions that can cause motion sensitivity issues for some users.

### Forced Colors Mode (`forced-colors: active`)

When forced colors mode is active (Windows High Contrast Mode or similar), the custom cursor is disabled to ensure compatibility with system-defined color schemes that users rely on for visibility.

**Why this matters:** Custom cursors may not respect high contrast themes, potentially making the cursor invisible or difficult to see against certain backgrounds.

### High Contrast (`prefers-contrast: more`)

Users who have requested higher contrast in their system settings will have the custom cursor disabled to prevent conflicts with their preferred display settings.

**Why this matters:** Custom cursors may use colors or opacities that don't meet high contrast requirements.

### Coarse Pointer / Touch Devices (`any-pointer: coarse`)

On touch-enabled devices (tablets, smartphones), the custom cursor is automatically disabled since these devices don't have a traditional pointer cursor.

**Why this matters:** Custom cursors are only relevant for devices with precise pointing devices (mice, trackpads).

## ARIA Attributes

The custom cursor element is marked with accessibility attributes to ensure it doesn't interfere with screen readers:

- `aria-hidden="true"` - Hides the cursor from assistive technologies
- `role="presentation"` - Indicates the element is purely decorative

This ensures that screen reader users won't encounter the cursor element during navigation, as it provides no meaningful semantic information.

## Overriding Accessibility Detection

While we strongly recommend respecting user preferences, there may be edge cases where you need to override the automatic detection. This can be done using the `ignoreAccessibility` prop:

```jsx
<ReactCursor ignoreAccessibility={true} />
```

⚠️ **Warning:** Use this prop with caution. Overriding accessibility preferences may create barriers for users with disabilities and goes against web accessibility best practices. Consider alternatives such as:

- Providing a user-controlled toggle to enable/disable the cursor
- Creating a more accessible cursor design that works with accessibility preferences
- Using the `enable` prop to conditionally render flagged content

## Best Practices

### 1. Always Test with Accessibility Tools

Test your implementation with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Browser developer tools accessibility panels
- Windows High Contrast Mode
- Reduced motion preferences enabled

### 2. Provide User Control

Consider implementing a user preference toggle that allows users to enable or disable the custom cursor:

```jsx
const [cursorEnabled, setCursorEnabled] = useState(true);

<ReactCursor 
  enable={cursorEnabled}
  // ... other props
/>
```

### 3. Maintain System Cursor Visibility

Unless you have a specific reason, keep `showSystemCursor={true}` (the default) to ensure users always have a visible cursor, even if the custom cursor fails to render.

### 4. Design Accessible Cursors

If creating custom SVG cursors:
- Ensure sufficient contrast against common backgrounds
- Keep cursor size reasonable (not too large or too small)
- Avoid overly complex animations that may cause motion sickness
- Test in high contrast mode even when ignoring accessibility flags

## WCAG Compliance

This component aims to support compliance with [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) guidelines:

- **2.3.3 Animation from Interactions (Level AAA)** - Automatically disabled when reduced motion is requested
- **1.4.11 Non-text Contrast (Level AA)** - Disabled in forced colors and high contrast modes
- **2.5.5 Target Size (Level AAA)** - Respects system cursor sizing in accessibility modes
- **4.1.2 Name, Role, Value (Level A)** - Uses proper ARIA attributes

## Browser Compatibility

The accessibility detection uses modern CSS media queries that are supported in:

- Chrome/Edge 76+
- Firefox 103+
- Safari 15.4+

For older browsers that don't support these media queries, the component will gracefully fall back to rendering normally (as the queries will not match).

## Testing Accessibility

The component includes comprehensive accessibility tests covering:
- Reduced motion detection
- Forced colors mode detection
- High contrast preference detection
- Coarse pointer (touch) detection
- Override functionality

See the test suite in `package/src/component/index.test.tsx` for implementation details.

## Resources

- [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [MDN: forced-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors)
- [MDN: prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)
- [MDN: any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM: Accessibility Resources](https://webaim.org/)

## Reporting Accessibility Issues

If you encounter accessibility issues with this component, please [open an issue](https://github.com/haus-of-cards/cursors/issues) with:
- Description of the accessibility barrier
- Steps to action
- Expected vs. actual behavior
- Browser and assistive technology information

We are committed to making this component accessible to all users.