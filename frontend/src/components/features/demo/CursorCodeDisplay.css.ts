// 

import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";


// 
export const codeDiv = style({
  margin: "1rem",
  // flexBasis: "60vh",
  // flexGrow: "0",
  // flexShrink: "0",
  flex: 1,
  // minWidth: "400px",
  display: "flex",
  flexDirection: "column",
  border: "solid",
  borderWidth: 3,
  borderRadius: 20,
  padding: "1rem",
  color: "white",
  backgroundColor: "black",
  fontSize: "smaller"
});  


export const codeDivList = style({
  
  listStyleType: "none"
});  