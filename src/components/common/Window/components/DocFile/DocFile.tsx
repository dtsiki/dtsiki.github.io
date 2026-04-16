import { useRef, useState, useCallback, useEffect } from 'react';
import { IDocFileProps } from './DocFile.types';
import { CustomScrollbar } from '../../../CustomScrollbar';
import { OF, PAGES } from 'src/i18n';
import { DocPage } from './components/DocPage';
import { useTranslate } from 'src/hooks/useTranslate';
import { WindowFooter } from '../WindowFooter';
import { ICustomScrollbarRef } from 'src/components/common/CustomScrollbar/CustomScrollbar.types';

import styles from './DocFile.module.scss';

export const DocFile = ({ pages, height = 600 }: IDocFileProps) => {
  const { translate } = useTranslate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const scrollbarRef = useRef<ICustomScrollbarRef>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const container = scrollbarRef.current?.getScrollElement() || null;
    setScrollContainer(container);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollContainer || pageRefs.current.length === 0) return;

    const containerRect = scrollContainer.getBoundingClientRect();
    const containerTop = containerRect.top;
    const containerCenter = containerTop + containerRect.height / 2;

    let current = 1;
    let minDistance = Infinity;

    for (let i = 0; i < pageRefs.current.length; i++) {
      const pageEl = pageRefs.current[i];
      if (!pageEl) continue;

      const pageRect = pageEl.getBoundingClientRect();
      const pageTop = pageRect.top;
      const pageBottom = pageRect.bottom;

      const pageCenter = (pageTop + pageBottom) / 2;
      const distanceToCenter = Math.abs(pageCenter - containerCenter);

      if (distanceToCenter < minDistance) {
        minDistance = distanceToCenter;
        current = i + 1;
      }
    }

    setCurrentPage(current);
  }, [scrollContainer]);

  useEffect(() => {
    if (!scrollContainer) {
      return;
    }

    scrollContainer.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainer, handleScroll]);

  return (
    <div className={styles.doc_file}>
      <CustomScrollbar ref={scrollbarRef} fixedHeight={height}>
        <div className={styles.doc_file__pages}>
          {pages?.map((page, index) => (
            <DocPage key={page.id} ref={(ref) => (pageRefs.current[index] = ref)} order={index + 1} page={page} />
          ))}
        </div>
      </CustomScrollbar>
      <WindowFooter content={`${translate(PAGES)} ${currentPage} ${translate(OF)} ${pages?.length}`} />
    </div>
  );
};
