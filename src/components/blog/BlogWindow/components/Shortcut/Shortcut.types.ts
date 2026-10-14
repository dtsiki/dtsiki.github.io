import type { TranslationObject } from '~types/language';
import { EFolderView, type TFolderItem, TFolderItemType } from '../Folder/Folder.types';

export interface IShortcutProps {
  title: string | TranslationObject;
  highlight?: string;
  link?: string;
  onClick?: () => void;
  createdAt?: string;
  view?: EFolderView;
  type: TFolderItemType;
  content?: Array<TFolderItem>;
}
