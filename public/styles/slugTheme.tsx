import { ThemeOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    smallphones: true;
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#F7F7F7",
      paper: "#F1EDEE",
    },
    primary: {
      main: "#1B1B1B", // Dark Gray Primary
    },
    secondary: {
      main: "#F0F0F0", //
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
      color: "#000",
      lineHeight: 1.2,
      margin: "0",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontWeight: 700,
      color: "#000",
      lineHeight: 1.2,
      margin: "0",
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.3rem",
      fontWeight: 600,
      color: "#000",
      lineHeight: 1.2,
      margin: "0",
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "1.1rem",
      fontWeight: 400,
      color: "#000",
      lineHeight: 1.2,
      margin: "0",
    },
    h5: {
      fontFamily: "Lato",
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#fff",
      lineHeight: 1.2,
      margin: "0",
      letterSpacing: "0.1rem",
    },
    h6: {
      fontFamily: "Lato",
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#000",
      lineHeight: 1.3,
      margin: "0",
    },
    body1: {
      fontFamily: "Roboto",
      fontWeight: 100,
      color: "#000000",
      lineHeight: 1.5,
      margin: "0",
    },
    body2: {
      fontFamily: "Roboto",
      fontWeight: 400,
      color: "#ffffff",
      lineHeight: 1.5,
      margin: "0",
      fontSize: "1rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      smallphones: 400,
    },
  },
};

const slugTheme = createTheme(themeOptions);

export default slugTheme;
