import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

// Div for Demo Cursor Options
export const cursorOptionsDiv = style({
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  background: vars.colors.complementary,
  color: vars.colors.primary,
  borderRadius: "1rem",
});

// Div for the Demo Cursor Main & Layer options sections
export const cursorMainAndLayerOptionsDiv = style({
  padding: "1rem",
  display: "flex",
  flexDirection: "row", // Running the Divs side-by-side to save vertical space
  fontSize: "smaller",
  width: "100%",
});

// Div for the Demo Cursor Main options section
export const cursorMainOptionsDiv = style({
  padding: "1rem",
  width: "50%",
});

// Div for the Demo Cursor Layer options section
export const cursorLayerOptionsDiv = style({
  padding: "1rem",
  flex: 1,
  width: "50%",
});

export const selectFullWidth = style({
  flex: 1,
  minWidth: "150px",
});
