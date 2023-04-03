import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../public/styles/MuiTheme";
import slugTheme from "../../public/styles/slugTheme";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";
import "../../public/styles/global.css";
import "../../public/styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { pathname } = router;

  const isProjectsPage = pathname.startsWith("/projects");
  const isPropertiesPage = pathname.startsWith("/property");

  return (
    <>
      <main>
        {isProjectsPage || isPropertiesPage ? (
          <ThemeProvider theme={slugTheme}>
            <CssBaseline />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        )}
      </main>
    </>
  );
};

export default MyApp;
