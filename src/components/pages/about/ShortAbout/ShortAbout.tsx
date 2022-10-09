import React, { ReactElement } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Avatar from 'src/components/common/Avatar';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

import styles from './short-about.module.scss';
import avatar from '/public/assets/avatar.jpeg';

const ShortAbout = (): ReactElement => {
  return (
    <div className={styles.shortAbout}>
      <div className={styles.shortAbout__header}>
        <Avatar
          label='Yay, that&#39;s me!'
          image={avatar} />
      </div>
      <p className='spacer top medium'>
        My name is <span className='accented accented--primary'>Daria</span> and I&#39;m a <span className='accented accented--primary'>frontend</span> developer
      </p>
      <p className='spacer bottom medium'>
        I&#39;m working to make a better web: awesome, easy to use, accessible at all, and I love everything I do
      </p>
      <div className='spacer bottom large'>
        <Link href='/about/cv'>
          <a className='link-with-tag'>
            <Tag
              variant={TagVariant.PRIMARY}
              isOutlined>
              Check out my CV
              <FontAwesomeIcon icon={faArrowRight} />
            </Tag>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ShortAbout;
