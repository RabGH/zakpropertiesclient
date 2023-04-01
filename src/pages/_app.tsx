import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../public/styles/MuiTheme";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

import "../../public/styles/global.css";
import "../../public/styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <main>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  );
};

export default MyApp;
