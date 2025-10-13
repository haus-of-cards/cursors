// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { style } from "@vanilla-extract/css";

export const documentationLayout = style({
  display: "flex",
  flexDirection: "column"  
});

export const documentationContentDiv = style({
  display: "flex",
  flexDirection: "row"  // Horizontal layout with menu on the left and content on the right
});



export const documentationMenu = style({
  marginLeft: "20px",
  // maxWidth: "200px",
  width: "200px",
  // flexBasis: "200px",
  // flexGrow: "0",
  // flexShrink: "0",
  alignSelf: "flex-start"
});

export const documentationContent = style({
  marginLeft: "100px",
  maxWidth: "600px",
  flex: 1,
  // flexBasis: "200px",
  // flexGrow: "0",
  // flexShrink: "0",
  // border: "solid"
  alignSelf: "center"
});



  // Styling as a Flex Item
  // flexBasis: "600px",
  // flexGrow: "1",
  // flexShrink: "1",
  
  
  // Styling as a Flex Container
  // marginTop: "20px",
  // padding: "20px",
  // display: "flex",
  // flexDirection: "row",
  // height: "200px",
  // justifyContent: "center",
  // justifyContent: "flex-start",
