import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './hero.module.scss';

interface LayoutProps {
  children: ReactNode;
  variant?: HeroVariant;
}

export enum HeroVariant {
  PRIMARY = 'primary',
  LIGHT = 'light',
  DARK = 'dark'
}

const Hero = ({ children, variant = HeroVariant.LIGHT }: LayoutProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <section className={bind([styles.hero, variant])}>
      {children}
    </section>
  );
};

export default Hero;
