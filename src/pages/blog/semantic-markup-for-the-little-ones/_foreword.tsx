import React, { ReactElement } from 'react';

import HtmlTag from 'src/components/common/HtmlTag';

const PostForeword = (): ReactElement => {
  return (
    <>
      <p>
        There are the three pillars of any web page: HTML, CSS and JavaScript.
      </p>
      <p>
        CSS is a style sheet language used for describing presentation of web pages and JavaScript is used to control behavior of it.
        And at last not least, HTML represents structure and content of web pages.
        In other words, HTML is skeleton, then CSS is its skin and JavaScript is its brain.
      </p>
      <p className='spacer bottom medium'>
        In a nutshell, semantic markup is markup that introduces meaning and structure to web pages rather than just its appearance.
        Semantic markup is not about using only HTML5 tags such as <HtmlTag isSingle>header</HtmlTag>, <HtmlTag isSingle>footer</HtmlTag> or <HtmlTag isSingle>article</HtmlTag>.
        Adding <HtmlTag isSingle>header</HtmlTag> to a web page will not make it immediately semantically correct.
        What shall we do then? Let&#39;s find out 🧐
      </p>
    </>
  );
};

export default PostForeword;
