# React Cursors

## Overview


### Customisable Cursors for React.js
React Cursors are customisable cursors that can be used in React.js applications. These multi-layered customisable cursors can be added to your React.js project to provide a cursor with features such as multiple-layers, built-in shapes, numerous configuration options, and accessibility support.

### Cursor Features/Functionality
React Cursors have the following features:
- Built in shapes with the ability to add your own SVGs
- Multiple cursor layers each with their own customisable shapes, colours, sizes and more
- Multiple effects such as hover, hotspot and more
- Support for a range of accessibility options 


## Getting Started


### Installing React Cursor
React Cursors requires [Node.js](https://nodejs.org/) v19+ (??***) to run .

Install the Node package into your frontend React.js application.

```sh
npm install @holmesdev/cursor
```

Next use  React Cursor into the topmost component of your application. 

First import it into the component:
```sh
import ReactCursor from "@holmesdev/cursors";
```

Then render it and make it available: 
```sh
<ReactCursor enable={true} />
```

### Configuring your Cursor using the Demo Page
See the features page at our [website](https://haus-of-cards.github.io/cursors) to explore cursor functionality using our configurable Demo Cursor. Select cursor options for the Demo Cursor and then enable the Testbed to try them out. When you are satisfied with your cursor design you can copy the generated code into your React.js application and start using it.


## Cursor Configuration

### Example React Cursor Component
A React Cursor component has a number of Props that are used to configure it. Here is a simple example that uses a single layer:
```
  <ReactCursor 
    enable={true}
    layers={ [ { fill: "red", stroke: "green", size: { height: 30, width: 30 } } ] } 
    zIndex={10}  
    showSystemCursor={true} 
  />
``` 
Options for a React Cursor are divided into main options which apply to the whole cursor and layer options which apply to each individual layer.

### Main Options
React Cursors have the following Props to configure the cursor:
- enable: A boolean value to switch the cursor on and off.
- showSystemCursor: A boolean value that determines whether the system cursor is show toegether with the React Cursor.
- layers: This takes an array of objects representing the options for Cursor layers. See Layer Options below.
- mixBlendMode: CSSProperties["mixBlendMode"]; // CSS mix-blend-mode property to apply to the entire component ****
- zIndex: A number that uses the CSS z-index property specifies the stack order of the React Cursor.
- ignoreAccessibility: A boolean value that determines whether or not accessibility settings are ignored. ***
- effects: CursorEffects; // effect states for hover and click ***
- hoverSelector?: string; // CSS selector for elements that trigger hover effect (default: 'a, button, [role="button"]') ***


### Layer Options
React Cursors have one or more layers with their own set of options. The following Props are used to configure the options for each layer:
- SVG?: FC<SVGProps<SVGSVGElement>> | SvgDefaultStyles; // SVG to use (must supply SVGR) *** A string with one of the four basic shapes provided with React Cursor: "arrow" | "circle" | "cross" | "square".
- fill: A string used to specify the fill colour of the layer shape. 
- stroke: A string used to specify the stroke  colour of the layer shape. 
- strokeSize: A number used to specify the stroke size of the SVG
- opacity: A number used to specify the opacity of the layer (0-1)
- size: An object of the form { height: number; width: number } that specifies the height/width of the shape in pixels.
- delay: A number that specifies the amount of lag that the layer has to the actual system cursor position (0=none).
- hotspot: An object of the form { x: number; y: number } used to override the "click" hotspot of the cursor layer. For example {x:0, y:10} corresponds to a shift of 0px across and 10px down.


## Further Information

### Licencing
MIT Licencing is used.

### About Haus-of-Cards
Haus-of-Cards is a student team who created the React Cursor project at Holmesglen Institute of TAFE in 2025 as part of their course.
