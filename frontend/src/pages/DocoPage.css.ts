// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const docopage = style({
  display: "flex",
  flexDirection: "column",
});

export const docopageH1 = style({
  alignSelf: "center",
  fontFamily: vars.fonts.brand,
});

export const markdown = style({
  padding: "2rem",
});
