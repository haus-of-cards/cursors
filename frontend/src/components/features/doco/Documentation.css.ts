// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { style } from "@vanilla-extract/css";

export const documentationMenuContentDiv = style({
  padding: "2rem",
  flex: 1,

  display: "flex",
  flexDirection: "row", // Horizontal layout with menu on the left and content on the right
  justifyContent: "flex-start",

  "@media": {
    "screen and (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});
