import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { LONG_DASH } from 'src/constants';
import { HOME_CV_CONFIG } from '~components/pages/home/HomeCV/HomeCV.utils';
import { CV_FILE_NAME } from 'src/i18n';
import { EWindowType } from '~components/common/Window/Window.types';
import { Window } from '~components/common/Window';

const Post = () => {
  const content = {
    docPages: HOME_CV_CONFIG,
  };

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.HOW_TO_FIND_A_JOB]}
      hideHighlight={true}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.FACE_GRIN_ANGLED,
      }}>
      <section className='section outer'>
        <section className='section inner'>
          <p>Да я сама без понятия. Если знаете {LONG_DASH} напишите мне тоже.</p>
        </section>
        <section className='section inner'>
          <p>Кстати, вот моё резюме:</p>
          <Window
            title={CV_FILE_NAME}
            type={EWindowType.DOC_FILE}
            content={content}
            showMenu={true}
            isManuallyStatic={true}
          />
        </section>
      </section>
    </PostWrapper>
  );
};

export default Post;
