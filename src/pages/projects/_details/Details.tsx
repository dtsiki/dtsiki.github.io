import React, { ReactElement, useMemo } from 'react';
import classNames from 'classnames';

import Hero from 'src/components/layout/Hero';
import { HeroVariant } from 'src/components/layout/Hero/Hero';
import ExternalLink from 'src/components/common/ExternalLink';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

import styles from './details.module.scss';

interface Props {
  title: string;
  tags: Array<string>;
  description: string;
  demoLink?: string;
  sourceLink?: string;
}

const Details = ({ title, tags, description, demoLink, sourceLink }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const tagsList = useMemo(() => {
    return tags?.map((tag) => {
      return (
        <li
          key={tag}
          className='list__item'>
          <Tag
            variant={TagVariant.DARK}
            isOutlined>
            {tag}
          </Tag>
        </li>
      );
    })
  }, [tags]);

  return (
    <Hero variant={HeroVariant.SECONDARY}>
      <div className='container'>
        <div className='row'>
          <div className='col col--50 col--tablet-100'>
            <h3 className={styles.details__title}>{title}</h3>
            <ul className={bind(['list inline', styles.details__tags])}>
              {tagsList}
            </ul>
          </div>
          <div className='col col--50 col--tablet-100'>
            <p className={styles.details__description}>
              {description}
            </p>
            {(demoLink || sourceLink) && (
              <ul className={styles.details__list}>
                {demoLink && (
                  <li>
                    <ExternalLink
                      label='Demo'
                      href={demoLink}
                    />
                  </li>
                )}
                {sourceLink && (
                  <li>
                    <ExternalLink
                      label='Source code'
                      href={sourceLink}
                    />
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Hero>

  );
};

export default Details;
