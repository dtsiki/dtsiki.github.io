import { useState } from 'react';
import classNames from 'classnames';
import { IAccordionProps } from './Accordion.types';

import styles from './Accordion.module.scss';
import { ArrowDownIcon, ArrowUpIcon, ChevronDownMiniIcon } from '../icons/ui';

export const Accordion = ({ title, children }: IAccordionProps) => {
  const bind = classNames.bind(styles);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpened(!isOpened);
  };

  return (
    <article className={bind([styles.accordion, { [styles.opened]: isOpened }])}>
      <button className={styles.accordion__header} onClick={toggleAccordion}>
        <span className={bind([styles.accordion__icon, { [styles.opened]: isOpened }])}>
          <ArrowDownIcon />
        </span>
        <span className={styles.accordion__title}>{title}</span>
      </button>
      <div className={styles.accordion__body}>{children}</div>
    </article>
  );
};
