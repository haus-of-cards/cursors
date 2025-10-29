// Vanilla Extract Styling file for Features.jsx

import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

// Layout content vertically
export const featuresPage = style({
  marginTop: "3rem",
  // minWidth: "70vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});


// Div for Demo Cursor 
export const featuresPageDemoDiv = style({
  marginTop: "1rem",
  padding: "1rem",
  
  display: "flex",
  // flex: "0 0 30vh",

  // justifyContent: "space-around",
  flexDirection: "column",
  // alignContent: "center",
  // height: "15vw",
  // width: "auto",
  
  // minWidth: "600px"
  // justifyContent: "center",
  borderWidth: 3,
  borderRadius: 20,
  backgroundColor: vars.colors.complementary
});

// Div containing Testbed & Code sections
export const featuresPageDemoTestbedCodeDiv = style({
  // marginTop: "1rem",
  padding: "1rem",
  height: "15vw",
  // flex: 1,

  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  // alignContent: "center",
  // minWidth: "70vh"
  // minWidth: "600px"
  // justifyContent: "center",
  
});






