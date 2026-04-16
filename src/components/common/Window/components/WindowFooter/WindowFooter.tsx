import { IWindowFooterProps } from './WindowFooter.types';

import styles from './WindowFooter.module.scss';

export const WindowFooter = ({ content }: IWindowFooterProps) => {
  return (
    <div className={styles.window_footer}>
      {content && <div className={styles.window_footer__content}>{content}</div>}
    </div>
  );
};
