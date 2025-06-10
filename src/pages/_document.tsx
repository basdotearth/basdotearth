import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {

  return <Html>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=next" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=next" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=next" />
      <link rel="manifest" href="/site.webmanifest?v=next" />
      <link rel="shortcut icon" href="/favicon.ico?v=next" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@300;400;500;600&family=Fira+Code:wght@400;600&family=IM+Fell+Great+Primer:ital,wght@0,300;0,400;0,900;1,300;1,400;1,900&display=swap" rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
};

export default Document;
