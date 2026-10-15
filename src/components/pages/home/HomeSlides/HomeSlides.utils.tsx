import { nanoid } from 'nanoid';
import { Greeting } from './components/Greeting';
import { type TSlide } from 'src/components/common/Window/components/Slideshow/Slideshow.types';
import { BaseSlide } from 'src/components/common/Window/components/Slideshow/components/BaseSlide/BaseSlide';
import { ImageThumbnail } from 'src/components/common/Window/components/Slideshow/components/ImageThumbnail/ImageThumbnail';
import { GREETING } from 'src/i18n';
import { LANGUAGE } from '~types/language';
import { About } from './components/About';

const THUMBNAIL_MAIN_ENG_IMAGE = '/assets/home/slides/thumbnail-main-eng.png';
const THUMBNAIL_MAIN_RU_IMAGE = '/assets/home/slides/thumbnail-main-ru.png';
const THUMBNAIL_ABOUT_ENG_IMAGE = '/assets/home/slides/thumbnail-about-eng.png';
const THUMBNAIL_ABOUT_RU_IMAGE = '/assets/home/slides/thumbnail-about-ru.png';

export const HOME_SLIDES_CONFIG: TSlide[] = [
  {
    id: nanoid(),
    content: <BaseSlide title={<Greeting />} />,
    thumbnail: {
      [LANGUAGE.ENG]: <ImageThumbnail src={THUMBNAIL_MAIN_ENG_IMAGE} alt={GREETING} />,
      [LANGUAGE.RU]: <ImageThumbnail src={THUMBNAIL_MAIN_RU_IMAGE} alt={GREETING} />,
    },
  },
  {
    id: nanoid(),
    content: <BaseSlide title={<About />} />,
    thumbnail: {
      [LANGUAGE.ENG]: <ImageThumbnail src={THUMBNAIL_ABOUT_ENG_IMAGE} alt={GREETING} />,
      [LANGUAGE.RU]: <ImageThumbnail src={THUMBNAIL_ABOUT_RU_IMAGE} alt={GREETING} />,
    },
  },
];
