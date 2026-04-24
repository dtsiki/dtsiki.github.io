import { EWindowRecord, WINDOW_REGISTRY } from 'src/context/WindowManager/WindowManager.utils';
import { HomeItem, HomeShortcut, THomeShortcut } from './HomeShortcuts.types';
import { BLOG, CV_FILE_NAME, README_FILE_NAME, SLIDES_FILE_NAME, TRASH_BIN } from 'src/i18n/';
import { BinIcon, SlidesIcon, TypingMachineIcon, WordFileIcon } from 'src/components/common/icons/ui';
import { NotepadIcon } from 'src/components/common/icons/ui';
import { DocFile } from 'src/components/common/Window/components/DocFile';
import { Slideshow } from 'src/components/common/Window/components/Slideshow/Slideshow';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { TextFile } from 'src/components/common/Window/components/TextFile/TextFile';
import { nanoid } from 'nanoid';
import { HOME_CV_CONFIG } from 'src/components/pages/home/HomeCV/HomeCV.utils';
import { HomeReadme } from 'src/components/pages/home/HomeReadme/HomeReadme';
import { HOME_SLIDES_CONFIG } from 'src/components/pages/home/HomeSlides/HomeSlides.utils';

export const HOME_HERO_MODAL_CONFIG = {
  [HomeItem.CV]: {
    id: nanoid(),
    type: EWindowType.DOC_FILE,
    title: CV_FILE_NAME,
    content: <DocFile pages={HOME_CV_CONFIG} />,
    showMenu: true,
  },
  [HomeItem.SLIDES]: {
    id: nanoid(),
    type: EWindowType.SLIDESHOW,
    title: SLIDES_FILE_NAME,
    content: <Slideshow slides={HOME_SLIDES_CONFIG} />,
    showMenu: true,
  },
  [HomeItem.README]: {
    id: nanoid(),
    type: EWindowType.TXT_FILE,
    title: README_FILE_NAME,
    content: <TextFile content={<HomeReadme />} />,
    showMenu: true,
  },
};

export const HOME_SHORTCUTS_CONFIG: THomeShortcut[] = [
  {
    id: HomeShortcut.CV,
    loc: CV_FILE_NAME,
    icon: <WordFileIcon />,
    window: WINDOW_REGISTRY[EWindowRecord.CV_DOC_FILE],
    /* initialPosition: {
      top: 30,
      left: 30,
      unit: TDragItemPositionUnit.PERCENTAGE,
    },*/
  },
  {
    id: HomeShortcut.BLOG,
    loc: BLOG,
    icon: <TypingMachineIcon />,
    window: WINDOW_REGISTRY[EWindowRecord.BLOG_FOLDER],
    /* initialPosition: {
      top: 20,
      left: 50,
      unit: TDragItemPositionUnit.PERCENTAGE,
    },*/
  },
  {
    id: HomeShortcut.SLIDES,
    loc: SLIDES_FILE_NAME,
    icon: <SlidesIcon />,
    window: WINDOW_REGISTRY[EWindowRecord.SLIDES_PPT_FILE],
    /*initialPosition: {
      top: 55,
      left: 45,
      unit: TDragItemPositionUnit.PERCENTAGE,
    },*/
  },
  {
    id: HomeShortcut.README,
    loc: README_FILE_NAME,
    icon: <NotepadIcon />,
    window: WINDOW_REGISTRY[EWindowRecord.README_TXT_FILE],
    /*initialPosition: {
      top: 40,
      left: 55,
      unit: TDragItemPositionUnit.PERCENTAGE,
    },*/
  },
  {
    id: HomeShortcut.TRASH_BIN,
    loc: TRASH_BIN,
    icon: <BinIcon />,
    window: WINDOW_REGISTRY[EWindowRecord.TRASH_BIN],
    /*initialPosition: {
      bottom: 100,
      right: 100,
      unit: TDragItemPositionUnit.PIXELS,
    },*/
  },
];
