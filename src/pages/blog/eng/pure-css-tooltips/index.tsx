import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faRocket } from '@fortawesome/free-solid-svg-icons';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import ExternalLink from 'src/components/common/ExternalLink';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';

import { HeroTooltipDemo } from 'src/components/pages/blog/eng/pure-css-tooltips/HeroTooltipDemo/HeroTooltipDemo';
import { CustomizedTooltipsDemo } from 'src/components/pages/blog/eng/pure-css-tooltips/CustomizedTooltipsDemo/CustomizedTooltipsDemo';
import { DirectionsTooltipDemo } from 'src/components/pages/blog/eng/pure-css-tooltips/DirectionsTooltipDemo/DirectionsTooltipsDemo';
import { DefaultTooltipDemo } from 'src/components/pages/blog/eng/pure-css-tooltips/DefaultTooltipDemo/DefaultTooltipDemo';
import { HERO_CONFIG } from './index.utils';

const Post = () => {
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
</div>
<div class="tooltip tooltip--secondary">
  {{ tooltip trigger }}
  <div class="tooltip__message">
    {{ tooltip message }}
  </div>
</div>`;

  const step4CSS = `.tooltip {
  position: relative;

  &--primary {
    {{ primary trigger style }}

    .tooltip__message {
      {{ primary message style }}
    }
  }

  &--secondary {
    {{ secondary trigger style }}

    .tooltip__message {
      {{ secondary message style }}
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
    <PostWrapper postConfig={POSTS_CONFIG_[EBlogPostRecord.PURE_CSS_TOOLTIPS]} heroConfig={HERO_CONFIG}>
      <section>
        <h2>What is a tooltip?</h2>
        <p>
          Tooltip is a short message that appears when a user interacts with a specific element. Tooltips are used to
          give some information on how the website or the app works. In short, tooltips are text boxes that display a
          brief explanation of the elements.
        </p>
        <p>
          Traditionally, tooltips appeared when the user hovered cursor over some elements. In this step-by-step
          tutorial you&#39;ll learn how to create this type of tooltips.
        </p>
        <p>Try out a live demo below:</p>
        <HeroTooltipDemo />
        <p className='spacer top medium'>
          Let&#39;s get into it step by step <FontAwesomeIcon icon={faRocket} color='#8a2be2' />
        </p>
      </section>
      <section>
        <h2>Step 1: Create a triggering element</h2>
        <p>
          There is no required markup for the tooltip in general. First of all create a triggering element. When the
          user mouse over this element&#39;ll be shown a tooltip message.
        </p>
        <DoubleCodeSnippet
          code={[step1HTML, step1CSS]}
          name={['index', 'style']}
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
        />
        <p>
          You can make as the triggering element anything you want. It can be a text, an icon, an card, etc. But
          don&#39;t forget to use <code className='highlighted secondary'>position: relative;</code> property. It needs
          for positioning the tooltip itself.
        </p>
        <p>
          In the example below an information icon <FontAwesomeIcon icon={faCircleInfo} color='#8a2be2' /> will be the
          triggering element.
        </p>
      </section>
      <section>
        <h2>Step 2: Create a tooltip message</h2>
        <p>
          Create a tooltip message inside the triggering element. You have to add absolute positioning to it because the
          triggering element class uses <code className='highlighted secondary'>position:relative;</code> which is
          needed to position the tooltip message relative to the tooltip element.
        </p>
        <DoubleCodeSnippet
          code={[step2HTML, step2CSS]}
          name={['index', 'style']}
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
        />
        <p>
          You also can customize the tooltip message element whatever you want. Usually tooltips have a contrasting
          color relative to other design and have a little arrow pointing to the triggering element that the tooltip
          message is referring to. We&#39;ll cover it next in the fourth step.
        </p>
        <p>Here&#39;s the result so far:</p>
        <DefaultTooltipDemo title='tooltip-demo(2).exe' disableTriggering={true} />
      </section>
      <section>
        <div className='spacer large bottom'>
          <div className='flex'>
            <div className='row'>
              <div className='col col--50 col--tablet-100 col--mobile-100'>
                <h2>Step 3: Add triggering</h2>
                <p>
                  By default, tooltip message is always hidden and then it&#39;ll appear on hover the triggering
                  element. There are many ways to hide it: using a display property, using a opacity property, etc.
                </p>
                <p>
                  Here I&#39;ve used the opacity property. Values for this property range from 0 to 1. Set the property
                  to 0 to make the tooltip message completely transparent. Then the opacity of the tooltip
                  message&#39;ll be changed on hover to opaque.
                </p>
                <p className='spacer bottom medium'>
                  Move mouse over icons below, to see how the tooltip&#39;ll fade in. The transition property along with
                  the opacity property is used to do this fade in effect.
                </p>
              </div>
              <div className='col col--50 col--tablet-100 col--mobile-100'>
                <CodeSnippet lang={ECodeLang.CSS} name='style' code={step3CSS} />
              </div>
            </div>
          </div>
        </div>
        <DefaultTooltipDemo title='tooltip-demo(3).exe' />
        <p className='spacer top medium'>Let&#39;s make tooltips fancy!</p>
      </section>
      <section>
        <h2>Step 4: Customize</h2>
        <p>You may use additional classes to customize tooltips.</p>
        <DoubleCodeSnippet
          code={[step4HTML, step4CSS]}
          name={['index', 'style']}
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
        />

        <p>
          In the example below you can see two variants of tooltip implemented by adding additional classes as described
          above. These additional classes are written in accordance with the BEM naming methodology, feel free to use
          your own style guide.
        </p>
        <CustomizedTooltipsDemo />
      </section>
      <section>
        <p>
          You can combine the techniques above in any fashion to change the position of the tooltip. Let&#39;s show the
          tooltip message on the right:
        </p>
        <DoubleCodeSnippet
          code={[step4HTML2, step4CSS2]}
          name={['index', 'style']}
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
        />
      </section>
      <section>
        <p>
          In a similar way we can set another position by adding modifiers like{' '}
          <code className='highlighted secondary'>tooltip--right</code>. Use top, bottom, left, and right properties to
          set the placement of tooltip messages. Values in the example below are calculated based on my layout. Hover
          over the icons below to see the tooltips four directions in action: top, right, bottom, and left.
        </p>
        <DirectionsTooltipDemo />
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>
          Don't be afraid to do something without using JavaScript. Frequently using any scripts or libraries can be
          unnecessary and pure HTML/CSS solutions can be simple and easy to implement.
        </p>
      </section>
      <section>
        <h2>Read more</h2>
        <ol className='list ordered'>
          <li className='list__item'>
            <ExternalLink
              href='https://sarahmhigley.com/writing/tooltips-in-wcag-21/'
              label='Tooltips in the time of WCAG 2.1'
            />
          </li>
          <li className='list__item'>
            <ExternalLink href='https://www.nngroup.com/articles/tooltip-guidelines/' label='Tooltip guidelines' />
          </li>
          <li>
            <ExternalLink
              href='https://apps.eky.hk/css-triangle-generator/'
              label='CSS triangle generator for styling tooltips'
            />
          </li>
        </ol>
      </section>
    </PostWrapper>
  );
};

export default Post;

/*
  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='tutorial'
        date='30 jul 2022'
        nextLink='drag-and-drop'
        nextLinkLabel='Drag and drop'
        metaDescription={metaDescription}
        metaTags={metaTags}
        tags={['HTML', 'CSS']}>
        <section>
          <h2>What is a tooltip?</h2>
          <p>
            Tooltip is a short message that appears when a user interacts with a specific element. Tooltips are used to
            give some information on how the website or the app works. In short, tooltips are text boxes that display a
            brief explanation of the elements.
          </p>
          <p>
            Traditionally, tooltips appeared when the user hovered cursor over some elements. In this step-by-step
            tutorial you&#39;ll learn how to create this type of tooltips.
          </p>
          <p>Try out a live demo below:</p>
          <HeroTooltipDemo />
          <p className='spacer top medium'>
            Let&#39;s get into it step by step <FontAwesomeIcon icon={faRocket} color='#8a2be2' />
          </p>
        </section>
        <section>
          <h2>Step 1: Create a triggering element</h2>
          <p>
            There is no required markup for the tooltip in general. First of all create a triggering element. When the
            user mouse over this element&#39;ll be shown a tooltip message.
          </p>
          <DoubleCodeSnippet
            code={[step1HTML, step1CSS]}
            name={['index', 'style']}
            lang={[ECodeLang.HTML, ECodeLang.CSS]}
          />
          <p>
            You can make as the triggering element anything you want. It can be a text, an icon, an card, etc. But
            don&#39;t forget to use <code className='highlighted secondary'>position: relative;</code> property. It
            needs for positioning the tooltip itself.
          </p>
          <p>
            In the example below an information icon <FontAwesomeIcon icon={faCircleInfo} color='#8a2be2' /> will be the
            triggering element.
          </p>
        </section>
        <section>
          <h2>Step 2: Create a tooltip message</h2>
          <p>
            Create a tooltip message inside the triggering element. You have to add absolute positioning to it because
            the triggering element class uses <code className='highlighted secondary'>position:relative;</code> which is
            needed to position the tooltip message relative to the tooltip element.
          </p>
          <DoubleCodeSnippet
            code={[step2HTML, step2CSS]}
            name={['index', 'style']}
            lang={[ECodeLang.HTML, ECodeLang.CSS]}
          />
          <p>
            You also can customize the tooltip message element whatever you want. Usually tooltips have a contrasting
            color relative to other design and have a little arrow pointing to the triggering element that the tooltip
            message is referring to. We&#39;ll cover it next in the fourth step.
          </p>
          <p>Here&#39;s the result so far:</p>
          <DefaultTooltipDemo disableTriggering={true} />
        </section>
        <section>
          <div className='spacer large bottom'>
            <div className={styles.post__snippet}>
              <div className='row'>
                <div className='col col--50 col--tablet-100 col--mobile-100'>
                  <h2>Step 3: Add triggering</h2>
                  <p>
                    By default, tooltip message is always hidden and then it&#39;ll appear on hover the triggering
                    element. There are many ways to hide it: using a display property, using a opacity property, etc.
                  </p>
                  <p>
                    Here I&#39;ve used the opacity property. Values for this property range from 0 to 1. Set the
                    property to 0 to make the tooltip message completely transparent. Then the opacity of the tooltip
                    message&#39;ll be changed on hover to opaque.
                  </p>
                  <p className='spacer bottom medium'>
                    Move mouse over icons below, to see how the tooltip&#39;ll fade in. The transition property along
                    with the opacity property is used to do this fade in effect.
                  </p>
                </div>
                <CodeSnippet lang={ECodeLang.CSS} name='style' code={step3CSS} />
              </div>
            </div>
          </div>
          <DefaultTooltipDemo />
          <p className='spacer top medium'>Let&#39;s make tooltips fancy!</p>
        </section>
        <section>
          <h2>Step 4: Customize</h2>
          <p>You may use additional classes to customize tooltips.</p>
          <DoubleCodeSnippet
            code={[step4HTML, step4CSS]}
            name={['index', 'style']}
            lang={[ECodeLang.HTML, ECodeLang.CSS]}
          />

          <p>
            In the example below you can see two variants of tooltip implemented by adding additional classes as
            described above. These additional classes are written in accordance with the BEM naming methodology, feel
            free to use your own style guide.
          </p>
          <CustomizedTooltipsDemo />
        </section>
        <section>
          <p>
            You can combine the techniques above in any fashion to change the position of the tooltip. Let&#39;s show
            the tooltip message on the right:
          </p>
          <DoubleCodeSnippet
            code={[step4HTML2, step4CSS2]}
            name={['index', 'style']}
            lang={[ECodeLang.HTML, ECodeLang.CSS]}
          />
        </section>
        <section>
          <p>
            In a similar way we can set another position by adding modifiers like{' '}
            <code className='highlighted secondary'>tooltip--right</code>. Use top, bottom, left, and right properties
            to set the placement of tooltip messages. Values in the example below are calculated based on my layout.
            Hover over the icons below to see the tooltips four directions in action: top, right, bottom, and left.
          </p>
          <DirectionsTooltipDemo />
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>You can create tooltips in CSS without using JavaScript.</p>
        </section>
        <section>
          <h2>Read more</h2>
          <ol className='list ordered'>
            <li className='list__item'>
              <ExternalLink
                href='https://sarahmhigley.com/writing/tooltips-in-wcag-21/'
                label='Tooltips in the time of WCAG 2.1'
              />
            </li>
            <li className='list__item'>
              <ExternalLink href='https://www.nngroup.com/articles/tooltip-guidelines/' label='Tooltip guidelines' />
            </li>
            <li>
              <ExternalLink
                href='https://apps.eky.hk/css-triangle-generator/'
                label='CSS triangle generator for styling tooltips'
              />
            </li>
          </ol>
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
*/
