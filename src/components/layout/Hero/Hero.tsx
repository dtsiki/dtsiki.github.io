import React, { MutableRefObject, ReactElement, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './hero.module.scss';

export enum HeroVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark'
}

export enum HeroAlign {
  LEFT = 'left',
  CENTER = 'center',
  GRID = 'grid'
}

export enum HeroSize {
  FULL = 'full',
  HALF = 'half',
  SMALL = 'small'
}

interface LayoutProps {
  children: ReactNode;
  variant?: HeroVariant;
  align?: HeroAlign;
  heroRef?:  MutableRefObject<HTMLElement | null>;
  className?: string;
  size?: HeroSize;
}

const Hero = ({
  children,
  variant = HeroVariant.LIGHT,
  align = HeroAlign.CENTER,
  heroRef,
  className,
  size = HeroSize.FULL }: LayoutProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <section
      ref={heroRef}
      className={bind([styles.hero, variant, align, size, className])}>
      {children}
    </section>
  );
};

export default Hero;
