import { useMemo } from 'react';
import classNames from 'classnames/bind';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { Window } from 'src/components/common/Window/Window';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import Dictionary from 'src/components/pages/blog/eng/how-to-improve-your-skills/Dictionary';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';

import styles from './index.module.scss';

const Post = () => {
  const bind = classNames.bind(styles);

  const tips = [
    'Practice',
    'Practice again',
    'Practice again and again',
    'Practice more',
    'Practice one more',
    'Practice one more time',
    'Practice every day',
    'Practice twice a day',
    'Practice every week',
    'Practice, practice, practice',
  ];

  const renderTips = useMemo(() => {
    return tips.map((tip) => {
      return (
        <li key={tip} className={bind(['list__item', styles.post__label])}>
          {tip}
        </li>
      );
    });
  }, [tips]);

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.CROSS,
        variant: EHeroVariant.VIOLET,
      }}>
      <section>
        <p>
          We learn to walk by standing up and falling. We learn how to read and write. We learn at school, we go to
          university, we learn at work. Learning is a never-ending process of self improvement. We have to learn and
          lelearn our whole lives and we develop different skills since the beginning of our lives.
        </p>
        <p className='spacer large bottom'>
          If you feel that you&#39;re stuck in a rut or just need some fresh inspiration how to enhance your skills
          there are ways you can do to help achieve this goal.
        </p>
        <Window type={EWindowType.CUSTOM} title='[Thoughts Explorer]' pattern={EWindowPatternVariant.CROSS}>
          <div className={styles.post__dictionary}>
            <Dictionary
              word='skill'
              pronunciation='/skɪl/'
              definition='an ability to do an activity or job well'
              type='noun'
            />
          </div>
        </Window>
      </section>
      <section>
        <p className='spacer medium bottom'>Here are 10 tips how to improve your skills:</p>
        <ol className={bind(['list ordered', styles.post__list])}>{renderTips}</ol>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>Practice!</p>
      </section>
    </PostWrapper>
  );
};

export default Post;
