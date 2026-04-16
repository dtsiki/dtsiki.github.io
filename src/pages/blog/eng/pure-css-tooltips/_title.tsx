import React, { ReactElement } from 'react';
import classNames from 'classnames';

import styles from './post.module.scss';

const PostTitle = (): ReactElement => {
  const bind = classNames.bind(styles);

  return (
    <>
      Let&#39;s make a <span className={bind(['tooltip', styles.post__titleTooltip])}>tooltip<span className={bind(['tooltip__message', styles.post__titleTooltipMessage])}>Yay!</span></span>
    </>
  );
};

export default PostTitle;
