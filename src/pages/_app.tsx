import "@/styles/globals.css";
import "@/styles/theme.css";

import { createTheme, ThemeProvider  } from "@mui/material";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const typography = { fontFamily: [
    poppins.style.fontFamily,
    "Arial",
    "sans-serif",
].join(",") };

// Does it supprt css variables?
// Will be good to setup Material palette and global palette in one place
// Or use only Material one
const palette = { primary: { main: "#00A757" } };

const theme = createTheme({ typography, palette });

// Need to share layout between pages and add some global styles
// https://nextjs.org/docs/pages/building-your-application/routing/custom-app
function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <div className={poppins.className}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}

export { App as default };
