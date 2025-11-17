import { style, styleVariants } from "@vanilla-extract/css";

export const testbedDiv = style({
  margin: "1rem",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  borderWidth: 3,
  borderRadius: 20,
});

//
export const testbed = style({
  flex: 1,
  border: "solid",
  borderRadius: 15,
  borderWidth: 2,
  backgroundColor: "whitesmoke",
  minHeight: "150px",
});

export const testbedButton = style({
  margin: "1rem",
  textAlign: "center",
});
