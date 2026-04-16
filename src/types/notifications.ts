import { TranslationObject } from 'src/types';

export const NotificationType = {
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
} as const;

export type NotificationType = typeof NotificationType[keyof typeof NotificationType];

export const NotificationAction = {
  CLOSE_NOTIFICATION: 'CLOSE_NOTIFICATION',
} as const;

export type NotificationAction = typeof NotificationAction[keyof typeof NotificationAction];

export type TNotification = {
  id: string;
  timestamp?: Date;
  type: NotificationType;
  title: string | TranslationObject;
  message: string | TranslationObject;
  isRead: boolean;
};
