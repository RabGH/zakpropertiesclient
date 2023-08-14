import { ThemeOptions, createTheme } from "@mui/material";

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
      default: "#0B0B0B",
      paper: "#2B2B2B",
    },
    primary: {
      main: "#FFFFFF", // White Primary
    },
    secondary: {
      main: "#CCCCCC", // Medium Shade of Gray
    },
    error: {
      main: "#9B9B9B", // Darker Gray ~ white
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

const theme = createTheme(themeOptions);

export default theme;
