import { forwardRef, useMemo } from 'react';
import { READ_MORE } from 'src/i18n';
import { IReadMoreListProps } from './ReadMoreList.types';
import { translate } from 'src/utils/translate';
import { Language } from 'src/types';
import { ExternalLink } from 'src/components/common/ExternalLink';

export const ReadMoreList = forwardRef<HTMLDivElement, IReadMoreListProps>(
  ({ items, language = Language.RU }: IReadMoreListProps, ref) => {
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
      <section ref={ref}>
        <h2 className='spacer bottom medium'>{translate(language, READ_MORE)}</h2>
        <ol className='list ordered'>{renderItems}</ol>
      </section>
    );
  }
);

ReadMoreList.displayName = 'ReadMoreList';
