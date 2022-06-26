import React, { MutableRefObject, ReactElement, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './hero.module.scss';

export enum HeroVariant {
  PRIMARY = 'primary',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum HeroAlign {
  left = 'left',
  center = 'center',
  grid = 'grid'
}

interface LayoutProps {
  children: ReactNode;
  variant?: HeroVariant;
  align?: HeroAlign;
  heroRef?:  MutableRefObject<HTMLElement | null>;
  className?: string;
}

const Hero = ({
  children,
  variant = HeroVariant.LIGHT,
  align = HeroAlign.center,
  heroRef,
  className }: LayoutProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <section
      ref={heroRef}
      className={bind([styles.hero, variant, align, className])}>
      {children}
    </section>
  );
};

export default Hero;
