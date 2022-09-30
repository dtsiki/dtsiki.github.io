import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';

import ExternalLink from 'src/components/common/ExternalLink';
import { ISource } from 'src/interfaces';

interface Props {
  sources: Array<ISource>;
}

const ReadMore = ({ sources }: Props): ReactElement => {
  const renderSources = useMemo(() => {
    return sources.map((source: ISource) => {
      const { id, link, label } = source;

      return (
        <li
          key={id}
          className='list__item'>
          <ExternalLink
            href={link}
            label={label} />
        </li>
      )
    })
  }, [sources]);

  return (
    <>
      <h2>Read more</h2>
      <ol className='list ordered'>
        {renderSources}
      </ol>
    </>
  );
};

export default ReadMore;
