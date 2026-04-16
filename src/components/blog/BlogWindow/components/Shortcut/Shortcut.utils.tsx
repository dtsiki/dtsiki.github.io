import { FolderIcon, TextFileIcon } from 'src/components/common/icons/ui/';
import { EFolderView, TFolderItemType } from '../Folder/Folder.types';
import { BooksIcon } from 'src/components/common/icons/ui';

export const SHORTCUT_ICON = {
  [EFolderView.GRID]: {
    [TFolderItemType.TXT_FILE]: <TextFileIcon />,
    [TFolderItemType.FOLDER]: <BooksIcon />,
  },
  [EFolderView.LIST]: {
    [TFolderItemType.TXT_FILE]: <TextFileIcon useMini={true} />,
    [TFolderItemType.FOLDER]: <FolderIcon useMini={true} />,
  },
};

export const SHORTCUT_FORMAT = {
  [TFolderItemType.TXT_FILE]: '.txt',
};

export const isFileType = (type: TFolderItemType): type is keyof typeof SHORTCUT_FORMAT => {
  return type in SHORTCUT_FORMAT;
};
