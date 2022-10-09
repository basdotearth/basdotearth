import { Html, Head, Main, NextScript } from 'next/document';

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
      <link href={generateGoogleUrl(fonts)} rel="stylesheet" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;
};

export default Document;
