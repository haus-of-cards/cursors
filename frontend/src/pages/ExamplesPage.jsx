import { useEffect, useState } from "react";

import DefaultCursor from "../../../examples/DefaultCursor";
import ArrowCursor from "../../../examples/ArrowCursor";
import CircleCursor from "../../../examples/CircleCursor";
import CrossCursor from "../../../examples/CrossCursor";
import SquareCursor from "../../../examples/SquareCursor";
import CustomSvgCursor from "../../../examples/CustomSvgCursor";
import ScaleEffectsCursor from "../../../examples/ScaleEffectsCursor";
import SvgEffectsCursor from "../../../examples/SvgEffectsCursor";

import * as styles from "./ExamplesPage.css";
import MultiLayerCursor from "../../../examples/MultiLayerCursor";
import ComplexCursor from "../../../examples/ComplexCursor";

const CursorsMap = {
  default: <DefaultCursor />,
  arrow: <ArrowCursor />,
  circle: <CircleCursor />,
  cross: <CrossCursor />,
  square: <SquareCursor />,
  customsvg: <CustomSvgCursor />,
  scaleeffects: <ScaleEffectsCursor />,
  svgeffects: <SvgEffectsCursor />,
  multilayer: <MultiLayerCursor />,
  complex: <ComplexCursor />,
};

function ExamplesPage({ setMainCursor }) {
  const [selectedCursor, setSelectedCursor] = useState("main");

  useEffect(() => {
    setMainCursor(selectedCursor === "main");
    return () => setMainCursor(true);
  }, [selectedCursor]);

  return (
    <div className={styles.examples}>
      <h1 className={styles.heading}>Examples</h1>

      {/* Render the selected cursor */}
      {CursorsMap[selectedCursor]}

      <p>Click any cursor name to view it within your browser!</p>
      <table className={`table table-dark table-striped ${styles.table}`}>
        <thead className={styles.th}>
          <tr>
            <td>Name</td>
            <td>Description</td>
            <td>Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "main" && styles.active}`}
                onClick={() => setSelectedCursor("main")}
              >
                Current Website
              </button>
            </td>
            <td>The custom cursor used on this website.</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "default" && styles.active}`}
                onClick={() => setSelectedCursor("default")}
              >
                Default
              </button>
            </td>
            <td>The default React Cursor component without any props.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/DefaultCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "arrow" && styles.active}`}
                onClick={() => setSelectedCursor("arrow")}
              >
                Arrow
              </button>
            </td>
            <td>Utilizing the preset "arrow" SVG with custom hotspot.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/ArrowCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "circle" && styles.active}`}
                onClick={() => setSelectedCursor("circle")}
              >
                Circle
              </button>
            </td>
            <td>Utilizing the preset "circle" SVG.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/CircleCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "cross" && styles.active}`}
                onClick={() => setSelectedCursor("cross")}
              >
                Cross
              </button>
            </td>
            <td>Utilizing the preset "cross" SVG.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/CrossCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "square" && styles.active}`}
                onClick={() => setSelectedCursor("square")}
              >
                Square
              </button>
            </td>
            <td>Utlizing the preset "square" SVG.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/SquareCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "customsvg" && styles.active}`}
                onClick={() => setSelectedCursor("customsvg")}
              >
                Custom SVG
              </button>
            </td>
            <td>Supplying custom SVGs.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/CustomSvgCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "scaleeffects" && styles.active}`}
                onClick={() => setSelectedCursor("scaleeffects")}
              >
                Scale Effects
              </button>
            </td>
            <td>Custom scale effects on hover/click.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/ScaleEffectsCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "svgeffects" && styles.active}`}
                onClick={() => setSelectedCursor("svgeffects")}
              >
                SVG Effects
              </button>
            </td>
            <td>Custom SVG effects on hover/click.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/SvgEffectsCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "multilayer" && styles.active}`}
                onClick={() => setSelectedCursor("multilayer")}
              >
                Multi-Layer
              </button>
            </td>
            <td>Providing multiple cursor layers.</td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/MultiLayerCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className={`${styles.button} ${selectedCursor === "complex" && styles.active}`}
                onClick={() => setSelectedCursor("complex")}
              >
                Complex
              </button>
            </td>
            <td>
              Combining multiple in-built props to make a fully-customized cursor.
            </td>
            <td>
              <a
                href="https://github.com/haus-of-cards/cursors/tree/main/examples/ComplexCursor.jsx"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                Code
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExamplesPage;
