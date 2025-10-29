import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import svgr from "@svgr/rollup";
import terser from "@rollup/plugin-terser";
import packageJson from "./package.json" with { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      svgr({
        dimensions: false, // allows SVGR to override height/width of SVG
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.stories.ts",
          "**/*.stories.tsx",
        ],
      }),
      terser({
        compress: {
          drop_console: true, // Keep console logs for user debugging
          dead_code: true, // Remove unreachable code
          drop_debugger: true, // Remove debugger statements
        },
        mangle: {
          reserved: ["ReactCursor"], // Don't mangle main export name
        },
        format: {
          comments: false, // Remove all comments
        },
      }),
    ],
    external: ["react", "react-dom"],
  },
];
