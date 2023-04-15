import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        <meta name="theme-color" content="#141414" />
        <link rel='icon' href='/icon-192x192.png' />
      </Head>
      <body>
        <div id='message-modal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
