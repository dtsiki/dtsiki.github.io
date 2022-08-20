import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './tag.module.scss';

export enum TagVariant {
  LIGHT = 'light',
  DARK = 'dark',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost'
}

export enum TagHoverVariant {
  LIGHT = 'light',
  DARK = 'dark',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost'
}

export enum TagElement {
  DIV = 'div',
  SPAN = 'span',
  LIST_ITEM = 'li',
  LINK = 'a',
  BUTTON = 'button'
}

interface Props {
  children: ReactNode;
  element?:  TagElement;
  variant?: TagVariant;
  hoverVariant?: TagHoverVariant;
  linkPath?: string;
  isOutlined?: boolean;
  onClick?: () => void
}

const Tag = ({ element = TagElement.SPAN, children, variant = TagVariant.PRIMARY, linkPath, isOutlined = false, onClick }: Props): ReactElement => {
  const Element = element;

  const bind = classNames.bind(styles);
  const className = bind([styles.tag, variant, { [styles.outlined]: isOutlined, [styles.button]: element === TagElement.BUTTON }]);

  return (
    <>
      {element === TagElement.LINK ? (
        <a
          className={className}
          href={linkPath}
          target='_blank'
          rel='noopener noreferrer'>
          {children}
        </a>
      ) : element === TagElement.BUTTON ? (
        <button
          onClick={onClick}
          className={className}>
          {children}
        </button>
      ) : (
        <Element className={className}>
          {children}
        </Element>
      )}
    </>
  );
};

export default Tag;
