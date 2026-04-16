import { useEffect, useMemo, useRef } from 'react';
import { Hero } from 'src/components/layout/Hero/Hero';
import { IPostProps } from './PostWrapper.types';
import { TopScrollBar } from 'src/components/common/TopScrollBar';
import { PostContent } from '../PostContent/PostContent';
import { useNotifications } from 'src/hooks/useNotifications';
import { Language, NotificationType } from 'src/types';
import { ENGLISH_POST_NOTIFICATION, TAKE_A_NOTE } from 'src/i18n';
import { useTranslate } from 'src/hooks/useTranslate';

import styles from './PostWrapper.module.scss';

export const PostWrapper = ({ postConfig, heroConfig, children }: IPostProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { showNotification } = useNotifications();
  const { language } = useTranslate();

  useEffect(() => {
    if (postConfig.strictLanguage && postConfig.language === Language.ENG && language === Language.RU) {
      showNotification({
        type: NotificationType.INFO,
        title: TAKE_A_NOTE,
        message: ENGLISH_POST_NOTIFICATION,
      });
    }
  }, []);

  const renderHero = useMemo(() => {
    return (
      <>
        <TopScrollBar />
        {heroConfig && (
          <Hero heroRef={heroRef} size={heroConfig.size} pattern={heroConfig.pattern} variant={heroConfig.variant}>
            {heroConfig?.content}
          </Hero>
        )}
      </>
    );
  }, [heroConfig, heroRef]);

  return (
    <div className={styles.post_wrapper}>
      {renderHero}
      <PostContent postConfig={postConfig}>{children}</PostContent>
    </div>
  );
};
