import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';

import styles from './name-tag-hero.module.scss';
import NameTag from 'src/components/ui/NameTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Hero from '../Hero';
import { HeroVariant } from '../Hero/Hero';

const NameTagHero = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Hero variant={HeroVariant.PRIMARY}>
      <NameTag />
      <button className={bind([styles.nameTagHero__button, 'button button-cirle'])}>
        <span className='visually-hidden'>Scroll down</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          fade />
      </button>
    </Hero>
  );
};

export default NameTagHero;
