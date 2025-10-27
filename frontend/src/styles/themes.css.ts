// vanilla-extract themes file

import { createGlobalTheme } from "@vanilla-extract/css";

// Root variables. Note that this is tied to the DOM so we do not want to make changes to this
export const root = createGlobalTheme(":root", {
  // Semantic tokens
  fonts: {
    // brand: "Roboto, sans-serif",
    brand: "PT-Serif, sans-serif",
    body: "Open Sans, sans-serif",
    // body: "Roboto Flex, sans-serif",
  },
  colors: {
    // primary: "white",
    // primary: "#EEEEEE",
    primary: "#F2F2F2",
    primaryVariant: "#CCCCCC",
    complementary: "#CECDCD",
    brand: "purple"
  }
});


// Making a copy of the root variables that we can work with
export const vars = {...root};  // The ... (spread) operator splits iterables into individual elements
