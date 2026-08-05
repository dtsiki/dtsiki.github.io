import { TCustomWindowConfig, TWindow } from 'src/types';

export interface IWindowManagerContextData {
  windows: TWindow[];
  windowsOrder: string[];
  openWindow: (id: string, isMinimized?: boolean, isFocused?: boolean) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindow: (id: string, updates: Partial<TWindow>) => void;
  openCustomWindow: (config: TCustomWindowConfig) => void;
  minimizeAllWindows: () => void;
}
