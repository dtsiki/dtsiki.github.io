import { ReactElement, useMemo } from 'react';

import ExternalLink from 'src/components/common/ExternalLink';
import { ISource } from 'src/interfaces';

interface Props {
  items: Array<ISource>;
}

const ReadMore = ({ items }: Props): ReactElement => {
  const renderItems = useMemo(() => {
    return items.map((source: ISource) => {
      const { id, link, label } = source;

      return (
        <li
          key={id}
          className='list__item'>
          <ExternalLink
            href={link}
            label={label} />
        </li>
      );
    });
  }, [items]);

  return (
    <section>
      <h2>Read more</h2>
      <ol className='list ordered'>
        {renderItems}
      </ol>
    </section>
  );
};

export default ReadMore;
