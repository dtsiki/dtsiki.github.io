import { ReactElement, useCallback, useEffect, useState } from 'react';

import styles from './lang-switcher.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useStoreon } from 'storeon/react';
import { LocalizationEvent } from 'src/store/localization';

enum ELanguage {
  ENG = 'Eng',
  RU = 'Ru'
};

const languageLocalStorageItem = 'dtsikiLanguage';

const LangSwitcher = (): ReactElement => {
  const bind = classNames.bind(styles);

  const [currentLanguage, setCurrentLanguage] = useState<ELanguage>(ELanguage.ENG);
  const [showLanguages, setShowLanguages] = useState<boolean>(false);
  const { dispatch } = useStoreon();

  useEffect(() => {
    const savedLanguage = JSON.parse(localStorage.getItem(languageLocalStorageItem) || '{}');

    if (savedLanguage.length) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    dispatch(LocalizationEvent.SET_LANGUAGE, currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = useCallback((language: ELanguage): void => {
    setCurrentLanguage(language);

    localStorage.setItem(languageLocalStorageItem, JSON.stringify(language));
  }, []);

  const openSwitcher = useCallback((): void => {
    setShowLanguages(true);
  }, []);

  const closeSwitcher = useCallback((): void => {
    setShowLanguages(false);
  }, []);

  return (
    <div className={styles.langSwitcher}>
      {showLanguages ? (
        <div className={styles.langSwitcher__list}>
          {(Object.keys(ELanguage) as (Array<keyof typeof ELanguage>))
            .map((item) => {
              return (
                <button
                  className={bind([
                    styles.langSwitcher__item,
                    { [styles.selected]: currentLanguage === ELanguage[item] }
                  ])}
                  key={item}
                  onClick={() => toggleLanguage(ELanguage[item])}
                >
                  {ELanguage[item]}
                </button>
              );
            })}
          <button
            className={styles.langSwitcher__item}
            onClick={closeSwitcher}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      ) : (
        <button
          className={styles.langSwitcher__button}
          onClick={openSwitcher}
        >
          <span className={styles.langSwitcher__label}>
            {currentLanguage}
          </span>
        </button>
      )}
    </div>
  );
};

export default LangSwitcher;
