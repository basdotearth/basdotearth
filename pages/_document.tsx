import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Palanquin:wght@300;500&family=Fira+Code:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Palanquin:wght@700&text=BasKlinkhmer&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
};

export default Document;
