import React, { ReactElement } from 'react';

import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';
import HtmlTag from 'src/components/common/HtmlTag';

import styles from './post.module.scss';

const PostDivs = (): ReactElement => {
  const exampleHTMLNonSemanticMarkup =
`<div>
  <div>Hello</div>
  <div>
    <div>
      <div>
        <div>Home</div>
      </div>
      <div>
        <div>About</div>
      </div>
      <div>
        <div>Blog</div>
      </div>
    </div>
  </div>
</div>`;

  const exampleHTMLSemanticMarkup =
`<header>
  <h1>Hello</h1>
  <nav>
    <ul>
      <li>
        <a href='/home'>Home</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
      <li>
        <a href='/blog'>Blog</a>
      </li>
    </ul>
  </nav>
</header>`;

  const exampleHTMLDivsHell =
`                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

  return (
    <>
      <h2>Do not use <HtmlTag isSingle>div</HtmlTag> for everything</h2>
      <p>
        There are a lot of various semantic tags in HTML.
        There are six tags fonly or headings.
        There are dozen tags for text formatting.
        Tables, inputs, lists...
        After all HTML5 was presented us even more new tags: for headers, navs, footers, sections, articles...
        There are plenty to choose from.
        It will need to write a separate article only about all HTML tags.
      </p>
      <p>
        It may seem like too much tags so sometimes it seems easier to use divs for everything.
        Of course, it will work fine with using only divs, but you will drown in divs hell.
        Do you want it?
      </p>
      <Code
        language={CodeLanguage.HTML}
        name='Stairway to hell'
        code={exampleHTMLDivsHell} />
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <p>
              In this example below is used only divs elements.
              Nothing is clear when you first look at this markup.
              In addition, you&#39;ll have to use unnecessary JavaScript code with this markup to make this fake links clickable.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLNonSemanticMarkup} />
          </div>
          <div className='col col--50 col--tablet-100'>
            <p>
              In this example is used semantic tags.
              It&#39;s clear to see that is going on here: that&#39;s a header with a nav with links.
              There are no additional JavaScript because HTML tag <HtmlTag isSingle>a</HtmlTag> does all the work for us by creating all links.
            </p>
            <Code
              language={CodeLanguage.HTML}
              name='index'
              code={exampleHTMLSemanticMarkup} />
          </div>
        </div>
      </div>
      <p className='spacer top medium'>
        What follows from this? Use <HtmlTag isSingle>div</HtmlTag> element only to structure layout, for the rest you should use appropriate semantic elements.
      </p>
    </>
  );
};

export default PostDivs;
