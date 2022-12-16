import { useEffect } from 'react';
import Link from 'next/link';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import Tag, { TagVariant } from 'src/components/common/Tag/Tag';
import { useStoreon } from 'storeon/react';
import { ThemeColor, ThemerEvent } from 'src/store/themer';

import styles from './404.module.scss';

const Custom404 = (): JSX.Element => {
  const { dispatch } = useStoreon();

  useEffect(() => {
    dispatch(ThemerEvent.SET_TOP_COLOR, ThemeColor.WHITE);
  }, []);

  return (
    <div className={styles.custom404}>
      <Hero variant={HeroVariant.PRIMARY}>
        <h1 className={styles.custom404__title}>
          Yay, page not found
        </h1>
        <div className={styles.custom404__subtitle}>
          4<FontAwesomeIcon icon={faFaceFrown} />4
        </div>
        <div className={styles.custom404__footer}>
          <Link href='/'>
            <a className='link-with-tag'>
              <Tag
                variant={TagVariant.LIGHT}
                isOutlined>
                Back to home
              </Tag>
            </a>
          </Link>
        </div>
      </Hero>
    </div>
  );
};

export default Custom404;
