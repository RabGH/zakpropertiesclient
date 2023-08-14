import React from "react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../public/styles/MuiTheme";
import slugTheme from "../../public/styles/slugTheme";
import FadeNavBar from "@/components/navbar/homeNavBar/fadeNavBar";
import MainNavBar from "@/components/navbar/allNavBar/mainNavBar";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/router";
import "../../public/styles/global.css";
import "../../public/styles/fonts.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { pathname } = router;

  const isProjectsPage = pathname.startsWith("/project");
  const isPropertiesPage = pathname.startsWith("/property");
  const isBuyPropertiesPage = pathname.startsWith("/buyProperties");
  const isHomePage = pathname === "/";

  return (
    <>
      <main>
        <Head>
          <title>ZakProperties Main Routing App</title>
          <meta name="description" content="ZakProperties Main Routing App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {isHomePage ? (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <FadeNavBar />
            <Component {...pageProps} />
            <Analytics />
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
              <Analytics />
              <Footer />
            </ThemeProvider>
          </>
        )}
      </main>
    </>
  );
};

export default MyApp;
