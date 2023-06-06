// Mui
import { ThemeProvider } from "@mui/material/styles";

// Notistack
import { SnackbarProvider } from "notistack";

// Global Styles
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

// Provider
import { SessionProvider } from "next-auth/react"
import { StateProvider } from "@/common/contexts/StateContext";
import { AuthProvider } from "@/common/contexts/AuthContext";
import { BudgetProvider } from "@/pages/budget/contexts/BudgetContext";
import { SecurityProvider } from "@/pages/security/contexts/SecurityContext";

// Theme
import theme from "@/common/utils/theme";

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

export default function App({ session, Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <SessionProvider session={session}>
          <StateProvider>
            <AuthProvider>
              <SecurityProvider>
                <BudgetProvider>
                  <Global styles={GlobalStyle} />
                  <CssBaseline />
                  <Component {...pageProps} />
                </BudgetProvider>
              </SecurityProvider>
            </AuthProvider>
          </StateProvider>
        </SessionProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
