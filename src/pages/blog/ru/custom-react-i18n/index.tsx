import { useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { IItemOfContent } from 'src/interfaces';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { Hero } from 'src/components/pages/blog/ru/custom-react-i18n/Hero/Hero';

const Post = () => {
  const appDesignRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<HTMLDivElement>(null);
  const providerRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const i18nRef = useRef<HTMLDivElement>(null);
  const translateRef = useRef<HTMLDivElement>(null);
  const langToggleRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);

  const tableOfContents: Array<IItemOfContent> = [
    {
      title: 'Планируем архитектуру',
      ref: appDesignRef,
    },
    {
      title: 'Определяемся с языками',
      ref: languagesRef,
    },
    {
      title: 'Создаём контекст',
      ref: contextRef,
    },
    {
      title: 'Создаём провайдер',
      ref: providerRef,
    },
    {
      title: 'Создаём хук',
      ref: hookRef,
    },
    {
      title: 'Организуем хранение переводов',
      ref: i18nRef,
    },
    {
      title: 'Переводим',
      ref: translateRef,
    },
    {
      title: 'Добавляем переключатель языка',
      ref: langToggleRef,
    },
    {
      title: 'Заключение',
      ref: conclusionRef,
    },
  ];

  /*
  const structureSnippet = `src/
├── context/
│   └── LangContext/
│       ├── LangContext.types.tsx    # типы - какие языки могут быть и структура контекста
│       ├── LangContext.tsx          # сам контекст
│       └── LangProvider.tsx         # компонент-обёртка с состоянием языка и функцией переключения языка
├── i18n/                            # папка с переводами
│   └── index.ts
└── hooks/
    └── useTranslate.ts              # хук, чтобы получать переводы в любом компоненте`;
*/

  const projectStructureSnippet = `src/
├── main.tsx                          # точка входа
├── App.tsx                           # корневой компонент <App />
├── index.css                         # глобальные стили
│
├── context/                          # все контексты
│   └── LanguageContext/
│      ├── LanguageContext.types.ts   # типы для контекста
│      ├── LanguageContext.tsx        # сам контекст
│      ├── LanguageProvider.types.ts  # типы для провайдера
│      └── LanguageProvider.tsx       # провайдер
│
├── i18n/                             # всё для локализации
│   ├── language.ts                   # Language (константа + тип)
│   ├── translations/                 # переводы по категориям
│   │   ├── common.ts
│   │   └── index.ts
│   ├── translate.ts                  # функция перевода
│   └── index.ts                      # единый экспорт
│
├── types/                            # общие типы
│   └── i18n.types.ts                 # TranslationObject и др.
│
├── hooks/                            # кастомные хуки
│   └── useTranslate.ts               # хук для React
│
└── components/                       # компоненты
    ├── LanguageSwitcher/             # компонент переключателя языка
    │   └── LanguageSwitcher.tsx
    └── ...`;

  const langEnumSnippet = `export enum ELang {
  ENG = 'ENG',
  RU = 'RU',
}`;

  const langConstObjectSnippet = `export const Language = {
  ENG: "English",
  RU: "Russian",
} as const;

export type Language = (typeof Language)[keyof typeof Language];`;

  const anotherLangConstSnippet = `export const Language = {
  ENG: "English",
  RU: "Russian",
  GIB: "Gibberish"
} as const;

export type Language = (typeof Language)[keyof typeof Language];`;

  const translationObjectSnippet = `import type { Language } from "../i18n/language";

export interface TranslationObject {
  [Language.ENG]: string;
  [Language.RU]: string;
}`;

  const contextInterfaceSnippet = `import type { Language } from "../../i18n/language";

export interface ILanguageContextData {
  language: Language;
  toggleLanguage: () => void;
}`;

  const contextSnippet = `import { createContext } from "react";
import { type ILanguageContextData } from "./LanguageContext.types";

export const LanguageContext = createContext<ILanguageContextData | undefined>(
  undefined
);`;

  const providerInterfaceSnippet = `import type { ReactNode } from "react";

export interface ILanguageProviderProps {
  children: ReactNode;
}`;

  const providerSnippet = `import { useState } from "react";
import type { ILanguageProviderProps } from "./LanguageProvider.types";
import { LanguageContext } from "./LanguageContext";
import { Language } from "../../i18n/language";

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(Language.ENG);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === Language.ENG ? Language.RU : Language.ENG));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};`;

  const rootWithProviderSnippet = `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./context/LanguageContext/LanguageProvider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);`;

  const helloWorldSnippet = `import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext/LanguageContext';
import { HELLO_WORLD } from '../i18n';

export const HelloWorld = () => {
  // Каждый раз импортируем useContext и LanguageContext и каждый раз проверяем, что контекст не undefined
  const context = useContext(LanguageContext);

  // Эта проверка будет в КАЖДОМ компоненте
  if (!context) {
    throw new Error('Компонент должен быть обёрнут в LanguageProvider');
  }

  // Каждый раз достаём язык из контекста
  const { language } = context;

  // Пишем функцию перевода прямо в компоненте (или импортируем отдельно)
  const translate = (translations: TranslationObject) => {
    return translations[language];
  };

  return (
    <p>{translate(HELLO_WORLD)}</p>
  );
};`;

  const useTranslateHookSnippet = `import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext/LanguageContext";
import type { TranslationObject } from "../types/i18n.types";

export const useTranslate = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useTranslate должен использоваться внутри LanguageProvider"
    );
  }

  const translate = (translations: TranslationObject): string => {
    return translations[context.language];
  };

  return {
    translate,
    language: context.language,
    toggleLanguage: context.toggleLanguage,
  };
};`;

  const translationObjectExampleSnippet = `// ❌ Ошибка: нет перевода на русский
const HELLO_WORLD: TranslationObject = {
  [Language.ENG]: "Hello, world!",
};

// ❌ Ошибка: значение не строка
const HELLO_WORLD: TranslationObject = {
  [Language.ENG]: 42,
  [Language.RU]: "Привет, мир!",
};`;

  const i18nExampleSnippet = `import type { TranslationObject } from "../../types/i18n.types";
import { Language } from "../language";

export const HELLO_WORLD: TranslationObject = {
  [Language.ENG]: "Hello, world!",
  [Language.RU]: "Привет, мир!",
};`;

  const translateExampleSnippet = `import { useTranslate } from "../../../hooks/useTranslate";
import { HELLO_WORLD } from "../../../i18n";

export const HelloWorld = () => {
  const { translate } = useTranslate();

  return <p>{translate(HELLO_WORLD)}</p>;
};`;

  const languageSwitcherComponentSnippet = `import { useTranslate } from "../../../hooks/useTranslate";
import { Language } from "../../../i18n";

export const LanguageSwitcher = () => {
  const { toggleLanguage, language } = useTranslate();

  return (
    <button className="button" onClick={toggleLanguage}>
      {language === Language.ENG ? Language.RU : Language.ENG}
    </button>
  );
};`;

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.CUSTOM_REACT_I18N]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.CROSS,
        content: <Hero />,
      }}>
      <section>
        <TableOfContents
          items={tableOfContents}
          strictLanguage={POSTS_CONFIG_[EBlogPostRecord.CUSTOM_REACT_I18N].language}
          hideNumbers={true}
        />
      </section>
      <section>
        <p>
          Для локализации приложений обычно используются специальные библиотеки. Например для React часто используется
          одна из популярных библиотек <em>react-i18next</em> на базе движка интернационализации <em>i18next</em>. В
          этом же пошаговом уроке вместе напишем свой собственный i18n для React: разберём архитектуру, создадим
          контекст, сделаем переключение языков и удобный хук для переводов. Подойдёт для небольших проектов и для тех,
          кто хочет понять, как это работает изнутри.
        </p>
      </section>
      <section ref={appDesignRef}>
        <h2>Планируем архитектуру</h2>
        <p>
          Как говорится «Без ТЗ результат ХЗ». Прежде чем писать код, представим, как будущая система локализации будет
          работать.
        </p>
        <p>Что нам нужно:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>иметь список языков, на которые можно будет переводить;</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>где-то глобально хранить выбранный язык;</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>функция переключения языка;</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>где-то хранить переводы в каком-то удобном виде;</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>функция использования этих переводов;</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              выбранный язык и функцию переключения языка надо иметь возможность использовать в любом компоненте.
            </p>
          </li>
        </ul>
        <p>Выглядит страшно, но спойлер: это всё можно сделать буквально в несколько файлов.</p>
        <p>
          Для решения поставленной задачи отлично подойдёт <em>React Context</em>: создадим контекст, в котором будем
          хранить язык и функцию для переключения языка, а затем сможем получать к ним доступ из любого компонента в
          приложении с помощью провайдера.
        </p>
        <p>Схематично будущая структура проекта с кастомной локализацией будет выглядеть примерно:</p>
        <ExampleSnippet code={projectStructureSnippet} />
        <p className='explanation'>Проект в примере собран с помощью Vite</p>
        <p>
          Ваш итоговый вариант, конечно же, будет зависеть от ваших исходных данных и структуры вашего проекта. Главное
          тут понять принцип.
        </p>
      </section>
      <section ref={languagesRef}>
        <h2>Определяемся с языками</h2>
        <p>
          Сначала нам нужно решить какие языки будем использовать для локализации в проекте. Пойдём простым путём и
          пусть будут всего лишь два языка — русский и английский. Раньше для перечисления языков часто использовали
          перечисления <em>enum</em>:
        </p>
        <CodeSnippet code={langEnumSnippet} lang={ECodeLang.TYPESCRIPT} />
        <p>
          Однако в современных настройках TypeScript (особенно с <em>isolatedModules: true</em>) использование{' '}
          <em>enum</em> может вызывать ошибки. Поэтому будем использовать более современный подход: объект с{' '}
          <em>as const</em> и выводимый из него тип <em>type</em>. Это даст ту же строгую типизацию, но лучше совместимо
          со сборщиками нового поколения, например Vite. Будет выглядеть чуть длиннее:
        </p>
        <CodeSnippet code={langConstObjectSnippet} name='src/i18n/language' lang={ECodeLang.TYPESCRIPT} />

        <p>
          Всё это надо, чтобы не заморачиваться с тем, как правильно потом прописывать названия языков, например может
          возникнуть путаница с<em>ENG</em>, <em>EN</em> или
          <em>ENGLISH</em>. Со строгим типом будем просто вызывать константу и выбирать нужный язык. Если захотим потом
          расширить этот список — просто добавим новые языки. Например, если решим добавить в приложение тарабарский
          язык:
        </p>
        <CodeSnippet code={anotherLangConstSnippet} name='src/i18n/language' lang={ECodeLang.TYPESCRIPT} />
      </section>
      <section ref={contextRef}>
        <h2>Создаём контекст</h2>
        <p>
          Создадим интерфейс для контекста <em>ILanguagesContextData</em>, который будет описывать, что будет лежать в
          контексте. В нём будет всего лишь два свойства — язык и функция переключения языка:
        </p>
        <CodeSnippet
          code={contextInterfaceSnippet}
          lang={ECodeLang.TYPESCRIPT}
          name='src/LanguageContext/LanguageContext.types'
        />
        <p>
          Так как в примере всего два языка, то можно сделать простой переключатель по типу переключателя света - каждое
          нажатие на кнопку будет менять язык на второй возможный. Если вы хотите более сложный интерфейс или большее
          количество языков, то просто измените функцию переключения языка, добавив параметр - язык, на который нужно
          перевести всё, а кнопку замените, например на выпадающий список.
        </p>
        <p>
          Контекст создаём с начальным значением <em>undefined</em>, потом провайдер всё равно перезапишет его:
        </p>
        <CodeSnippet code={contextSnippet} lang={ECodeLang.REACT} name='src/LanguageContext/LanguageContext' />
        <p>Контекст готов!</p>
      </section>
      <section ref={providerRef}>
        <h2>Создаём провайдер</h2>
        <p>Провайдер будет хранить состояние языка и переключать его для нас.</p>
        <p>
          У провайдера будет только одно свойство - <em>children</em>:
        </p>
        <CodeSnippet
          code={providerInterfaceSnippet}
          lang={ECodeLang.TYPESCRIPT}
          name='src/LanguageContext/LanguageProvider.types'
        />
        <p>Сам провайдер будет очень простым:</p>
        <CodeSnippet code={providerSnippet} lang={ECodeLang.REACT} name='src/LanguageContext/LanguageProvider' />
        <p>Что происходит в провайдере:</p>
        <ul className='list markered'>
          <li className='list__item'>
            С помощью хука <em>useState</em> храним текущий язык, по умолчанию это русский
          </li>
          <li className='list__item'>
            Функция <em>toggleLanguage</em> просто переключает язык между двумя возможными
          </li>
          <li className='list__item'>
            Провайдер отдаёт значение всему, что внутри него с помощью свойства <em>children</em>
          </li>
        </ul>
        <p>Далее нужно обернуть корневой компонент этим провайдером:</p>
        <CodeSnippet code={rootWithProviderSnippet} lang={ECodeLang.REACT} customName='src/main.tsx' />
      </section>
      <section ref={hookRef}>
        <h2>Создаём хук</h2>
        <p>
          Хранить язык в контексте — это хорошо, но каждый раз писать <em>useContext(LanguageContext)</em> и проверять
          на 
          <em>undefined</em> не очень удобно:
        </p>
        <CodeSnippet code={helloWorldSnippet} lang={ECodeLang.REACT} name='HelloWorld' />
        <p className='explanation'>
          Так делать не будем: в этом примере всё выглядит невинно, но чем больше компонент и чем больше будет самих
          компонентов, то тем тяжелее будет таскать и поддерживать за собой кучу ненужного кода. Помните: DRY!
        </p>
        <p>
          Сделаем специальный хук <em>useTranslate</em>, который будет инкапсулировать (ого, мы прям настоящие
          программисты!) всю логику в одном месте и нам не нужно будет таскать во всех компоненты за собой одинаковый
          код.
        </p>
        <CodeSnippet code={useTranslateHookSnippet} lang={ECodeLang.REACT} name='src/hooks/useTranslate' />
        <p className='explanation'>
          А будем делать так: перенесём этот код в хук и будем вызывать этот хук там, где нам нужно что-то перевести
        </p>
        <p>Что тут происходит:</p>
        <ol className='list ordered'>
          <li className='list__item'>
            Получаем контекст с помощью <em>useContext</em>
          </li>
          <li className='list__item'>Проверяем, что контекст существует (защита от глупых ошибок)</li>
          <li className='list__item'>
            Создаём функцию-переводчик translate, которая просто берёт нужное поле из объекта.
          </li>
          <li className='list__item'>
            Возвращаем наружу функцию-переводчик <em>translate</em>, функцию переключения <em>toggleLang</em> и язык
          </li>
        </ol>
      </section>
      <section ref={i18nRef}>
        <h2>Организуем хранение переводов</h2>
        <p>
          Мы подошли к вопросу где и в каком виде хранить переводы. Для этого создадим папку <em>i18n</em> в директории
          проекта.
        </p>
        <p>Для переводов нам потребуется специальный объект:</p>
        <CodeSnippet code={translationObjectSnippet} name='src/types/i18n.types' lang={ECodeLang.TYPESCRIPT} />
        <p>
          Этот объект поможет нам типизировать объекты перевода. Он будет говорить TypeScript&apos;у: «Любой объект,
          который хочет быть переводом, должен содержать поля English и Russian, и эти оба поля должны быть строками».
          Таким образом, когда будем составлять словари, избежим дурацких ошибок:
        </p>
        <CodeSnippet
          code={translationObjectExampleSnippet}
          name='src/i18n/translations/common'
          lang={ECodeLang.TYPESCRIPT}
        />
        <p className='explanation'>
          Пример дурацких ошибок при составлении объектов, благодаря <em>TranslationObject</em> эти ошибки будут
          подсвечены сразу же
        </p>

        <p>
          Далее создадим дочернюю папку <em>translations</em> и будет складывать туда файлы c объектами с переводами в
          виде:
        </p>
        <CodeSnippet code={i18nExampleSnippet} lang={ECodeLang.TYPESCRIPT} name='src/i18n/translations/common' />
        <p>Названия объектов написаны капсом чтобы в компонентах было сразу понятно: «ага, это же перевод!».</p>
        <p>
          Внутри папки <em>i18n</em> переводы можно разделять по смыслу по файлами, например в файл <em>common.ts</em>{' '}
          складывать переводы общих компонентов интерфейса, а в папку <em>blog.ts</em> переводы для блога и т.д. и т.п.
        </p>
      </section>
      <section>
        <h2>Переводим</h2>
        <p>Осталось дело за малым - применить всё на деле.</p>
        <p>
          Мы уже обернули корневой компонент приложения провайдером, поэтому чтобы использовать переводы достаточно
          вызвать в нужном компоненте хук <em>useTranslate</em> и использовать из него функцию перевода{' '}
          <em>translate</em>. В неё нужно будет просто передать нужный объект с переводом из папки <em>i18n</em>.
          Например:
        </p>
        <CodeSnippet code={translateExampleSnippet} lang={ECodeLang.REACT} name='src/components/HelloWorld' />
      </section>
      <section ref={langToggleRef}>
        <h2>Добавляем переключатель языка</h2>
        <p>
          У нас в примере всего два языка, поэтому кнопку смены языка можно сделать в виде переключателя - просто
          нажимаем на неё и язык меняется на второй возможный:
        </p>
        <CodeSnippet
          code={languageSwitcherComponentSnippet}
          lang={ECodeLang.REACT}
          name='src/components/LanguageSwitcher'
        />
        <p>
          Этот компонент можно использовать в меню, заголовках, футере и в любых других компонентах приложения вне
          зависимости от вложенности — переключение языка будет работать везде.
        </p>
      </section>
      <section ref={conclusionRef}>
        <h2>Заключение</h2>
        <p>
          Перейдя <ExternalLink href='https://github.com/dtsiki/custom-react-i18n' label='по этой ссылке' /> вам
          откроется репозиторий с проектом из этого урока. Можно склонировать его и потыкать всё своими руками.{' '}
        </p>
        <p>
          Если не хотите клонировать — перейдите{' '}
          <ExternalLink href='https://dtsiki.github.io/custom-react-i18n' label='по этой ссылке' /> и вам откроется демо
          этого проекта.
        </p>
        <p className='spacer bottom large'>
          Конечно же такое решение не претендует на звание самой лучшей локализации для React приложения в мире. Здесь
          нет плюрализации — для сложных склонений придётся писать всё ручками. Нет форматирования дат или чисел — это
          уже отдельная история. Нет большого сообщества и готовых плагинов. Этот список можно продолжать и продолжать.
          Целью этого урока было показать, что i18n это не магия, а просто объекты с переводами и пара функций. i18next,
          react-i18next и другие библиотеки всегда рядом и теперь вы знаете, что у них под капотом.
        </p>
      </section>
    </PostWrapper>
  );
};

export default Post;
