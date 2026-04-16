import { BLOG_FOLDER_NAME, CV_FILE_NAME, OLD_CV_FILE_NAME, README_FILE_NAME, SLIDES_FILE_NAME } from 'src/i18n';
import { HOME_CV_CONFIG } from 'src/components/pages/home/HomeCV/HomeCV.utils';
import { HOME_SLIDES_CONFIG } from 'src/components/pages/home/HomeSlides/HomeSlides.utils';
import { HomeReadme } from 'src/components/pages/home/HomeReadme/HomeReadme';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { BlogWindow } from 'src/components/blog/BlogWindow';
import { TWindow } from 'src/types';
import { TrashBinWindow } from 'src/components/pages/home/TrashBinWindow/TrashBinWindow';
import { BLOG_FOLDER_CONFIG } from 'src/components/blog/BlogWindow/BlogWindow.utils';
import { TRASH_BIN_CV_CONFIG } from 'src/components/pages/home/TrashBinWindow/CV/HomeCV.utils';
// import { TrashBinWindow } from 'src/components/pages/home/TrashBinWindow/TrashBinWindow';

export enum EWindowRecord {
  CV_DOC_FILE = 'CV_DOC_FILE',
  SLIDES_PPT_FILE = 'SLIDES_PPT_FILE',
  README_TXT_FILE = 'README_TXT_FILE',
  BLOG_FOLDER = 'BLOG_FOLDER',
  TRASH_BIN = 'TRASH_BIN',
  TRASH_BIN_CV_DOC_FILE = 'TRASH_BIN_CV_DOC_FILE',
}

export const WINDOW_REGISTRY: Record<string, TWindow> = {
  [EWindowRecord.CV_DOC_FILE]: {
    id: EWindowRecord.CV_DOC_FILE,
    size: {
      width: 'calc(100% - 50px)',
      height: 'calc(100% - 50px)',
    },
    position: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    config: {
      title: CV_FILE_NAME,
      type: EWindowType.DOC_FILE,
      content: {
        docPages: HOME_CV_CONFIG,
      },
    },
  },
  [EWindowRecord.SLIDES_PPT_FILE]: {
    id: EWindowRecord.SLIDES_PPT_FILE,
    size: {
      width: '1024px',
    },
    position: {
      top: '100px',
      left: '100px',
    },
    config: {
      type: EWindowType.SLIDESHOW,
      title: SLIDES_FILE_NAME,
      content: {
        slides: HOME_SLIDES_CONFIG,
      },
    },
  },
  [EWindowRecord.README_TXT_FILE]: {
    id: EWindowRecord.README_TXT_FILE,
    size: {
      width: '600px',
    },
    position: {
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    config: {
      type: EWindowType.TXT_FILE,
      title: README_FILE_NAME,
      content: {
        textFile: <HomeReadme />,
      },
    },
  },
  [EWindowRecord.BLOG_FOLDER]: {
    id: EWindowRecord.BLOG_FOLDER,
    size: {
      width: '1024px',
    },
    position: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    initialState: {
      title: BLOG_FOLDER_NAME,
      content: BLOG_FOLDER_CONFIG.children,
    },
    config: {
      customComponent: {
        type: EWindowRecord.BLOG_FOLDER,
        component: <BlogWindow />,
      },
    },
  },
  [EWindowRecord.TRASH_BIN]: {
    id: EWindowRecord.TRASH_BIN,
    size: {
      width: '768px',
    },
    position: {
      right: '170px',
      top: 'calc(100% - 410px - 230px)',
    },
    config: {
      customComponent: {
        type: EWindowRecord.TRASH_BIN,
        component: <TrashBinWindow />,
      },
    },
  },
  [EWindowRecord.TRASH_BIN_CV_DOC_FILE]: {
    id: EWindowRecord.TRASH_BIN_CV_DOC_FILE,
    size: {
      width: 'calc(100% - 50px)',
      height: 'calc(100% - 50px)',
    },
    position: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    config: {
      title: OLD_CV_FILE_NAME,
      type: EWindowType.DOC_FILE,
      content: {
        docPages: TRASH_BIN_CV_CONFIG,
      },
    },
  },
};
