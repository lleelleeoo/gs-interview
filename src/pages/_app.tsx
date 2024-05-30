import "@/styles/globals.css";
import "@/styles/theme.css";

import { createTheme, ThemeProvider  } from "@mui/material";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const fontFamily = [
    poppins.style.fontFamily,
    "Arial",
    "sans-serif",
].join(",");

const theme = createTheme({ typography: { fontFamily } });

// Need to share layout between pages and add some global styles
// https://nextjs.org/docs/pages/building-your-application/routing/custom-app
function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export { App as default };
