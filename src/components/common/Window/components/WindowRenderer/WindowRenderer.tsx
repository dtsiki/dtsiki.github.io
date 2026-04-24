import { useRef, useEffect } from 'react';
import { useWindowManager } from 'src/hooks/useWindowManager';
import { Window } from '../../Window';
import { isBaseWindow } from '../../Window.utils';
import { BlogWindow } from 'src/components/blog/BlogWindow';
import { EWindowRecord } from 'src/context/WindowManager/WindowManager.utils';
import { TrashBinWindow } from 'src/components/pages/home/TrashBinWindow/TrashBinWindow';
import { useWindowSize } from 'src/hooks';
import { getWindowStyle } from './WindowRenderer.utils';

export const WindowRenderer = () => {
  const { windows } = useWindowManager();
  const { isMobile } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);

  const sortedWindows = [...windows]
    .filter((window) => !window.isMinimized)
    .sort((a, b) => {
      if (a.isFocused !== b.isFocused) {
        return a.isFocused ? -1 : 1;
      }

      return 0;
    });

  useEffect(() => {
    if (sortedWindows.length > 0 && containerRef.current) {
      const lastWindow = sortedWindows[sortedWindows.length - 1];
      const windowElement = containerRef.current.querySelector(`[data-window-id="${lastWindow.id}"]`);

      if (windowElement) {
        (windowElement as HTMLElement).focus();
      }
    }
  }, [sortedWindows.length]);

  if (!sortedWindows.length) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className='window-renderer'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000,
      }}>
      {sortedWindows.map((window) => {
        const { id, isFocused, isMinimized, config } = window;

        return (
          <div key={id} data-window-id={id} style={getWindowStyle(window, windows.indexOf(window), isMobile)}>
            {isBaseWindow(config) ? (
              <Window
                id={id}
                title={config?.title}
                type={config?.type}
                content={config?.content}
                children={config?.children}
                isMinimized={isMinimized}
                isFocused={isFocused}
              />
            ) : config?.customComponent?.type === EWindowRecord.BLOG_FOLDER ? (
              <BlogWindow isMinimized={isMinimized} isFocused={isFocused} />
            ) : config?.customComponent?.type === EWindowRecord.TRASH_BIN ? (
              <TrashBinWindow isMinimized={isMinimized} isFocused={isFocused} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
