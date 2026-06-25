import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { IExternalLinkProps } from './ExternalLink.types';
import { ShareIcon } from '../icons/ui';

import styles from './ExternalLink.module.scss';

export const ExternalLink = ({ href, label }: IExternalLinkProps): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={bind(['link', styles.external_link])}>
      {label}
      <ShareIcon className={styles.external_link__icon} />
    </a>
  );
};
