import { MutableRefObject, ReactElement, useRef } from 'react';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import SemanticPage from 'src/components/pages/blog/SemanticPage';
import PostLists from './_lists';
import PostReadMore from './_read-more';
import PostMarkupValidity from './_markup-validity';
import PostSummary from './_summary';
import PostDivs from './_divs';
import PostHeadings from './_headings';
import PostFormatting from './_formatting';
import PostAttributes from './_attributes';
import PostDeprecatedHTML from './_deprecated-html';
import PostClickableUnclickable from './_clickable-unclickable';
import PostNesting from './_nesting';
import PostPurpose from './_purpose';
import PostForeword from './_foreword';
import { IItemOfContent } from 'src/interfaces';
import TableOfContents from 'src/components/pages/blog/TableOfContents';

import styles from './post.module.scss';

const Post = (): ReactElement => {
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

  const title = 'Semantic markup for the little ones';
  const highlight = '';
  const metaDescription = 'How to write semantic HTML';
  const metaTags = 'HTML, semantic markup, semantic HTML, HTML5, best practices';

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
      ref: purposeRef
    },
    {
      title: 'Do not use <div> for everything',
      ref: divsRef
    },
    {
      title: 'Use headings',
      ref: headingsRef
    },
    {
      title: 'Format text judiciously and thoughtfully',
      ref: formattingRef
    },
    {
      title: 'Do not make unclickable elements clickable',
      ref: clickableUnclickableRef
    },
    {
      title: 'Use required attributes',
      ref: attributesRef
    },
    {
      title: 'Avoid using deprecated HTML',
      ref: deprecatedHtmlRef
    },
    {
      title: 'Do not use block elements inside inline',
      ref: nestingRef
    },
    {
      title: 'Use appropriate markup for lists',
      ref: listsRef
    },
    {
      title: 'How to check a markup validity?',
      ref: refMarkupValidity
    },
    {
      title: 'Summary',
      ref: refSummary
    }
  ];

  return (
    <div className={styles.post}>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='guide'
        date='23 sep, 2022'
        metaDescription={metaDescription}
        metaTags={metaTags}
        tags={['html']}>
        <section>
          <PostForeword />
          <SemanticPage />
        </section>
        <TableOfContents items={tableOfContents} />
        <section ref={purposeRef}>
          <PostPurpose />
        </section>
        <section ref={divsRef}>
          <PostDivs />
        </section>
        <section ref={headingsRef}>
          <PostHeadings />
        </section>
        <section ref={formattingRef}>
          <PostFormatting handleScroll={() => onScrollTo(listsRef)} />
        </section>
        <section ref={clickableUnclickableRef}>
          <PostClickableUnclickable handleScroll={() => onScrollTo(readMoreRef)} />
        </section>
        <section ref={attributesRef}>
          <PostAttributes />
        </section>
        <section ref={deprecatedHtmlRef}>
          <PostDeprecatedHTML />
        </section>
        <section ref={nestingRef}>
          <PostNesting />
        </section>
        <section ref={listsRef}>
          <PostLists />
          <p className='spacer top large'>
            And that&#39;s all!
          </p>
        </section>
        <section ref={refMarkupValidity}>
          <PostMarkupValidity />
        </section>
        <section ref={refSummary}>
          <PostSummary />
        </section>
        <section ref={readMoreRef}>
          <PostReadMore />
        </section>
      </PostLayout>
    </div>
  );
};

export default Post;
