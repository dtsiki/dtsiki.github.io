import { nanoid } from 'nanoid';
import { TPostHero } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';
import { EHeroPattern, EHeroSize, EHeroVariant } from 'src/components/layout/Hero/Hero.types';

export const HERO_CONFIG: TPostHero = {
  size: EHeroSize.SMALL,
  pattern: EHeroPattern.SMILEY,
};

export const SOURCES_CONFIG: Array<TReadMoreSource> = [
  {
    id: nanoid(),
    link: 'https://dtsiki.github.io/blog/eng/semantic-markup-for-the-little-ones',
    label: 'Semantic Markup for the Little Ones',
  },
  {
    id: nanoid(),
    link: 'https://www.nngroup.com/articles/toggle-switch-guidelines/',
    label: 'Toggle switch guidelines',
  },
  {
    id: nanoid(),
    link: 'https://reactjs.org/docs/handling-events.html',
    label: 'Handling Events in React',
  },
  {
    id: nanoid(),
    link: 'https://dribbble.com/tags/toggle',
    label: 'Toggles ideas',
  },
  {
    id: nanoid(),
    link: 'https://finolex.com/evolution-of-switchboards-over-the-years/',
    label: 'Evolution of switchboards over the years',
  },
  {
    id: nanoid(),
    link: 'https://sass-lang.com/documentation/variables',
    label: 'SASS variables syntax',
  },
];
