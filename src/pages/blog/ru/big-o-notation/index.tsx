import { ForwardRefExoticComponent, RefAttributes, RefObject, useMemo, useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import {
  Intro,
  ConstantComplexity,
  LinearComplexity,
  SquaredComplexity,
  LogComplexity,
  Conclusion,
  OtherComplexities,
} from 'src/components/pages/blog/ru/big-o-notation';

type TypeScriptSection = {
  title: string;
  ref: RefObject<HTMLDivElement>;
  component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
};

const Post = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const constantComplexityRef = useRef<HTMLDivElement>(null);
  const linearComplexityRef = useRef<HTMLDivElement>(null);
  const squaredComplexityRef = useRef<HTMLDivElement>(null);
  const logComplexityRef = useRef<HTMLDivElement>(null);
  const otherComplexitiesRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);

  const SECTIONS_CONFIG: TypeScriptSection[] = [
    {
      title: 'Что такое Big O и почему его не нужно бояться',
      ref: introRef,
      component: Intro,
    },
    {
      title: 'Константная сложность O(1)',
      ref: constantComplexityRef,
      component: ConstantComplexity,
    },
    {
      title: 'Линейная сложность O(n)',
      ref: linearComplexityRef,
      component: LinearComplexity,
    },
    {
      title: 'Квадратичная сложность O(n²)',
      ref: squaredComplexityRef,
      component: SquaredComplexity,
    },
    {
      title: 'Логарифмическая сложность O(log n)',
      ref: logComplexityRef,
      component: LogComplexity,
    },
    {
      title: 'Какие ещё бывают сложности',
      ref: otherComplexitiesRef,
      component: OtherComplexities,
    },
    {
      title: 'Вместо заключения',
      ref: conclusionRef,
      component: Conclusion,
    },
  ];

  const renderTableOfContents = useMemo(() => {
    return SECTIONS_CONFIG.filter((item) => item.title.length).map(({ title, ref }) => {
      return {
        title,
        ref,
      };
    });
  }, []);

  const renderSection = (section: TypeScriptSection) => {
    const { ref, component } = section;
    const Component = component;

    return <Component ref={ref} />;
  };

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.BIG_O_NOTATION]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.BUBBLES,
      }}>
      <TableOfContents
        items={renderTableOfContents}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.TYPESCRIPT_CHEATSHEET].language}
        hideNumbers={true}
        showOnScroll={true}
      />
      {SECTIONS_CONFIG.map((item) => renderSection(item))}
    </PostWrapper>
  );
};

export default Post;
