import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames/bind';

import PostLayout from 'src/components/pages/blog/PostLayout';
import ProgressScroll from 'src/components/common/ProgressScroll';
import Demo from 'src/components/common/Demo';
import { DemoPatternVariant } from 'src/components/common/Demo/Demo';
import Dictionary from 'src/components/common/Dictionary';

import styles from './post.module.scss';

const Post = (): ReactElement => {
  const bind = classNames.bind(styles);

  const title = 'How to improve your skills';
  const highlight = 'If you need inspiration to enhance your skills scroll down to see 10 motivational tips.'

  const tips = [
    'Repeat',
    'Practice again',
    'Practice again and again',
    'Practice more',
    'Practice one more',
    'Practice one more time',
    'Practice every day',
    'Practice twice a day',
    'Practice every week',
    'Practice, practice, practice'
  ];

  const renderTips = useMemo(() => {
    return tips.map((tip) => {
      return (
        <li
          key={tip}
          className={bind(['list__item', styles.post__label])}>
          {tip}
        </li>
      );
    });
  }, [tips]);

  return (
    <>
      <ProgressScroll />
      <PostLayout
        title={title}
        highlight={highlight}
        category='insights'
        date='2 sep, 2022'
        tags={['skills']}>
        <section>
          <p>
            We learn to walk by standing up and falling.
            We learn how to read and write.
            We learn at school, we go to university, we learn at work.
            Learning is a never-ending process of self improvement.
            We have to learn and lelearn our whole lives and we develop different skills since the beginning of our lives.
          </p>
          <p className='spacer large bottom'>
            If you feel that you&#39;re stuck in a rut or just need some fresh inspiration how to enhance your skills there are ways you can do to help achieve this goal.
          </p>
          <Demo pattern={DemoPatternVariant.CROSS}>
            <Dictionary
              word='skill'
              pronunciation='/skɪl/'
              definition='an ability to do an activity or job well'
              type='noun' />
          </Demo>
        </section>
        <section>
          <p className='spacer medium bottom'>
            Here are 10 tips how to improve your skills:
          </p>
          <ol className={bind(['list ordered', styles.post__list])}>
            {renderTips}
          </ol>
        </section>
        <section>
          <h2>Conclusion</h2>
          <p>Practice!</p>
        </section>
      </PostLayout>
    </>
  );
};

export default Post;
