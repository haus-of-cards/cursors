import { CSSProperties, useEffect, useRef, useMemo } from "react";
import { CursorLayer } from "../types";
import { resolveSvg, svgStylesMap } from "../utils";


// Default Cursor Layer Options
const defaultSvgOptions: Required<Omit<CursorLayer, "hotspot">> = {
  SVG: svgStylesMap.default,
  fill: "black",
  stroke: "white",
  strokeSize: 10,
  opacity: 1,
  size: { height: 100, width: 100 },
  delay: 0,
};
// Accessibility Detection 
const detectAccessibilityEnv = (ignoreAccessibility = false) => {
  if (typeof window === "undefined") {
    return {
      prefersReduced: false,
      forcedColors: false,
      prefersHighContrast: false,
      coarsePointer: false,

    };
  }

  const mm = window.matchMedia.bind(window);

  const prefersReduced =
    !ignoreAccessibility && mm("(prefers-reduced-motion: reduce)").matches;
  const forcedColors =
    !ignoreAccessibility && mm("(forced-colors: active)").matches;
  const prefersHighContrast =
    !ignoreAccessibility && mm("(prefers-contrast: more)").matches;
  const coarsePointer = mm("(any-pointer: coarse)").matches;

  return {
    prefersReduced,
    forcedColors,
    prefersHighContrast,
    coarsePointer,
  };
};

// Component Props
export type Props = {
  enable?: boolean; // enable/disable the entire component
  showSystemCursor?: boolean; // show/hide the system cursor
  layers?: CursorLayer[]; // defines each cursor draw layer
  mixBlendMode?: CSSProperties["mixBlendMode"]; // CSS mix-blend-mode property to apply to the entire component
  zIndex?: number; // custom-define the z-index of the cursor (default is max z-index value)
  ignoreAccessibility?: boolean; // ignore system accessibility setting
};

// Component
const ReactCursor = ({
  enable = true,
  layers = [
    {
      fill: "black",
      stroke: "white",
      strokeSize: 10,
      size: { height: 20, width: 20 },
    },
  ],
  showSystemCursor = true,
  mixBlendMode = "normal",
  zIndex = 2147483647,
  ignoreAccessibility = false,
}: Props) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const layerPositions = useRef(layers.map(() => ({ x: 0, y: 0 })));
  const prevTime = useRef(performance.now());
  const animationFrame = useRef<number | null>(null);

  // Inline accessibility detection (Phase 2: not yet enforced)
  const env = useMemo(
    () => detectAccessibilityEnv(ignoreAccessibility),
    [ignoreAccessibility]
  );

  // Precompute layer sizes for centering
  const layerSizes = layers.map(
    (layer) => layer.size ?? defaultSvgOptions.size
  );

  // Hide system cursor
  useEffect(() => {
    if (!enable || showSystemCursor) return;

    const originalRootCursor = document.documentElement.style.cursor;
    const originalBodyCursor = document.body.style.cursor;

    document.body.style.setProperty("cursor", "none", "important");
    document.documentElement.style.setProperty("cursor", "none", "important");

    return () => {
      document.documentElement.style.setProperty("cursor", originalRootCursor);
      document.body.style.setProperty("cursor", originalBodyCursor);
    };
  }, [enable, showSystemCursor]);

  // Position and animation of cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!cursorRef.current) return;

      const children = cursorRef.current.children;
      const now = performance.now();
      const delta = now - prevTime.current;
      prevTime.current = now;

      layers.forEach((layer, i) => {
        const pos = layerPositions.current[i];
        const delayMs = layer.delay ?? defaultSvgOptions.delay;
        const size = layerSizes[i];

        // update position coordinates
        const smoothing =
          delayMs > 0 ? Math.exp(-delta / delayMs) : 0; // exponential smoothing based on ms delay (+ avoid NaN)
        pos.x = pos.x * smoothing + targetPosition.current.x * (1 - smoothing);
        pos.y = pos.y * smoothing + targetPosition.current.y * (1 - smoothing);

        // apply transform directly to layer (i.e. move layer to the updated coordinates)
        // *note* - use translate3d, as it may be more likely to force GPU computation for optimal performance
        const layerEl = children[i] as HTMLElement;
        if (layer.hotspot) {
          // position layer according to supplied hotspot values
          layerEl.style.transform = `translate3d(
            ${pos.x - layer.hotspot.x}px, 
            ${pos.y - layer.hotspot.y}px, 0)`;
        } else {
          // otherwise, centre the hotspot
          layerEl.style.transform = `translate3d(
            ${pos.x - size.width / 2}px,
            ${pos.y - size.height / 2}px, 0)`;
        }
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [enable, layers]);

  // Skip rendering if disabled
  if (!enable) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex,
        mixBlendMode,
      }}
      aria-hidden="true"
      role="presentation"
    >
      {layers.map((layer, i) => {
        const SvgComponent = resolveSvg(layer.SVG);
        return (
          <SvgComponent
            key={`react-cursor-layer-${i}`}
            color={layer.fill ?? defaultSvgOptions.fill}
            stroke={layer.stroke ?? defaultSvgOptions.stroke}
            strokeWidth={layer.strokeSize ?? defaultSvgOptions.strokeSize}
            height={layer.size?.height ?? defaultSvgOptions.size.height}
            width={layer.size?.width ?? defaultSvgOptions.size.width}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: layer.opacity ?? defaultSvgOptions.opacity,
              zIndex: zIndex - i,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default ReactCursor;
