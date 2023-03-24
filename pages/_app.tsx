import type { AppProps } from "next/app";
import { Open_Sans, Roboto } from "next/font/google";
import "../styles/globals.css";
import Layout from "Layout/Layout";
import { ThemeProvider, useTheme } from "next-themes";

const roboto = Roboto({
  weight: ["100", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const OpenSans = Open_Sans({
  weight: ["300", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} ${OpenSans.variable} ${roboto.variable} min-h-[1000px]`}
    >
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
