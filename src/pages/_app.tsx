import React, { ReactElement } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import '../styles/index.scss';
import Layout from 'src/components/layout/Layout';
import { YMInitializer } from 'react-yandex-metrika';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Yay!</title>
      </Head>
      <YMInitializer accounts={[89335351]} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
