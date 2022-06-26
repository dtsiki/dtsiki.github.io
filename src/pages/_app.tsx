import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import '../styles/index.scss';
import Layout from 'src/components/layout/Layout';

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
