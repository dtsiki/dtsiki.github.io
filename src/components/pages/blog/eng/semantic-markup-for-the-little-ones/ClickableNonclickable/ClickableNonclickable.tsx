import { IClickableNonclickableProps } from './ClickableNonclickable.types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';

import styles from './ClickableNonclickable.module.scss';

export const ClickableNonclickable = ({ handleScroll }: IClickableNonclickableProps) => {
  const bind = classNames.bind(styles);

  const exampleHTMLClickableUnclickable = `<div
  class="button"
  onclick="doSomething()">
  I'm a button!
</div>`;

  const exampleHTMLClickableClickable = `<button
  class="button"
  onclick="doSomething()">
  No, I'm a button!
</button>`;

  const doSomething = (): void => {
    console.log('do something');
  };

  return (
    <>
      <h2>Do not make unclickable elements clickable</h2>
      <p>
        One of the most common anti-pattern is adding click event listeners to HTML elements that aren&#39;t usually
        clickable. For example, there are a lot of guides how to make divs clickable. To be honest, there is no need to
        reinvent the wheel because HTML provides us clickable elements under the hood such as buttons and links. Buttons
        allow users to interact with web content and links allow users to discover more content between pages.
      </p>
      <div className={styles.post__snippet}>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <CodeSnippet lang={ECodeLang.HTML} name='index' code={exampleHTMLClickableUnclickable} />
            <div className={bind([styles.clickable_nonclickable__example, 'spacer top medium'])}>
              <div
                className={styles.clickable_nonclickable__button}
                onClick={() => {
                  doSomething;
                }}
                aria-hidden='true'>
                I&#39;m a button!
              </div>
            </div>
          </div>
          <div className='col col--50 col--tablet-100'>
            <CodeSnippet lang={ECodeLang.HTML} name='index' code={exampleHTMLClickableClickable} />
            <div className={bind([styles.clickable_nonclickable__example, 'spacer top medium'])}>
              <button
                className={styles.clickable_nonclickable__button}
                onClick={() => {
                  doSomething;
                }}>
                No, I&#39;m a button!
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className='spacer top large'>
        Technically both examples above do the same thing and look the same, but it&#39;s not that easy. What&#39;s the
        difference if the fake button works? Yes, you can make everything from divs, but you&#39;ll lose a lot of the
        benefits of using a semantically correct clickable elements. They are not obvious, but they are like an iceberg
        hidden under water. At first, you&#39;ll lose accessibility, embed keyboard control and user experience. At
        second, you&#39;ll have to use additional JavaScript code to make divs interactive.
      </p>
      <p>
        Many articles have been written on this subject, you can find some interesting, in my view, at the end of the
        page{' '}
        <button className={styles.post__anchor} onClick={handleScroll}>
          <FontAwesomeIcon icon={faArrowDown} />
          <span className='visually-hidden'>Scroll to note</span>
        </button>
      </p>
    </>
  );
};
