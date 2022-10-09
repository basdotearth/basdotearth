import { type AppProps } from 'next/app';

import '../styles/reset.css';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
