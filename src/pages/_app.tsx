import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Yay!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
