import { ReactElement, ReactNode, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './accordion.module.scss';

interface Props {
  title: string | ReactNode;
  children: ReactNode;
}

const Accordion = ({ title, children }: Props): ReactElement => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const bind = classNames.bind(styles);

  const toggleAccordion = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <article className={bind([styles.accordion, { [styles.opened]: isOpened }])}>
      <button
        className={styles.accordion__header}
        onClick={toggleAccordion}>
        <span className={styles.accordion__icon}>
          <FontAwesomeIcon icon={isOpened ? faAngleUp : faAngleDown} />
        </span>
        <span className={styles.accordion__title}>
          {title}
        </span>
      </button>
      <div className={styles.accordion__body}>
        {children}
      </div>
    </article>
  );
};

export default Accordion;
