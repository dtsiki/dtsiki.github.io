import { TPostHero } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';

export const HERO_CONFIG: TPostHero = {
  size: EHeroSize.SMALL,
  pattern: EHeroPattern.CROSS,
  variant: EHeroVariant.VIOLET,
};
