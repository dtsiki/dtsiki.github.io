import { createContext } from 'react';
import { TNotificationsContextData } from './NotificationsContext.types';

export const NotificationsContext = createContext<TNotificationsContextData | undefined>(undefined);
