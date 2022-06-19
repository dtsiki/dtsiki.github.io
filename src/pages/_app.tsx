import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Layout from 'src/components/layout/Layout';

import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Yay!</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
