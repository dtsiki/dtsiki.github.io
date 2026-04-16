import { TextFileIcon } from 'src/components/common/icons/ui/';
import { EFolderView, TFolderItemType } from 'src/components/common/Window/components/Folder/Folder.types';

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
