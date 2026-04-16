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

/*
export type TFolderItem = {
  id: EBlogFolderRecord;
  title: string | TranslationObject;
  type: TFolderItemType;
  content?: Array<TFolderItem>;
  link?: string;
  postConfig?: TPostConfig;
};
*/

export type TFolderItem = {
  id: string;
  title: string | TranslationObject;
  type: TFolderItemType;
  isRoot?: boolean;
  parentId?: string;
  route?: string;
  children?: TFolderItem[];
  postConfig?: TPostConfig;
};

export type TFolderState = {
  currentPath: string[];
  currentFolderId: string;
  folderContent: TFolderItem[];
};

export type TFolderConfig = Record<string, TFolderItem>;

export interface IFolderProps {
  windowId: string;
  content?: TFolderConfig;
  isRoot?: boolean;
}
