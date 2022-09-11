import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { YMInitializer } from 'react-yandex-metrika';

import Layout from 'src/components/layout/Layout';

import '../styles/index.scss';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const [title, setTitle] = useState('');

  useEffect(() => {
    const name = '@dtsiki';
    const pathNames = router.pathname.split('/');

    setTitle(router.pathname === '/' ? `${name}/home` : `${name}/${pathNames[1]}`);
  }, [router.pathname]);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Yay! My name is Daria, I am a frontend developer' />
        <meta
          name='og:type'
          content='website' />
      </Head>
      <YMInitializer accounts={[89335351]} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
