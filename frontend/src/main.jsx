//  Node imports
import { StrictMode } from "react"; // Used during development
import { createRoot } from "react-dom/client"; // Injects our React application into the HTML page
import { BrowserRouter } from "react-router-dom"; // Needed to implement the Routes inside our main application App

// Styling
import "./styles/resets.css.js"; // Vanilla Extract CSS Resets
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

// Local imports
import App from "./App.jsx"; // Main application component

// Handle redirect from 404.html (GitHub Pages SPA fix)
const redirect = sessionStorage.getItem("redirect");
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", `/cursors${redirect}`);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Basename required for gh-pages URL structure */}
    <BrowserRouter basename="/cursors">
      <App />
    </BrowserRouter>
  </StrictMode>
);
