import React, { ReactElement, useMemo } from 'react';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import HtmlTag from 'src/components/common/HtmlTag';

import styles from './post.module.scss';

const PostDeprecatedHTML = (): ReactElement => {
  const depricatedTags = ['applet', 'basefont', 'center', 'dir', 'embed', 'font', 'isindex', 'menu', 'noembed', 's', 'strike', 'u'];

  const renderDepricatedTags = useMemo(() => {
    return depricatedTags.map((depricatedTag) => {
      return (
        <li
          key={depricatedTag}
          className='list list__item'>
          <HtmlTag isSingle>{depricatedTag}</HtmlTag>
        </li>
      );
    })
  }, [depricatedTags]);

  const exampleHTMLCenterTag = '<center>Yay</center>';

  const exampleHTMLCenteredDiv = '<div class="centered">Yay</div>';

  const exampleCSSCenteredDiv =
`.centered {
  text-align: center;
}`;

  return (
    <>
      <section>
        <h2>Avoid using deprecated HTML</h2>
        <p>
          HTML is designed as much as possible to be backward compatible with existing web browsers.
          However, there are a few deprecated HTML tags and attributes.
          Most of these deprecated tags have equivalent tag or alternate CSS option.
          Though some browsers might still support deprecated tags, it may have already been removed from the relevant web standards, may be in the process of being dropped or may only be kept for compatibility purposes so that&#39;s why you should avoid using it or use with caution.
        </p>
        <div className={styles.post__snippet}>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p className='spacer bottom medium'>
                For example, <HtmlTag isSingle>center</HtmlTag> paired tag is a deprecated and not supported since HTML4.
                As you might guess from the name, it displays its contents centered horizontally within its containing element.
              </p>
            </div>
            <div className='col col--50 col--tablet-100'>
              <Code
                language={CodeLanguage.HTML}
                name='index'
                code={exampleHTMLCenterTag} />
            </div>
          </div>
        </div>
        <p>
          Instead of using <HtmlTag isSingle>center</HtmlTag> tag use CSS property <code className='highlighted ghost'>text-align: center</code>, you&#39;ll get the same result.
        </p>
        <div className={styles.post__snippet}>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <Code
                language={CodeLanguage.HTML}
                name='index'
                code={exampleHTMLCenteredDiv} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <Code
                language={CodeLanguage.HTML}
                name='index'
                code={exampleCSSCenteredDiv} />
            </div>
          </div>
        </div>
        <p>
          Here is the list of deprecated tags:
        </p>
        <ul className='list inline'>
          {renderDepricatedTags}
        </ul>
        <p>
          Most of deprecated attributes also have alternate CSS option.
          For example, instead of HTML attribute <code className='highlighted ghost'>bgcolor</code> that defines background color for an element, you can use CSS property <code className='highlighted ghost'>background-color</code> that does the same.
        </p>
      </section>
    </>
  );
};

export default PostDeprecatedHTML;
