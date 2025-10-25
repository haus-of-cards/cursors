// vanilla-extract styling file for Footer component

import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  // display: "flex",
  // justifyContent: "center",
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.complementary,
  textAlign: "center",
  padding: "1rem",
  color: "black",
});