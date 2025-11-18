// Main application component

// Node imports
import { Route, Routes } from "react-router-dom"; // Page routing with ReactRouter
import { Fragment, useState } from "react";

// Local imports
import HausOfCards from "./pages/HausOfCardsPage";
import DocoPage from "./pages/DocoPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout"; // Layout component that structures our App
import FeaturesPage from "./pages/DemoPage";

// Workspace imports
import ReactCursor from "@holmesdev/cursors";
import { vars } from "./styles/themes.css";

// React component App
function App() {
  // State
  const [mainCursor, setMainCursor] = useState(true); // Our application-wide main cursor enabled by default

  // Markup (JSX)
  return (
    <Fragment>
      {/* Import React Cursor Component */}
      <ReactCursor
        enable={mainCursor}
        showSystemCursor={false}
        layers={[
          {
            SVG: "circle",
            strokeSize: 10,
            fill: "black",
            size: { width: 14, height: 14 },
            effects: {
              hover: {
                scale: 0.8,
                stroke: vars.colors.brand,
                strokeSize: 25,
                SVG: "square",
              },
              click: {
                fill: vars.colors.brand,
              },
            },
          },
          {
            SVG: "circle",
            fill: vars.colors.brand,
            opacity: 0.2,
            size: { width: 50, height: 50 },
            delay: 100,
            effects: {
              hover: {
                scale: 1.5,
              },
              click: {
                scale: 1.5,
              },
            },
          },
        ]}
      />

      {/* New Routing Setup using the Layout component  */}
      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Note how the Layout component is used as an element instead of a wrapper */}
          <Route index element={<HausOfCards />} />
          <Route
            path="demo"
            element={<FeaturesPage setMainCursor={setMainCursor} />}
          />
          <Route path="docs" element={<DocoPage />} />
          {/* Catchall segment ie. Page not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
