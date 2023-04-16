import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Everything Shivpuri</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://securetoken.googleapis.com" />
        <link rel="preconnect" href="https://identitytoolkit.googleapis.com" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#141414" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <div id="message-modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
