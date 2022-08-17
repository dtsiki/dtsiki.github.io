import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faSmile } from '@fortawesome/free-solid-svg-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';

import styles from './post.module.scss';
import PostTitle from './_title';

const Post = (): ReactElement => {
  const bind = classNames.bind(styles);

  const step1HTML = `<div class="tooltip">
  {{ tooltip trigger }}
</div>`;

  const step1CSS = `.tooltip {
  position: relative;
}`;

  const step2HTML = `<div class="tooltip">
  {{ tooltip trigger }}
  <div class="tooltip__message">
    {{ tooltip message }}
  </div>
</div>`;

  const step2CSS = `.tooltip {
  position: relative;
}

.tooltip__message {
  position: absolute;
}`;

  const step3CSS = `.tooltip {
  position: relative;

  &:hover {
    .tooltip__message {
      opacity: 1;
    }
  }
}

.tooltip__message {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}`;

  const step4HTML = `<div class="tooltip tooltip--primary">
  {{ tooltip trigger }}
  <div class="tooltip__message">
    {{ tooltip message }}
  </div>
</div>`;

  const step4CSS = `.tooltip {
  position: relative;

  &--primary {
    {{ custom trigger style }}

    .tooltip__message {
      {{ custom message style }}
    }
  }
}`;

  const step4HTML2 = `<div class="tooltip tooltip--right">
  {{ tooltip trigger }}
  <div class="tooltip__message">
    {{ tooltip message }}
  </div>
</div>`;


  const step4CSS2 = `.tooltip {
  position: relative;

    &--right {
      .tooltip__message {
        top: calc(50% - 14px);
        right: -145px;
      }
  }
}`;

  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={<PostTitle />}
        highlight='This tutorial shows you how to create a tooltip using only CSS without any additional JavaScript code.'
        category='tutorial'
        date='july 30, 2022'>
        <section>
          <h2>What is a tooltip?</h2>
          <p>
            Tooltips are used to give some information on how the website or the app works. It&#39;s a short message that appears when a user interacts with a specific element on a website or in an app.
          </p>
          <p>
            Traditionally, tooltips appeared when the user hovered cursor over an triggering element. Let&#39;s make this type of it.
          </p>
        </section>
        <section>
          <h2>Step 1: Create a triggering element</h2>
          <p>
            It will be the very important element to which we want to add a tooltip message. When the user mouse over this element will be shown the tooltip.
          </p>
          <p>
            You can customize this element whatever you want. It can be a text, an icon, etc, but don&#39;t forget to use <code>position: relative;</code> property. It needs for positioning the tooltip itself.
          </p>
          <div className={styles.post__highlighter}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step1HTML}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>index.html</span>
              </div>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step1CSS}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>style.css</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Step 2: Create a tooltip message</h2>
          <p>
            It&#39;s time to create our tooltip inside the triggering element. You have to add absolute positioning to it. The triggering element class use <code>position:relative;</code> which is needed to position the tooltip.
          </p>
          <div className={styles.post__highlighter}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step2HTML}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>index.html</span>
              </div>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step2CSS}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>style.css</span>
              </div>
            </div>
          </div>
          <p>Here&#39;s the result so far:</p>
          <div className={styles.post__example}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              size='2x' />
            <div>I&#39;m a tooltip!</div>
          </div>
        </section>

        <section>
          <h2>Step 3: Add triggering</h2>
          <p>
            Initially the tooltip is hidden with <code>opacity: 0;</code>. To showing the tooltip on triggering element hover set opacity property to 1.
          </p>
          <div className={styles.post__highlighter}>
            <div className='row'>
              <div className='col col--100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='css'
                    showLineNumbers>
                    {step3CSS}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>style.css</span>
              </div>
            </div>
          </div>
          <p>
            When you move the mouse over the icons below, the tooltip will fade in and take a moment to go from completely invisible to visible. The transition property along with opacity property is used to do this fade effect. Tooltip is almost done!
          </p>
          <div className={bind(['tooltip', styles.post__example])}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              size='2x' />
            <div className='tooltip__message'>I&#39;m a tooltip!</div>
          </div>
        </section>

        <section>
          <h2>Step 4: Customize</h2>
          <p>
            In the above step we don&#39;t style the tooltip at all. We can customize it however we want by using additional classes to define other custom style.
          </p>
          <div className={bind(['tooltip tooltip--primary', styles.post__example])}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              size='2x' />
            <div className='tooltip__message'>I&#39;m a tooltip!</div>
          </div>
          <div className={styles.post__highlighter}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step4HTML}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>index.html</span>
              </div>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step4CSS}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>style.css</span>
              </div>
            </div>
          </div>
          <p>
            We can change the position of the tooltip. Let&#39;s show the tooltip message on the right:
          </p>
          <div className={styles.post__highlighter}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step4HTML2}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>index.html</span>
              </div>
              <div className='col col--50 col--tablet-100'>
                <div className={styles.post__code}>
                  <SyntaxHighlighter
                    language='html'
                    showLineNumbers>
                    {step4CSS2}
                  </SyntaxHighlighter>
                </div>
                <span className={styles.post__fileName}>style.css</span>
              </div>
            </div>
          </div>
          <p>
            In a similar way we can set another position by adding modifiers like <code>tooltip--right</code>. Hover over the icons below to see the four tooltips directions: top, right, bottom, and left.
          </p>
          <div className={styles.post__directions}>
            <div>
              <div className={bind(['tooltip tooltip--right tooltip--primary', styles.post__example])}>
                <FontAwesomeIcon
                  icon={faSmile}
                  size='2x' />
                <div className='tooltip__message'>Left</div>
              </div>
            </div>
            <div>
              <div className={bind(['tooltip tooltip--bottom tooltip--primary', styles.post__example])}>
                <FontAwesomeIcon
                  icon={faSmile}
                  size='2x' />
                <div className='tooltip__message'>Bottom</div>
              </div>
            </div>
            <div>
              <div className={bind(['tooltip tooltip--top tooltip--primary', styles.post__example])}>
                <FontAwesomeIcon
                  icon={faSmile}
                  size='2x' />
                <div className='tooltip__message'>Top</div>
              </div>
            </div>
            <div>
              <div className={bind(['tooltip tooltip--left tooltip--primary', styles.post__example])}>
                <FontAwesomeIcon
                  icon={faSmile}
                  size='2x' />
                <div className='tooltip__message'>Right</div>
              </div>
            </div>
          </div>
          <p>
            And that&#39;s all there is to it!
          </p>
        </section>
        <section>
          <h2>Read more</h2>
          <ol className='list list--ordered'>
            <li className='list__item'>
              <ExternalLink
                href='https://sarahmhigley.com/writing/tooltips-in-wcag-21/'
                label='Tooltips in the time of WCAG 2.1' />
            </li>
            <li className='list__item'>
              <ExternalLink
                href='https://www.nngroup.com/articles/tooltip-guidelines/'
                label='Tooltip Guidelines' />
            </li>
            <li>
              <ExternalLink
                href='https://apps.eky.hk/css-triangle-generator/'
                label='CSS triangle generator for styling tooltips' />
            </li>
          </ol>
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
