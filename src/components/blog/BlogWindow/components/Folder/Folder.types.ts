import { TPostConfig } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { TranslationObject } from 'src/types';

export enum EFolderView {
  GRID = 'GRID',
  LIST = 'LIST',
}

export enum TFolderItemType {
  FOLDER = 'FOLDER',
  TXT_FILE = 'TXT_FILE',
}

export type TFolderItem = {
  id: string;
  title: string | TranslationObject;
  type: TFolderItemType;
  isRoot?: boolean;
  parentId?: string;
  path?: TranslationObject;
  route?: string;
  children?: TFolderItem[];
  postConfig?: TPostConfig;
};

export type TFolderState = {
  currentPath: string[];
  currentFolderId: string;
  folderContent: TFolderItem[];
};

export type TFolderConfig = {
  id: string;
  parentId?: string;
  path?: TranslationObject;
  title: string | TranslationObject;
  type: TFolderItemType;
  route?: string;
  isRoot?: boolean;
  children: TFolderItem[];
};

export interface IFolderProps {
  content?: TFolderItem[];
  handleItemClick: (item: TFolderItem) => void;
  navigateBack: () => void;
  isRoot: boolean;
}
