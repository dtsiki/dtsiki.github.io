import { createContext } from 'react';
import { IWindowManagerContextData } from './WindowManagerContext.types';

export const WindowManagerContext = createContext<IWindowManagerContextData | undefined>(undefined);
