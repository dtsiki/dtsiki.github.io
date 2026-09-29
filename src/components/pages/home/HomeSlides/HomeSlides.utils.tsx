import { nanoid } from 'nanoid';
import { Greeting } from './components/Greeting';
import { TSlide } from 'src/components/common/Window/components/Slideshow/Slideshow.types';
import { BaseSlide } from 'src/components/common/Window/components/Slideshow/components/BaseSlide/BaseSlide';
import { ImageThumbnail } from 'src/components/common/Window/components/Slideshow/components/ImageThumbnail/ImageThumbnail';
import { GREETING } from 'src/i18n';
import { Language } from 'src/types';
import { About } from './components/About';

import thumbnailMainEng from 'public/assets/home/slides/thumbnail-main-eng.png';
import thumbnailMainRu from 'public/assets/home/slides/thumbnail-main-ru.png';
import thumbnailAboutEng from 'public/assets/home/slides/thumbnail-about-eng.png';
import thumbnailAboutRu from 'public/assets/home/slides/thumbnail-about-ru.png';

export const HOME_SLIDES_CONFIG: TSlide[] = [
  {
    id: nanoid(),
    content: <BaseSlide title={<Greeting />} />,
    thumbnail: {
      [Language.ENG]: <ImageThumbnail image={thumbnailMainEng} alt={GREETING} />,
      [Language.RU]: <ImageThumbnail image={thumbnailMainRu} alt={GREETING} />,
    },
  },
  {
    id: nanoid(),
    content: <BaseSlide title={<About />} />,
    thumbnail: {
      [Language.ENG]: <ImageThumbnail image={thumbnailAboutEng} alt={GREETING} />,
      [Language.RU]: <ImageThumbnail image={thumbnailAboutRu} alt={GREETING} />,
    },
  },
];
