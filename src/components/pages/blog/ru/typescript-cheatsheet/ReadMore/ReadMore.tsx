import { forwardRef } from 'react';
import { nanoid } from 'nanoid';
import { ReadMoreList } from 'src/components/blog/ReadMoreList/ReadMoreList';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';

export const ReadMore = forwardRef<HTMLDivElement>(({}, ref) => {
  const SOURCES_CONFIG: Array<TReadMoreSource> = [
    {
      id: nanoid(),
      link: 'https://www.typescriptlang.org/docs/handbook/',
      label: 'Документация по TypeScript',
    },
    {
      id: nanoid(),
      link: 'https://www.typescriptlang.org/play/',
      label: 'Онлайн-песочница TypeScript',
    },
    {
      id: nanoid(),
      link: 'https://react.dev/learn/typescript',
      label: 'Документация по TypeScript в React',
    },
  ];

  return (
    <section ref={ref}>
      <ReadMoreList items={SOURCES_CONFIG} language={POSTS_CONFIG_[EBlogPostRecord.TYPESCRIPT_CHEATSHEET].language} />
    </section>
  );
});

ReadMore.displayName = 'ReadMore';
