import { forwardRef } from 'react';
import { IDocPageProps } from './DocPage.types';

import styles from './DocPage.module.scss';

export const DocPage = forwardRef<HTMLDivElement, IDocPageProps>(({ page, order }, ref) => {
  return (
    <div ref={ref} className={styles.doc_page}>
      <div className={styles.doc_page__content}>{page?.content || ''}</div>
      <div className={styles.doc_page__footer}>
        <span className={styles.doc_page__counter}>{order}</span>
      </div>
    </div>
  );
});
