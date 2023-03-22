import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/MuiTheme';
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer';
import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
};

export default MyApp;
