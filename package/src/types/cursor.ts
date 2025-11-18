import { FC, SVGProps } from "react";

// Default/Fallback SVG Styles
export type SvgDefaultStyles = "arrow" | "circle" | "cross" | "square";

// Single Cursor Layer
export type CursorLayer = {
  SVG?: FC<SVGProps<SVGSVGElement>> | SvgDefaultStyles; // SVG to use (must supply SVGR)
  fill?: string; // fill colour (replaces fill=currentColor in SVG file)
  stroke?: string; // stroke colour (replaces stroke=currentStroke in SVG file)
  strokeSize?: number; // adjusts the stroke size of SVG
  opacity?: number; // opacity of the layer (0-1)
  size?: { height: number; width: number }; // 'px' height/width of the SVG
  preserveAspectRatio?: boolean; // allow the `size` prop to warp the aspect-ratio
  delay?: number; // amount of lag that the layer has to the actual system cursor position (0=none)
  hotspot?: { x: number; y: number }; // xy coordinate override for the "click" hotspot of the cursor layer (x:0, y:10 == 0px across, 10px down)
  effects?: CursorEffects; // effect states for hover and click
};

// Effect State - defines how cursor changes on interaction
export type CursorEffectState = {
  SVG?: FC<SVGProps<SVGSVGElement>> | SvgDefaultStyles; // SVG to use during effect
  fill?: string; // fill colour during effect
  stroke?: string; // stroke colour during effect
  strokeSize?: number; // stroke size during effect
  opacity?: number; // opacity during effect
  scale?: number; // scale multiplier (1 = normal, 2 = double size, 0.5 = half size)
  hotspot?: { x: number; y: number };
};

// Effect Configuration
export type CursorEffects = {
  hover?: CursorEffectState; // effect when hovering over interactive elements
  click?: CursorEffectState; // effect when clicking
};
