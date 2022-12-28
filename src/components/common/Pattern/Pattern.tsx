import React, { ReactElement, ReactNode } from 'react';

import classNames from 'classnames';

import styles from './pattern.module.scss';

export enum PatternVariant {
  SMILEY = 'smiley',
  CROSS = 'cross',
  TRIANGLES = 'triangles',
  ANGLES = 'angles',
  HERRINGBONE = 'herringbone'
}

interface Props {
  variant: PatternVariant;
  children: ReactNode;
}

const Pattern = ({ children, variant }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <div className={bind([styles.pattern, styles[variant]])}>
      {children}
    </div>
  );
};

export default Pattern;
