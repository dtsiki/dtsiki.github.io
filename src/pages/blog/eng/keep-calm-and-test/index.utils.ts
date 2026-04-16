import { nanoid } from 'nanoid';
import { TReadMoreSource } from 'src/components/blog/ReadMoreList/ReadMoreList.types';

export const SOURCES_CONFIG: Array<TReadMoreSource> = [
  {
    id: nanoid(),
    link: 'https://jestjs.io',
    label: 'Jest documentation',
  },
  {
    id: nanoid(),
    link: 'https://reactjs.org/docs/test-renderer.html',
    label: 'Test Rendered documentation',
  },
  {
    id: nanoid(),
    link: 'https://jestjs.io/docs/snapshot-testing',
    label: 'Jest snapshot testing documentation',
  },
  {
    id: nanoid(),
    link: 'https://www.valentinog.com/blog/jest-coverage/',
    label: 'Configuring code coverage in Jest',
  },
  {
    id: nanoid(),
    link: 'https://reactjs.org/docs/test-renderer.html',
    label: 'React Test Rendered documentation',
  },
];
