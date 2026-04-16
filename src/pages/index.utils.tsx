import { DocFile } from 'src/components/common/Window/components/DocFile';
import { Slideshow } from 'src/components/common/Window/components/Slideshow/Slideshow';
import { EWindowType } from 'src/components/common/Window/Window.types';
import { CV_FILE_NAME, README_FILE_NAME, SLIDES_FILE_NAME } from 'src/i18n';
import { TextFile } from 'src/components/common/Window/components/TextFile/TextFile';
import { nanoid } from 'nanoid';
import { HOME_CV_CONFIG } from 'src/components/pages/home/HomeCV/HomeCV.utils';
import { HomeReadme } from 'src/components/pages/home/HomeReadme/HomeReadme';
import { HOME_SLIDES_CONFIG } from 'src/components/pages/home/HomeSlides/HomeSlides.utils';
import { HomeItem } from './index.types';

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
    content: <Slideshow name='dtsiki.github.io' fileTitle={SLIDES_FILE_NAME} slides={HOME_SLIDES_CONFIG} />,
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
