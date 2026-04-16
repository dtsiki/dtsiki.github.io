import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { WindowRenderer } from 'src/components/common/Window/components/WindowRenderer/WindowRenderer';
import { Loader } from '../Loader/Loader';
import { ILayoutProps } from './Layout.types';

import styles from './Layout.module.scss';

export const Layout = ({ children }: ILayoutProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (): void => {
      setIsLoading(true);
    };

    const handleComplete = (): void => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <WindowRenderer />
      <main className={styles.layout__content}>{isLoading ? <Loader /> : children}</main>
      <ControlPanel />
    </div>
  );
};
