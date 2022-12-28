import React, { MutableRefObject, ReactElement, useMemo } from 'react';

import { IItemOfContent } from 'src/interfaces';

interface Props {
  items: Array<IItemOfContent>;
}

const TableOfContents = ({ items }: Props): ReactElement => {
  const onScrollTo = (ref: MutableRefObject<HTMLElement | null>): void => {
    const element = ref.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 150;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  const renderItems = useMemo(() => {
    return items.map((item) => {
      return (
        <li
          key={item.title}
          className='list__item'>
          <button
            onClick={() => onScrollTo(item.ref)}
            className='button link'>
            <span className='visually-hidden'>Go to{' '}</span>
            {item.title}
          </button>
        </li>
      )
    })
  }, [items]);

  return (
    <section>
      <h2>Table of contents</h2>
      <ol className='list ordered'>
        {renderItems}
      </ol>
    </section>
  );
};

export default TableOfContents;
