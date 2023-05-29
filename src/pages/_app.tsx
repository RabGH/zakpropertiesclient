import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../public/styles/MuiTheme";
import slugTheme from "../../public/styles/slugTheme";
import FadeNavBar from "@/components/navbar/homeNavBar/fadeNavBar";
import MainNavBar from "@/components/navbar/allNavBar/mainNavBar";
import MobileMainNavBar from "@/components/navbar/mobileNavBar/mobileMainNav";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";
import "../../public/styles/global.css";
import "../../public/styles/fonts.css";
import { useMediaQuery } from "@mui/material";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { pathname } = router;

  const isProjectsPage = pathname.startsWith("/projects");
  const isPropertiesPage = pathname.startsWith("/property");
  const isBuyPropertiesPage = pathname.startsWith("/buyProperties");
  const isHomePage = pathname === "/";
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <main>
        {isHomePage ? (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FadeNavBar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        ) : (
          <>
            <ThemeProvider
              theme={
                isProjectsPage || isPropertiesPage || isBuyPropertiesPage
                  ? slugTheme
                  : theme
              }
            >
              <CssBaseline />
              <MainNavBar />
              <Component {...pageProps} />
              <Footer />
            </ThemeProvider>
          </>
        )}
      </main>
    </>
  );
};

export default MyApp;
