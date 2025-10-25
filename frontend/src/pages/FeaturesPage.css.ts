// Vanilla Extract Styling file for Features.jsx

import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

// Layout content vertically
export const featuresPage = style({
  // margin: "2rem",
  marginTop: "20px",
  // width: "80hw",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

// Div for Demo & Code sections
export const featuresPageDemoDiv = style({
  marginTop: "2rem",
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
  // flexBasis: "500px",
  flexBasis: "60vh",
  flexGrow: "0",
  flexShrink: "0",
  border: "solid",
  borderRadius: 20,
  backgroundColor: vars.colors.complementary,
});

// 
export const featuresPageCode = style({
  marginLeft: "2rem",
  marginRight: "10rem",
  padding: "1em",
  // flexBasis: "500px",
  flexBasis: "40vh",
  flexGrow: "0",
  flexShrink: "0",
  border: "solid",
  borderRadius: 20,
  color: "white",
  backgroundColor: "black"
});

// Div for Demo & Code sections
export const featuresPageOptionsDiv = style({
  marginTop: "2rem",
  padding: "2rem",
  // width: "800px",
  width: "auto",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  // alignContent: "center",
  // height: "10vw",
  // justifyContent: "center",
  justifyContent: "space-around",
  textAlign: "center",
  border: "solid"
});


// Div for Demo & Code sections
export const featuresPageOptionsMainDiv = style({
  marginTop: "1rem",
  // padding: "2rem",
  // width: "600px",
  display: "flex",
  flexDirection: "column",
  // alignContent: "center",
  // height: "10vw",
  // justifyContent: "center",
  justifyContent: "space-around",
  // border: "solid"
});

// Div for Demo & Code sections
export const featuresPageOptionsMain = style({
  // marginTop: "3rem",
  padding: "1rem",
  // width: "600px",
  display: "flex",
  flexDirection: "row",
  // alignContent: "center",
  // height: "10vw",
  // justifyContent: "center",
  // justifyContent: "space-around",
  // border: "solid"
});