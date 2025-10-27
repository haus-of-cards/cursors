import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import React from "react";

// Mock SVG imports with simple components
vi.mock("../svg/arrow.svg", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { ...props, "data-testid": "arrow-svg" }),
}));

vi.mock("../svg/circle.svg", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { ...props, "data-testid": "circle-svg" }),
}));

vi.mock("../svg/cross.svg", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { ...props, "data-testid": "cross-svg" }),
}));

vi.mock("../svg/square.svg", () => ({
  default: (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { ...props, "data-testid": "square-svg" }),
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});
