import { ReactElement, useMemo } from 'react';
import { READ_MORE } from 'src/i18n';
import { IReadMoreListProps } from './ReadMoreList.types';
import { translate } from 'src/utils/translate';
import { Language } from 'src/types';
import { ExternalLink } from 'src/components/common/ExternalLink';

export const ReadMoreList = ({ items, language = Language.RU }: IReadMoreListProps): ReactElement => {
  const renderItems = useMemo(() => {
    return items.map(({ id, link, label }) => {
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
