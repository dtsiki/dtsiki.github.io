import { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { YMInitializer } from 'react-yandex-metrika';
import { StoreContext } from 'storeon/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { store } from 'src/store';
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
    <StoreContext.Provider value={store}>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <YMInitializer accounts={[89335351]} />
        <DndProvider backend={HTML5Backend}>
          <Component {...pageProps} />
        </DndProvider>
      </Layout>
    </StoreContext.Provider>
  );
};

export default App;
