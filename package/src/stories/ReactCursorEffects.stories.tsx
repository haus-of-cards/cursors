import type { Meta, StoryObj } from "@storybook/react";
import ReactCursor from "../component";

const meta: Meta<typeof ReactCursor> = {
  title: "ReactCursor/Effects",
  component: ReactCursor,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh", padding: "40px" }}>
        <Story />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <h1>Effect States Demo</h1>
          <p>
            Move your cursor around to see the custom cursor. Hover over
            interactive elements or click to see effects!
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <button
              style={{
                padding: "15px 30px",
                fontSize: "16px",
                cursor: "pointer",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Hover or Click Me
            </button>

            <a
              href="#"
              style={{
                fontSize: "18px",
                color: "#007bff",
                textDecoration: "underline",
              }}
            >
              Hover over this link
            </a>

            <input
              type="text"
              placeholder="Hover over this input"
              style={{
                padding: "12px",
                fontSize: "16px",
                border: "2px solid #ddd",
                borderRadius: "4px",
              }}
            />

            <button
              style={{
                padding: "15px 30px",
                fontSize: "16px",
                cursor: "pointer",
                background: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Another Button
            </button>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HoverScaleEffect: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "blue",
        stroke: "white",
        strokeSize: 2,
        size: { height: 20, width: 20 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        scale: 2, // Double size on hover
      },
    },
  },
};

export const HoverColorChange: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "black",
        stroke: "white",
        strokeSize: 2,
        size: { height: 20, width: 20 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        fill: "red",
        stroke: "yellow",
        scale: 1.5,
      },
    },
  },
};

export const HoverSvgChange: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "black",
        stroke: "white",
        strokeSize: 2,
        size: { height: 20, width: 20 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        SVG: "cross",
        fill: "green",
        scale: 1.8,
      },
    },
  },
};

export const ClickEffect: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "purple",
        stroke: "white",
        strokeSize: 2,
        size: { height: 24, width: 24 },
      },
    ],
    showSystemCursor: false,
    effects: {
      click: {
        scale: 0.5, // Shrink on click
        fill: "orange",
      },
    },
  },
};

export const HoverAndClickEffects: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "black",
        stroke: "white",
        strokeSize: 2,
        size: { height: 20, width: 20 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        scale: 1.5,
        fill: "blue",
      },
      click: {
        scale: 0.8,
        fill: "red",
        SVG: "cross",
      },
    },
  },
};

export const ComplexEffect: Story = {
  args: {
    layers: [
      {
        SVG: "arrow",
        fill: "navy",
        stroke: "cyan",
        strokeSize: 3,
        size: { height: 30, width: 30 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        SVG: "square",
        fill: "gold",
        stroke: "purple",
        strokeSize: 5,
        scale: 2,
        opacity: 0.8,
      },
      click: {
        SVG: "cross",
        fill: "red",
        stroke: "black",
        scale: 0.6,
      },
    },
  },
};

export const SubtleScale: Story = {
  args: {
    layers: [
      {
        SVG: "circle",
        fill: "rgba(0, 0, 0, 0.8)",
        stroke: "white",
        strokeSize: 1,
        size: { height: 16, width: 16 },
      },
    ],
    showSystemCursor: false,
    effects: {
      hover: {
        scale: 1.25,
      },
      click: {
        scale: 0.9,
      },
    },
  },
};
