// Global Styles
import { Global, css } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';

const GlobalStyle = css`
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin: 0;
    }

    .SnackbarContent-root{
        .SnackbarItem-message{
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
        }
        .MuiSvgIcon-root{
            color: white !important;
        }
    }
`

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
