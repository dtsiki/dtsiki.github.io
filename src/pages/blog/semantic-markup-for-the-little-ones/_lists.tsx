import React, { ReactElement } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import HtmlTag from 'src/components/common/HtmlTag';
import Window from 'src/components/common/Window';

import styles from './post.module.scss';

const PostLists = (): ReactElement => {
  const bind = classNames.bind(styles);

  const exampleHTMLUl =
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

  const exampleHTMLOl =
`<h3>Tips for making the best cinnamon rolls</h3>
<ol>
  <li>Don't overheat your milk</li>
  <li>Use room temperature butter</li>
  <li>Rub the sugar into the butter</li>
  <li>Use a room temperature egg</li>
  <li>Use bread flour</li>
  <li>Mix the dough with a wooden spoon</li>
  <li>Flour your work surface</li>
</ol>`;

  const exampleHTMLDl =
`<h3>Ingredients</h3>
<dl>
  <dt>Milk</dt>
  <dd>- 2% or whole milk</dd>
  <dt>Yeast</dt>
  <dd>- quick rise or instant yeast</dd>
  <dt>Butter</dt>
  <dd>- salted or unsalted</dd>
  <dt>Sugar</dt>
  <dd>- dark brown sugar</dd>
</dl>`;

  const exampleHTMLNavList =
`<nav>
  <ul>
    <li>
      <a href='/'>Home</a>
    </li>
    <li>
      <a href='/about'>About</a>
    </li>
    <li>
      <a href='/projects'>Projects</a>
    </li>
    <li>
      <a href='/blog'>Blog</a>
    </li>
  </ul>
</nav>`;

  const exampleHTMLNested =
`<h3>Ingredients</h3>
<ul>
  <li>
    For the dough
    <ul>
      <li>¾ cup warm milk</li>
      <li>2 ¼ teaspoons yeast</li>
      <li> ¼ cup sugar</li>
      <li>1 egg + 1 egg yolk</li>
      <li>¼ cup butter</li>
      <li>3 cups flour</li>
      <li>3/4 teaspoon salt</li>
    </ul>
  </li>
  <li>
    For the filling
    <ul>
      <li>2/3 cup brown sugar</li>
      <li>1 ½ tablespoons cinnamon </li>
      <li>¼ cup butter</li>
    </ul>
  </li>
</ul>`;

  return (
    <>
      <h2>Use appropriate markup for lists</h2>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <p>
              Lists are very useful way to organize content.
              They help perceive and understand an information in web pages.
            </p>
            <p className='spacer bottom medium'>
              Of course, HTML supports lists.
              Seems like there are not a lot of lists in web pages, but actually there are.
              For example, any navigation is logically list of links.
              Take a look below at the navigation I&#39;ve been using myself:
            </p>
            <Window>
              <nav className={styles.post__menu}>
                <ul className='list inline'>
                  <li className='list__item'>
                    <Link href='/'>
                      <a className='link'>Home</a>
                    </Link>
                  </li>
                  <li className='list__item'>
                    <Link href='/about'>
                      <a className='link'>About</a>
                    </Link>
                  </li>
                  <li  className='list__item'>
                    <Link href='/projects'>
                      <a className='link'>Projects</a>
                    </Link>
                  </li>
                  <li  className='list__item'>
                    <Link href='/blog'>
                      <a className='link'>Blog</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Window>
          </div>
          <div className='col col--50 col--tablet-100'>
            <div className='spacer top small'>
              <Code
                language={CodeLanguage.HTML}
                name='index'
                code={exampleHTMLNavList} />
            </div>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        There are two types of lists in HTML: mentioned above <HtmlTag isSingle>ul</HtmlTag> element is for unordered lists and <HtmlTag isSingle>ol</HtmlTag> for ordered.
        The first is typically rendered as a bulleted list, the second one is typically rendered as a numbered list.
        HTML element <HtmlTag isSingle>li</HtmlTag> is used to represent an item in all types of lists.
        The browser&#39;s default styling dictates that unordered lists <HtmlTag isSingle>ul</HtmlTag> have bullets and ordered lists <HtmlTag isSingle>ol</HtmlTag> have numbers.
        However, using CSS properties like <code className='highlighted ghost'>list-style-type</code> you may change this default styles.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLUl} />
            <div className='spacer top medium'>
              <Window>
                <>
                  <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                    Ingredients
                  </h3>
                  <ul className='list markered'>
                    <li className='list__subtitle'>Milk</li>
                    <li className='list__subtitle'>Sugar</li>
                    <li className='list__subtitle'>Quick rise yeast</li>
                    <li className='list__subtitle'>Butter</li>
                    <li className='list__subtitle'>Egg + egg yolk</li>
                    <li className='list__subtitle'>Bread flour</li>
                    <li className='list__subtitle'>Cinnamon</li>
                  </ul>
                </>
              </Window>
            </div>
          </div>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLOl} />
            <div className='spacer top medium'>
              <Window>
                <>
                  <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                    Tips for making the best cinnamon rolls
                  </h3>
                  <ol className='list ordered'>
                    <li className='list__subtitle'>Don&#39;t overheat your milk</li>
                    <li className='list__subtitle'>Use room temperature butter</li>
                    <li className='list__subtitle'>Rub the sugar into the butter</li>
                    <li className='list__subtitle'>Use a room temperature egg</li>
                    <li className='list__subtitle'>Use bread flour</li>
                    <li className='list__subtitle'>Mix the dough with a wooden spoon</li>
                    <li className='list__subtitle'>Flour your work surface</li>
                  </ol>
                </>
              </Window>
            </div>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        But in fact, there is third type of HTML lists: <HtmlTag isSingle>dl</HtmlTag>. What does it mean?
        This element encloses a list of groups of terms specified using the <HtmlTag isSingle>dt</HtmlTag> element and descriptions provided by <HtmlTag isSingle>dd</HtmlTag> elements.
        The main reason for description lists is to preserve semantic connection for term-value pairs which would get lost if we just used unordered or ordered lists.
        Description lists also have default browser&#39;s style, check it out in the example below.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLDl} />
          </div>
          <div className='col col--50 col--tablet-100'>
            <Window>
              <>
                <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                  Ingredients
                </h3>
                <dl>
                  <dt className='list__title'>Milk</dt>
                  <dd className='list__footer'>- 2% or whole milk</dd>
                  <dt className='list__title'>Yeast</dt>
                  <dd className='list__footer'>- quick rise or instant yeast</dd>
                  <dt className='list__title'>Butter</dt>
                  <dd className='list__footer'>- salted or unsalted</dd>
                  <dt className='list__title'>Sugar</dt>
                  <dd className='list__footer'>- dark brown sugar</dd>
                </dl>
              </>
            </Window>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        Let&#39;s be honest, descriptions are not the most popular kind of HTML lists, but feel free to use it because there are not any restrictions for its usage.
      </p>
      <p>
        And not to forget about one of the most important feature of using lists: every list can be nested into another.
        Lists may be nested as deeply as desired.
        Nesting lists allow us to structurize web pages content and create nested dropdown navigations.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLNested} />
          </div>
          <div className='col col--50 col--tablet-100'>
            <Window>
              <>
                <h3 className={bind([styles.post__subtitle, 'spacer bottom small'])}>
                  Ingredients
                </h3>
                <ul className='list nested'>
                  <li className='list__title'>
                    For the dough
                    <ul className='list nested'>
                      <li className='list__subtitle'>¾ cup warm milk</li>
                      <li className='list__subtitle'>2 ¼ teaspoons yeast</li>
                      <li className='list__subtitle'> ¼ cup sugar</li>
                      <li className='list__subtitle'>1 egg + 1 egg yolk</li>
                      <li className='list__subtitle'>¼ cup butter</li>
                      <li className='list__subtitle'>3 cups flour</li>
                      <li className='list__subtitle'>3/4 teaspoon salt</li>
                    </ul>
                  </li>
                  <li className='list__title'>
                    For the filling
                    <ul className='list nested'>
                      <li className='list__subtitle'>2/3 cup brown sugar</li>
                      <li className='list__subtitle'>1 ½ tablespoons cinnamon </li>
                      <li className='list__subtitle'>¼ cup butter</li>
                    </ul>
                  </li>
                </ul>
              </>
            </Window>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLists;
