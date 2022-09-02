import { nanoid } from 'nanoid';

export const posts = [
  {
    id: nanoid(),
    title: 'How to improve your skills',
    highlight: 'If you feel that you\'re stuck in a rut or just need some fresh inspiration how to enhance your skills there are ways you can do to help achieve this goal.',
    link: '/blog/how-to-improve-your-skills',
    category: 'insight',
    date: '2 sep 2022',
    tags: ['skills']
  },
  {
    id: nanoid(),
    title: 'Drag and drop',
    highlight: 'A guide to implementing drag and drop in React app without using any third party libraries.',
    link: '/blog/drag-and-drop',
    category: 'tutorial',
    date: '1 sep 2022',
    tags: ['React']
  },
  {
    id: nanoid(),
    title: 'Pure CSS tooltips',
    highlight: 'A step-by-step tutorial that will show you how to create a tooltip using only CSS without any additional JavaScript code.',
    link: '/blog/pure-css-tooltips',
    category: 'tutorial',
    date: '30 jul 2022',
    tags: ['HTML', 'CSS']
  }
];
