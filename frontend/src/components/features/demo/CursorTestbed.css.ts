import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../../styles/themes.css";

export const testbedDiv = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderWidth: 3,
  borderRadius: 20,
});

export const testbed = style({
  flex: 1,
  border: "solid",
  borderColor: vars.colors.brand,
  borderRadius: 15,
  borderWidth: 3,
  backgroundColor: "whitesmoke",
  minHeight: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const testbedActive = style({
  background: "rgba(255,255,255,0.5)",
});

export const testbedInactive = style({
  background: "rgba(0,0,0,0.9)",
});

export const testbedButton = style({
  width: "100%",
  textAlign: "center",
  fontSize: "1.5rem",
  color: vars.colors.brand,
  border: `5px solid ${vars.colors.brand}`,
  background: "none",
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
  "50%": { transform: "scale(1.02)" },
});

export const inactiveBtn = style({
  background: vars.colors.brand,
  color: vars.colors.primary,
  animation: `${pulse} 2s ease-in-out infinite alternate`,
  selectors: {
    "&:hover": {
      background: vars.colors.primary,
      color: vars.colors.brand,
    },
  },
});
