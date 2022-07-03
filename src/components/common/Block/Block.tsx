import React, { ReactElement, ReactNode } from 'react';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import styles from './block.module.scss';

interface Props {
  icon: IconDefinition;
  title:  string;
  content: ReactNode;
  isReversed?: boolean;
  isCentered?: boolean;
}

const Block = ({ title, icon, content, isReversed = false, isCentered = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const blockClassName = bind(
    styles.block,
    {
      [styles.block_reversed]: isReversed,
      [styles.block_centered]: isCentered
    }
  );

  return (
    <div
      className={blockClassName}>
      <div className={styles.block__wrapper}>
        <div className={styles.block__icon}>
          <FontAwesomeIcon
            icon={icon}
            size='2x' />
        </div>
        <h2 className={styles.block__title}>
          {title}
        </h2>
        {content && (
          <div className={styles.block__content}>
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Block;
