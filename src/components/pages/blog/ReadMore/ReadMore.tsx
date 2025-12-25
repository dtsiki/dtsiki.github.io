import { ReactElement, useMemo } from 'react';

import ExternalLink from 'src/components/common/ExternalLink';
import { READ_MORE } from 'src/i18n/common';
import { EBlogPostLanguage, translate } from 'src/i18n/utils';
import { ISource } from 'src/interfaces';

interface Props {
  items: Array<ISource>;
  language?: EBlogPostLanguage;
}

const ReadMore = ({ items, language = EBlogPostLanguage.ENG }: Props): ReactElement => {
  const renderItems = useMemo(() => {
    return items.map((source: ISource) => {
      const { id, link, label } = source;

      return (
        <li key={id} className='list__item'>
          <ExternalLink href={link} label={label} />
        </li>
      );
    });
  }, [items]);

  return (
    <section>
      <h2>{translate(language, READ_MORE)}</h2>
      <ol className='list ordered'>{renderItems}</ol>
    </section>
  );
};

export default ReadMore;
