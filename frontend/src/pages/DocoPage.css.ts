// Vanilla Extract Styling file for Homepage StackhausPage.jsx

import { style } from "@vanilla-extract/css";

export const docopage = style({
  // margin: "2rem",
  marginTop: "20px",
  // display: "grid",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const docopageMenuDiv = style({
  marginTop: "20px",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  height: "200px",
  // justifyContent: "center",
  // justifyContent: "flex-start",
  
});

export const docopageMenubar = style({
  marginLeft: "10px",
  flexBasis: "200px",
  flexGrow: "0",
  flexShrink: "0",
  alignSelf: "center"
});

export const docopageMenuContent = style({
  marginLeft: "10px",
  maxWidth: "800px",
  flex: 1
  // flexBasis: "200px",
  // flexGrow: "0",
  // flexShrink: "0",
  // border: "solid"
});

