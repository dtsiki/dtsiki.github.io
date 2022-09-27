import React, { ReactElement, useMemo, useRef } from 'react';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import ExternalLink from 'src/components/common/ExternalLink';
import Window from 'src/components/common/Window';
import { WindowPatternVariant } from 'src/components/common/Window/Window';
import Chat from 'src/components/pages/blog/Chat';

import styles from './post.module.scss';

const Post = (): ReactElement => {
  const title = 'Gerund VS Infinitive';
  const highlight = '';
  const metaDescription = 'How to use gerund and infinitive in english';
  const metaTags = 'english, gerund, infinitive, grammar, english grammar, ';

  const examples = ['work', 'read', 'run', 'travel', 'draw', 'learn', 'play', 'watch', 'sleep'];

  const renderGerundExamples = useMemo(() => {
    return examples.map((word) => {
      return (
        <li
          key={word}
          className={styles.post__sentence}>
          {word === 'run' ? word + 'n' : word}<span className='underlined secondary solid'>ing</span>
        </li>
      )
    })
  }, [examples]);

  const renderInfiniteExamples = useMemo(() => {
    return examples.map((word) => {
      return (
        <li
          key={word}
          className={styles.post__sentence}>
          <span className='underlined secondary solid'>to</span> {word}
        </li>
      )
    })
  }, [examples]);

  const prepositions = ['at', 'of', 'against', 'with', 'for', 'of', 'about', 'on', 'up', 'after', 'without'];

  const renderPrepositions = useMemo(() => {
    return prepositions.map((preposition) => {
      return (
        <span
          key={preposition}
          className={styles.post__importance}>
          {preposition},{' '}
        </span>
      );
    })
  }, [prepositions]);

  const gerundVerbs = ['admit', 'enjoy', 'avoid', 'deny', 'dislike', 'feel like', 'keep', 'mind', 'miss', 'practise', 'recommend', 'spend time', 'stop', 'suggest'];

  const renderGerundVerbs = useMemo(() => {
    return gerundVerbs.map((gerundVerb, index) => {
      return (
        <span
          key={gerundVerb}
          className={styles.post__importance}>
          {gerundVerb}{index === gerundVerbs.length - 1 ? '' : ', '}
        </span>
      );
    })
  }, [gerundVerbs]);

  const infinitiveVerbs = ['want', 'need', 'learn', 'offer', 'pretend', 'promise', 'refuse', 'agree', 'decide', 'expect', 'forget', 'help', 'hope', 'plan', 'would like', 'try', 'remember'];

  const renderInfinitiveVerbs = useMemo(() => {
    return infinitiveVerbs.map((infinitiveVerb, index) => {
      return (
        <span
          key={infinitiveVerb}
          className={styles.post__importance}>
          {infinitiveVerb}{index === infinitiveVerbs.length - 1 ? '' : ', '}
        </span>
      );
    })
  }, [infinitiveVerbs]);

  const gerundAndInfinitiveVerbs = ['like', 'love', 'hate', 'continue', 'begin', 'start'];

  const renderGerundAndInfinitiveVerbs = useMemo(() => {
    return gerundAndInfinitiveVerbs.map((gerundAndInfinitiveVerb, index) => {
      return (
        <span
          key={gerundAndInfinitiveVerb}
          className={styles.post__importance}>
          {gerundAndInfinitiveVerb}{index === gerundAndInfinitiveVerbs.length - 1 ? '' : ', '}
        </span>
      );
    })
  }, [gerundAndInfinitiveVerbs]);

  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='guide'
        date='27 sep, 2022'
        metaDescription={metaDescription}
        metaTags={metaTags}
        tags={['english']}>
        <section>
          <Window pattern={WindowPatternVariant.WAVY}>
            <Chat />
          </Window>
          <h2 className='spacer top large'>What is gerund?</h2>
          <p>
            A gerund is a verb form that ends in <em>ing</em>:
          </p>
          <ul className={styles.post__words}>
            {renderGerundExamples}
          </ul>
        </section>
        <section>
          <h2>What is infinitive?</h2>
          <p>
            An infinitive is the base form of a verb preceded by <em>to</em>:
          </p>
          <ul className={styles.post__words}>
            {renderInfiniteExamples}
          </ul>
        </section>
        <section>
          <div className='row'>
            <div className='col col--50 col--tablet-100'>
              <h2>Use gerund:</h2>
              <article className={styles.post__article}>
                <h3>
                  1. As the <span className={styles.post__importance}>subject</span> of a sentence:
                </h3>
                <p className={styles.post__sentence}>
                  <span className={styles.post__importance}>Eating</span> cakes is one of my hobbies
                </p>
                <p className={styles.post__sentence}>
                  One of my hobbies is <span className={styles.post__importance}>eating</span> cakes
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  2. After prepositions {renderPrepositions}etc:
                </h3>
                <p className={styles.post__sentence}>
                  I&#39;m good <span className={styles.post__importance}>at</span> eating cakes
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  3. After <span className={styles.post__importance}>some verbs</span>:
                </h3>
                <p className={styles.post__sentence}>
                  I <strong>enjoy</strong> <span>eating</span> cakes
                </p>
                <p className='spacer top medium'>
                  Verbs followed only by a gerund: {renderGerundVerbs}.
                </p>
              </article>
            </div>
            <div className='col col--50 col--tablet-100'>
              <h2>Use infinitive:</h2>
              <article className={styles.post__article}>
                <h3>
                  1. After <span className={styles.post__importance}>adjectives</span>:
                </h3>
                <p className={styles.post__sentence}>
                  <span className={styles.post__importance}>It&#39;s important</span> to eat cakes
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  2. To express a <span className={styles.post__importance}>reason</span> or <span className={styles.post__importance}>purpose</span> of an action:
                </h3>
                <p className={styles.post__sentence}>
                  I&#39;m saving money <span className={styles.post__importance}>to buy</span> more cakes
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  3. After <span className={styles.post__importance}>some verbs</span>:
                </h3>
                <p className={styles.post__sentence}>
                  I <span className={styles.post__importance}>would like</span> to buy more cakes
                </p>
                <p className='spacer top medium'>
                  Verbs followed only by an infinitive: {renderInfinitiveVerbs}.
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  4. After most <span className={styles.post__importance}>modal</span> and <span className={styles.post__importance}>auxiliary</span> verbs without <i>to</i>:
                </h3>
                <p className={styles.post__sentence}>
                  I <span className={styles.post__importance}>must</span> buy a cake
                </p>
                <p className={styles.post__sentence}>
                  I <span className={styles.post__importance}>can&#39;t</span> eat cakes all day
                </p>
              </article>
              <article className={styles.post__article}>
                <h3>
                  5. After <span className={styles.post__importance}>make</span> and <span className={styles.post__importance}>let</span>:
                </h3>
                <p className={styles.post__sentence}>
                  My mother <span className={styles.post__importance}>let</span> me eat a cake
                </p>
              </article>
            </div>
          </div>
        </section>
        <section>
          <h2>Use gerund or infinitive:</h2>
          <p>
            Verbs followed by a gerund or infinitive with little to no change in meaning: {renderGerundAndInfinitiveVerbs}.
          </p>
          <div className={styles.post__examples}>
            <div className='row'>
              <div className='col col--50 col--tablet-100'>
                <p className={styles.post__sentence}>
                  I <span className={styles.post__importance}>like</span> to eat cakes
                </p>
              </div>
              <div className='col col--50 col--tablet-100'>
                <p className={styles.post__sentence}>
                  I <span className={styles.post__importance}>like</span> eating cakes
                </p>
              </div>
            </div>
          </div>
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
