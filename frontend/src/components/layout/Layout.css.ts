// vanilla-extract styling file for Layout component
import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

// Style the overall App that includes the Header, Page content, and Footer
export const app = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: `linear-gradient(
    20deg,
    ${vars.colors.primaryVariant} 0%,
    ${vars.colors.primary} 100%
  )`,
  color: vars.colors.complementary,
  fontFamily: vars.fonts.brand,
  fontWeight: 800,
});

// Style the Pages. Note that this style is a flex item of the app style above
export const appContent = style({
  margin: "3rem 0",

  alignSelf: "center",
  flex: 1, // Let all the flexible items be the same length, regardless of its content
  fontFamily: vars.fonts.body,
  fontWeight: 300,
});
