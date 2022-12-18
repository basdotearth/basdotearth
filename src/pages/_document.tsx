import { Head, Html, Main, NextScript } from 'next/document';

type TFontDefinition = {
  name: string;
  weights: number[],
};

const generateGoogleUrl = (fonts: TFontDefinition[]): string => {
  const requested = fonts
    .map(font => `family=${font.name.replace(/\s/g, '+')}:wght@${font.weights.join(';')}`)
    .join('&');
  return `https://fonts.googleapis.com/css2?${requested}&display=swap`;
};

const Document = () => {
  const fonts: TFontDefinition[] = [{
    name: 'Palanquin',
    weights: [300, 400, 700],
  }, {
    name: 'Fira Code',
    weights: [400, 600],
  }];

  return <Html>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=next" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=next" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=next" />
      <link rel="manifest" href="/site.webmanifest?v=next" />
      <link rel="shortcut icon" href="/favicon.ico?v=next" />
      <link href={generateGoogleUrl(fonts)} rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
};

export default Document;
