// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { style } from "@vanilla-extract/css";

// export const documentationLayout = style({  
//   justifySelf: "end",
//   display: "flex",
//   flexDirection: "column",
//   alignContent: "flex-start"
//   minHeight: "100vh",
// });


export const documentationMenuContentDiv = style({
  marginTop: "3rem",
  marginLeft: "3rem",
  flex: 1,
  
  display: "flex",
  flexDirection: "row",  // Horizontal layout with menu on the left and content on the right
  justifyContent: "flex-start"
});

