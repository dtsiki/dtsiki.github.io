import { ReactElement } from 'react';
import Link from 'next/link';

import MyAvatar from 'src/components/common/MyAvatar';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

import styles from './short-about.module.scss';

const AboutShortAbout = (): ReactElement => {
  return (
    <div className={styles.shortAbout}>
      <div className={styles.shortAbout__header}>
        <MyAvatar />
      </div>
      <p className='spacer top medium'>
        My name is <span className='accented accented--primary'>Daria</span> and I&#39;m a <span className='accented accented--primary'>frontend</span> developer
      </p>
      <p className='spacer bottom large'>
        I&#39;m working to make a better web: awesome, easy to use, accessible at all, and I love everything I do
      </p>
      <div className='spacer bottom extra-large'>
        <Link href='/about/cv'>
          <a className='link-with-tag'>
            <Tag
              variant={TagVariant.PRIMARY}
              isOutlined>
              Check out CV
            </Tag>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AboutShortAbout;
