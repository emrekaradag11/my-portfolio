import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

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
        <meta name="viewport" content="width=device-width , initial-scale=1.0" />
        <Script src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-63bf8454e065b2d3" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}