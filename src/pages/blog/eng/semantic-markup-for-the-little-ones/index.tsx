import { MutableRefObject, useRef } from 'react';
import { nanoid } from 'nanoid';
import { IItemOfContent } from 'src/interfaces';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { ReadMoreList, TReadMoreSource } from 'src/components/blog/ReadMoreList';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';
import {
  Attributes,
  ClickableNonclickable,
  Foreword,
  Formatting,
  Purpose,
  Divs,
  Nesting,
  DeprecatedHTML,
  Headings,
  Summary,
  Lists,
  MarkupValidity,
} from 'src/components/pages/blog/eng/semantic-markup-for-the-little-ones/components';

const Post = () => {
  const purposeRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLDivElement>(null);
  const refMarkupValidity = useRef<HTMLDivElement>(null);
  const refSummary = useRef<HTMLDivElement>(null);
  const divsRef = useRef<HTMLDivElement>(null);
  const headingsRef = useRef<HTMLDivElement>(null);
  const formattingRef = useRef<HTMLDivElement>(null);
  const attributesRef = useRef<HTMLDivElement>(null);
  const deprecatedHtmlRef = useRef<HTMLDivElement>(null);
  const clickableUnclickableRef = useRef<HTMLDivElement>(null);
  const nestingRef = useRef<HTMLDivElement>(null);

  const onScrollTo = (ref: MutableRefObject<HTMLElement | null>): void => {
    const element = ref.current?.getBoundingClientRect();

    if (element) {
      const topOffset = 150;
      const offset = element.top + window.pageYOffset - topOffset;

      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const TABLE_OF_CONTENTS_CONFIG: Array<IItemOfContent> = [
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

  const SOURCES_CONFIG: Array<TReadMoreSource> = [
    {
      id: nanoid(),
      link: 'https://www.ambitiouskitchen.com/best-cinnamon-rolls/',
      label: 'The best cinnamon rolls recipe',
    },
    {
      id: nanoid(),
      link: 'https://validator.w3.org/',
      label: 'W3C Markup Validation Service',
    },
    {
      id: nanoid(),
      link: 'https://khan.github.io/tota11y/',
      label: 'An accessibility visualization toolkit',
    },
    {
      id: nanoid(),
      link: 'https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/',
      label: 'An article about inline, block and (WHOA) inline-block behaivor of HTML elements',
    },
    {
      id: nanoid(),
      link: 'https://www.w3docs.com/learn-html/deprecated-html-tags.html',
      label: 'Depricated HTML tags',
    },
    {
      id: nanoid(),
      link: 'https://www.dofactory.com/html/attributes/deprecated',
      label: 'List of deprecated HTML attributes',
    },
    {
      id: nanoid(),
      link: 'https://milhidaka.github.io/chainer-image-caption/',
      label: 'Image caption generator',
    },
    {
      id: nanoid(),
      link: 'https://moz.com/learn/seo/alt-text',
      label: 'Alternative texts guide',
    },
    {
      id: nanoid(),
      link: 'https://benmyers.dev/blog/clickable-divs/',
      label: 'How (not) to build a button',
    },
    {
      id: nanoid(),
      link: 'https://www.smashingmagazine.com/2019/02/buttons-interfaces/',
      label: 'When is a button not a button?',
    },
    {
      id: nanoid(),
      link: 'https://accessibility.psu.edu/listshtml/',
      label: 'Lists in HTML',
    },
  ];

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.WAVY,
        variant: EHeroVariant.LIGHT,
      }}>
      <Foreword />
      <TableOfContents
        items={TABLE_OF_CONTENTS_CONFIG}
        strictLanguage={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].language}
      />
      <Purpose ref={purposeRef} />
      <Divs ref={divsRef} />
      <Headings ref={headingsRef} />
      <Formatting ref={formattingRef} handleScroll={() => onScrollTo(listsRef)} />
      <ClickableNonclickable ref={clickableUnclickableRef} handleScroll={() => onScrollTo(readMoreRef)} />
      <Attributes ref={attributesRef} />
      <DeprecatedHTML ref={deprecatedHtmlRef} />
      <Nesting ref={nestingRef} />
      <Lists ref={listsRef} />
      <MarkupValidity ref={refMarkupValidity} />
      <Summary ref={refSummary} />
      <ReadMoreList
        ref={readMoreRef}
        items={SOURCES_CONFIG}
        language={POSTS_CONFIG_[EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES].language}
      />
    </PostWrapper>
  );
};

export default Post;
