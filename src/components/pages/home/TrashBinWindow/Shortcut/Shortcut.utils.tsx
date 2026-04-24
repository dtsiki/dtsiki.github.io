import { EFolderView, TFolderItemType } from 'src/components/blog/BlogWindow/components/Folder/Folder.types';
import { TextFileIcon } from 'src/components/common/icons/ui/';

export const SHORTCUT_ICON = {
  [EFolderView.GRID]: {
    [TFolderItemType.TXT_FILE]: <TextFileIcon />,
  },
  [EFolderView.LIST]: {
    [TFolderItemType.TXT_FILE]: <TextFileIcon useMini={true} />,
  },
};

export const SHORTCUT_FORMAT = {
  [TFolderItemType.TXT_FILE]: '.txt',
};

export const isFileType = (type: TFolderItemType): type is keyof typeof SHORTCUT_FORMAT => {
  return type in SHORTCUT_FORMAT;
};
