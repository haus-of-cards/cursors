// vanilla-extract styling file for Footer component

import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const footer = style({
  fontFamily: vars.fonts.brand,
  color: vars.colors.complementary,
  textAlign: "right",
  padding: "1rem",
  fontStyle: "italic",
  fontWeight: 100,
  borderTop: `1px solid ${vars.colors.complementary}`,
});
