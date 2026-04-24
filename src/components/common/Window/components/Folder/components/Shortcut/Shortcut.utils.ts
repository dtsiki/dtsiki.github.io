import { faFileLines, faFolder } from '@fortawesome/free-solid-svg-icons';
import { TFolderItemType } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';

export const SHORTCUT_ICON = {
  [TFolderItemType.TXT_FILE]: faFileLines,
  [TFolderItemType.FOLDER]: faFolder,
};

export const SHORTCUT_FORMAT = {
  [TFolderItemType.TXT_FILE]: '.txt',
};

export const isFileType = (type: TFolderItemType): type is keyof typeof SHORTCUT_FORMAT => {
  return type in SHORTCUT_FORMAT;
};
