// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { style } from "@vanilla-extract/css";

export const documentationContentDiv = style({
  padding: "2rem",
  minWidth: "250px",
  width: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      padding: "1rem",
    },
  },
});

export const documentationContentHeader = style({
  marginTop: "2rem",
  textAlign: "center",
});
