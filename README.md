# 🖱️ @holmesdev/cursors

[![npm version](https://img.shields.io/npm/v/@holmesdev/cursors.svg)](https://www.npmjs.com/package/@holmesdev/cursors)
[![npm downloads](https://img.shields.io/npm/dm/@holmesdev/cursors.svg)](https://www.npmjs.com/package/@holmesdev/cursors)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@holmesdev/cursors?label=bundle%20size)](https://bundlephobia.com/package/@holmesdev/cursors)
[![license](https://img.shields.io/npm/l/@holmesdev/cursors)](LICENSE)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?logo=typescript)

**Fully customizable mouse cursor component for React — SVG-based and accessibility-first.**

## 📚 Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
  - [Global Options](#global-options)
  - [Layer Options](#layer-options)
- [Cursor Effects](#-cursor-effects)
- [Custom SVGs](#-custom-svgs)
- [Examples](#-examples)
- [Accessibility](#-accessibility)
- [About](##-about-haus-of-cards)
- [Contributing](#-contributing)
- [License](#-license)

## 📖 Overview

_**@holmesdev/cursors**_ provides a fully customizable cursor component that can be used within React.js applications. These multi-layered customizable cursors can be added to your React.js project to provide a cursor with features such as multiple-layers, built-in shapes, numerous configuration options, and accessibility support.

### Features

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

## 🛠️ Configuration

Options for a React Cursor are divided into 2 types:

- _[global](#global-options)_ - applies to the entire cursor component, or
- _[layer](#layer-options)_ - applies to each individual layer separately.

### Global Options

Global options are passed directly to the component through props, and apply to the entire component. For example:

```jsx
<ReactCursor enable={false} />
```

| Prop                   | Type                                                         | Default                                                                                 | Description                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `enable?`              | `boolean`                                                    | `true`                                                                                  | Enables or disables the cursor entirely.                                                                                                                                               |
| `showSystemCursor?`    | `boolean`                                                    | `true`                                                                                  | Shows or hides the system cursor.                                                                                                                                                      |
| `layers?`              | `CursorLayer[]` [_(refer to Layer Options)_](#layer-options) | `[{ fill: "black", stroke: "white", strokeSize: 10, size: { width: 20, height: 20 } }]` | Defines each cursor layer.                                                                                                                                                             |
| `mixBlendMode?`        | `CSSProperties["mixBlendMode"]`                              | `"normal"`                                                                              | Controls how the cursor blends with the background.                                                                                                                                    |
| `zIndex?`              | `number`                                                     | `2147483647`                                                                            | Cursor z-index. Default is max value.                                                                                                                                                  |
| `ignoreAccessibility?` | `boolean`                                                    | `false`                                                                                 | Bypass system accessibility detection. By default, if a user has any accessibility flags set in their browser, the custom cursor will disable and the system cursor will show instead. |
| `hoverSelector?`       | `string`                                                     | `"a, button, [role='button'], input, textarea, select"`                                 | CSS selector that triggers hover effects.                                                                                                                                              |

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

| Prop                   | Type                                                           | Default                       | Description                                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SVG?`                 | `SvgDefaultStyles` \| `FC<SVGProps<SVGSVGElement>>`            | `"circle"`                    | Defines which SVG image to use for the cursor layer. SvgDefaultStyles include: `"circle"`, `"cross"`, `"square"`, `"arrow"`. To supply your own SVG, you should utilise [SVGR](https://react-svgr.com/) within your application. [See more here](#custom-svgs) |
| `fill?`                | `string`                                                       | `"black"`                     | Replaces the `fill=currentColor` within layer's SVG file. Can supply any valid CSS color, such as `"black"`, `"#000"`, `"rgb(0,0,0)"`, etc.                                                                                                                    |
| `stroke?`              | `string`                                                       | `"white"`                     | Replaces the `stroke=currentStroke` within layer's SVG file.                                                                                                                                                                                                   |
| `strokeSize?`          | `number`                                                       | `10`                          | Adjusts the stroke size of the layer's SVG.                                                                                                                                                                                                                    |
| `opacity?`             | `number`                                                       | `1`                           | Adjust the opacity of the layer.                                                                                                                                                                                                                               |
| `size?`                | `{ height: number, width: number }`                            | `{ height: 25, width: 25 }`   | Adjust the `px` height/width of the SVG. Aspect-ratio is retained by default, so the smallest value will usually be used for the size.                                                                                                                         |
| `preserveAspectRatio?` | `boolean`                                                      | `true`                        | Preserves the aspect-ratio of the SVG layer, regardless of the `size` attribute provided. If `false`, the SVG will stretch/scale exactly as specified by the `size` attribute.                                                                                 |
| `delay?`               | `number`                                                       | `0`                           | The amount of "lag" that the layer will have, with respect to the actual system cursor position. Higher number = greater lag.                                                                                                                                  |
| `effects?`             | `CursorEffects` [_(refer to Cursor Effects)_](#cursor-effects) | `undefined`                   | Defines hover and click effect states.                                                                                                                                                                                                                         |
| `hotspot?`             | `{ x: number, y: number }`                                     | `{ x: width/2, y: height/2 }` | X/Y coordinate override for where the actual "click" hotspot of the cursor layer is. By default, the click is centered within the SVG image. If top-left is required, for example when using an "arrow" style SVG, the hotspot should be set at `x=0` & `y=0`. |

## ✨ Cursor Effects

Cursor effects allow you to dynamically change the cursor's appearance when users interact with certain elements. Effects are applied per-layer.

### Effect Types

- **`hover`** - Triggered when the mouse hovers over interactive elements (defined by `hoverSelector`)
- **`click`** - Triggered when the user presses down the mouse button (released on mouse up)

**\*Note:** `click` effects take precedence over `hover` effects when both are active.\*

### Effect Properties

Each effect (`hover` or `click`) accepts the following properties:

| Property      | Type                                                | Description                                                                                                                                                                   |
| ------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SVG?`        | `SvgDefaultStyles` \| `FC<SVGProps<SVGSVGElement>>` | Changes the SVG shape during the effect. Can use built-in shapes (`"circle"`, `"cross"`, `"square"`, `"arrow"`) or custom SVG component.                                      |
| `fill?`       | `string`                                            | Changes the fill color during the effect.                                                                                                                                     |
| `stroke?`     | `string`                                            | Changes the stroke color during the effect.                                                                                                                                   |
| `strokeSize?` | `number`                                            | Changes the stroke size during the effect.                                                                                                                                    |
| `opacity?`    | `number`                                            | Changes the opacity (0-1) during the effect.                                                                                                                                  |
| `scale?`      | `number`                                            | Scales the cursor size (1 = normal, 2 = double size, 0.5 = half size). Multiplies the layer's base size.                                                                      |
| `hotspot?`    | `{ x: number, y: number }`                          | Overrides the X/Y coordinates for the SVGs click location. This is useful when changing to an SVG that uses a different click point (e.g. changing from "circle" to "arrow"). |

### Customizing Hover Targets

By default, hover effects trigger on interactive elements: `"a, button, [role='button'], input, textarea, select"`. You can customize this with the `hoverSelector` prop:

```jsx
<ReactCursor
  hoverSelector=".custom-hover, [data-interactive]" // Custom CSS selector
/>
```

## 🖼️ Custom SVGs

The cursor component comes with preset SVGs like `"circle"`, `"cross"`, `"square"`, and `"arrow"`.

If you want to use a custom SVG, that’s also supported. However, the component does not accept raw SVG files directly. Instead, the SVG must be converted into a React functional component. The recommended and standard way is to utilise [SVGR](https://react-svgr.com/) within your project.

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
> - Colors: Use `fill="currentColor"` and `stroke="currentStroke"` for dynamic colors. This allows the cursor component’s `fill` and `stroke` props to control the appearance.
>   - ⚠️ If you hard-code colors like `fill="red"`, the SVG will always display in red, ignoring the component’s props.

## 📝 Examples

- Multiple examples have been pre-made and can [found here](https://github.com/haus-of-cards/cursors/tree/main/examples)
- These example can be viewed in realtime by accessing the **examples** section of [our website](https://haus-of-cards.github.io/cursors/examples)
- Alternatively, you can demo the cursor configuration by accessing the **demo** section of [our website](https://haus-of-cards.github.io/cursors/demo)

## 🧠 Accessibility

By default, the component respects user system preferences and disables itself when:

- Reduced motion is requested
- High contrast or forced colors mode is active
- Coarse pointer (touch) is detected

You can override this by setting `ignoreAccessibility={true}`.

Refer to [ACCESSIBILITY](ACCESSIBILITY.md) for more details.

## ℹ️ About Haus of Cards

Haus of Cards is a student team who created the React Cursor project at Holmesglen Institute of TAFE in 2025 as part of their course.

## 🤝 Contributing

Refer to [CONTRIBUTING](contributing.md) for guidelines. Please also review our [CODE OF CONDUCT](CODE_OF_CONDUCT.md).

## 🧾 License

MIT © 2025 (refer to [LICENSE](LICENSE)).
