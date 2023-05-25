import { ThemeOptions, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#1B1B1B",
      paper: "#2B2B2B",
    },
    primary: {
      main: "#FFFFFF", // White Primary
    },
    secondary: {
      main: "#CCCCCC", // Medium Shade of Gray
    },
    error: {
      main: "#1e6572", // Turquoise #1e6572, light #4B838E , dark #15464F
    },
    warning: {
      main: "#F7F7F7", // White
    },
    success: {
      main: "#1B1B1B", // Dark Gray Secondary
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
      fontSize: "1.75rem",
      fontWeight: 400,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
    },
    h3: {
      fontFamily: "Lato",
      fontSize: "1.75rem",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
    },
    h4: {
      fontFamily: "Lato",
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
      letterSpacing: "0.1rem",
    },
    h6: {
      fontFamily: "Lato",
      fontSize: "1.1rem",
      fontWeight: 600,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
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

const theme = createTheme(themeOptions);

export default theme;
