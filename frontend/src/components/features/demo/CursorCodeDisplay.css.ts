// 

import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";


// 
export const codeDiv = style({
  minWidth: "400px",
  display: "flex",
  flexDirection: "column",
  border: "solid",
  borderWidth: 3,
  borderRadius: 20,
  // backgroundColor: vars.colors.complementary,

  // marginLeft: "2rem",
  // marginRight: "10rem",
  padding: "1em",
  // // flexBasis: "500px",
  // flexBasis: "40vh",
  // flexGrow: "0",
  // flexShrink: "0",
  // border: "solid",
  // borderRadius: 20,
  color: "white",
  backgroundColor: "black"
});  