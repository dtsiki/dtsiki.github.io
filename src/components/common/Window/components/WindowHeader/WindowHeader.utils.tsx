import { EWindowType } from '../../Window.types';
import {
  CodingIcon,
  FolderIcon,
  PictureIcon,
  WindowIcon,
  SlidesIcon,
  TextFileIcon,
  VideoIcon,
  WordFileIcon,
  PlaneMiniIcon,
} from './../../../icons/ui';

export const WINDOW_ICON = {
  [EWindowType.BROWSER]: <WindowIcon useMini={true} />,
  [EWindowType.SLIDESHOW]: <SlidesIcon useMini={true} />,
  [EWindowType.FOLDER]: <FolderIcon useMini={true} />,
  [EWindowType.IMAGE]: <PictureIcon useMini={true} />,
  [EWindowType.VALIDATOR]: <CodingIcon useMini={true} />,
  [EWindowType.CHAT]: <PlaneMiniIcon />,
  [EWindowType.VIDEO]: <VideoIcon useMini={true} />,
  [EWindowType.DOC_FILE]: <WordFileIcon useMini={true} />,
  [EWindowType.TXT_FILE]: <TextFileIcon useMini={true} />,
  [EWindowType.LOADER]: null,
};

export const hasWindowIcon = (type: EWindowType): type is keyof typeof WINDOW_ICON => {
  return type in WINDOW_ICON;
};
