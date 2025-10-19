// Main application component

// Node imports
import { Route, Routes } from "react-router-dom"; // Page routing with ReactRouter
import { Fragment, useState } from "react";

// Local imports
import HausOfCards from "./pages/HausOfCardsPage";
import DocoPage from "./pages/DocoPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout"; // Layout component that structures our App
import FeaturesPage from "./pages/FeaturesPage";

// Workspace imports
import ReactCursor from "@holmesdev/cursors";

// React component App
function App() {
  // State
  const [mainCursor, setMainCursor] = useState(true); // Our application-wide main cursor enabled by default

  // Markup (JSX)
  return (
    <Fragment>
      {/* Import React Cursor Component */}
      <ReactCursor enable={mainCursor} />

      {/* New Routing Setup using the Layout component  */}
      {/* Page routing */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          {/* Note how the Layout component is used as an element instead of a wrapper */}
          <Route index element={<HausOfCards />} />
          <Route path="features" element={<FeaturesPage setMainCursor={setMainCursor} />}  />
          <Route path="docs" element={<DocoPage />} />
          {/* Catchall segment ie. Page not found */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
