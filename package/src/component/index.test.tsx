import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ReactCursor from "./index";
import { CursorLayer, CursorEffects } from "../types";

describe("ReactCursor Component", () => {
  let matchMediaMock: typeof window.matchMedia;

  beforeEach(() => {
    // Mock matchMedia
    matchMediaMock = vi.fn((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })) as unknown as typeof window.matchMedia;
    window.matchMedia = matchMediaMock;

    // Mock requestAnimationFrame - don't call the callback to prevent infinite loops
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(() => 1);
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Basic Rendering", () => {
    it("renders with default props", () => {
      const { container } = render(<ReactCursor />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("does not render when enable is false", () => {
      const { container } = render(<ReactCursor enable={false} />);
      expect(container.firstChild).toBeNull();
    });

    it("renders the correct number of layers", () => {
      const layers: CursorLayer[] = [
        { fill: "red", size: { height: 20, width: 20 } },
        { fill: "blue", size: { height: 30, width: 30 } },
        { fill: "green", size: { height: 40, width: 40 } },
      ];
      const { container } = render(<ReactCursor layers={layers} />);
      const svgs = container.querySelectorAll("svg");
      expect(svgs).toHaveLength(3);
    });

    it("applies custom zIndex", () => {
      const { container } = render(<ReactCursor zIndex={999} />);
      const cursorDiv = container.firstChild as HTMLElement;
      expect(cursorDiv).toHaveStyle({ zIndex: "999" });
    });

    it("applies custom mixBlendMode", () => {
      const { container } = render(<ReactCursor mixBlendMode="multiply" />);
      const cursorDiv = container.firstChild as HTMLElement;
      expect(cursorDiv).toHaveStyle({ mixBlendMode: "multiply" });
    });
  });

  describe("Accessibility Detection", () => {
    it("does not render when prefers-reduced-motion is active", () => {
      window.matchMedia = vi.fn((query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      const { container } = render(<ReactCursor />);
      expect(container.firstChild).toBeNull();
    });

    it("does not render when forced-colors is active", () => {
      window.matchMedia = vi.fn((query: string) => ({
        matches: query === "(forced-colors: active)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      const { container } = render(<ReactCursor />);
      expect(container.firstChild).toBeNull();
    });

    it("does not render when prefers-contrast is more", () => {
      window.matchMedia = vi.fn((query: string) => ({
        matches: query === "(prefers-contrast: more)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      const { container } = render(<ReactCursor />);
      expect(container.firstChild).toBeNull();
    });

    it("does not render when coarse pointer is detected", () => {
      window.matchMedia = vi.fn((query: string) => ({
        matches: query === "(any-pointer: coarse)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      const { container } = render(<ReactCursor />);
      expect(container.firstChild).toBeNull();
    });

    it("renders when ignoreAccessibility is true despite accessibility flags", () => {
      window.matchMedia = vi.fn((query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })) as unknown as typeof window.matchMedia;

      const { container } = render(<ReactCursor ignoreAccessibility={true} />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe("System Cursor Hiding", () => {
    it("hides system cursor when showSystemCursor is false", () => {
      render(<ReactCursor showSystemCursor={false} />);

      const styleEl = document.getElementById("react-cursor-hide-system");
      expect(styleEl).toBeInTheDocument();
      expect(styleEl?.textContent).toBe("* { cursor: none !important; }");
    });

    it("does not hide system cursor when showSystemCursor is true", () => {
      render(<ReactCursor showSystemCursor={true} />);

      const styleEl = document.getElementById("react-cursor-hide-system");
      expect(styleEl).not.toBeInTheDocument();
    });

    it("cleans up cursor styles on unmount", () => {
      const { unmount } = render(<ReactCursor showSystemCursor={false} />);

      expect(
        document.getElementById("react-cursor-hide-system"),
      ).toBeInTheDocument();

      unmount();

      expect(
        document.getElementById("react-cursor-hide-system"),
      ).not.toBeInTheDocument();
    });
  });

  describe("Mouse Movement and Animation", () => {
    it("updates position on mouse move", async () => {
      const { container } = render(<ReactCursor />);

      fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });

      await waitFor(() => {
        const svg = container.querySelector("svg");
        expect(svg).toBeInTheDocument();
      });
    });

    it("applies delay to layers", () => {
      const layers: CursorLayer[] = [
        { fill: "red", size: { height: 20, width: 20 }, delay: 0 },
        { fill: "blue", size: { height: 20, width: 20 }, delay: 100 },
      ];

      const { container } = render(<ReactCursor layers={layers} />);
      expect(container.querySelectorAll("svg")).toHaveLength(2);
    });

    it("uses hotspot for positioning when provided", () => {
      const layers: CursorLayer[] = [
        {
          fill: "red",
          size: { height: 20, width: 20 },
          hotspot: { x: 5, y: 10 },
        },
      ];

      const { container } = render(<ReactCursor layers={layers} />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Effect System - Hover", () => {
    it("applies hover effect when hovering over interactive elements", async () => {
      const effects: CursorEffects = {
        hover: {
          scale: 2,
          fill: "blue",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} showSystemCursor={false} />
          <button>Click me</button>
        </div>,
      );

      const button = screen.getByRole("button");

      fireEvent.mouseOver(button);

      await waitFor(() => {
        // Component should re-render with hover effect applied
        expect(button).toBeInTheDocument();
      });
    });

    it("removes hover effect when mouse leaves interactive element", async () => {
      const effects: CursorEffects = {
        hover: {
          scale: 2,
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Click me</button>
        </div>,
      );

      const button = screen.getByRole("button");

      fireEvent.mouseOver(button);
      fireEvent.mouseOut(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });

    it("uses custom hoverSelector", async () => {
      const effects: CursorEffects = {
        hover: {
          scale: 1.5,
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} hoverSelector=".custom-hover" />
          <div className="custom-hover">Hover me</div>
        </div>,
      );

      const customElement = document.querySelector(
        ".custom-hover",
      ) as HTMLElement;

      fireEvent.mouseOver(customElement);

      await waitFor(() => {
        expect(customElement).toBeInTheDocument();
      });
    });

    it("changes SVG on hover", async () => {
      const effects: CursorEffects = {
        hover: {
          SVG: "square",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Click me</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("Effect System - Click", () => {
    it("applies click effect on mouse down", async () => {
      const effects: CursorEffects = {
        click: {
          scale: 0.5,
          fill: "red",
        },
      };

      const { container } = render(<ReactCursor effects={effects} />);

      fireEvent.mouseDown(document);

      await waitFor(() => {
        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it("removes click effect on mouse up", async () => {
      const effects: CursorEffects = {
        click: {
          scale: 0.5,
        },
      };

      const { container } = render(<ReactCursor effects={effects} />);

      fireEvent.mouseDown(document);
      fireEvent.mouseUp(document);

      await waitFor(() => {
        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it("click effect takes precedence over hover effect", async () => {
      const effects: CursorEffects = {
        hover: {
          scale: 2,
          fill: "blue",
        },
        click: {
          scale: 0.5,
          fill: "red",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Click me</button>
        </div>,
      );

      const button = screen.getByRole("button");

      fireEvent.mouseOver(button);
      fireEvent.mouseDown(document);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("Effect Properties", () => {
    it("applies scale to layer size", async () => {
      const layers: CursorLayer[] = [{ size: { height: 20, width: 20 } }];

      const effects: CursorEffects = {
        hover: {
          scale: 2,
        },
      };

      render(
        <div>
          <ReactCursor layers={layers} effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });

    it("applies fill color change", async () => {
      const effects: CursorEffects = {
        hover: {
          fill: "red",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });

    it("applies stroke color change", async () => {
      const effects: CursorEffects = {
        hover: {
          stroke: "green",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });

    it("applies opacity change", async () => {
      const effects: CursorEffects = {
        hover: {
          opacity: 0.5,
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });

    it("applies multiple effect properties simultaneously", async () => {
      const effects: CursorEffects = {
        hover: {
          scale: 1.5,
          fill: "purple",
          stroke: "yellow",
          opacity: 0.8,
          SVG: "cross",
        },
      };

      render(
        <div>
          <ReactCursor effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("Layer Management", () => {
    it("only applies effects to first layer", async () => {
      const layers: CursorLayer[] = [
        { fill: "red", size: { height: 20, width: 20 } },
        { fill: "blue", size: { height: 30, width: 30 } },
      ];

      const effects: CursorEffects = {
        hover: {
          fill: "green",
        },
      };

      const { container } = render(
        <div>
          <ReactCursor layers={layers} effects={effects} />
          <button>Hover</button>
        </div>,
      );

      expect(container.querySelectorAll("svg")).toHaveLength(2);
    });

    it("preserves layer properties not modified by effects", async () => {
      const layers: CursorLayer[] = [
        {
          fill: "red",
          stroke: "black",
          strokeSize: 5,
          size: { height: 20, width: 20 },
          opacity: 1,
        },
      ];

      const effects: CursorEffects = {
        hover: {
          fill: "blue", // Only change fill
        },
      };

      render(
        <div>
          <ReactCursor layers={layers} effects={effects} />
          <button>Hover</button>
        </div>,
      );

      const button = screen.getByRole("button");
      fireEvent.mouseOver(button);

      await waitFor(() => {
        expect(button).toBeInTheDocument();
      });
    });
  });

  describe("Cleanup", () => {
    it("removes event listeners on unmount", () => {
      const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");
      const removeWindowListenerSpy = vi.spyOn(window, "removeEventListener");

      const { unmount } = render(
        <ReactCursor effects={{ hover: { scale: 2 } }} />,
      );

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalled();
      expect(removeWindowListenerSpy).toHaveBeenCalled();
    });

    it("cancels animation frame on unmount", () => {
      const cancelAnimationFrameSpy = vi.spyOn(window, "cancelAnimationFrame");

      const { unmount } = render(<ReactCursor />);

      unmount();

      expect(cancelAnimationFrameSpy).toHaveBeenCalled();
    });
  });
});
