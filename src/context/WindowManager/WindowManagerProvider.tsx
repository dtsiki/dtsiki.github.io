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

  const openWindow = (id: string) => {
    const config = WINDOW_REGISTRY[id];

    if (!config) {
      console.warn(`Окно "${id}" не найдено в реестре`);
      return;
    }

    const isWindowExisting = windows.find((window) => window.id === id);

    if (isWindowExisting) {
      focusWindow(id);
      updateWindow(id, { isMinimized: false });
    } else {
      const newWindow: TWindow = {
        ...config,
        isMinimized: false,
        isFocused: true,
      };

      setWindows((prevWindows) => [...prevWindows, newWindow]);
      focusWindow(id);
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
      }}>
      {children}
    </WindowManagerContext.Provider>
  );
};
