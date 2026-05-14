import { nanoid } from 'nanoid';
import { EPostType, TPostConfig } from 'src/components/blog/PostWrapper/PostWrapper.types';
import { Language } from 'src/types';

export enum EBlogPostRecord {
  PURE_CSS_TOOLTIPS = 'PURE_CSS_TOOLTIPS',
  REACT_DRAG_AND_DROP = 'REACT_DRAG_AND_DROP',
  HOW_TO_IMPROVE_YOUR_SKILLS = 'HOW_TO_IMPROVE_YOUR_SKILLS',
  SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES = 'SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES',
  PURE_CSS_TOGGLE_SWITCH = 'PURE_CSS_TOGGLE_SWITCH',
  KEEP_CALM_AND_TEST = 'KEEP_CALM_AND_TEST',
  HOW_I_IMPROVED_MY_ENGLISH = 'HOW_I_IMPROVED_MY_ENGLISH',
  JAVASCRIPT_IN_A_NUTSHELL = 'JAVASCRIPT_IN_A_NUTSHELL',
  MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH = 'MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH',
  HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR = 'HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR',
  ANIMATED_STAR_TUTORIAL = 'ANIMATED_STAR_TUTORIAL',
  JAVASCRIPT_DRAG_AND_DROP_QUICKLY = 'JAVASCRIPT_DRAG_AND_DROP_QUICKLY',
  CREATING_A_REACT_APP = 'CREATING_A_REACT_APP',
  CUSTOM_REACT_I18N = 'CUSTOM_REACT_I18N',
  APRIL_READING_LIST = 'APRIL_READING_LIST',
}

export const POSTS_CONFIG_: Record<string, TPostConfig> = {
  [EBlogPostRecord.PURE_CSS_TOOLTIPS]: {
    id: EBlogPostRecord.REACT_DRAG_AND_DROP,
    title: 'Pure CSS tooltips',
    highlight:
      'A step-by-step guide to building custom tooltips. No JavaScript, no libraries — just clean HTML and CSS.',
    link: 'pure-css-tooltips',
    category: EPostType.TUTORIAL,
    createdAt: '30 jul 2022',
    tags: ['HTML', 'CSS'],
    language: Language.ENG,
    meta: {
      description:
        'Learn how to create custom tooltips step-by-step. No JavaScript, no libraries — just clean HTML and CSS. Perfect for beginners and pros.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.REACT_DRAG_AND_DROP,
    },
  },
  [EBlogPostRecord.REACT_DRAG_AND_DROP]: {
    id: EBlogPostRecord.REACT_DRAG_AND_DROP,
    title: 'React Drag and Drop',
    highlight:
      'In this guide I will show you how to implement drag and drop in your application without using any third party libraries.',
    meta: {
      description: 'How to implement drag and drop in application without using any third party libraries',
    },
    link: 'react-drag-and-drop',
    category: EPostType.GUIDE,
    createdAt: '1 sep, 2022',
    tags: ['REACT'],
    language: Language.ENG,
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS,
    },
  },
  [EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS]: {
    id: EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS,
    title: 'How to Improve Your Skills',
    highlight: "10 tips you've heard before, but probably ignored.",
    link: 'how-to-improve-your-skills',
    category: EPostType.THOUGHTS,
    createdAt: '2 sep, 2022',
    tags: ['skills'],
    language: Language.ENG,
    meta: {
      description: "How to Improve Your Skills: 10 Tips You've Heard Before (But Probably Ignored).",
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES,
    },
  },
  [EBlogPostRecord.SEMANTIC_MARKUP_FOR_THE_LITTLE_ONES]: {
    id: EBlogPostRecord.HOW_TO_IMPROVE_YOUR_SKILLS,
    title: 'Semantic Markup for the Little Ones',
    highlight: 'A beginner-friendly guide to semantic HTML for writing meaningful markup.',
    link: 'semantic-markup-for-the-little-ones',
    category: EPostType.GUIDE,
    createdAt: '23 sep, 2022',
    tags: ['HTML'],
    language: Language.ENG,
    meta: {
      description: 'A beginner-friendly guide to semantic HTML for writing meaningful markup.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH,
    },
  },
  [EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH]: {
    id: EBlogPostRecord.PURE_CSS_TOGGLE_SWITCH,
    title: 'Pure CSS Toggle Switch: Create a Custom Switch Without JavaScript',
    highlight:
      'A step-by-step tutorial to creating custom toggle switches with pure CSS and HTML. No JavaScript required — just clean code and smooth transitions.',
    link: 'pure-css-toggle-switch',
    category: EPostType.TUTORIAL,
    createdAt: '1 oct, 2022',
    tags: ['HTML', 'CSS'],
    language: Language.ENG,
    meta: {
      description:
        'A step-by-step tutorial to creating custom toggle switches with pure CSS and HTML. No JavaScript required — just clean code and smooth transitions.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.KEEP_CALM_AND_TEST,
    },
  },
  [EBlogPostRecord.KEEP_CALM_AND_TEST]: {
    id: EBlogPostRecord.KEEP_CALM_AND_TEST,
    title: 'Keep Calm and Test (and Then Test Again, and Test One More Time): A Guide to React Testing',
    highlight:
      'If you need a sign to start testing your React applications — this is it. Learn how to test React components without crying. Covers unit tests, user events, async logic, and the art of testing one more time.',
    link: 'keep-calm-and-test',
    category: EPostType.GUIDE,
    createdAt: '16 dec, 2022',
    tags: ['REACT'],
    language: Language.ENG,
    meta: {
      description:
        'Learn how to test React components without crying. Covers unit tests, user events, async logic, and the art of testing one more time.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH,
    },
  },
  [EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH]: {
    id: EBlogPostRecord.HOW_I_IMPROVED_MY_ENGLISH,
    title: 'How I Improved My English: Tips That Helped Me (And That Can Help You Too)',
    highlight: 'Real tips from a real journey. How I improved my English step by step — and how you can start today.',
    link: 'how-i-improved-my-english',
    category: EPostType.ENGLISH,
    createdAt: '28 dec, 2022',
    language: Language.ENG,
    meta: {
      description:
        'Real tips from a real journey. How I improved my English step by step — and how you can start today.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL,
    },
  },
  [EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL]: {
    id: EBlogPostRecord.JAVASCRIPT_IN_A_NUTSHELL,
    title: 'JavaScript in a Nutshell: Quick Guide to Learn the Basics',
    highlight:
      'A quick and friendly guide to JavaScript basics. Learn core concepts like variables, scope, functions, and hoisting in minutes.',
    category: EPostType.GUIDE,
    tags: ['JavaScript'],
    link: 'javascript-in-a-nutshell',
    createdAt: '13 feb, 2023',
    meta: {
      description:
        'A quick and friendly guide to JavaScript basics. Learn core concepts like variables, scope, functions, loops, and hoisting in minutes. Perfect for beginners!',
    },
    language: Language.ENG,
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH,
    },
  },
  [EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH]: {
    id: EBlogPostRecord.MY_FAVORITE_WEBSITES_TO_IMPROVE_ENGLISH,
    title: "My Favorite Websites to Improve English: Tools I Can't Live Without",
    highlight:
      'Here are the web tools that helped me level up my English — from vocab to pronunciation. All free, all actually useful.',
    link: 'my-favorite-websites-to-improve-english',
    category: EPostType.ENGLISH,
    createdAt: '24 apr 2024',
    language: Language.ENG,
    meta: {
      description:
        'Here are the web tools that helped me level up my English — from vocab to pronunciation. All free, all actually useful.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR,
    },
  },
  [EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR]: {
    id: EBlogPostRecord.HOW_TO_CREATE_A_PAGE_SCROLL_PROGRESS_BAR,
    title: 'How to Create a Page Scroll Progress Bar: A Quick React Tutorial',
    highlight:
      'Learn how to build a simple scroll progress bar in React. Perfect for beginners — clear steps, minimal code, instant result.',
    link: 'how-to-create-a-page-scroll-progress-bar',
    category: EPostType.TUTORIAL,
    createdAt: '29 apr, 2024',
    tags: ['React'],
    language: Language.ENG,
    meta: {
      description:
        'Learn how to build a simple scroll progress bar in React. Perfect for beginners — clear steps, minimal code, instant result.',
    },
    strictLanguage: true,
  },
  [EBlogPostRecord.ANIMATED_STAR_TUTORIAL]: {
    id: EBlogPostRecord.ANIMATED_STAR_TUTORIAL,
    title: 'Время зажигать звёзды',
    highlight:
      'Делаем вместе пошагово анимированную звезду с помощью CSS и JavaScript, а потом переносим код на React.',
    link: 'animated-star-tutorial',
    category: EPostType.TUTORIAL,
    createdAt: '10 oct 2025',
    tags: ['JavaScript', 'React'],
    language: Language.RU,
    meta: {
      description:
        'Делаем вместе пошагово анимированную звезду с помощью CSS и JavaScript,  а потом переносим код на React.',
    },
    strictLanguage: true,
    pagination: {
      next: EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY,
    },
  },
  [EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY]: {
    id: EBlogPostRecord.JAVASCRIPT_DRAG_AND_DROP_QUICKLY,
    title: 'Drag-and-Drop на JavaScript быстро',
    highlight: "Разбираемся в Drag-and-Drop'e на JavaScript — быстро, без лишней воды, всяких библиотек и прочего.",
    link: 'javascript-drag-and-drop-quickly',
    category: EPostType.TUTORIAL,
    createdAt: '25 dec 2025',
    tags: ['JavaScript'],
    language: Language.RU,
    meta: {
      description:
        'Разбираемся в Drag-and-Drop\'e на JavaScript — быстро, без лишней воды, всяких библиотек и прочего."',
    },
    pagination: {
      next: EBlogPostRecord.CREATING_A_REACT_APP,
    },
    strictLanguage: true,
  },
  [EBlogPostRecord.CREATING_A_REACT_APP]: {
    id: EBlogPostRecord.CREATING_A_REACT_APP,
    title: 'Как создать React-приложение и показать его миру',
    highlight:
      'Пошаговое  руководство для тех, кто хочет создать своё первое React-приложение и  сразу опубликовать его. Используем Create React App или Vite для быстрого создания приложения и GitHub Pages для бесплатного хостинга. В конце урока — рабочая ссылка на сайт.',
    link: 'creating-a-react-app',
    category: EPostType.TUTORIAL,
    createdAt: '3 march 2026',
    tags: ['React'],
    language: Language.RU,
    meta: {
      description:
        'Пошаговое руководство для тех, кто хочет создать своё первое React-приложение и сразу опубликовать его. Используем Create React App для быстрой сборки и GitHub Pages для бесплатного хостинга. В конце урока — рабочая ссылка на сайт!',
    },
    pagination: {
      next: EBlogPostRecord.CUSTOM_REACT_I18N,
    },
    strictLanguage: true,
  },
  [EBlogPostRecord.CUSTOM_REACT_I18N]: {
    id: EBlogPostRecord.CUSTOM_REACT_I18N,
    title: 'DIY: локализуем приложение на React сами',
    highlight:
      'В этой статье изобретём велосипед и создадим своими руками i18next в приложении на React.  Контекст, хук и никакой магии.',
    link: 'custom-react-i18n',
    category: EPostType.TUTORIAL,
    createdAt: '13 march 2026',
    tags: ['React', 'TypeScript'],
    language: Language.RU,
    meta: {
      description:
        'В этой статье изобретём велосипед и создадим своими руками i18next в приложении на React.  Контекст, хук и никакой магии.',
    },
    strictLanguage: true,
  },
  [EBlogPostRecord.APRIL_READING_LIST]: {
    id: EBlogPostRecord.APRIL_READING_LIST,
    title: 'Что я прочитала в апреле',
    highlight: 'Рассказываю какие книги прочитала или прослушала за прошлый месяц.',
    link: 'april-reading-list',
    category: EPostType.READING,
    createdAt: '14 may 2026',
    tags: ['Прочитанное'],
    language: Language.RU,
    meta: {
      description: 'Рассказываю какие книги прочитала или прослушала за прошлый месяц.',
    },
    strictLanguage: true,
  },
  /*
  [EBlogPostRecord.FRONTEND_QUESTIONS]: {
    id: EBlogPostRecord.FRONTEND_QUESTIONS,
    title: '1000 и 1 вопрос по фронтенду',
    highlight:
      'Собрала здесь все вопросы, которые сама когда-либо встречала на собеседованиях, попадались в интернетах или придумывала сама в 3 часа ночи. 1000 и 1 способ проверить свои знания — и ни одного лишнего.',
    link: '1001-frontend-questions',
    category: EPostType.GUIDE,
    createdAt: '1 march 2026',
    language: Language.RU,
    meta: {
      description:
        'Полный справочник вопросов по фронтенд-разработке. JavaScript, TypeScript, React, браузеры, сети, доступность — всё в одном месте. Подготовка к собеседованию, повторение основ или просто проверка себя.',
    },
    strictLanguage: true,
  },
  */
  /*
  [EBlogPostRecord.CSS_FLEXBOX]: {
    id: EBlogPostRecord.CSS_FLEXBOX,
    title: 'CSS Flexbox: раскладываем всё по полочкам',
    highlight:
      'Здесь всё, что нужно знать: теория, практика, типовые задачи. С этим гайдом выравнивание перестанет быть головной болью.',
    link: 'css-flexbox',
    category: EPostType.GUIDE,
    createdAt: '1 march 2026',
    tags: ['CSS'],
    language: Language.RU,
    meta: {
      description:
        'Здесь всё, что нужно знать: теория, практика, типовые задачи. С этим гайдом выравнивание перестанет быть головной болью.',
    },
    strictLanguage: true,
  },*/
};

export const getPostsByLang = (language: Language) => {
  return Object.values(POSTS_CONFIG_).filter((post) => post.language === language);
};

export const POSTS_CONFIG = [
  {
    id: nanoid(),
    title: 'Drag-and-drop на JavaScript быстро',
    highlight: "Разбираемся в drag-and-drop'e на JavaScript — быстро, без лишней воды, всяких библиотек и прочего",
    link: 'javascript-drag-and-drop-quickly',
    category: 'tutorial',
    date: '25 dec 2025',
    tags: ['javascript'],
    language: Language.RU,
  },
  {
    id: nanoid(),
    title: 'Время зажигать звёзды',
    highlight: 'Делаем анимированную звезду с помощью CSS и JavaScript',
    link: 'animated-star-tutorial',
    category: 'tutorial',
    date: '10 oct 2025',
    tags: ['react', 'css', 'javascript'],
    language: Language.RU,
  },
  {
    id: nanoid(),
    title: 'How to create a page scroll progress bar',
    highlight:
      'In this quick tutorial you will learn how to create a simple scroll progress bar using React step by step',
    link: 'how-to-create-a-page-scroll-progress-bar',
    category: 'tutorial',
    date: '29 apr 2024',
    tags: ['react'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'My favorite websites to improve English',
    highlight: 'English learning web tools I can not live without',
    link: 'my-favorite-websites-to-improve-english',
    category: 'insight',
    date: '24 apr 2024',
    tags: ['english'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'JavaScript in a nutshell',
    highlight: 'An ultimate and compact guide to get into JavaScript',
    category: 'guide',
    link: 'javascript-in-a-nutshell',
    date: '13 feb 2023',
    tags: ['JavaScript'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'How I improved my English',
    highlight: 'Tips that helped me and that can help you to improve your English level',
    link: 'how-i-improved-my-english',
    category: 'insight',
    date: '28 dec 2022',
    tags: ['english'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Keep calm and test',
    highlight: 'If you need a sign to start testing your React applications, this is it',
    link: 'keep-calm-and-test',
    category: 'tutorial',
    date: '16 dec 2022',
    tags: ['react', 'typescript', 'jest', 'testing'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Pure CSS toggle switch',
    highlight: 'A step-by-step tutorial how to create a toggle switch using only HTML and CSS without using JavaScript',
    link: 'pure-css-toggle-switch',
    category: 'tutorial',
    date: '1 oct 2022',
    tags: ['html', 'css'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Gerund VS Infinitive',
    highlight: 'Check out this small lesson to know what are gerunds and infinitives and how do you use them',
    link: 'gerund-vs-infinitive',
    category: 'english',
    date: '27 sep 2022',
    tags: ['english'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Semantic markup for the little ones',
    highlight: 'What is semantic markup and why should you write it?',
    link: 'semantic-markup-for-the-little-ones',
    category: 'guide',
    date: '23 sep 2022',
    tags: ['html'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'How to improve your skills',
    highlight:
      "If you feel that you're stuck in a rut or just need some fresh inspiration how to enhance your skills there are ways you can do to help achieve this goal",
    link: 'how-to-improve-your-skills',
    category: 'insight',
    date: '2 sep 2022',
    tags: ['skills'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Drag and drop',
    highlight: 'A guide to implementing drag and drop in React app without using any third party libraries',
    link: 'drag-and-drop',
    category: 'tutorial',
    date: '1 sep 2022',
    tags: ['React'],
    language: Language.ENG,
  },
  {
    id: nanoid(),
    title: 'Pure CSS tooltips',
    highlight:
      'A step-by-step tutorial that will show you how to create a tooltip using only CSS without any additional JavaScript code',
    link: 'pure-css-tooltips',
    category: 'tutorial',
    date: '30 jul 2022',
    tags: ['HTML', 'CSS'],
    language: Language.ENG,
  },
];
