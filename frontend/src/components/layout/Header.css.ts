//

import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const header = style({
  fontFamily: vars.fonts.brand,
  backgroundColor: vars.colors.primaryVariant,
  color: vars.colors.complementary,
  minHeight: "5rem",
  alignContent: "center",
  padding: "1rem",
  borderBottom: `1px solid ${vars.colors.complementary}`,
});

export const spaced = style({
  margin: 0,
  flex: 1,
  maxWidth: "initial",
});

export const brand = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  color: vars.colors.complementary,
  fontWeight: 300,
});

export const brandName = style({
  fontSize: "1.5rem",
  flex: "1",
  width: "100%",
  height: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
    },
    "screen and (max-width: 576px)": {
      fontSize: "0.75rem",
    },
  },
});

export const options = style({
  display: "flex",
  justifyContent: "flex-end",
  "@media": {
    "screen and (max-width: 991px)": {
      justifyContent: "flex-start",
      marginTop: "1rem",
    },
  },
});
export const link = style({
  color: vars.colors.complementary,
  selectors: {
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});
