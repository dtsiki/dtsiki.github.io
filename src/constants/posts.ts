import { nanoid } from 'nanoid';

export const posts = [
  {
    id: nanoid(),
    title: 'Keep calm and test',
    highlight: 'If you need a sign to start testing your React applications, this is it.',
    link: 'keep-calm-and-test',
    category: 'tutorial',
    date: '16 dec 2022',
    tags: ['react', 'typescript', 'jest', 'testing']
  },
  {
    id: nanoid(),
    title: 'Pure CSS toggle switch',
    highlight: 'A step-by-step tutorial how to create a toggle switch using only HTML and CSS without using JavaScript',
    link: 'pure-css-toggle-switch',
    category: 'tutorial',
    date: '1 oct 2022',
    tags: ['html', 'css']
  },
  {
    id: nanoid(),
    title: 'Gerund VS Infinitive',
    highlight: 'Check out this small lesson to know what are gerunds and infinitives and how do you use them',
    link: 'gerund-vs-infinitive',
    category: 'english',
    date: '27 sep 2022',
    tags: ['english']
  },
  {
    id: nanoid(),
    title: 'Semantic markup for the little ones',
    highlight: 'What is semantic markup and why should you write it?',
    link: 'semantic-markup-for-the-little-ones',
    category: 'guide',
    date: '23 sep 2022',
    tags: ['html']
  },
  {
    id: nanoid(),
    title: 'How to improve your skills',
    highlight: 'If you feel that you\'re stuck in a rut or just need some fresh inspiration how to enhance your skills there are ways you can do to help achieve this goal.',
    link: 'how-to-improve-your-skills',
    category: 'insight',
    date: '2 sep 2022',
    tags: ['skills']
  },
  {
    id: nanoid(),
    title: 'Drag and drop',
    highlight: 'A guide to implementing drag and drop in React app without using any third party libraries.',
    link: 'drag-and-drop',
    category: 'tutorial',
    date: '1 sep 2022',
    tags: ['React']
  },
  {
    id: nanoid(),
    title: 'Pure CSS tooltips',
    highlight: 'A step-by-step tutorial that will show you how to create a tooltip using only CSS without any additional JavaScript code.',
    link: 'pure-css-tooltips',
    category: 'tutorial',
    date: '30 jul 2022',
    tags: ['HTML', 'CSS']
  }
];
