import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background_light dark:bg-background_dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
