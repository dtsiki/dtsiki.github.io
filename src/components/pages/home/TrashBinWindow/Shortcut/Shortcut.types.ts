import { EFolderView } from 'src/components/common/Window/components/Folder/Folder.types';
import { TranslationObject } from 'src/types';

export interface IShortcutProps {
  title: string | TranslationObject;
  highlight?: string;
  link?: string;
  onClick?: () => void;
  createdAt?: string;
  view?: EFolderView;
}
