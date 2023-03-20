import { nanoid } from 'nanoid';

export const projects = [
  {
    id: nanoid(),
    title: 'To do',
    highlight: 'A simple task management application built using React and Redux-like manager Storeon with its localStorage module',
    link: 'https://github.com/dtsiki/todo',
    tags: ['HTML', 'CSS', 'React'],
    thumbnail: 'todo'
  },
  {
    id: nanoid(),
    title: 'Quote generator',
    highlight: 'A simple JavaScript generator that shows random quote and random background color for every quote',
    link: 'https://github.com/dtsiki/quote-generator',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'quote-generator'
  },
  {
    id: nanoid(),
    title: 'Dictionary',
    highlight: 'A simple dictionary application using real-time data from the Free Dictionary API and images from Unsplash API.',
    link: 'https://github.com/dtsiki/react-dictionary-app',
    tags: ['HTML', 'CSS', 'React'],
    thumbnail: 'dictionary'
  },
  {
    id: nanoid(),
    title: 'Tic Tac Toe',
    highlight: 'React implementation of one of the oldest and most popular board games in the world',
    link: 'https://github.com/dtsiki/tic-tac-toe',
    tags: ['HTML', 'CSS', 'React'],
    thumbnail: 'tic-tac-toe'
  },
  {
    id: nanoid(),
    title: '18 minutes',
    highlight: '18 minute is a task board based upon a book of the same name by Peter Bregman',
    link: 'https://github.com/dtsiki/18-minutes',
    tags: ['HTML', 'CSS', 'React', 'TypeScript'],
    thumbnail: '18-minutes'
  },
  {
    id: nanoid(),
    title: 'Audio player',
    highlight: 'A simple React with TypeScript audio player I made to listen to audiobooks on my laptop because I can 😂',
    link: 'https://github.com/dtsiki/react-audioplayer',
    tags: ['HTML', 'CSS', 'React', 'TypeScript'],
    thumbnail: 'audio-player'
  },
  {
    id: nanoid(),
    title: 'Task manager',
    highlight: 'A simplified kanban board inspired by Trello. HTML drag and drop API is used here.',
    link: 'https://github.com/dtsiki/task-manager',
    tags: ['HTML', 'CSS', 'React', 'TypeScript'],
    thumbnail: 'task-manager'
  }
];
