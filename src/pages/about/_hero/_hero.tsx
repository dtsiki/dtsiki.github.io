import React, { MutableRefObject, ReactElement, useState } from 'react';
import { faFilePdf, faTrash } from '@fortawesome/free-solid-svg-icons';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import ScrollDownButton, { ScrollDownButtonVariant } from 'src/components/common/ScrollDownButton/ScrollDownButton';
import SelectUser from 'src/components/pages/about/SelectUser';
import LoginUser from 'src/components/pages/about/LoginUser';
import TopPanel from 'src/components/pages/about/TopPanel';
import LeftPanel from 'src/components/pages/about/LeftPanel';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

import styles from './hero.module.scss';

export enum ScreenView {
  SELECT_USER = 1,
  LOGIN_USER,
  DESKTOP
}

interface Props {
  targetRef:  MutableRefObject<HTMLElement | null>;
  showButton: boolean;
}

const AboutHero = ({ targetRef, showButton }: Props): ReactElement => {
  const [view, setView] = useState<ScreenView>(ScreenView.SELECT_USER);

  const scrollDown = (): void => {
    const element = targetRef.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 100;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.hero}>
      <Hero variant={HeroVariant.PRIMARY}>
        <TopPanel />
        {view === ScreenView.DESKTOP && (
          <LeftPanel />
        )}
        {view === ScreenView.SELECT_USER && (
          <SelectUser handleSelect={() => setView(ScreenView.LOGIN_USER)} />
        )}
        {view === ScreenView.LOGIN_USER && (
          <LoginUser handleLogin={() => setView(ScreenView.DESKTOP)} />
        )}
        {view === ScreenView.DESKTOP && (
          <div className={styles.hero__footer}>
            <Shortcut
              icon={faTrash}
              variant={ShortcutVariant.GHOST} />
          </div>
        )}
        {view === ScreenView.DESKTOP && (
          <div className={styles.hero__wallpaper} />
        )}
        {view === ScreenView.DESKTOP && (
          <div className={styles.hero__desktop}>
            <Shortcut
              handleAction={scrollDown}
              variant={ShortcutVariant.GHOST}
              icon={faFilePdf}
              name='Let me introduce myself.pdf' />
          </div>
        )}
        <ScrollDownButton
          isHidden={!showButton}
          variant={ScrollDownButtonVariant.LIGHT}
          targetRef={targetRef}
          handleScroll={scrollDown} />
      </Hero>
    </div>
  );
};

export default AboutHero;
