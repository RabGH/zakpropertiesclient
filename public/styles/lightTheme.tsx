import { ThemeOptions, createTheme } from "@mui/material";

export const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#f7f7f7",
      paper: "#CCCCCC30",
    },
    primary: {
      main: "#1B1B1B", // Dark Gray primary 
    },
    secondary: {
      main: "#CCCCCC", // Medium Shade of Gray , background or text
    },
    error: {
      main: "#1e6572", // Turquoise #1e6572, light #4B838E , dark #15464F
    },
    warning: {
      main: "#FFA07A", // Coral Orange #FFA07A, light #FFB394 , dark #B27055
    },
    success: {
      main: "#f7f7f7", // Off-white secondary
    },
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Roboto",
      "Open Sans",
      "Lato",
      "sans-serif",
    ].join(","),
    h1: {
      fontFamily: "Montserrat",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#1B1B1B",
      lineHeight: 1.2,
      margin: "0",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#1B1B1B",
      lineHeight: 1.2,
      margin: "0",
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#1B1B1B",
      lineHeight: 1.2,
      margin: "0",
    },
    h4: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#1B1B1B",
      lineHeight: 1.2,
      margin: "0",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#1B1B1B",
      lineHeight: 1.2,
      margin: "0",
    },
    h6: {
      fontFamily: "Lato",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#f7f7f7",
      lineHeight: 1.2,
      margin: "0",
      // "#1e3b72",
    },
    body1: {
      fontFamily: "Roboto",
      fontWeight: 100,
      color: "#ffffff",
      lineHeight: 1.5,
      margin: "0",
    },
    body2: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "#000000",
      lineHeight: 1.5,
      margin: "0",
    },
  },
};
const theme = createTheme(lightTheme);

export default theme;