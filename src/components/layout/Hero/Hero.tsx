import React, { MutableRefObject, ReactElement, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './hero.module.scss';

export enum HeroVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark',
  VIOLET = 'violet',
  VIOLET_DARK = 'violet-dark',
  VIOLET_LIGHTER = 'violet-lighter'
}

export enum HeroAlign {
  LEFT = 'left',
  CENTER = 'center',
  GRID = 'grid'
}

export enum HeroSize {
  FULL = 'full',
  HALF = 'half',
  SMALL = 'small',
  CUSTOM = 'custom'
}

export enum HeroPattern {
  TOPOGRAPHY_LIGHT = 'topography-light',
  TOPOGRAPHY_DARK = 'topography-dark',
  MOTION_LINES = 'motion-lines',
  ARROWS = 'arrows',
  CROSS = 'cross'
}

interface LayoutProps {
  children?: ReactNode;
  variant?: HeroVariant;
  align?: HeroAlign;
  heroRef?:  MutableRefObject<HTMLElement | null>;
  className?: string;
  size?: HeroSize;
  pattern?: HeroPattern;
  height?: number;
  hasOverlay?: boolean;
}

const Hero = ({
  children,
  variant = HeroVariant.LIGHT,
  align = HeroAlign.CENTER,
  heroRef,
  className,
  size = HeroSize.FULL,
  pattern,
  height,
  hasOverlay = false
}: LayoutProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <section
      ref={heroRef}
      className={bind([styles.hero, variant, align, size, className, pattern])}
      style={{ minHeight: `${height}px` }}>
      {hasOverlay && (
        <div className={styles.hero__overlay} />
      )}
      {children}
    </section>
  );
};

export default Hero;
