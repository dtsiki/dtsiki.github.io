import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './html-tag.module.scss';

export enum HtmlTagVariant {
  SECONDARY = 'secondary',
  PRIMARY = 'primary'
}

export enum HtmlTagElement {
  DIV = 'div',
  FIRST_HEADING = 'h1',
  SECOND_HEADING = 'h2'
}

interface Props {
  children?: ReactNode;
  element?:  HtmlTagElement;
  variant?: HtmlTagVariant;
  isUnpaired?: boolean;
  isSingle?: boolean;
}

const HtmlTag = ({ element, children, variant = HtmlTagVariant.PRIMARY, isUnpaired = false, isSingle = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  if (isSingle) {
    return (
      <span className={bind([styles.htmlTag, styles.single])}>
        &lt;{children}&gt;
      </span>
    );
  }

  return (
    <>
      <span className={bind([styles.htmlTag, styles[variant]])}>
        &lt;{element}&gt;
      </span>
      {children && children}
      {!isUnpaired && (
        <span className={bind([styles.htmlTag, styles[variant]])}>
          &lt;/{element}&gt;
        </span>
      )}
    </>
  );
};

export default HtmlTag;
