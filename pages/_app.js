// Mui
import { ThemeProvider } from "@mui/material/styles";

// Notistack
import { SnackbarProvider } from "notistack";

// Global Styles
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

// Provider
import { StateProvider } from "@/common/contexts/StateContext";
import { AuthProvider } from "@/common/contexts/AuthContext";
import { BudgetProvider } from "@/common/contexts/BudgetContext";
import { SecurityProvider } from "@/common/contexts/SecurityContext";

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

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
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
      </SnackbarProvider>
    </ThemeProvider>
  );
}
