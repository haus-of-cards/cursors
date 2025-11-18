import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const codeDiv = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  border: "solid",
  borderWidth: 3,
  borderRadius: 20,
  padding: "1rem",
  color: "white",
  backgroundColor: vars.colors.primaryVariant,
  fontSize: "smaller",
});

export const codeDivList = style({
  listStyleType: "none",
});

export const clipboard = style({
  alignSelf: "flex-end",
  border: "3px solid white",
  fontSize: "1rem",
  padding: "0.5rem 1rem",
  background: vars.colors.complementary,
  borderRadius: "1rem",
});
