import { TranslationObject } from 'src/utils/translate';

export type TNotification = {
  id: string;
  message: string | TranslationObject;
  title: string | TranslationObject;
};

export interface INotificationProps {
  config: TNotification;
}
