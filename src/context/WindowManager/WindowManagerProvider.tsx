import { useState } from 'react';
import { WindowManagerContext } from './WindowManagerContext';
import { WINDOW_REGISTRY } from './WindowManager.utils';
import { IWindowManagerProviderProps } from './WindowManagerProvider.types';
import { TCustomWindowConfig, TWindow } from 'src/types';

export const WindowManagerProvider = ({ children }: IWindowManagerProviderProps) => {
  const [windows, setWindows] = useState<TWindow[]>([]);
  const [windowsOrder, setWindowsOrder] = useState<string[]>([]);

  const updateWindow = (id: string, updates: Partial<TWindow>) => {
    setWindows((prevWindows) => prevWindows.map((window) => (window.id === id ? { ...window, ...updates } : window)));
  };

  const openWindow = (id: string, isMinimized: boolean = true, isFocused: boolean = false) => {
    const config = WINDOW_REGISTRY[id];
    console.log('open window', config);

    if (!config) {
      console.warn(`Окно "${id}" не найдено в реестре`);
      return;
    }

    const isWindowExisting = windows.find((window) => window.id === id);

    if (isWindowExisting) {
      isFocused && focusWindow(id);
      updateWindow(id, { isMinimized });
    } else {
      const newWindow: TWindow = {
        ...config,
        isMinimized,
        isFocused,
      };

      setWindows((prevWindows) => [...prevWindows, newWindow]);
      isFocused && focusWindow(id);
    }
  };

  const closeWindow = (id: string) => {
    // Сразу рассчитываем новый порядок
    const newOrder = windowsOrder.filter((windowId) => windowId !== id);

    // Обновляем оба состояния
    setWindows((prevWindows) => prevWindows.filter((window) => window.id !== id));
    setWindowsOrder(newOrder);

    // Если остались окна - фокусируем верхнее
    if (newOrder.length > 0) {
      const windowToFocus = newOrder[newOrder.length - 1];

      setWindows((prevWindows) =>
        prevWindows.map((window) => ({
          ...window,
          isFocused: window.id === windowToFocus,
        }))
      );
    }
  };

  const minimizeWindow = (id: string) => {
    updateWindow(id, { isMinimized: true, isFocused: false });

    const tempWindowsOrder = [...windowsOrder];

    setWindowsOrder((prevWindowsOrder) => {
      const filtered = prevWindowsOrder.filter((windowId) => id !== windowId);

      return [...filtered];
    });

    if (tempWindowsOrder.length > 1) {
      focusWindow(tempWindowsOrder[tempWindowsOrder.length - 2]);
    }
  };

  const focusWindow = (id: string) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) => ({
        ...window,
        isFocused: window.id === id,
      }))
    );

    // Рассчитываем новый порядок окон - убираем сфокусированное окно с предыдущего места и переносим на самый верх
    setWindowsOrder((prevWindowsOrder) => {
      const filtered = prevWindowsOrder.filter((windowId) => id !== windowId);

      return [...filtered, id];
    });
  };

  const openCustomWindow = (config: TCustomWindowConfig) => {
    const { id, component, size, position } = config;

    const newCustomWindow: TWindow = {
      id,
      isMinimized: false,
      isFocused: true,
      size,
      position,
      config: {
        customComponent: {
          component: component,
        },
      },
    };

    setWindows((prevWindows) => {
      const filtered = prevWindows.filter((window) => window.id !== id);

      return [...filtered, newCustomWindow];
    });
  };

  const minimizeAllWindows = () => {
    setWindows((prevWindows) => {
      const minimizedWindows = prevWindows.map((window) => {
        return {
          isMinimized: false,
          isFocused: false,
          ...window,
        };
      });

      return [...minimizedWindows];
    });
  };

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        openCustomWindow,
        updateWindow,
        windowsOrder,
        minimizeAllWindows,
      }}>
      {children}
    </WindowManagerContext.Provider>
  );
};
