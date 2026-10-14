import type { TranslationObject } from '~types/language';

export type TNotification = {
  id: string;
  message: string | TranslationObject;
  title: string | TranslationObject;
};

export interface INotificationProps {
  config: TNotification;
}
