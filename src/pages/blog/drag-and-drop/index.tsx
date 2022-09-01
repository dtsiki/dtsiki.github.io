import React, { ReactElement, useRef } from 'react';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import DragAndDrop from 'src/components/pages/blog/DragAndDrop';
import Code from 'src/components/common/Code';
import { CodeLanguage } from 'src/components/common/Code/Code';

import styles from './post.module.scss';

const Post = (): ReactElement => {
  const noteRef = useRef<HTMLParagraphElement>(null);

  const onScrollToNote = (): void => {
    noteRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  const title = 'Drag and Drop';
  const highlight = 'In this guide I will show you how to implement drag and drop in your application without using any third party libraries.'

  const exampleHTML1 =
`<div
  class="draggable"
  onDragStart={() => handleDragStart()}
  draggable>
  {{ draggable element }}
</div>`;

  const exampleReact1 =
`const handleDragStart = () => {
  {{ init dragging }}
};`;

  const exampleHTML2 =
`<div
  class='droppable'
  onDragEnd={() => handleDragEnd()}
  onDragOver={(e) => allowDrop(e)}
  onDrop={(e) => handleDrop(e)}>
  {{ droppable element }}
</div>
`;

  const exampleReact2 =
`const handleDragEnd = () => {
  {{ handle drag end }}
};

const allowDrop = (e) => {
  e.preventDefault();

  {{ handle drag over }}
};

const handleDrop = (e) => {
  e.preventDefault();

  {{ handle drop the draggable element}}
};`;

  const exampleHTML3 =
`<div
  className={\`
    draggable
    \${isGrabbing || 'grabbing'}
  \`}
  draggable
  onDragStart={(e) => handleDragStart(e)}
  onDragEnd={() => handleDragEnd()}>
  {{ draggable element }}
</div>`;

  const exampleCSS3 =
`.draggable {
  {{ draggable element style }}
  cursor: grab;

  &.grabbing {
    cursor: grabbing;
  }
}`;

  const exampleReact3 =
`const [isGrabbing, setIsGrabbing] = useState(false);

const handleDragStart = (e): => {
  {{ do something with e }}

  setIsGrabbing(true);
};

const handleDragEnd = () => {
  setIsGrabbing(false);
};`;


  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='tutorial'
        date='1 sep, 2022'
        tags={['React']}>
        <section>
          <h2>What is a drag and drop?</h2>
          <p>
            Drag and drop is a common interaction technique added to allow users to move things around on a web page.
            It is a perfect fit for applications like kanban board (e.g. <ExternalLink
              href='https://trello.com/'
              label='Trello' />) and todo list where dragging transfers data between different parts of the application.
          </p>
          <p>
            Most of the guides are using some third party libraries: <ExternalLink
              href='https://react-dnd.github.io/react-dnd/about'
              label='React DnD' />, <ExternalLink
              href='https://github.com/atlassian/react-beautiful-dnd'
              label='React Beautiful DnD' />, etc.
              It&#39;s ok to use it, but in this guide, you&#39;ll learn about the native drag and drop API and how to use it.
              This interface enable applications to use drag and drop features in browsers just from under the hood.
              It sounds amazing, let&#39;s try it!
          </p>
          <p className='spacer bottom medium'>
            But first of all, let&#39;s start with the live demo to see the algorithm in action.
            You can drag and drop cards below between three columns: to do, doing and done.
          </p>
          <DragAndDrop />
        </section>
        <section>
          <p>
            There are two things you need to know about drag and drop API:
          </p>
          <h2>1. Types of elements</h2>
          <p>
            There are two types of elements:
          </p>
          <ol className='list list--ordered'>
            <li className='list__item'>
              <span className='highlighted ghost'>Draggable:</span> elements <span className='accented accented--primary'>what</span> we want to drag somewhere
            </li>
            <li className='list__item'>
              <span className='highlighted ghost'>Droppable</span> or target: elements <span className='accented accented--primary'>where</span> we want to drop our draggable elements
            </li>
          </ol>
          <p>
            How to make elements draggable?
            All you need is to make an element draggable by adding draggable attribute and add onDragStart event and handler.
          </p>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.HTML}
                  name='index'
                  code={exampleHTML1} />
              </div>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='component'
                  code={exampleReact1} />
              </div>
            </div>
          </div>
          <p>
            How to make elements droppable?
            No additional attributes like aboves <code className='highlighted secondary'>draggable</code> required.
            You have to attach handlers to all drop targets to handle drop events.
            Wait, what events?
            Now is time to find out the second thing: drag and drop events.
          </p>
        </section>
        <section>
          <h2>2. Events
            <button
              className={styles.post__anchor}
              onClick={onScrollToNote}>
              *
              <span className='visually-hidden'>Scroll to note</span>
            </button>
          </h2>
          <p>
            Drag and drop operation can be divided into two parts: dragging and then dropping <span className='strikethroughed dark'>a bit obvious, huh</span>.
            Dragging begins when a user selects a draggable element and then drags it to a droppable element where dropping part starts.
            The operation ends when user releases the dragged element.
          </p>
          <p>
            Let&#39;s look at the events of each part. Several event types are fired during dragging. These events fire in the following sequence:
          </p>
          <ol className='list list--ordered'>
            <li className='list__item'>
              <span className='highlighted ghost'>onDragStart</span> fires only when a user selects a draggable element. It indicates the user starts dragging the element.
            </li>
            <li className='list__item'>
              <span className='highlighted ghost'>onDrag</span> fires repeatedly as long as a user drags the element.
            </li>
            <li className='list__item'>
              <span className='highlighted ghost'>onDragEnd</span> fires when user stops dragging the element.
            </li>
          </ol>
          <p className='spacer large top'>
            These events fire in the following sequence when user drags the element over a droppable element or a drop target:
          </p>
          <ol className='list list--ordered'>
            <li className='list__item'>
              <span className='highlighted ghost'>onDragEnter</span> fires when the dragged element enters a valid drop target.
            </li>
            <li className='list__item'>
              <span className='highlighted ghost'>onDragOver</span> fires repeatedly as long as user are dragging the element within the boundary of the drop target.
            </li>
            <li className='list__item'>
              <span className='highlighted ghost'>onDragLeave</span> or <span className='highlighted ghost'>onDrop</span>.
              These events are fires depending on the type of drop. onDragLeave fires when  the element leaves a valid drop target. onDrop fires instead of the onDragLeave event when the element is dropped on a valid drop target.
            </li>
          </ol>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.HTML}
                  name='index'
                  code={exampleHTML2} />
              </div>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='index'
                  code={exampleReact2} />
              </div>
            </div>
          </div>
          <p>
            You could notice <code className='highlighted secondary'>e.preventDefault()</code> method is using in the example above.
            You must cancel the default action calling this method.
            It&#39;s necessary because in the event you&#39;re dragging, the browser&#39;ll try to execute that and not do drag and drop
          </p>
        </section>
        <section>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <h2>Hint</h2>
                <p>
                  Let me give you a little hint.
                </p>
                <p>
                  Add to the draggable element <code className='highlighted secondary'>cursor: grab;</code> and <code className='highlighted secondary'>cursor: grabbing;</code> properties to improve user experience.
                  In general it indicates that something can be grabbed or is being grabbed.
                </p>
                <p>
                  In the example below you can see implementation. onDragStart event is used here to set grab cursor to indicate that the element was grabbed.
                  onDragEnd fires when user stops dragging the element so this event resets it.
                </p>
              </div>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.CSS}
                  name='style'
                  code={exampleCSS3} />
              </div>
            </div>
          </div>
          <div className={styles.post__snippet}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.HTML}
                  name='index'
                  code={exampleHTML3} />
              </div>
              <div className='col col--50 col--tablet-100'>
                <Code
                  language={CodeLanguage.JAVASCRIPT}
                  name='component'
                  code={exampleReact3} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Summary</h2>
          <p>All you have to do for implementation of drag and drop on your application:</p>
          <ol className='list list--ordered'>
            <li className='list__item'>Add  draggable attribute to an element you want to drag and drop.</li>
            <li className='list__item'>Attach onDragStart handler to selected draggable element.</li>
            <li className='list__item'>Attach handlers to all drop targets.</li>
          </ol>
          <p>And that&#39;s it! </p>
        </section>
        <section>
          <p
            ref={noteRef}
            className='note'>
            <span className='note__title accented accented--primary'>Note:</span> React events are named using camelCase, rather than lowercase.
            You have to rename events from camelCase to lowercase if you want implement drag and drop in JavaScript app,
            e.g. <span className='highlighted ghost'>dragstart</span> instead of <span className='highlighted ghost'>onDragStart</span>.
            All the rest work the same way.
          </p>
        </section>
        <section>
          <h2>Read more</h2>
          <ol className='list list--ordered'>
            <li className='list__item'>
              <ExternalLink
                href='https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API'
                label='Drag and Drop API docs' />
            </li>
            <li className='list__item'>
              <ExternalLink
                href='https://html.spec.whatwg.org/multipage/dnd.html#dnd'
                label='Drag and drop HTML standart' />
            </li>
            <li className='list__item'>
              <ExternalLink
                href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor'
                label='CSS cursor property docs' />
            </li>
          </ol>
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
