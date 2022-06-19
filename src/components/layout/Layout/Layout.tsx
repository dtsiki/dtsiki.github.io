import React, { ReactElement, ReactNode } from 'react';
import Header from './../Header';
import Footer from './../Footer';

import styles from './layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
