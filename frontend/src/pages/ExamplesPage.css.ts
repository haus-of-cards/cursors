import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const examples = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
});

export const heading = style({
  fontFamily: vars.fonts.brand,
});

export const table = style({
  width: "100%",
});

export const th = style({
  fontWeight: "bold",
});

export const button = style({
  appearance: "none",
  border: "none",
  background: "none",
  color: vars.colors.brand,
  textDecoration: "underline",
  padding: 0,
});

export const active = style({
  fontWeight: "bold",
});
