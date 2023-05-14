import Head from "next/head";
import Image from "next/image";

// Mui
import { ThemeProvider } from "@mui/material/styles";

// Global Styles
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

// Theme
import theme from "@/common/utils/theme";

// Components
import Navbar from "@/common/components/Navbar";
import Hero from "@/common/components/Hero";
import Footer from "@/common/components/Footer";

const GlobalStyle = css`
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin: 0;
  }

  .SnackbarContent-root {
    .SnackbarItem-message {
      font-family: "Poppins", sans-serif;
      font-size: 14px;
    }
    .MuiSvgIcon-root {
      color: white !important;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <CssBaseline />
      <Head>
        <title>Budget Buddy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <Footer />
      </ThemeProvider>
    </>
  );
}
