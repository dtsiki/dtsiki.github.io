import React, { ReactElement, ReactNode, useEffect, useState } from 'react';

import Header from './../Header';
import Footer from './../Footer';
import Loader from './../Loader';

import styles from './layout.module.scss';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string): void => {
      console.log('handle start', url)
      setLoading(true);
    }

    const handleComplete = (url: string): void => {
      console.log('handle complete', url)

      setLoading(false);
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [])

  useEffect(() => {
    console.log('isLoading changed=', isLoading)
  }, [isLoading])

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>
        {isLoading ? <Loader /> : children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
