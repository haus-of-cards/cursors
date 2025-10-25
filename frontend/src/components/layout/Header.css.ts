// 

import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const header = style({
  // minHeight: "10rem"
  // maxWidth: "70vh"
  // textAlign: "center"
  // flex: "1"
  fontFamily: vars.fonts.brand,
  fontWeight: "bolder",
  backgroundColor: vars.colors.complementary,
  minHeight: "5rem",
  alignContent: "center"
});

export const navbarStyle = style({
  // maxWidth: "70vh"
  // textAlign: "center"
  // flex: "1"
});