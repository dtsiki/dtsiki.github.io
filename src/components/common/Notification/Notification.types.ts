import { ReactNode } from 'react';

export type TNotification = {
  id: string;
  message: string;
  title: string;
};

export interface INotificationProps {
  config: TNotification;
}
