import React, { ReactElement, useMemo } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import AboutWorkExperience from 'src/components/pages/about/WorkExperience/WorkExperience';
import AboutEducation from '../_education';

import styles from './cv.module.scss';
import avatar from 'public/assets/avatar.jpeg';

const CV = (): ReactElement => {
  const bind = classNames.bind(styles);

  const skills = ['HTML', 'CSS and its preprocessors', 'JavaScript, TypeScript', 'React', 'Next.js', 'Angular', 'Git flow'];

  const renderSkills = useMemo(() => {
    return skills.map((skill) => {
      return (
        <li
          key={skill}
          className='list__title'>
          {skill}
        </li>
      )
    })
  }, [skills]);

  return (
    <div className={styles.cv}>
      <div className='container'>
        {false && (
          <button className={styles.cv__button}>
            <FontAwesomeIcon icon={faDownload} />
            <span className='visually-hidden'>
              Download CV (pdf)
            </span>
          </button>
        )}
        <header className={styles.cv__header}>
          <div className={styles.cv__avatar}>
            <Image
              width={150}
              height={150}
              layout='responsive'
              objectFit='contain'
              src={avatar}
              alt='A black and white selfie of a woman with a curly hair and with bitch face wearing black t-shirt' />
          </div>
          <div className={styles.cv__heading}>
            <h1 className='heading-l1 visually-hidden'>CV</h1>
            <h2 className='heading-l2'>Daria T.</h2>
            <h3 className='heading-l3 spacer bottom small'>
              <span className='accented accented--primary'>Frontend</span> developer</h3>
            <p className='spacer bottom large'>
              I&#39;m working to make a better web: awesome, easy to use, accessible at all and I&#39;m very passionate about everything I do.
            </p>
          </div>
        </header>
        <div className='row'>
          <div className='col col--60 col--mobile-100'>
            <section className={styles.cv__section}>
              <h2 className='heading-l3 spacer bottom small'>Work experience</h2>
              <AboutWorkExperience />
            </section>
            <section className={styles.cv__section}>
              <h2 className='heading-l3 spacer bottom small'>Education</h2>
              <AboutEducation />
            </section>
          </div>
          <div className={bind([styles.cv__sidebar, 'col col--40 col--mobile-100'])}>
            <section className={styles.cv__section}>
              <h2 className='heading-l3 spacer bottom small'>Skills</h2>
              <ul className='list'>
                {renderSkills}
              </ul>
            </section>
            <section className={styles.cv__section}>
              <h2 className='heading-l3 spacer bottom small'>Languages</h2>
              <ul className='list'>
                <li className='list__item'>
                  <h3 className='list__title'>
                    English
                  </h3>
                  <p>Intermediate</p>
                </li>
                <li className='list__item'>
                  <h3 className='list__title'>
                    Russian
                  </h3>
                  <p>Native</p>
                </li>
                <li className='list__item'>
                  <h3 className='list__title'>
                    Korean
                  </h3>
                  <p>Beginner</p>
                </li>
              </ul>
            </section>
            <section className={styles.cv__section}>
              <h2 className='heading-l3 spacer bottom small'>Get in touch</h2>
              <p className='spacer bottom small'>
                Got any questions?<br />Feel free to reach me out:
              </p>
              <ul className='list'>
                <li className={styles.cv__contact}>
                  <span className={styles.cv__icon}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <a
                    href='mailto:thevioletmaniac@gmail.com'
                    className='link'>
                    thevioletmaniac@gmail.com
                  </a>
                </li>
                <li className={styles.cv__contact}>
                  <span className={styles.cv__icon}>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <a
                    href='https://github.com/dtsiki'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link'>
                    dtsiki
                  </a>
                </li>
                <li className={styles.cv__contact}>
                  <span className={styles.cv__icon}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  <a
                    href='https://www.linkedin.com/in/daria-terenteva-466392216/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='link'>
                    thevioletmaniac
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CV;
