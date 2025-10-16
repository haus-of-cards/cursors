// Utility to detect user accessibility preferences via CSS media queries 
export type AccessibilityEnv = {
  /** Whether user prefers reduced motion (e.g. OS animation disabled) */
  prefersReduced: boolean;
  /** Whether system is enforcing a high-contrast or forced-color mode */
  forcedColors: boolean;
  /** Whether the primary input device is touch or stylus */
  coarsePointer: boolean;
  /** Whether user has requested higher contrast visuals */
  prefersHighContrast: boolean;
  /** Whether user’s theme is dark mode */
  prefersDark: boolean;
};

export const detectAccessibilityEnv = (
  ignoreAccessibility = false
): AccessibilityEnv => {
  if (typeof window === "undefined") {
    return {
      prefersReduced: false,
      forcedColors: false,
      coarsePointer: false,
      prefersHighContrast: false,
      prefersDark: false,
    };
  }

  const mm = window.matchMedia.bind(window);

  const prefersReduced =
    !ignoreAccessibility && !!mm("(prefers-reduced-motion: reduce)").matches;
  const forcedColors =
    !ignoreAccessibility && !!mm("(forced-colors: active)").matches;
  const coarsePointer = !!mm("(any-pointer: coarse)").matches;
  const prefersHighContrast = !!mm("(prefers-contrast: more)").matches;
  const prefersDark = !!mm("(prefers-color-scheme: dark)").matches;

  return {
    prefersReduced,
    forcedColors,
    coarsePointer,
    prefersHighContrast,
    prefersDark,
  };
};
