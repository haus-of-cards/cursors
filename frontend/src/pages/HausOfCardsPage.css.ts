// Vanilla Extract Styling file for Homepage HausOfCardsPage.jsx

import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const hausofcardspage = style({
  padding: "2rem",
  paddingTop: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const hausofcardspageH1 = style({
  marginBottom: "2rem",
  fontFamily: vars.fonts.brand,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  whiteSpace: "pre",
});

export const brandname = style({
  color: vars.colors.brand,
  textShadow: `
    -1px -1px 0 ${vars.colors.primaryVariant},
     1px -1px 0 ${vars.colors.primaryVariant},
    -1px  1px 0 ${vars.colors.primaryVariant},
     1px  1px 0 ${vars.colors.primaryVariant}
  `,
});

export const hausofcardspageH2 = style({
  fontSize: "1.3rem",
  fontStyle: "italic",
  width: "100%",
  maxWidth: "40rem",
  textAlign: "center",
  fontWeight: 100,
  marginBottom: "2rem",
});

export const hausofcardspageDemoDiv = style({
  padding: "2rem 0",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "2rem",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

export const hausofcardspageDemoH3 = style({
  flex: 1,
  maxWidth: "50vh",
});

export const hausofcardspagefeatures = style({
  marginTop: "1em",
  listStyle: "none",
  padding: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const hausofcardspageDemo = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  minWidth: "250px",
});

export const cta = style({
  width: "100%",
  textAlign: "center",
  fontSize: "1.5rem",
  color: vars.colors.brand,
  border: `5px solid ${vars.colors.brand}`,
  padding: "0.5rem 1rem",
  borderRadius: "5rem",
  transition: "filter 300ms",
  textDecoration: "none",
  fontWeight: 600,
  selectors: {
    "&:hover": {
      background: vars.colors.brand,
      color: vars.colors.primary,
    },
  },
});

// Pulsate (scale in and out)
const pulse = keyframes({
  "0%, 100%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.3)" },
});

// Rainbow color shift for stroke/fill
const rainbow = keyframes({
  "0%": { stroke: "rgb(255,0,0)", color: "rgb(148,0,211)" },
  "16%": { stroke: "rgb(255,127,0)", color: "rgb(75,0,130)" },
  "33%": { stroke: "rgb(255,255,0)", color: "rgb(0,0,255)" },
  "50%": { stroke: "rgb(0,255,0)", color: "rgb(0,255,0)" },
  "66%": { stroke: "rgb(0,0,255)", color: "rgb(255,255,0)" },
  "83%": { stroke: "rgb(75,0,130)", color: "rgb(255,127,0)" },
  "100%": { stroke: "rgb(148,0,211)", color: "rgb(255,0,0)" },
});

export const img = style({
  width: "5rem",
  animation: `
    ${pulse} 15s ease-in-out infinite alternate,
    ${rainbow} 15s linear infinite alternate
  `,
});

export const hausofcardspageH3 = style({
  marginTop: "30px",
  textAlign: "center",
});

export const install = style({
  fontFamily: vars.fonts.mono,
  fontSize: "1.3rem",
  background: vars.colors.brand,
  color: vars.colors.primaryVariant,
  padding: "1rem 2rem",
  textAlign: "center",
});
