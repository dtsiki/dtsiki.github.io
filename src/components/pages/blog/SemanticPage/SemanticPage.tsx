import React, { ReactElement } from 'react';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';

import Window from 'src/components/common/Window';
import { WindowPatternVariant } from 'src/components/common/Window/Window';
import Browser from 'src/components/common/Browser';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';

import styles from './semantic-page.module.scss';

const SemanticPage = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <Window pattern={WindowPatternVariant.WAVY}>
      <div className={styles.semanticPage}>
        <div className={styles.semanticPage__browser}>
          <Shortcut
            variant={ShortcutVariant.PRIMARY}
            icon={faFirefox}
            name='Firefox' />
        </div>
        <Browser
          name='Firefox'
          hasScroll>
          <div className={styles.semanticPage__wrapper}>
            <nav className={bind([styles.semanticPage__element, styles.semanticPage__nav])}>
              <span className={styles.semanticPage__name}>Nav</span>
            </nav>
            <header className={bind([styles.semanticPage__element, styles.semanticPage__header])}>
              <span className={styles.semanticPage__name}>Header</span>
            </header>
            <div className={styles.semanticPage__layout}>
              <main className={bind([styles.semanticPage__element, styles.semanticPage__main])}>
                <span className={styles.semanticPage__name}>Main</span>
                <section className={bind([styles.semanticPage__element, styles.semanticPage__section])}>
                  <span className={styles.semanticPage__name}>Section</span>
                </section>
                <section className={bind([styles.semanticPage__element, styles.semanticPage__section])}>
                  <span className={styles.semanticPage__name}>Section</span>
                </section>
                <section className={bind([styles.semanticPage__element, styles.semanticPage__section])}>
                  <span className={styles.semanticPage__name}>Section</span>
                </section>
              </main>
              <aside className={bind([styles.semanticPage__element, styles.semanticPage__aside])}>
                <span className={styles.semanticPage__name}>Aside</span>
              </aside>
            </div>
            <header className={bind([styles.semanticPage__element, styles.semanticPage__footer])}>
              <span className={styles.semanticPage__name}>Footer</span>
            </header>
          </div>
        </Browser>
      </div>
    </Window>
  );
};

export default SemanticPage;
