import { nanoid } from 'nanoid';
import Image from 'next/image';
import { TReadingListItem } from 'src/types';

export const renderBookLayout = (book: TReadingListItem) => {
  const { id, cover, title } = book;

  if (cover) {
    return (
      <article key={id} className='row'>
        <div className='col col--20'>
          <div className='image COVER'>
            <Image layout='responsive' src={cover} alt={`Обложка книги «${title}»`} />
          </div>
        </div>
        <div className='col col--80'>{renderBookInfo(book)}</div>
      </article>
    );
  }

  return <article key={id}>{renderBookInfo(book)}</article>;
};

const renderBookInfo = (book: TReadingListItem) => {
  const { title, author, category, tags, content } = book;

  return (
    <>
      <h3>
        «{title}», {author}
      </h3>
      {renderTags(category, tags)}
      {content}
    </>
  );
};

const renderTags = (category: string[], tags?: string[]) => {
  return (
    <div className='tags spacer top bottom small'>
      {category.map((item) => (
        <div className='tag PRIMARY' key={nanoid()}>
          {item}
        </div>
      ))}
      {tags?.map((item) => (
        <div className='tag SECONDARY' key={nanoid()}>
          {item}
        </div>
      ))}
    </div>
  );
};
