// Vanilla Extract Styling file for Features.jsx

import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

// Layout content vertically
export const featuresPage = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const title = style({
  fontFamily: vars.fonts.brand,
});

// Div for Demo Cursor
export const featuresPageDemoDiv = style({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  borderWidth: 3,
  borderRadius: 20,
  width: "100%",
  maxWidth: "1200px",
});

// Div containing Testbed & Code sections
export const featuresPageDemoTestbedCodeDiv = style({
  padding: "1rem",
  height: "15vw",
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "1rem",
  flexDirection: "row",
  borderRadius: "1rem",
});

export const testbed = style({
  minWidth: "250px",
});
