import { nanoid } from 'nanoid';
import { TPostHero } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';

export const HERO_CONFIG: TPostHero = {
  size: EHeroSize.SMALL,
  pattern: EHeroPattern.SPRINKLES,
  variant: EHeroVariant.SECONDARY,
};

export const SOURCES_CONFIG: Array<TReadMoreSource> = [
  {
    id: nanoid(),
    link: 'https://create-react-app.dev/',
    label: 'React Create App',
  },
  {
    id: nanoid(),
    link: 'https://react.dev/reference/react/hooks',
    label: 'React Hooks',
  },
  {
    id: nanoid(),
    link: 'https://usehooks-ts.com/react-hook/use-event-listener',
    label: 'useEventListener',
  },
  {
    id: nanoid(),
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight',
    label: 'What is scroll height',
  },
  {
    id: nanoid(),
    link: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight',
    label: 'What is client height',
  },
];
