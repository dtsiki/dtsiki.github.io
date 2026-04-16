import { faFirefox } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import Browser from 'src/components/common/Browser';
import Shortcut from 'src/components/common/Shortcut';
import { ShortcutVariant } from 'src/components/common/Shortcut/Shortcut';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import { Window } from 'src/components/common/Window/Window';

import styles from './SemanticPageDemo.module.scss';

export const SemanticPageDemo = () => {
  const bind = classNames.bind(styles);

  return (
    <Window type={EWindowType.CUSTOM} pattern={EWindowPatternVariant.WAVY}>
      <div className={styles.semantic_page_demo}>
        <div className={styles.semantic_page_demo__wrapper}>
          <div className={styles.semantic_page_demo__browser_shortcut}>
            <Shortcut variant={ShortcutVariant.PRIMARY} icon={faFirefox} name='Firefox' />
          </div>
          <div className={styles.semantic_page_demo__browser}>
            <Browser name='Firefox' hasScroll>
              <div className={styles.semantic_page_demo__browser_wrapper}>
                <nav className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__nav])}>
                  <span className={styles.semantic_page_demo__name}>Nav</span>
                </nav>
                <header className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__header])}>
                  <span className={styles.semantic_page_demo__name}>Header</span>
                </header>
                <div className={styles.semantic_page_demo__layout}>
                  <main className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__main])}>
                    <span className={styles.semantic_page_demo__name}>Main</span>
                    <section className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__section])}>
                      <span className={styles.semantic_page_demo__name}>Section</span>
                    </section>
                    <section className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__section])}>
                      <span className={styles.semantic_page_demo__name}>Section</span>
                    </section>
                    <section className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__section])}>
                      <span className={styles.semantic_page_demo__name}>Section</span>
                    </section>
                    <section className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__section])}>
                      <span className={styles.semantic_page_demo__name}>Section</span>
                    </section>
                    <section className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__section])}>
                      <span className={styles.semantic_page_demo__name}>Section</span>
                    </section>
                  </main>
                  <aside className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__aside])}>
                    <span className={styles.semantic_page_demo__name}>Aside</span>
                  </aside>
                </div>
                <header className={bind([styles.semantic_page_demo__element, styles.semantic_page_demo__footer])}>
                  <span className={styles.semantic_page_demo__name}>Footer</span>
                </header>
              </div>
            </Browser>
          </div>
        </div>
      </div>
    </Window>
  );
};
