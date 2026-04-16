import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { HERO_CONFIG, SOURCES_CONFIG } from './index.utils';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import { ReadMoreList } from 'src/components/blog/ReadMoreList/ReadMoreList';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import ExternalLink from 'src/components/common/ExternalLink';
import { Window } from 'src/components/common/Window/Window';
import HtmlTag from 'src/components/common/HtmlTag';

import styles from './index.module.scss';
import dimension1 from 'public/assets/blog/pure-css-toggle-switch/dimension1.svg';
import dimension2 from 'public/assets/blog/pure-css-toggle-switch/dimension2.svg';
import dimension3 from 'public/assets/blog/pure-css-toggle-switch/dimension3.svg';
import electricalToggle from 'public/assets/blog/pure-css-toggle-switch/electrical-toggle.jpg';
import lightSwitch from 'public/assets/blog/pure-css-toggle-switch/light-switch.jpg';
import keyboardSwitch from 'public/assets/blog/pure-css-toggle-switch/keyboard-switch.png';

const Post = () => {
  const [isToggledDemo, setIsToggledDemo] = useState<boolean>(false);
  const [isToggledDraft, setIsToggledDraft] = useState<boolean>(false);
  const [isToggledDraft1, setIsToggledDraft1] = useState<boolean>(false);
  const [isToggledDraft2, setIsToggledDraft2] = useState<boolean>(false);
  const [isToggledDraft3, setIsToggledDraft3] = useState<boolean>(false);
  const [isToggledDraft4, setIsToggledDraft4] = useState<boolean>(false);

  const bind = classNames.bind(styles);

  const renderToggleLabel = (isToggled: boolean) => {
    return isToggled ? 'On' : 'Off';
  };

  const toggleSwitchDemo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDemo(e.target.checked);
  };

  const toggleSwitchDraft = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDraft(e.target.checked);
  };

  const toggleSwitchDraft1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDraft1(e.target.checked);
  };

  const toggleSwitchDraft2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDraft2(e.target.checked);
  };

  const toggleSwitchDraft3 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDraft3(e.target.checked);
  };

  const toggleSwitchDraft4 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsToggledDraft4(e.target.checked);
  };

  const exampleHTMLMarkup = `<label class="toggle">
  <input class="toggle__checkbox" type="checkbox" />
  <span class="toggle__switch"></span>
  <span class="toggle__label">On</span>
</label>`;

  const exampleCSSToggleInput = `.toggle__checkbox {
  position: absolute;
  visibility: hidden;
}`;

  const exampleCSSToggle = `.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}`;

  const exampleCSSToggleLabel = `.toggle__label {
  margin-left: 10px;
}`;

  const exampleCSSToggleSwitchMagicNumbers = `.toggle__switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 32px;
  border-radius: 32px;
  background: #dddddd;
  transition: background 0.25s;
}`;

  const exampleCSSToggleSwitchVariables = `.toggle__switch {
  position: relative;
  display: inline-block;
  width: $width * 2 + ($gap * 2);
  height: $width + ($gap * 2);
  border-radius: $width + ($gap * 2);
  background: #dddddd;
  transition: background 0.25s;
}`;

  const exampleCSSToggleSwitchBefore = `.toggle__switch {
  &:before {
    position: absolute;
    top: $gap;
    left: $gap;
    width: $width;
    height: $width;
    background: #ffffff;
    border-radius: 50%;
    transition: left 0.25s;
  }
}`;

  const exampleCSSToggleChecked = `.toggle__checkbox {
  position: absolute;
  visibility: hidden;

  &:checked ~ {
    .toggle__switch {
      background: #8a2be2;

      &:before {
        left: 50%;
      }
    }
  }
}`;

  const exampleCSS = `.toggle {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &__checkbox {
    position: absolute;
    visibility: hidden;

    &:checked ~ {
      .toggle__switch {
        background: #8a2be2;

        &:before {
          left: 50%;
        }
      }
    }
  }

  &__label {
    margin-left: 10px;
  }

  &__switch {
    position: relative;
    display: inline-block;
    width: $width * 2 + ($gap * 2);
    height: $width + ($gap * 2);
    border-radius: $width + ($gap * 2);
    background: #dddddd;
    transition: background 0.25s;

    &:before {
      position: absolute;
      top: $gap;
      left: $gap;
      width: $width;
      height: $width;
      background: #ffffff;
      border-radius: 50%;
      transition: left 0.25s;
    }
  }
}`;

  const exampleCSSVariables = `$width: 24px;
$gap: 4px;`;

  return (
    <PostWrapper postConfig={POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH]} heroConfig={HERO_CONFIG}>
      <section>
        <h2 className='spacer top large'>What is a toggle switch?</h2>
        <p className='spacer bottom medium'>
          A toggle switch (known also as a «toggle» or just a «switch») is one of the common and classic an user
          interface control that has two mutually-exclusive states such as on and off. It came from real life: toggles
          are the digital equivalent of actual switches:
        </p>
        <Window type={EWindowType.CUSTOM} pattern={EWindowPatternVariant.SMILEY}>
          <div className={styles.post__gallery}>
            <div className={bind([styles.post__image, styles.ELECTRICAL_TOGGLE])}>
              <Window type={EWindowType.IMAGE} title='GALLERY' fileTitle='electrical-toggle.jpg'>
                <Image
                  layout='responsive'
                  src={electricalToggle}
                  alt='A electrical toggle switch with two signs: off and on'
                />
              </Window>
            </div>
            <div className={bind([styles.post__image, styles.LIGHT_SWITCH])}>
              <Window type={EWindowType.IMAGE} title='GALLERY' fileTitle='light-switch.jpg'>
                <Image layout='responsive' src={lightSwitch} alt='A white light switch' />
              </Window>
            </div>
            <div className={bind([styles.post__image, styles.KEYBOARD_SWITCH])}>
              <Window type={EWindowType.IMAGE} title='GALLERY' fileTitle='keyboard-switch.jpg'>
                <Image layout='responsive' src={keyboardSwitch} alt='A purple keyboard switch' />
              </Window>
            </div>
          </div>
        </Window>
        <p className='explanation'>
          Types of switches in the real world: keyboard switch, electrical toggle and light switch{' '}
        </p>
        <p className='spacer top large'>
          It may seem that toggles and checkboxes are the same, but they aren&#39;t. At first it seems, checkboxes as
          well as toggles also have two states: unselected and selected. Actually, checkboxes have three states:
          unselected, selected, and <span className='accented accented--primary'>indeterminate</span> while toggles are
          either off or on.
        </p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p>
                The second difference between toggles and checkboxes is a type of response: instant or not. Use a toggle
                switch when you need an instant response on an action that this toggle switch performs. If you don&#39;t
                need an immediate effect you should use a checkbox. The example of the toggle with the instant response
                you can check out on the demo above.
              </p>
              <p className='spacer bottom medium'>
                On the right is an example of what we&#39;ll build in this tutorial.
              </p>
            </div>
            <div className='col col--50 col--tablet-100'>
              <div className='spacer top medium'>
                <Window type={EWindowType.CUSTOM} title='[toggle-switch-demo]'>
                  <div className={styles.post__demo}>
                    <label className='toggle'>
                      <input onChange={toggleSwitchDemo} className='toggle__checkbox' type='checkbox' />
                      <span className='toggle__switch' />
                      <span className='toggle__label'>{renderToggleLabel(isToggledDemo)}</span>
                    </label>
                  </div>
                </Window>
              </div>
            </div>
          </div>
        </div>
        <p>Let&#39;s go!</p>
      </section>
      <section>
        <h2>Step 1: Create a markup</h2>
        <p>
          Our future javascripless toggle has a quite simple HTML markup. To begin with, we need to add the skeleton.
          HTML element <HtmlTag isSingle>label</HtmlTag> is this skeleton. Then there are three nested elements each of
          whom has their own job.
        </p>
        <p>
          A toggle input is the most important nested element. HTML element <HtmlTag isSingle>input</HtmlTag> is used to
          create interactive and complex control. Selected type <code className='highlighted ghost'>checkbox</code>{' '}
          means that this input allows single values to be selected or deselected. Do not be confused by checkbox type.
          Nest the toggle input directly inside <HtmlTag isSingle>label</HtmlTag> element to associate our wrapper with
          an <HtmlTag isSingle>input</HtmlTag>. In this case the <code className='highlighted ghost'>for</code> and{' '}
          <code className='highlighted ghost'>id</code> attributes are not needed because the association is implicit.
        </p>
        <p>
          Next nested element is a toggle switch. The toggle swtich is required to customize the toggle. We&#39;ll deal
          with that in the next step and this element will not be visible until step 4.
        </p>
        <p>At least, a toggle label represents a caption for the toggle in user interface.</p>
        <p>
          Pay attention: there are no divs. HTML element <HtmlTag isSingle>div</HtmlTag> not allowed as child of element{' '}
          <HtmlTag isSingle>label</HtmlTag> because it&#39;s a block element and we cannot place a block element inside
          of an inline element. Why? Check out my article{' '}
          <ExternalLink label='Semantic markup for the little ones' href='/blog/semantic-markup-for-the-little-ones' />.
          Using HTML inline element <HtmlTag isSingle>span</HtmlTag> for the toggle switch and the toggle label allows
          us to place it inside of the <HtmlTag isSingle>label</HtmlTag> element.
        </p>
        <p>Putting it all together, here&#39;s what the required markup looks like:</p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} name='index' code={exampleHTMLMarkup} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <Window type={EWindowType.CUSTOM} title='[toggle-switch-draft]'>
                <div className={styles.post__demo}>
                  <label>
                    <input onChange={toggleSwitchDraft} type='checkbox' />
                    <span> {renderToggleLabel(isToggledDraft)}</span>
                  </label>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <p>You need take a note: HTML markup will remains the same until the end of this tutorial.</p>
        <p>
          The toogle doesn&#39;t look very good so far, but verything in its own time. Let&#39;s start customizing
          with...
        </p>
      </section>
      <section>
        <h2>Step 2: Hide the input element</h2>
        <p>
          We&#39;re going to create custom toggle interface therefore we have to hide the input element because its
          appearance it&#39;s not needed.
        </p>
        <p>
          CSS property <code className='highlighted ghost'>visibility: hidden;</code> allows to hide the toggle input
          without changing the layout. The input is invisible, but still affects the toggle as normal - try to click on
          the label in the demo below to see it.
        </p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggleInput} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <Window type={EWindowType.CUSTOM} title='[toggle-switch-draft(1)]'>
                <div className={styles.post__demo}>
                  <label>
                    <input onChange={toggleSwitchDraft1} className='toggle__checkbox' type='checkbox' />
                    <span> {renderToggleLabel(isToggledDraft1)}</span>
                  </label>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <p>The demo above looks lonely, but wait a minute and scroll to the next step.</p>
      </section>
      <section>
        <h2>Step 3: Make the toggle fancy ✨</h2>
        <p>Next up, let&#39;s start to customize the toggle.</p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p>
                At first, we should think about an user interface. CSS property{' '}
                <code className='highlighted ghost'>cursor: pointer;</code> will indicate to users that the whole toggle
                is a clickable element.
              </p>
              <p>
                There are no more required styles for the toggle skeleton. CSS property{' '}
                <code className='highlighted ghost'>display: inline-flex;</code> with{' '}
                <code className='highlighted ghost'>align-items: center;</code> is optional here. CSS Flexbox property{' '}
                <code className='highlighted ghost'>align-items</code> centers the toggle content along the cross axis.
              </p>
            </div>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggle} />
            </div>
          </div>
        </div>
        <p>At second, let&#39;s customize the toggle label.</p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggleLabel} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <p>You can do whatever you want with this element. All to your taste!</p>
              <p>
                Also, take a note that you can feel free to experiment with the layout of the toggle label. For example,
                you can lift it up the HTML markup before the toggle switch to align the label on the left. It won&#39;t
                affect toggle behavior.
              </p>
            </div>
          </div>
        </div>
        <p className='note spacer top large'>
          <span className='note__title'>Please: </span> don&#39;t ignore the toggle label! Label makes it clear what
          option the toggle controls, as well as what state the toggle right now. Also one of the best practise is
          writing clear labels. The toggle labels should describe what the control will do when the switch is on.
        </p>
        <p className='spacer top large'>
          And thirdly, we&#39;re going to customize the toggle switch itself. There are a lot of different{' '}
          <ExternalLink href='https://dribbble.com/tags/toggle' label='toggle user interfaces' />. I&#39;ve chosen one
          of the classic style with rounded edges and a sliding ball as you can see early.
        </p>
        <p>Here are the related styles and some intermediate result:</p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggleSwitchMagicNumbers} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <Window type={EWindowType.CUSTOM} title='[toggle-switch-draft(2)]'>
                <div className={styles.post__demo}>
                  <label className='toggle'>
                    <input onChange={toggleSwitchDraft2} className='toggle__checkbox' type='checkbox' />
                    <span className={styles.post__toggle_switch_without_ball} />
                    <span className='toggle__label'> {renderToggleLabel(isToggledDraft2)}</span>
                  </label>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <p>
          As you can see, there are a few{' '}
          <span className='tooltip primary large'>
            magic numbers <FontAwesomeIcon icon={faExclamationCircle} />
            <span className='tooltip__message'>
              Magic numbers are unique values, typically numerical, with unexplained meaning in a code that could be
              replaced by a named constant.
            </span>
          </span>
          . The magic numbers are 56 and 32. We needed to do something with them. Let&#39;s define two variables.
        </p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p>
                I&#39;ve used to declare two SASS variables as I&#39;ve used SASS here. You can use CSS variables or
                completely refuse using variables and write all values directly in CSS properties as written above.
              </p>
              <p>
                The first variable is a size of the toggle switch ball that we&#39;ll implement in the next step. The
                second variable is a gap between edges of the toggle.
              </p>
            </div>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} customName='index.scss' code={exampleCSSVariables} />
            </div>
          </div>
        </div>
        <p className='spacer bottom large'>
          Let me explain. The whole toggle consists of two equal parts and the toggle ball slips between them,
          therefore, the toggle switch is equal to <code className='highlighted ghost'>$width * 2 + ($gap * 2)</code>,
          height is equal to <code className='highlighted ghost'>$width + ($gap * 2)</code> and border radius is equal
          to <code className='highlighted ghost'>$width + ($gap * 2)</code>. Next we&#39;re going to create the toggle
          switch ball with radius is equal to <code className='highlighted ghost'>$width</code> and set indentation from
          egdes equal to <code className='highlighted ghost'>$gap</code>. To understand check out figures below.
        </p>
        <div className={bind(['row', styles.post__dimensions])}>
          <div className='col col--33 col--tablet-100'>
            <Image src={dimension2} layout='responsive' objectFit='cover' />
          </div>
          <div className='col col--33 col--tablet-100'>
            <Image src={dimension3} layout='responsive' objectFit='cover' />
          </div>
          <div className='col col--33 col--tablet-100'>
            <Image src={dimension1} layout='responsive' objectFit='cover' />
          </div>
        </div>
        <p className='explanation'>Explanation of toggle switch dimensions</p>
        <div className='flex h-centered'>
          <div className='row spacer top large'>
            <div className='col col--50 col--tablet-100'>
              <p>Check out the example in the right. With a bit of modification, we get the following code.</p>
              <p>
                It looks confusing and a bit incomprehensible now, but this changes make the toggle style more flexible.
                If you ever want to change the toggle size, you need only edit two variables. Also you don&#39;t have to
                calculate anything.
              </p>
              <p>
                Try to avoid magic numbers wherever possible. Everything is made much clearer when we replace magic
                numbers with descriptive names since it makes a code easier to read and makes it more maintainable since
                we can update the value of the magic number by changing its variable assignment.
              </p>
            </div>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.JAVASCRIPT} customName='index.scss' code={exampleCSSToggleSwitchVariables} />
            </div>
          </div>
        </div>
        <p className='spacer top large'>
          Move on. The result are still far from satisfactory, but it won&#39;t be long now, I promise.
        </p>
      </section>
      <section>
        <h2>Step 4: Create the toggle switch ball</h2>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p className='spacer bottom medium'>
                To build the toggle switch ball, we&#39;ll define <code className='highlighted ghost'>::before</code>{' '}
                pseudo-element. It will allow to avoid using additional HTML element in our markup.
              </p>
              <p>The toggle switch ball style is a little tricky, isn&#39;t? Let&#39;s clear it up.</p>
              <Window type={EWindowType.CUSTOM} title='[toggle-switch-draft(3)]'>
                <div className={styles.post__demo}>
                  <label className='toggle'>
                    <input onChange={toggleSwitchDraft3} className='toggle__checkbox' type='checkbox' />
                    <span className={styles.post__toggle_switch_with_before} />
                    <span className='toggle__label'> {renderToggleLabel(isToggledDraft3)}</span>
                  </label>
                </div>
              </Window>
            </div>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggleSwitchBefore} />
            </div>
          </div>
        </div>
        <p>
          The toggle switch ball style depends on the toggle switch size that we defined above. As mentioned above, the
          toggle consists of two equal parts that are tied together - on and off. The ball slips between them from the
          left to the right and vice versa. With a few simple calculations, you can find out that the ball size directly
          depends on the size of the toggle: the ball width is two times less than the toggle width and the ball height
          is equal to the toggle height. Also we need to add some indentation between the edge of the toggle and the
          ball. Here we used already familiar variables <code className='highlighted ghost'>$width</code> and{' '}
          <code className='highlighted ghost'>$gap</code>.
        </p>
        <p>And that&#39;s all here!</p>
      </section>
      <section>
        <h2>Step 5: Add the toggle animation</h2>
        <p>
          As you may have noticed, the toggle above does not switch. Let&#39;s revive out it! We&#39;ll specify some
          more custom styles. This is the most important part of styling.
        </p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSSToggleChecked} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <Window type={EWindowType.CUSTOM} title='[toggle-switch-draft(4)]'>
                <div className={styles.post__demo}>
                  <label className='toggle'>
                    <input onChange={toggleSwitchDraft4} className='toggle__checkbox' type='checkbox' />
                    <span className='toggle__switch' />
                    <span className='toggle__label'> {renderToggleLabel(isToggledDraft4)}</span>
                  </label>
                </div>
              </Window>
            </div>
          </div>
        </div>
        <p>
          What&#39;s going on here? CSS pseudo-class selector <code className='highlighted ghost'>:checked</code>{' '}
          represents HTML checkbox element that is checked or toggled to an on state.
        </p>
        <p>
          As a result, then checkbox is checked, it will be changed CSS property{' '}
          <code className='highlighted ghost'>background</code> and changed the toggle switch ball position. The
          percentage positioning with <code className='highlighted ghost'>left: 50%;</code> is used here instead of
          using another magic number such as <code className='highlighted ghost'>left: 28px;</code>.
        </p>
        <div className='flex h-centered'>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <p className='spacer botton medium'>Here are the finished markup and styles:</p>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.html' code={exampleHTMLMarkup} />
            </div>
            <div className='col col--50 col--tablet-100'>
              <CodeSnippet lang={ECodeLang.CSS} customName='index.scss' code={exampleCSS} />
            </div>
          </div>
        </div>
        <p className='spacer top large'>That's all you need to know about pure CSS toggle switches.</p>
      </section>
      <ReadMoreList items={SOURCES_CONFIG} language={POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH].language} />
    </PostWrapper>
  );
};

export default Post;
