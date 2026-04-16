import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import { EHeroAlign, EHeroSize, IHeroProps } from './Hero.types';

import styles from './Hero.module.scss';

export const Hero = ({
  children,
  variant,
  align = EHeroAlign.CENTER,
  heroRef,
  className,
  size = EHeroSize.FULL,
  pattern,
  height,
  hasOverlay = false,
}: IHeroProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <section
      ref={heroRef}
      className={bind([styles.hero, variant, align, size, className, pattern])}
      style={{ minHeight: `${height}px` }}>
      {/*hasOverlay && <div className={styles.hero__overlay} />*/}
      {children}
    </section>
  );
};
