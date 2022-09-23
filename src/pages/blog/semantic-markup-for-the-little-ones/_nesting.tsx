import React, { ReactElement } from 'react';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import HtmlTag from 'src/components/common/HtmlTag';

import styles from './post.module.scss';

const PostNesting = (): ReactElement => {
  const exampleHTMLBlockInInline =
`<span>
  <div>Yay</div>
</span>`;

  const exampleHTMLInlineInBlock =
`<div>
  <span>Yay</span>
</div>`;

  return (
    <>
      <h2>Do not use block elements inside inline</h2>
      <p>
        This tip is related to nestings of elements.
        HTML tags <HtmlTag isSingle>span</HtmlTag> and <HtmlTag isSingle>div</HtmlTag> are both generic elements that group together related parts of a web page.
        There are slight difference between them. The first one is an inline element, while the second one is a block. Okay, so... What does it mean?
      </p>
      <p>
        Inline elements don&#39;t break content flow i.e. don&#39;t start on a new line.
        Also you can&#39;t set height and width to inline elements.
        If you try to set any width and height it will have no effects.
        Here are a few elements that have a default inline property:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <HtmlTag isSingle>span</HtmlTag>
        </li>
        <li className='list__item'>
          <HtmlTag isSingle>img</HtmlTag>
        </li>
        <li className='list__item'>
          <HtmlTag isSingle>a</HtmlTag>
        </li>
        <li className='list__item'>
          <HtmlTag isSingle>label</HtmlTag>
        </li>
      </ol>
      <p>
        Also most of formatting tags are inherently inline: <HtmlTag isSingle>i</HtmlTag>, <HtmlTag isSingle>b</HtmlTag>, <HtmlTag isSingle>strong</HtmlTag>, <HtmlTag isSingle>em</HtmlTag>.
      </p>
      <p>
        On the other hand, block elements break flow by staring on a new line and take up whole width of it. Also you can easily set height and width values to block elements.
        Here are a few elements that have a default block property:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <HtmlTag isSingle>div</HtmlTag>
        </li>
        <li className='list__item'>
          All headings <HtmlTag isSingle>h1</HtmlTag>-<HtmlTag isSingle>h6</HtmlTag>
        </li>
        <li className='list__item'>
          <HtmlTag isSingle>p</HtmlTag>
        </li>
      </ol>
      <p>
        Now that we&#39;ve figured out the difference between inline and block elements it&#39;s time to learn important rule: do not use block elements inside inline.
        Remember: inline elements may contain only data and other inline elements.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <p className='spacer bottom medium'>
              If you&#39;ll use block elements inside inline you&#39;ll end up with validation errors like <i>Element div not allowed as child of element span in this context</i>
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLBlockInInline} />
          </div>
          <div className='col col--50 col--tablet-100'>
            <p className='spacer bottom medium'>
              In the example below the inline element <HtmlTag isSingle>span</HtmlTag> is located inside the block element <HtmlTag isSingle>div</HtmlTag>.
              There are no errors,  there no problems, how wonderful!
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLInlineInBlock} />
          </div>
        </div>
      </div>
      <p className='note'>
        <span className='note__title'>Exception:</span> inline HTML links tag <HtmlTag isSingle>a</HtmlTag> may contain block elements such as <HtmlTag isSingle>div</HtmlTag>.
      </p>
    </>
  );
};

export default PostNesting;
