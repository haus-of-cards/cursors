// Story file for Haus of Cards' ReactCursor component (in /component/index.tsx)

// Node imports
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite"; // Storybook

// Local imports
import ReactCursor from "../component/index"; // Our React component

// Note: Based this code on the Story for the Button component
const meta = {
  title: "Component/ReactCursor",
  component: ReactCursor, // Our React component which we are writing a story for
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  argTypes: {},
  args: {
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
    // Component Props
    enable: true,
    showSystemCursor: true,
    layers: [
      {
        fill: "black",
        stroke: "white",
        strokeSize: 10,
        size: { height: 20, width: 20 },
        hotspot: { x: 0, y: 0 },
      },
    ],
    mixBlendMode: "difference",
    zIndex: 2147483647,
  },
} satisfies Meta<typeof ReactCursor>;

// The default export metadata controls how Storybook lists your stories and provides information used by addons
export default meta;

// The named exports of a CSF file define your component’s stories
type Story = StoryObj<typeof meta>;

export const Arrow: Story = {
  args: {
    enable: true,
    showSystemCursor: true,
    mixBlendMode: "normal",

    layers: [
      {
        fill: "gold",
        stroke: "black",
        strokeSize: 10,

        size: {
          height: 20,
          width: 20,
        },

        hotspot: {
          x: 10,
          y: 10,
        },
      },
      {
        fill: "orange",
        stroke: "black",
        strokeSize: 4,

        size: {
          height: 50,
          width: 50,
        },

        delay: 70,
      },
    ],
  },
};
