import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/reset.css';
import 'styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Component {...pageProps} />
  </>;
};

export default App;
