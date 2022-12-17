import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <link rel="mask-icon" href="/favicon_package/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}