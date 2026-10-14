import {
  EFolderView,
  type TFolderItem,
  TFolderItemType,
} from 'src/components/blog/BlogWindow/components/Folder/Folder.types';
import type { TranslationObject } from '~types/language';

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
