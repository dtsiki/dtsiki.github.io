import { MutableRefObject, useMemo } from 'react';
import { useTranslate } from 'src/hooks/useTranslate';
import { ITableOfContentsProps } from './TableOfContents.types';
import { GO_TO, TABLE_OF_CONTENTS } from 'src/i18n';
import { translate } from 'src/utils/translate';

import styles from './TableOfContents.module.scss';

export const TableOfContents = ({ items, strictLanguage, hideNumbers }: ITableOfContentsProps) => {
  const { language } = useTranslate();

  const onScrollTo = (ref: MutableRefObject<HTMLElement | null>): void => {
    const element = ref.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 150;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const renderItems = useMemo(() => {
    return items.map((item) => {
      return (
        <li key={item.title} className='list__item'>
          <button
            onClick={() => onScrollTo(item.ref)}
            className={styles.table_of_contents__button}
            arial-label={`${translate(strictLanguage || language, GO_TO)} ${item.title}`}>
            {item.title}
          </button>
        </li>
      );
    });
  }, [items]);

  return (
    <section className={styles.table_of_contents}>
      <h2 className={styles.table_of_contents__title}>{translate(strictLanguage || language, TABLE_OF_CONTENTS)}</h2>
      {hideNumbers ? <ul className='list'>{renderItems}</ul> : <ol className='list ordered'>{renderItems}</ol>}
    </section>
  );
};
