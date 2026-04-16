import { TNotification } from 'src/types/notifications';

export type TNotificationsContextData = {
  notifications: TNotification[];
  showNotification: (notification: Omit<TNotification, 'id' | 'timestamp' | 'isRead'>) => string;
  hideNotification: (id: string) => void;
  hideAllNotifications: () => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  getUnreadCount: () => number;
  clearAll: () => void;
};
