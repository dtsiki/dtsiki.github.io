import { ITextFileProps } from './TextFile.types';
import { CustomScrollbar } from '../../../CustomScrollbar';

import styles from './TextFile.module.scss';

export const TextFile = ({ content, height = 500 }: ITextFileProps) => {
  return (
    <div className={styles.text_file}>
      <CustomScrollbar fixedHeight={height}>
        <div className={styles.text_file__content}>{content}</div>
      </CustomScrollbar>
      <div className={styles.text_file__footer} />
    </div>
  );
};
