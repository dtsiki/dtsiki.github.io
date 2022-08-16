import React, { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './html-tag.module.scss';

export enum HtmlTagVariant {
  SECONDARY = 'secondary',
  PRIMARY = 'primary'
}

export enum HtmlTagElement {
  DIV = 'div',
  PRIMARY_HEADING = 'h1',
  SECONDARY_HEADING = 'h2'
}

interface Props {
  children: ReactNode;
  element:  HtmlTagElement;
  variant?: HtmlTagVariant;
}

const HtmlTag = ({ element, children, variant = HtmlTagVariant.PRIMARY }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <>
      <span className={bind([styles.htmlTag, styles[variant]])}>
        &lt;{element}&gt;
      </span>
      {children}
      <span className={bind([styles.htmlTag, styles[variant]])}>
        &lt;/{element}&gt;
      </span>
    </>
  );
};

export default HtmlTag;
