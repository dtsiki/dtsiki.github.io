import React, { ReactElement } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './project.module.scss';

interface Props {
  title: string;
  description:  string;
  variant: string;
  col?: string;
}

const Project = ({ title, description, variant, col }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <li className={bind(['col col--tablet-100', col])}>
      <div className={bind([styles.project, styles[variant]])}>
        <div className={styles.project__overlay}>
          <h2 className={styles.project__title}>{title}</h2>
          <p className={styles.project__description}>
            {description}
          </p>
          <Link href='/projects'>
            <a className={styles.project__link}>
              Read more
              <FontAwesomeIcon icon={faRightLong} />
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Project;
