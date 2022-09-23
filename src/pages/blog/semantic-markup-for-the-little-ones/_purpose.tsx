import React, { ReactElement } from 'react';

import HtmlTag from 'src/components/common/HtmlTag';

const PostPurpose = (): ReactElement => {
  return (
    <>
      <h2>What is semantic markup and why should you write it?</h2>
      <p>
        There are two types of elements in HTML:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <strong>Non-semantic</strong>: tell nothing about its content. Examples of non-semantic elements: <HtmlTag isSingle>div</HtmlTag> and <HtmlTag isSingle>span</HtmlTag>
        </li>
        <li className='list__item'>
          <strong>Semantic</strong>: clearly define its content. Examples of semantic elements: <HtmlTag isSingle>h1</HtmlTag>, <HtmlTag isSingle>a</HtmlTag>, <HtmlTag isSingle>li</HtmlTag>, etc.
        </li>
      </ol>
      <p>
        Thus, semantic markup is just a markup with semantic elements or in other words a markup with a meaning.
        What does it mean?
      </p>
      <p>
        By using HTML elements properly you can create pages that impart more information than if you simply surround everything with <HtmlTag isSingle>div</HtmlTag> or <HtmlTag isSingle>span</HtmlTag> tags.
        With semantic markup users, machines and developers will be able to easily understand content structure, relationship among elements and nature of content.
        Also semantic markup is easier to maintain, understand in debugging and developing after all.
      </p>
      <p>
        With regards to accessibility, semantic markup tell users with screen reader where they are and how they can interact with a web page.
      </p>
      <p>
        Check out examples below for further clarity.
        Non-semantic element <HtmlTag isSingle>div</HtmlTag> tells nothing about the content below.
        With some effort you can improve it just by using special HTML element for unordered lists <HtmlTag isSingle>ul</HtmlTag> instead of using non-semantic <HtmlTag isSingle>div</HtmlTag>.
        Now users with screen readers, search engines and developers who saw the markup for the first time would immediately understand that the element below represents a list of something.
      </p>
      <p className='spacer top medium'>
        Keep reading to learn the basics of semantic markup.
        Some things would seem obvious, but I have seen too much incorrect using of markup in my practice so it inspired me to write this guide.
      </p>
      <p>
        There are no tips like <span className='highlighted ghost'>«don&#39;t forget about closing paired tags»</span> or <span className='highlighted ghost'>«write tags name in lowercase instead uppercase»</span>.
        These kinds of mistakes are resolved nowadays in our code editors.
      </p>
      <p>
        Let&#39;s go!
      </p>
    </>
  );
};

export default PostPurpose;
