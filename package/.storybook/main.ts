import type { StorybookConfig } from "@storybook/react-vite";

import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(configVite) {
    return mergeConfig(configVite, {
      plugins: [
        svgr({
          include: "**/*.svg",
        }),
      ],
    });
  },
};
export default config;
