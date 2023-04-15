import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='manifest' href='/manifest.json' />

        <meta name="theme-color" content="#141414" />
      </Head>
      <body>
        <div id='message-modal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
