import { useContext } from 'react';
import { NotificationsContext } from 'src/context/NotificationsContext/NotificationsContext';

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (!context) {
    throw new Error('useNotifications должен использоваться внутри NotificationsProvider');
  }

  return context;
};
