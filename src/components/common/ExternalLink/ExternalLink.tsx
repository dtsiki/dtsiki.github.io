import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './external-link.module.scss';

interface Props {
  href: string;
  label:  string;
}

const ExternalLink = ({ href, label }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={bind(['link', styles.externalLink])}>
      {label}
      <span className={styles.externalLink__icon}>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </span>
    </a>
  );
};

export default ExternalLink;
