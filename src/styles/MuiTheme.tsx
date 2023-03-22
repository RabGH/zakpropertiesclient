import { ThemeOptions, createTheme } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#f7f7f7'
    },
    primary: {
      main: '#1e3b72', // Deep blue #1e3b72, light #4B628E , dark #15294F
    },
    secondary: {
      main: '#72551e', // Gold #72551e, light #8E774B , dark #4F3B15
    },
    error: {
      main: '#1e6572', // Turquoise #1e6572, light #4B838E , dark #15464F
    },
    warning: {
      main: '#FFA07A', // Coral Orange #FFA07A, light #FFB394 , dark #B27055
    },
    success: {
      main: '#f7f7f7' // Off-White
    },
  },
  typography: {

    h1: {
        color: "#1e3b72",
    },
    h2: {
        color: "#1e3b72"
    },

    h3: {
        color: "#1e3b72"
    },
    h4: {
        color: "#1e3b72"
    },
    h5: {
        color: "#1e6572"
    },
    h6: {
        color: "#72551e"
    },

    body1: {
        color: "#FFFFFF",
    },
    
    body2: {
        color: "#000000",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
