import { MutableRefObject, useRef } from 'react';
import { IItemOfContent } from 'src/interfaces';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { Foreword } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Foreword/Foreword';
import { Purpose } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Purpose/Purpose';
import { Divs } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Divs/Divs';
import { Headings } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Headings/Headings';
import { Formatting } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Formatting/Formatting';
import { ClickableNonclickable } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/ClickableNonclickable/ClickableNonclickable';
import { Attributes } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Attributes/Attributes';
import { DeprecatedHTML } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/DeprecatedHtml/DeprecatedHtml';
import { Nesting } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Nesting/Nesting';
import { Lists } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Lists/Lists';
import { MarkupValidity } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/MarkupValidity/MarkupValidity';
import { Summary } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/Summary/Summary';
import { SemanticPageDemo } from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/SemanticPageDemo/SemanticPageDemo';
import { HERO_CONFIG, SOURCES_CONFIG } from './index.utils';
import { ReadMoreList } from 'src/components/blog/ReadMoreList/ReadMoreList';

const Post = () => {
  const purposeRef = useRef<HTMLParagraphElement>(null);
  const readMoreRef = useRef<HTMLParagraphElement>(null);
  const listsRef = useRef<HTMLParagraphElement>(null);
  const refMarkupValidity = useRef<HTMLParagraphElement>(null);
  const refSummary = useRef<HTMLParagraphElement>(null);
  const divsRef = useRef<HTMLParagraphElement>(null);
  const headingsRef = useRef<HTMLParagraphElement>(null);
  const formattingRef = useRef<HTMLParagraphElement>(null);
  const attributesRef = useRef<HTMLParagraphElement>(null);
  const deprecatedHtmlRef = useRef<HTMLParagraphElement>(null);
  const clickableUnclickableRef = useRef<HTMLParagraphElement>(null);
  const nestingRef = useRef<HTMLParagraphElement>(null);

  const onScrollTo = (ref: MutableRefObject<HTMLElement | null>): void => {
    const element = ref.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 150;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const tableOfContents: Array<IItemOfContent> = [
    {
      title: 'What is semantic markup and why should you write it?',
      ref: purposeRef,
    },
    {
      title: 'Do not use <div> for everything',
      ref: divsRef,
    },
    {
      title: 'Use headings',
      ref: headingsRef,
    },
    {
      title: 'Format text judiciously and thoughtfully',
      ref: formattingRef,
    },
    {
      title: 'Do not make unclickable elements clickable',
      ref: clickableUnclickableRef,
    },
    {
      title: 'Use required attributes',
      ref: attributesRef,
    },
    {
      title: 'Avoid using deprecated HTML',
      ref: deprecatedHtmlRef,
    },
    {
      title: 'Do not use block elements inside inline',
      ref: nestingRef,
    },
    {
      title: 'Use appropriate markup for lists',
      ref: listsRef,
    },
    {
      title: 'How to check a markup validity?',
      ref: refMarkupValidity,
    },
    {
      title: 'Summary',
      ref: refSummary,
    },
  ];

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES]}
      heroConfig={HERO_CONFIG}>
      <section>
        <Foreword />
        <SemanticPageDemo />
      </section>
      <TableOfContents
        items={tableOfContents}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].language}
      />
      <section ref={purposeRef}>
        <Purpose />
      </section>
      <section ref={divsRef}>
        <Divs />
      </section>
      <section ref={headingsRef}>
        <Headings />
      </section>
      <section ref={formattingRef}>
        <Formatting handleScroll={() => onScrollTo(listsRef)} />
      </section>
      <section ref={clickableUnclickableRef}>
        <ClickableNonclickable handleScroll={() => onScrollTo(readMoreRef)} />
      </section>
      <section ref={attributesRef}>
        <Attributes />
      </section>
      <section ref={deprecatedHtmlRef}>
        <DeprecatedHTML />
      </section>
      <section ref={nestingRef}>
        <Nesting />
      </section>
      <section ref={listsRef}>
        <Lists />
        <p className='spacer top large'>And that&#39;s all!</p>
      </section>
      <section ref={refMarkupValidity}>
        <MarkupValidity />
      </section>
      <section ref={refSummary}>
        <Summary />
      </section>
      <section ref={readMoreRef}>
        <ReadMoreList
          items={SOURCES_CONFIG}
          language={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].language}
        />
      </section>
    </PostWrapper>
  );
};

export default Post;
