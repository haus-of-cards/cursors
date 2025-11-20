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
import ExamplesPage from "./pages/ExamplesPage";
import MainCursor from "./components/features/MainCursor";

// React component App
function App() {
  // State
  const [mainCursor, setMainCursor] = useState(true); // Our application-wide main cursor enabled by default

  // Markup (JSX)
  return (
    <Fragment>
      {/* Import the pre-styled React Cursor Component */}
      <MainCursor enable={mainCursor} />

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
          <Route
            path="examples"
            element={<ExamplesPage setMainCursor={setMainCursor} />}
          />
          {/* Catchall segment ie. Page not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
