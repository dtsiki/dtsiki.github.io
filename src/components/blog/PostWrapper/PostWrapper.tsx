import { useEffect, useMemo, useRef } from 'react';
import { Hero } from 'src/components/layout/Hero/Hero';
import { type IPostProps } from './PostWrapper.types';
import { TopScrollBar } from 'src/components/common/TopScrollBar';
import { PostContent } from '../PostContent/PostContent';
import { useNotifications } from '~hooks/useNotifications';
import { useTranslate } from '~hooks/useTranslate';
import { LANGUAGE } from '~types/language';
import { NotificationType } from '~types/notifications';
import { ENGLISH_POST_NOTIFICATION, TAKE_A_NOTE } from 'src/i18n';
import { CodeSnippetProvider } from 'src/context/CodeSnippetContext/CodeSnippetProvider';

import styles from './PostWrapper.module.scss';

export const PostWrapper = ({ postConfig, heroConfig, hideHighlight = false, children }: IPostProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { showNotification } = useNotifications();
  const { language } = useTranslate();

  useEffect(() => {
    if (postConfig.strictLanguage && postConfig.language === LANGUAGE.ENG && language === LANGUAGE.RU) {
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
      <CodeSnippetProvider>
        <PostContent postConfig={postConfig} hideHighlight={hideHighlight}>
          {children}
        </PostContent>
      </CodeSnippetProvider>
    </div>
  );
};
