import React, { MutableRefObject, ReactElement, useMemo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './nav.module.scss';

interface Props {
  items: Array<any>;
  isVisible: boolean;
}

const AboutNav = ({ items, isVisible }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const onNavButtonClicked = (ref: MutableRefObject<HTMLElement | null>): void =>  {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const renderItems = useMemo(() => {
    return items?.map((item) => {
      const { id, title, icon, showInNav, ref } = item;

      if (showInNav) {
        return (
          <li
            key={id}
            className={styles.aboutNavigation__item}>
            <button
              className={styles.aboutNavigation__button}
              onClick={() => onNavButtonClicked(ref)}>
              <FontAwesomeIcon
                icon={icon}
                size='2x'
                color='#dddddd' />
              <span className='visually-hidden'>
                {title}
              </span>
            </button>
          </li>
        );
      }
    })
  }, [items]);

  return (
    <nav className={bind([styles.aboutNavigation, { [styles.aboutNavigation_visible]: isVisible } ])}>
      <ul className={styles.aboutNavigation__list}>
        {renderItems}
      </ul>
    </nav>
  );
};

export default AboutNav;
