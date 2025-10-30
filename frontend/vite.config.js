import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    svgr({
      dimensions: false, // allows SVGR to override height/width of SVG
      include: "**/*.svg", // explicit path required, for correct SVGR importing with hot-reload
    }),
  ],
  base: "/cursors/", // required for GH pages deployment
  server: { port: 3000 },
  resolve: {
    alias: {
      "@holmesdev/cursors": path.resolve(
        __dirname,
        "../package/src/component/index.tsx"
      ),
    },
  },
});
