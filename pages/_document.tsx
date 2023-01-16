import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <Script src="../node_modules/flowbite/dist/flowbite.min.js" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZQ1FTYHH7G" />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-ZQ1FTYHH7G');
           `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
