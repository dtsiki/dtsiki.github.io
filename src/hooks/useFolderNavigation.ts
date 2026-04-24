import { useCallback } from 'react';
import { isUndefined } from 'lodash';
import { useWindowManager } from './useWindowManager';
import { TFolderItem } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

export const useFolderNavigation = (windowId: string) => {
  const { updateWindow, windows } = useWindowManager();

  const currentWindow = windows.find((window) => window.id === windowId);
  const currentState = currentWindow?.state || currentWindow?.initialState;

  const backToRoot = useCallback(() => {
    updateWindow(windowId, {
      state: undefined,
    });
  }, [windowId, updateWindow]);

  const updatePath = useCallback(
    (newPath: string[]) => {
      updateWindow(windowId, {
        state: {
          path: newPath,
        },
      });
    },
    [windowId, updateWindow]
  );

  const pushPath = useCallback(
    (newPath: string) => {
      const prevPath = currentState?.path || [];

      updateWindow(windowId, {
        state: {
          path: [...prevPath, newPath],
        },
      });
    },
    [windowId, updateWindow]
  );

  const updateTitle = useCallback(
    (title: string) => {
      updateWindow(windowId, {
        state: {
          title,
        },
      });
    },
    [windowId, updateWindow]
  );

  const updateContent = useCallback(
    (content: TFolderItem[], title?: string) => {
      updateWindow(windowId, {
        state: {
          content,
          title,
        },
      });
    },
    [windowId, updateWindow]
  );

  return {
    currentTitle: currentState?.title,
    currentPath: currentState?.path,
    currentContent: currentState?.content,
    updatePath,
    updateTitle,
    updateContent,
    pushPath,
    isRoot: isUndefined(currentWindow?.state),
    backToRoot,
  };
};
