import { createContext } from 'react';
import type { IWindowManagerContextData } from './WindowManagerContext.types';

export const WindowManagerContext = createContext<IWindowManagerContextData | undefined>(undefined);
