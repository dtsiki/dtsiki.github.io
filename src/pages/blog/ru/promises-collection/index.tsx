import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { IItemOfContent } from 'src/interfaces';
import { useRef } from 'react';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents';
import { Practice, Theory } from 'src/components/pages/blog/ru/promises-collection';
import {
  allInline,
  allSettledInline,
  anyInline,
  raceInline,
} from 'src/components/pages/blog/ru/promises-collection/utils';

const Post = () => {
  const theoryRef = useRef<HTMLDivElement>(null);
  const practiceRef = useRef<HTMLDivElement>(null);

  const TABLE_OF_CONTENTS_CONFIG: Array<IItemOfContent> = [
    {
      title: 'Теория: зачем объединять промисы',
      ref: theoryRef,
    },
    {
      title: 'Практика: пишем свои методы',
      ref: practiceRef,
    },
  ];

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.PROMISES_COLLECTION]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.CROSS,
      }}>
      <TableOfContents
        items={TABLE_OF_CONTENTS_CONFIG}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.PROMISES_COLLECTION].language}
      />
      <Theory ref={theoryRef} />
      <Practice ref={practiceRef} />
      <section>
        <h2>Вместо заключения</h2>
        <p>
          Поздравляю! Мы вместе проделали большой путь и теперь у тебя есть свои реализации всех основных статических
          методов для работы с группой промисов: {allInline}, {raceInline}, {allSettledInline} и {anyInline}. Ты
          разобрался как они устроены изнутри, а это гораздо ценнее, чем просто уметь ими пользоваться. Разве это не
          прекрасно?
        </p>
      </section>
    </PostWrapper>
  );
};

export default Post;
