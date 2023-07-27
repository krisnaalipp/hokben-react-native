import { extendTheme } from "native-base";

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      200: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      300: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      400: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      500: {
        normal: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      600: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      // Add more variants
      700: {
        normal: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      800: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
      900: {
        normal: "GothamRounded-Medium",
        italic: "GothamRounded-Medium",
        bold: "GothamRounded-Medium",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "GothamRounded-Medium",
    body: "GothamRounded-Medium",
    mono: "GothamRounded-Medium",
  },
});

export default theme;
