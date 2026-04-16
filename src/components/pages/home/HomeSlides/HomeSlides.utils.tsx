import { nanoid } from 'nanoid';
import { Greeting } from './components/Greeting';
import { TSlide } from 'src/components/common/Window/components/Slideshow/Slideshow.types';
import { BaseSlide } from 'src/components/common/Window/components/Slideshow/components/BaseSlide/BaseSlide';
import thumbnailEng from 'public/assets/home/slides/thumbnail-eng.png';
import thumbnailRu from 'public/assets/home/slides/thumbnail-ru.png';
import { ImageThumbnail } from 'src/components/common/Window/components/Slideshow/components/ImageThumbnail/ImageThumbnail';
import { GREETING } from 'src/i18n';
import { Language } from 'src/types';

export const HOME_SLIDES_CONFIG: TSlide[] = [
  {
    id: nanoid(),
    content: <BaseSlide title={<Greeting />} />,
    thumbnail: {
      [Language.ENG]: <ImageThumbnail image={thumbnailEng} alt={GREETING} />,
      [Language.RU]: <ImageThumbnail image={thumbnailRu} alt={GREETING} />,
    },
  },
];
