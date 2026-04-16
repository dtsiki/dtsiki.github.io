import HtmlTag from 'src/components/common/HtmlTag';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { PostImage } from 'src/components/blog/PostImage/PostImage';

import kesha from 'public/assets/blog/semantic-markup-for-the-little-ones/kesha.jpg';

export const Attributes = () => {
  const exampleHTMLImage = `<img
  src='kesha.jpg'
  alt='A happy smiling dog breed corgi
  lying in a flower field on a hill
  with a small pond in the background' />`;

  return (
    <>
      <h2>Use required attributes</h2>
      <p>
        Some HTML tags have required attributes. There aren&#39;t a lot of them but they are there and developers often
        forget about them or even don&#39;t know. Alternative text attribute{' '}
        <span className='highlighted ghost'>alt</span> of HTML image <HtmlTag isSingle>img</HtmlTag> tag is probably the
        most neglected attribute.
      </p>
      <div className='row'>
        <div className='col col--50 col--tablet-100'>
          <p>
            Sometimes it happens that browser might not display images. In these cases browser may replace missing image
            with text of alternate text attribute. This attribute describes context of an image. For these reasons you
            should provide useful value for <span className='highlighted ghost'>alt</span> whenever possible.
          </p>
          <p>
            Alternative text also helps users on a screen reader or with a slow Internet connection to decide whether or
            not the image is important.
          </p>
          <p className='spacer bottom medium'>
            The most important rule about alternative text is that it needs to describe its image as concisely as
            possible. At first do not use keywords as alternate text e.g. for the image of my dog below: &#39;Dog,
            corgi, smile, flowers, nature, lake, green&#39;. Instead of this try to describe an image as I did in the
            example below:
          </p>
          <CodeSnippet lang={ECodeLang.HTML} name='index' code={exampleHTMLImage} />
        </div>
        <div style={{ width: 400, margin: '0 auto' }}>
          <PostImage
            fileTitle='kesha.jpg'
            src={kesha}
            alt='A happy smiling dog breed corgi lying in a flower field on a hill with a small pond in the background'
          />
        </div>
      </div>
      <p className='spacer top medium'>
        Another important requierd attribute is <code className='highlighted ghost'>href</code> of already mentioned
        above HTML element <HtmlTag isSingle>a</HtmlTag> which is used to link from one page to another. This attribute
        indicates a link destination. If you&#39;ll use <HtmlTag isSingle>a</HtmlTag> tag for creating buttons,{' '}
        <code className='highlighted ghost'>href</code> obviously will be useless. As it was mentioned above, don&#39;t
        make unclickable elements clickable.
      </p>
      <p className='note spacer top medium'>
        <span className='note__title'>Hint:</span> if you set <span className='highlighted ghost'>alt</span> attribute
        to an empty string it will be indicate that its image is not a key part of content, for example it&#39;s
        decorative. An image with an empty alternative text attribute is not the same as having no{' '}
        <code className='highlighted ghost'>alt</code> attribute. If there is no{' '}
        <code className='highlighted ghost'>alt</code> attribute on the <HtmlTag isSingle>img</HtmlTag> element, screen
        readers will announce full name of the image file, which may not make any sense to users.
      </p>
    </>
  );
};
