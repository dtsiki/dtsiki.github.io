import { ReactElement, ReactNode } from 'react';
import Image,  { StaticImageData } from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import Window from 'src/components/common/Window';
import { WindowType } from 'src/components/common/Window/Window';
import Hero from 'src/components/layout/Hero';

import styles from './project.module.scss';

interface Props {
  name: string;
  preview: StaticImageData;
  description: ReactNode;
  tags: Array<string>;
  demoLink?: string;
  repoLink?: string;
}

const Project = ({ name, preview, description, tags, demoLink, repoLink }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const getFileTitle = (): string => {
    return `${name.toLocaleLowerCase()
      .replace(' ', '-')}.jpg`;
  };

  return (
    <div className={styles.project}>
      <Hero>
        <div className='container'>
          <div className='row row--centered'>
            <div className='col col--40'>
              <Window
                type={WindowType.IMAGE}
                fileTitle={getFileTitle()}>
                <Image
                  src={preview}
                  layout='responsive'
                  alt={`An interface of ${name} application`} />
              </Window>
            </div>
            <div className='col col--60'>
              <div className={styles.project__heading}>
                <div className={styles.project__details}>
                  <h3 className={styles.project__name}>
                    {name}
                  </h3>
                  <ul className={bind(['list inline', styles.project__tags])}>
                    {tags?.map((tag) => (
                      <li
                        key={tag}
                        className='list__item'>
                        <div className={styles.project__tag}>
                          {tag}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {(demoLink || repoLink) && (
                  <ul className={styles.project__actions}>
                    {demoLink && (
                      <li>
                        <a
                          href={demoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={styles.project__link}>
                          <span className='visually-hidden'>Open demo</span>
                          <FontAwesomeIcon icon={faPlay} />
                        </a>
                      </li>
                    )}
                    {repoLink && (
                      <li>
                        <a
                          href={repoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={styles.project__link}>
                          <span className='visually-hidden'>Open source</span>
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
              <p className={styles.project__description}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default Project;
