import { useState, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { NotificationsContext } from './NotificationsContext';
import { INotificationsProviderProps } from './NotificationsProvider.types';
import { TNotification } from 'src/types/notifications';
import { TNotificationsContextData } from './NotificationsContext.types';

const MAX_NOTIFICATIONS = 1;

export const NotificationsProvider = ({ children }: INotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<TNotification[]>([]);

  const showNotification = useCallback(
    ({ type, title, message }: Omit<TNotification, 'id' | 'timestamp' | 'isRead'>): string => {
      const id = nanoid();

      const newNotification: TNotification = {
        id,
        timestamp: new Date(),
        type,
        title,
        message,
        isRead: false,
      };

      setNotifications((prev) => {
        const updated = [newNotification, ...prev];

        if (updated.length > MAX_NOTIFICATIONS) {
          return updated.slice(0, MAX_NOTIFICATIONS);
        }

        return updated;
      });

      return id;
    },
    [MAX_NOTIFICATIONS]
  );

  const hideNotification = useCallback((id: string) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  }, []);

  const hideAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const markAsRead = useCallback((id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isRead: true }))
    );
  }, []);

  const getUnreadCount = useCallback(() => {
    return notifications.filter((n) => !n.isRead).length;
  }, [notifications]);

  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const value: TNotificationsContextData = {
    notifications,
    showNotification,
    hideNotification,
    hideAllNotifications,
    markAsRead,
    markAllAsRead,
    getUnreadCount,
    clearAll,
  };

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
};
