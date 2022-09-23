import React, { ReactElement } from 'react';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import HtmlTag from 'src/components/common/HtmlTag';

import styles from './post.module.scss';

const PostHeadings = (): ReactElement => {
  const exampleHTMLNonHeadings =
`<div>
  <div>The best cinnamon rolls recipe</div>
  <div>Ingredients</div>
  <div>Tools</div>
  <div>Instructions</div>
  <div>Step 1</div>
  <div>Step 2</div>
  <div>Step 3</div>
  <div>Tips</div>
</div>`;

  const exampleHTMLHeadings =
`<section>
  <h1>The best cinnamon rolls recipe</h1>
  <h2>Ingredients</h2>
  <h2>Tools</h2>
  <h2>Instructions</h2>
  <h3>Step 1</h3>
  <h3>Step 2</h3>
  <h3>Step 3</h3>
  <h2>Tips</h2>
</section>`;

  return (
    <>
      <h2>Use headings</h2>
      <p>
        HTML provides us special elements for headings: <HtmlTag isSingle>h1</HtmlTag>, <HtmlTag isSingle>h2</HtmlTag>, <HtmlTag isSingle>h3</HtmlTag>, <HtmlTag isSingle>h4</HtmlTag>, <HtmlTag isSingle>h5</HtmlTag> and <HtmlTag isSingle>h6</HtmlTag>.
        Whoa, that is a lot! Why not use them?
      </p>
      <p>
        As you can see, these elements have a level given by the number in their name.
        The heading level corresponds to the levels of nested sections.
        Tag <HtmlTag isSingle>h1</HtmlTag> is for a top-level headings, <HtmlTag isSingle>h2</HtmlTag> for a second-level headings, etc.
      </p>
      <p>
        Of course, you can use again only divs elements and it will work fine.
        This tip is similar to the previous one. Headings give structure to a web page.
        Nothing is clear when you first look at the markup on the left, that&#39;s just a bunch of divs.
        In addition, search engines use headings to index structure and content of web pages.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLNonHeadings} />
          </div>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.JAVASCRIPT}
              customName='index.html'
              code={exampleHTMLHeadings} />
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        There are a few tips that will help you  use headings like a pro:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          Avoid skipping heading levels: always start from <HtmlTag isSingle>h1</HtmlTag>, followed by <HtmlTag isSingle>h2</HtmlTag>, then the less important <HtmlTag isSingle>h3</HtmlTag>, and so on.
        </li>
        <li className='list__item'>
          Use only one <HtmlTag isSingle>h1</HtmlTag> heading per a web page, and that <HtmlTag isSingle>h1</HtmlTag> should succinctly represent the content on that page.
          Using more than one <HtmlTag isSingle>h1</HtmlTag> is allowed by the HTML specification, but is not considered as a best practice.
        </li>
        <li className='list__item'>
          Browsers have default styles for headings.
          Don&#39;t use headings and their default styles to make your text looks big or bold. Instead of it use CSS properties, e.g. <code className='highlighted secondary'>font-size</code> or <code className='highlighted secondary'>font-weight</code>.
        </li>
      </ol>
    </>
  );
};

export default PostHeadings;
