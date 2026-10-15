import { createContext } from 'react';
import type { TNotificationsContextData } from './NotificationsContext.types';

export const NotificationsContext = createContext<TNotificationsContextData | undefined>(undefined);
