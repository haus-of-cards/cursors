import type { Meta, StoryObj } from "@storybook/react";
import ReactCursor from "../component";

const meta: Meta<typeof ReactCursor> = {
  title: "ReactCursor",
  component: ReactCursor,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => {
      // Mock matchMedia for accessibility flags
      const originalMatchMedia = window.matchMedia;
      const queries: Record<string, boolean> = {
        "(prefers-reduced-motion: reduce)":
          context.parameters?.prefersReduced || false,
        "(forced-colors: active)": context.parameters?.forcedColors || false,
        "(prefers-contrast: more)":
          context.parameters?.prefersHighContrast || false,
        "(any-pointer: coarse)": context.parameters?.coarsePointer || false,
      };
      window.matchMedia = (query: string) =>
        ({
          matches: queries[query] ?? false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }) as MediaQueryList;
      const result = Story();
      // Restore after story renders
      setTimeout(() => {
        window.matchMedia = originalMatchMedia;
      }, 0);
      return result;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    layers: [
      {
        fill: "black",
        stroke: "white",
        strokeSize: 10,
        size: { height: 20, width: 20 },
      },
    ],

    showSystemCursor: false,
  },
};

export const WithPrefersReduced: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    prefersReduced: true,
  },
};

export const WithForcedColors: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    forcedColors: true,
  },
};

export const WithPrefersHighContrast: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    prefersHighContrast: true,
  },
};

export const WithCoarsePointer: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    coarsePointer: true,
  },
};

export const IgnoreAccessibility: Story = {
  args: {
    ...Default.args,
    ignoreAccessibility: true,
    showSystemCursor: false,
    enable: true,
  },
  parameters: {
    prefersReduced: true, // Even with flag, should render since ignored
  },
};
