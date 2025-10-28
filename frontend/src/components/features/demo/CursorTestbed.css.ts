// 

import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";  // Global style variables



// 
export const testbedDiv = style({
  // marginLeft: "10rem",
  // marginRight: "2rem",
  // // flexBasis: "500px",
  // flexBasis: "60vh",
  // flexGrow: "0",
  // flexShrink: "0",
  minWidth: "400px",
  display: "flex",
  flexDirection: "column",
  
  border: "solid",
  borderWidth: 3,
  borderRadius: 20,
  backgroundColor: vars.colors.complementary,
});


// 
export const testbed = style({
  padding: "2rem",
  // marginLeft: "10rem",
  // marginRight: "2rem",
  // // flexBasis: "500px",
  flexBasis: "200px",
  flexGrow: "0",
  flexShrink: "0",
  border: "solid",
  borderRadius: 15,
  borderWidth: 2,
  // backgroundColor: vars.colors.complementary
  backgroundColor: "whitesmoke"
});


export const testbedButton = style({
  textAlign: "center"
});

