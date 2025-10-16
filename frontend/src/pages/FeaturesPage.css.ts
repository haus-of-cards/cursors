// Vanilla Extract Styling file for Features.jsx

import { style } from "@vanilla-extract/css";

// Layout content vertically
export const featuresPage = style({
  // margin: "2rem",
  marginTop: "20px",
  width: "80hw",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

// Div for Demo & Code sections
export const featuresPageDemoDiv = style({
  marginTop: "3rem",
  padding: "2rem",
  display: "flex",
  flexDirection: "row",
  // alignContent: "center",
  height: "20vw",
  // justifyContent: "center",
  
});

// 
export const featuresPageTestbed = style({
  marginLeft: "10rem",
  marginRight: "2rem",
  flexBasis: "500px",
  flexGrow: "0",
  flexShrink: "0",
  border: "solid"
});

// 
export const featuresPageCode = style({
  marginLeft: "2rem",
  marginRight: "10rem",
  flexBasis: "500px",
  flexGrow: "0",
  flexShrink: "0",
  border: "solid"
});

// Div for Demo & Code sections
export const featuresPageOptionsDiv = style({
  marginTop: "3rem",
  padding: "2rem",
  width: "600px",
  display: "flex",
  flexDirection: "row",
  // alignContent: "center",
  height: "10vw",
  // justifyContent: "center",
  justifyContent: "space-around",
  border: "solid"
});