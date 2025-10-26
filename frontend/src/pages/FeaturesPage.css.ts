// Vanilla Extract Styling file for Features.jsx

import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

// Layout content vertically
export const featuresPage = style({
  // margin: "2rem",
  // marginTop: "20px",
  marginTop: "3rem",
  // padding: "2rem",
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
  justifyContent: "space-around",
  flexDirection: "row",
  // alignContent: "center",
  height: "15vw",
  minWidth: "60vh"
  // minWidth: "600px"
  // justifyContent: "center",
  
});


// Div for Demo Cursor options section
export const featuresPageOptionsDiv = style({
  marginTop: "2rem",
  padding: "2rem",
  // width: "800px",
  width: "auto",
  height: "15vw",
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



