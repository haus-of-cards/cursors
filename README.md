# 🖱️ Cursors

**Fully customizable mouse cursor component for React — SVG-based and accessibility-first.**

## 📚 Contents

- [Overview](#📖-overview)
  - [Features](#✨-features)
- [Getting Started](#🚀-getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Example](#🎨-example-custom-layers-and-effects)
- [Configuration](#🛠️-configuration)
  - [Global Options](#global-options)
  - [Layer Options](#layer-options)
  - [Custom SVGs](#custom-svgs)
  - [Demo Testbed](#demo-testbed)
- [About](#ℹ️-about-haus-of-cards)
- [Accessibility](#🧠-accessibility)
- [Contributing](#🤝-contributiing)
- [License](#🧾-license)

## 📖 Overview

_**@holmesdev/cursors**_ provides a fully customizable cursor component that can be used within React.js applications. These multi-layered customizable cursors can be added to your React.js project to provide a cursor with features such as multiple-layers, built-in shapes, numerous configuration options, and accessibility support.

### ✨ Features

- 🎨 **Customizable SVG layers** — create multi-layer cursors with different fills, strokes, and delays.
- ⚙️ **Dynamic hover and click effects** — smoothly scale, recolor, or swap SVGs based on interactions.
- 🧩 **Accessibility-first** — automatically disables for high contrast, reduced motion, or touch environments.
- 🧍‍♂️ **Optional system cursor hiding** — fully replace or blend with the native cursor.

## 🚀 Getting Started

### Installation

```bash
npm install @holmesdev/cursors
# or
yarn add @holmesdev/cursors
```

### Usage

```jsx
import ReactCursor from "@holmesdev/cursors";

function App() {
  return (
    <>
      {/* Import component into your top-level component */}
      <ReactCursor />

      <h1>Hover around the page!</h1>
    </>
  );
}

export default App;
```

### 🎨 Example: Custom Layers and Effects

```jsx
import ReactCursor from "@holmesdev/cursors";

export default function Example() {
  return (
    <ReactCursor
      showSystemCursor={false} // hide the system cursor
      layers={[
        // Define options for layer #1
        {
          SVG: "arrow",
          fill: "#ff0000",
          stroke: "#000000",
          strokeSize: 2,
          size: { width: 10, height: 10 },
          hotspot: { x: 0, y: 0 },
        },
        // Define options for layer #2
        {
          SVG: "circle",
          fill: "#00ffff",
          stroke: "#ffffff",
          strokeSize: 5,
          size: { width: 50, height: 50 },
          opacity: 0.5,
          delay: 100,
        },
        // ...define options for other layers, as required
      ]}
      effects={{
        // Define global hover effect
        hover: {
          SVG: "cross",
          fill: "#00ffff",
        },
        // Define global click effect
        click: {
          scale: 1.5,
          fill: "#ffff00",
        },
      }}
    />
  );
}
```

## 🛠️ Configuration

Options for a React Cursor are divided into 2 types:

- _[global](#global-options)_ - applies to the entire cursor component, or
- _[layer](#layer-options)_ - applies to each individual layer separately.

### Global Options

Global options are passed directly to the component through props, and apply to the entire component. For example:

```jsx
<ReactCursor enable={false} />
```

| Prop                   | Type                                                           | Default                                                                                 | Description                                                                                                                                                                            |
| ---------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable?`              | `boolean`                                                      | `true`                                                                                  | Enables or disables the cursor entirely.                                                                                                                                               |
| `showSystemCursor?`    | `boolean`                                                      | `true`                                                                                  | Shows or hides the system cursor.                                                                                                                                                      |
| `layers?`              | `CursorLayer[]` [_(refer to Layer Options)_](#layer-options)   | `[{ fill: "black", stroke: "white", strokeSize: 10, size: { width: 20, height: 20 } }]` | Defines each cursor layer.                                                                                                                                                             |
| `mixBlendMode?`        | `CSSProperties["mixBlendMode"]`                                | `"normal"`                                                                              | Controls how the cursor blends with the background.                                                                                                                                    |
| `zIndex?`              | `number`                                                       | `2147483647`                                                                            | Cursor z-index. Default is max value.                                                                                                                                                  |
| `ignoreAccessibility?` | `boolean`                                                      | `false`                                                                                 | Bypass system accessibility detection. By default, if a user has any accessibility flags set in their browser, the custom cursor will disable and the system cursor will show instead. |
| `effects?`             | `CursorEffects` [_(refer to Cursor Effects)_](#cursor-effects) | `undefined`                                                                             | Defines hover and click effect states.                                                                                                                                                 |
| `hoverSelector?`       | `string`                                                       | `"a, button, [role='button'], input, textarea, select"`                                 | CSS selector that triggers hover effects.                                                                                                                                              |

### Layer Options

React Cursors have one or more layers with their own set of options. For example:

```jsx
<ReactCursor
  layers={[
    {
      // Layer options here... e.g.
      SVG: "circle",
    },
  ]}
/>
```

| Prop                   | Type                                                | Default                       | Description                                                                                                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SVG?`                 | `SvgDefaultStyles` \| `FC<SVGProps<SVGSVGElement>>` | `"circle"`                    | Defines which SVG image to use for the cursor layer. SvgDefaultStyles include: `"circle"`, `"cross"`, `"square"`, `"arrow"`. To supply your own SVG, you should utilise [SVGR](https://react-svgr.com/) within your application. [See more here](#custom-svgs) |
| `fill?`                | `string`                                            | `"black"`                     | Replaces the `fill=currentColor` within layer's SVG file. Can supply any valid CSS color, such as `"black"`, `"#000"`, `"rgb(0,0,0)"`, etc.                                                                                                                    |
| `stroke?`              | `string`                                            | `"white"`                     | Replaces the `stroke=currentStroke` within layer's SVG file.                                                                                                                                                                                                   |
| `strokeSize?`          | `number`                                            | `10`                          | Adjusts the stroke size of the layer's SVG.                                                                                                                                                                                                                    |
| `opacity?`             | `number`                                            | `1`                           | Adjust the opacity of the layer.                                                                                                                                                                                                                               |
| `size?`                | `{ height: number, width: number }`                 | `{ height: 25, width: 25 }`   | Adjust the `px` height/width of the SVG. Aspect-ratio is retained by default, so the smallest value will usually be used for the size.                                                                                                                         |
| `preserveAspectRatio?` | `boolean`                                           | `true`                        | Preserves the aspect-ratio of the SVG layer, regardless of the `size` attribute provided. If `false`, the SVG will stretch/scale exactly as specified by the `size` attribute.                                                                                 |
| `delay?`               | `number`                                            | `0`                           | The amount of "lag" that the layer will have, with respect to the actual system cursor position. Higher number = greater lag.                                                                                                                                  |
| `hotspot?`             | `{ x: number, y: number }`                          | `{ x: width/2, y: height/2 }` | X/Y coordinate override for where the actual "click" hotspot of the cursor layer is. By default, the click is centered within the SVG image. If top-left is required, for example when using an "arrow" style SVG, the hotspot should be set at `x=0` & `y=0`. |

### Cursor Effects

Example:

```jsx
{
  hover: {
    scale: 1.5,
  }
}
```

### Custom SVGs

The cursor component comes with preset SVGs like "circle", "cross", "square", and "arrow".

If you want to use a custom SVG, that’s also supported. However, the component does not accept raw SVG files directly. Instead, the SVG must be converted into a React component, for example using [SVGR](https://react-svgr.com/).

For instance, with Vite:

```bash
npm install --save-dev vite-plugin-svgr
```

```js
// vite.config.js
plugins: [ svgr() ],
```

```jsx
import MyCustomSVG from "/path/to/file.svg"

export default function Example() {
  return (
    <ReactCursor layers={[
      {
        SVG: MyCustomSVG, // can now fully-customize your SVG through the cursor component
        fill: "red",
        stroke: "blue",
      }
    ]}>
  );
```

> **NOTE**
>
> To make your SVG fully customizable, avoid hard-coding values. Hard-coded values will always take precedence over the cursor component’s props.
>
> For example, within your actual `.svg` file:
>
> - Height and Width: Omit these in the SVG. The cursor component’s `size` prop will control the dimensions.
> - Colors: Use `fill="currentColor"` and `stroke="currentStroke"` for dynamic colors. This allows the cursor component’s fill and stroke props to control the appearance.
>   - ⚠️ If you hard-code colors like `fill="red"`, the SVG will always display in red, ignoring the component’s props.

### Demo Testbed

You can also explore the live cursor functionality on our website via the [Demo Cursor Testbed](https://haus-of-cards.github.io/cursors).

1. Select your desired cursor options.
2. Enable the Testbed to see them in action.
3. Once you’re happy with your design, copy the generated code directly into your React.js application to start using it.

## ℹ️ About Haus of Cards

Haus of Cards is a student team who created the React Cursor project at Holmesglen Institute of TAFE in 2025 as part of their course.

## 🧠 Accessibility

By default, the component respects user system preferences and disables itself when:

- Reduced motion is requested
- High contrast or forced colors mode is active
- Coarse pointer (touch) is detected

You can override this by setting `ignoreAccessibility={true}`.

Refer to [ACCESSIBILITY](ACCESSIBILITY.md) for more details.

## 🤝 Contributiing

Refer to [CONTRIBUTING](CONTRIBUTING.MD) for guidelines.

## 🧾 License

MIT © 2025 (refer to [LICENSE](LICENSE)).
