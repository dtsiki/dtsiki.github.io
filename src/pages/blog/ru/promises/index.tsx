import { useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { IItemOfContent } from 'src/interfaces';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';
import { nanoid } from 'nanoid';
import { ReadMoreList } from 'src/components/blog/ReadMoreList/ReadMoreList';
import { Theory, Practice } from 'src/components/pages/blog/ru/promises';

const Post = () => {
  const theoryRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);

  const SOURCES_CONFIG: Array<TReadMoreSource> = [
    {
      id: nanoid(),
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      label: 'MDN Web Docs: Promise',
    },
    {
      id: nanoid(),
      link: 'https://learn.javascript.ru/promise-basics',
      label: 'Современный учебник JavaScript: Промисы',
    },
    {
      id: nanoid(),
      link: 'https://tc39.es/ecma262/#sec-promise-objects',
      label: 'ECMAScript Language Specification: Promise',
    },
  ];

  const TABLE_OF_CONTENTS_CONFIG: Array<IItemOfContent> = [
    {
      title: 'Теория: что такое промисы',
      ref: theoryRef,
    },
    {
      title: 'Практика: пишем свой промис',
      ref: practiceRef,
    },
  ];

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.PROMISES]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.CROSS,
      }}>
      <TableOfContents
        items={TABLE_OF_CONTENTS_CONFIG}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.PROMISES].language}
      />
      <Theory ref={theoryRef} />
      <Practice ref={practiceRef} />
      <ReadMoreList items={SOURCES_CONFIG} language={POSTS_CONFIG_[EBlogPostRecord.PROMISES].language} />
    </PostWrapper>
  );
};

export default Post;
