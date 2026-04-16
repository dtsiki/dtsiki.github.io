import { TPostHero } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { Hero } from 'src/components/pages/blog/ru/custom-react-i18n/Hero/Hero';

export const HERO_CONFIG: TPostHero = {
  size: EHeroSize.SMALL,
  pattern: EHeroPattern.CROSS,
  content: <Hero />,
};
