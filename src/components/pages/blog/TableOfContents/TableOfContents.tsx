import { MutableRefObject, useMemo } from 'react';
import classNames from 'classnames';
import { useTranslate } from 'src/hooks/useTranslate';
import { ITableOfContentsProps, TableOfContentsVariant } from './TableOfContents.types';
import { GO_TO, TABLE_OF_CONTENTS } from 'src/i18n';
import { translate } from 'src/utils/translate';

import styles from './TableOfContents.module.scss';

export const TableOfContents = ({
  customTitle,
  items,
  strictLanguage,
  hideNumbers,
  variant = TableOfContentsVariant.PRIMARY,
}: ITableOfContentsProps) => {
  const bind = classNames.bind(styles);

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
            className={bind([styles.table_of_contents__button, styles[variant]])}
            arial-label={`${translate(strictLanguage || language, GO_TO)} ${item.title}`}>
            {item.title}
          </button>
        </li>
      );
    });
  }, [items]);

  return (
    <section className={bind([styles.table_of_contents, 'section outer'])}>
      <h2 className={bind([styles.table_of_contents__title, styles[variant]])}>
        {translate(strictLanguage || language, customTitle ? customTitle : TABLE_OF_CONTENTS)}
      </h2>
      {hideNumbers ? <ul className='list'>{renderItems}</ul> : <ol className='list ordered'>{renderItems}</ol>}
    </section>
  );
};
