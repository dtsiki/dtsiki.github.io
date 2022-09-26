import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faMapPin } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import HtmlTag from 'src/components/common/HtmlTag';
import Window from 'src/components/common/Window';

import styles from './post.module.scss';

interface Props {
  handleScroll?: () => void;
}

const PostFormatting = ({ handleScroll }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleHTMLNonParagraphs =
`<section>
  <h1>Tips for making the best cinnamon rolls</h1>
  Don't overheat your milk. It should be between 105-115 degrees F<br/>
  Make sure to use room temperature butter for the filling<br/>
  Rub the brown sugar into the butter<br/>
  Make sure you flour your work surface and the rolling pin<br/>
  Use a room temperature egg in the dough<br/>
</section>`;

  const exampleHTMLParagraphs =
`<section>
  <h1>Tips for making the best cinnamon rolls</h1>
  <p>Don't overheat your milk. It should be between 105-115 degrees F</p>
  <p>Make sure to use room temperature butter for the filling</p>
  <p>Rub the brown sugar into the butter</p>
  <p>Make sure you flour your work surface and the rolling pin</p>
  <p>Use a room temperature egg in the dough</p>
</section>`;

  const exampleHTMLAddress =
`<address>
  Santa Claus<br/>
  123 Elf Road<br/>
  North Pole<br/>
  88888
</address>`;

  const exampleHTMLBlockquote =
`<blockquote>
  Roses are red<br/>
  Violets are blue<br/>
  Sugar is sweet<br/>
  And so are you
</blockquote>`;

  const exampleHTMLListWithLineBreaks =
`<h3>Ingredients</h3>
<div>
  Milk<br/>
  Sugar<br/>
  Quick rise yeast<br/>
  Butter<br/>
  Egg + egg yolk<br/>
  Bread flour<br/>
  Cinnamon<br/>
</div>`;

  const exampleHTMLList =
`<h3>Ingredients</h3>
<ul>
  <li>Milk</li>
  <li>Sugar</li>
  <li>Quick rise yeast</li>
  <li>Butter</li>
  <li>Egg + egg yolk</li>
  <li>Bread flour</li>
  <li>Cinnamon</li>
</ul>`;

  const exampleHTMLListWithLineBreaksBetween =
`<h3>Ingredients</h3>
<ul>
  <li>Milk</li>
  <li>Sugar</li>
  <li>Quick rise yeast</li>
  <br/>
  <br/>
  <li>Butter</li>
  <li>Egg + egg yolk</li>
  <li>Bread flour</li>
  <li>Cinnamon</li>
</ul>`;

  return (
    <>
      <h2>Format text judiciously and thoughtfully</h2>
      <p>
        Let&#39;s continue talking about texts. There are many elements in HTML for formatting text and some of them have the same meaning at first glance.
        It happened because modern browsers different default styles which they apply to different html-elements and according to this built-in styles, <HtmlTag isSingle>b</HtmlTag>/<HtmlTag isSingle>strong</HtmlTag> and <HtmlTag isSingle>i</HtmlTag>/<HtmlTag isSingle>em</HtmlTag> look the same.
      </p>
      <p>
        In the example below there are no any custom styles, there are using only built-in styles for all tags. Pay attention that each pair of tags looks the same:
      </p>
      <Window title='Choose your fighter'>
        <div className='row'>
          <div className='col col--50'>
            <span className={styles.post__text}>
              <b>&lt;b&gt;</b> vs. <strong>&lt;strong&gt;</strong>
            </span>
          </div>
          <div className='col col--50'>
            <span className={styles.post__text}>
              <i>&lt;i&gt;</i> vs. <em>&lt;em&gt;</em>
            </span>
          </div>
        </div>
      </Window>
      <p className='spacer top medium'>
        This raises the one of the most frequently asked questions about HTML: what&#39;s the difference between <HtmlTag isSingle>b</HtmlTag> and <HtmlTag isSingle>strong</HtmlTag> or <HtmlTag isSingle>i</HtmlTag> and <HtmlTag isSingle>em</HtmlTag> if they look alike?
        Let&#39;s find out.
      </p>
      <p>
        The first thing that you must find is that when it comes to formatting text there is distinction between visual formatting  and meaning formatting.
        For a while before HTML5 came in, web-developers didn&#39;t think about meaning, they thought only about appearance.
        If they needed to make fancy text, they just made fancy text.
      </p>
      <p>
        Let&#39;s look at an example. <HtmlTag isSingle>b</HtmlTag> and <HtmlTag isSingle>i</HtmlTag> elements are used to draw attention to text. <HtmlTag isSingle>i</HtmlTag> tag represents an idiomatic text and <HtmlTag isSingle>b</HtmlTag> tag brings attention to element.
        However these elements are better known as <HtmlTag isSingle>b</HtmlTag> for <b>bold</b> and <HtmlTag isSingle>i</HtmlTag> for <i>italic</i>.
        Key point of these tags is that they are used to draw the reader&#39; attention to the element&#39; contents, which are not otherwise granted special importance.
        These tags are about <span className='highlighted ghost'>visual formatting</span>.
      </p>
      <p>
        On the other side, <HtmlTag isSingle>strong</HtmlTag> and <HtmlTag isSingle>em</HtmlTag> tags indicate that its contents have special meaning.
        <HtmlTag isSingle>strong</HtmlTag> element indicates storng importance and <HtmlTag isSingle>em</HtmlTag> element indicates stress emphasis.
        These tags are about <span className='highlighted ghost'>meaning or semanitc formatting</span>.
      </p>
      <Window title='Examples of the use formatting tags'>
        <div className={styles.post__subtitle}>
          Examples of using:
        </div>
        <ol className='list ordered'>
          <li className='list__item'>
            <span><HtmlTag isSingle>strong</HtmlTag></span>: please <strong>turn off lights</strong> when you leave
          </li>
          <li className='list__item'>
            <span><HtmlTag isSingle>b</HtmlTag></span>: this article about <b>semantic HTML</b>. I wrote it while my cat was sleeping next to me
          </li>
          <li className='list__item'>
            <span><HtmlTag isSingle>em</HtmlTag></span>: when my dog tries to eat something off the ground I tell him loudly <em>NO! DROP IT!</em>
          </li>
          <li className='list__item'>
            <span><HtmlTag isSingle>i</HtmlTag></span>: «You&#39;re saying it wrong», Harry heard Hermione snap. «It&#39;s <i>leviOsa</i>, not <i>levioSA</i>!»
          </li>
        </ol>
      </Window>
      <p className='spacer top medium'>
        It turns out that <HtmlTag isSingle>b</HtmlTag>/<HtmlTag isSingle>strong</HtmlTag> and <HtmlTag isSingle>i</HtmlTag>/<HtmlTag isSingle>em</HtmlTag> actually don&#39;t have the same meaning.
        They&#39;re all different elements, although they have a slight difference that you always have to keep in your head.
      </p>
      <p className='note spacer bottom extra-large'>
        <span className='note__title'>Remember:</span> you should use the CSS properties for styling text instead of using tags, e.g. use <code className='highlighted secondary'>font-weight</code> property to create boldface text instead of adding <HtmlTag isSingle>b</HtmlTag> or <HtmlTag isSingle>strong</HtmlTag> element to your markup.
      </p>
      <p>
        Another cornerstone of formating text is a line break element <HtmlTag isSingle>br</HtmlTag>.
        This empty and self-closing element has one and well-defined purpose to create a line break in a block of text.
      </p>
      <p className='spacer bottom medium'>
        We are not going round and around, separating paragraphs of text using <HtmlTag isSingle>br</HtmlTag> is a bad practice!
        Here&#39;s the example of what not to do:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLNonParagraphs} />
          </div>
          <div className='col col--100'>
            <div className='spacer top medium'>
              <Window>
                <section>
                  <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                    Tips for making the best cinnamon rolls
                  </h3>
                  Don&#39;t overheat your milk. It should be between 105-115 degrees F<br/>
                  Make sure to use room temperature butter for the filling<br/>
                  Rub the brown sugar into the butter<br/>
                  Make sure you flour your work surface and the rolling pin<br/>
                  Use a room temperature egg in the dough<br/>
                </section>
              </Window>
            </div>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        Use HTML paragraph element  <HtmlTag isSingle>p</HtmlTag> together with CSS properties such as <code className='highlighted ghost'>margin</code> to separate text instead of using line breaks.
        This code will be easier to maintain later and markup will be more concise as a result.
        Here&#39;s the example:
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLParagraphs} />
          </div>
          <div className='col col--100'>
            <div className='spacer top medium'>
              <Window>
                <section>
                  <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                    Tips for making the best cinnamon rolls
                  </h3>
                  <p>Don&#39;t overheat your milk. It should be between 105-115 degrees F</p>
                  <p>Make sure to use room temperature butter for the filling</p>
                  <p>Rub the brown sugar into the butter</p>
                  <p>Make sure you flour your work surface and the rolling pin</p>
                  <p>Use a room temperature egg in the dough</p>
                </section>
              </Window>
            </div>
          </div>
        </div>
      </div>
      <p>
        Furthermore, do not use a line break to define a list. If you put <HtmlTag isSingle>br</HtmlTag> tag after every listed item it&#39;ll be an incorrect use of the tag.
        Check out examples below of incorrect usage line breaks and its corrections with explanations.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-50'>
            <p className='spacer bottom medium'>
              There&#39;s nothing wrong with using <HtmlTag isSingle>br</HtmlTag> inside listed items, but never do the following if you need to create lists:
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLListWithLineBreaks} />
          </div>
          <div className='col col--50 col--tablet-50'>
            <p className='spacer bottom medium'>
              If you use special HTML lists tags, you don&#39;t need to break lines after listed items as it is automatically inserted:
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLList} />
          </div>
        </div>
      </div>

      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-50'>
            <p className='spacer bottom medium'>
              There is another way to use line breaks wrong.
              You&#39;ll get validation error <i>element <HtmlTag isSingle>br</HtmlTag> not allowed as child of element <HtmlTag isSingle>br</HtmlTag> in this context</i>.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLListWithLineBreaksBetween} />
          </div>
          <div className='col col--50 col--tablet-50'>
            <p className='spacer bottom medium'>
              If you need extra gaps between listed items you should use for example CSS properties such as <code className='highlighted ghost'>padding</code> or <code className='highlighted ghost'>margin</code> instead of using line breaks between items.
              Also you can use CSS pseudo-classes such as <code className='highlighted ghost'>:nth-child()</code>, <code className='highlighted ghost'>:first-child</code>, <code className='highlighted ghost'>:last-child</code>, etc, to add additional gap some elements.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLList} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        You&#39;ll learn more about how to create lists in HTML below <button
          className={styles.post__anchor}
          onClick={handleScroll}>
          <FontAwesomeIcon icon={faArrowDown} />
          <span className='visually-hidden'>Scroll down</span>
        </button>
      </p>
      <p>
        But do not rush to give up on <HtmlTag isSingle>br</HtmlTag> element.
        No one forbids you to use line breaks.
        Line breaks can be useful for properly formating addresses and poetry. Check out examples below.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <p>
              Pay attention to the <HtmlTag isSingle>address</HtmlTag> tag below.
              This element indicates that its content provides some contact information.
            </p>
            <p className='spacer bottom medium'>
              It can be email addresses, addresses of web pages, physical addresses, geographic coordinates, phone numbers, social media links, etc.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLAddress} />
            <div className='spacer top medium'>
              <div className={styles.post__address}>
                <div className={styles.post__pin}>
                  <FontAwesomeIcon icon={faMapPin} />
                </div>
                <address className={styles.post__envelope}>
                  Santa Claus<br/>
                  123 Elf Road<br/>
                  North Pole<br/>
                  88888
                </address>
              </div>
            </div>
          </div>
          <div className='col col--50 col--tablet-100'>
            <p>
              HTML tag <HtmlTag isSingle>br</HtmlTag> is also useful for writing poems as mentioned above.
              Pay attention to the <HtmlTag isSingle>blockquote</HtmlTag> tag below.
              This element indicates that its content quoted from another source.
            </p>
            <p className='spacer bottom medium'>
              Don&#39;t settle for this implementation.
              There are many ways for creating quotes, using <HtmlTag isSingle>blockquote</HtmlTag> is just one of them.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLBlockquote} />
            <div className='spacer bottom medium'>
              <div className={styles.post__sticker}>
                <div className={styles.post__pin}>
                  <FontAwesomeIcon icon={faMapPin} />
                </div>
                <blockquote className={styles.post__poem}>
                  Roses are red<br/>
                  Violets are blue<br/>
                  Sugar is sweet<br/>
                  And so are you
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        Regarding accessibility: don&#39;t worry about it, <HtmlTag isSingle>br</HtmlTag> will cause screen readers to put in a small pause.
      </p>
    </>
  );
};

export default PostFormatting;
