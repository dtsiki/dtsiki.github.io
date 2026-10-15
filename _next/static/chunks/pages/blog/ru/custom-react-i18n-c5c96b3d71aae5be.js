(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{336:e=>{e.exports={code_snippet:"CodeSnippet_code_snippet__EDJgC"}},5351:(e,s,t)=>{"use strict";t.d(s,{z:()=>d});var n=t(37876),a=t(28948),l=t(14232),r=t(78984),o=t(99342),i=t.n(o),c=t(336),_=t.n(c);let d=({lang:e,code:s,name:t,customName:o,consoleLog:c,hideLines:d=!1})=>{let x=((e=!0)=>{let s=(0,l.useContext)(r.M),t=(0,l.useRef)(null);if(!s)throw Error("useCodeSnippetNumber must be used within a <CodeSnippetProvider>");return e&&null===t.current&&(s.counterRef.current+=1,t.current=s.counterRef.current),t.current})(i()(t)&&i()(o)),m=t??`snippet(${x})`;return(0,n.jsx)("div",{className:"spacer bottom small",children:(0,n.jsx)("div",{className:_().code_snippet,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col col--100",children:(0,n.jsx)(a.Cy,{language:e,name:m,customName:o,code:s,isTerminal:d,consoleLog:c})})})})})}},6549:(e,s,t)=>{"use strict";t.d(s,{M:()=>m});var n=t(37876),a=t(14232),l=t(15039),r=t.n(l),o=t(78261),i=t(55686),c=t(40502),_=t(20381),d=t(41395),x=t.n(d);let m=({customTitle:e,items:s,strictLanguage:t,hideNumbers:l,variant:d=i.j.PRIMARY})=>{let m=r().bind(x()),{language:g}=(0,o.W)(),p=(0,a.useMemo)(()=>s.map(e=>(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("button",{onClick:()=>(e=>{let s=e.current?.getBoundingClientRect();if(s){let e=s.top+window.pageYOffset-150;window.scrollTo({top:e,behavior:"smooth"})}})(e.ref),className:m([x().table_of_contents__button,x()[d]]),"arial-label":`${(0,_.T)(t||g,c.fN)} ${e.title}`,children:e.title})},e.title)),[s]);return(0,n.jsxs)("section",{className:m([x().table_of_contents,"section outer"]),children:[(0,n.jsx)("h2",{className:m([x().table_of_contents__title,x()[d]]),children:(0,_.T)(t||g,e||c.cL)}),l?(0,n.jsx)("ul",{className:"list",children:p}):(0,n.jsx)("ol",{className:"list ordered",children:p})]})}},9095:e=>{e.exports={external_link:"ExternalLink_external_link__91aO2",external_link__icon:"ExternalLink_external_link__icon__u3FgC"}},12062:(e,s,t)=>{"use strict";t.d(s,{G:()=>c});var n=t(37876),a=t(15039),l=t.n(a),r=t(9399),o=t(9095),i=t.n(o);let c=({href:e,label:s})=>{let t=l().bind(i());return(0,n.jsxs)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:t(["link",i().external_link]),children:[s,(0,n.jsx)(r.li,{className:i().external_link__icon})]})}},16865:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/ru/custom-react-i18n",function(){return t(80478)}])},23356:e=>{e.exports={hero:"Hero_hero__y7yMG",hero__wrapper:"Hero_hero__wrapper__45BV2",hero__item:"Hero_hero__item__WkCYz",LOWERCASE:"Hero_LOWERCASE__KFg5x",UPPERCASE:"Hero_UPPERCASE__AqwlS",ITALIC:"Hero_ITALIC__UhGw8",BOLD:"Hero_BOLD__grJu_",VIOLET_FILLED:"Hero_VIOLET_FILLED__gIxZO",VIOLET_BORDERED:"Hero_VIOLET_BORDERED__6YPmz",BLACK_FILLED:"Hero_BLACK_FILLED__uLLlc",BLACK_BORDERED:"Hero_BLACK_BORDERED___uD59",GREY_FILLED:"Hero_GREY_FILLED___i9zY",GREY_BORDERED:"Hero_GREY_BORDERED__znLQe",YELLOW_FILLED:"Hero_YELLOW_FILLED__nvxtB",YELLOW_BORDERED:"Hero_YELLOW_BORDERED__yeBJD"}},28948:(e,s,t)=>{"use strict";t.d(s,{Pl:()=>_,Cy:()=>L});var n=t(37876),a=t(15039),l=t.n(a),r=t(43747),o=t(14232),i=t(16686),c=t(26457);let _={PLAINTEXT:"plaintext",HTML:"html",CSS:"css",JAVASCRIPT:"javascript",TYPESCRIPT:"typescript",REACT:"react",SCSS:"scss",BASH:"bash",JSON:"json"},d={[_.HTML]:"HTML",[_.CSS]:"CSS",[_.JAVASCRIPT]:"JS",[_.TYPESCRIPT]:"TS",[_.REACT]:"TSX",[_.SCSS]:"SCSS",[_.JSON]:"JSON",[_.PLAINTEXT]:"",[_.BASH]:""};var x=t(78261),m=t(40502),g=t(9399),p=t(78196),u=t(58411),h=t.n(u);let L=e=>{let{name:s,customName:t,code:a,language:u,showOnlyCode:L=!1,showLineNumbers:j=!0,startingLineNumber:E,isTerminal:C=!1,isNameUppercase:N=!1,consoleLog:R}=e,f=l().bind(h()),{translate:T}=(0,x.W)(),[A,b]=(0,o.useState)(!1),O=()=>{navigator.clipboard.writeText(a),b(!0),setTimeout(()=>{b(!1)},5e3)};return(0,n.jsx)("div",{className:h().code,children:L?(0,n.jsxs)("div",{className:h().code__highlighter,children:[(0,n.jsx)("div",{className:h().code__actions,children:(0,n.jsx)("button",{className:h().code__control,onClick:O,"aria-label":T(m.x_),children:A?(0,n.jsx)(i.f,{}):(0,n.jsx)(g.LE,{})})}),(0,n.jsx)(r.A,{startingLineNumber:E,language:u?.toLocaleLowerCase()||"plaintext",showLineNumbers:j,style:c.C5,children:a})]}):(0,n.jsxs)("div",{className:h().code__wrapper,children:[(0,n.jsxs)("div",{className:h().code__header,children:[(0,n.jsxs)("div",{className:f([h().code__name,{[h().uppercase]:N}]),children:[C?(0,n.jsx)(g.q7,{useMini:!0,className:h().code__icon}):(0,n.jsx)(g.RO,{useMini:!0,className:h().code__icon}),u!==_.BASH&&t||u&&s&&`${s}.${d[u].toLocaleLowerCase()}`]}),(0,n.jsx)("div",{className:h().code__actions,children:(0,n.jsx)("button",{className:h().code__control,onClick:O,"aria-label":T(m.x_),children:A?(0,n.jsx)(i.f,{}):(0,n.jsx)(g.LE,{})})})]}),(0,n.jsxs)("div",{className:h().code__body,children:[(0,n.jsx)(r.A,{language:u?.toLocaleLowerCase()||"plaintext",showLineNumbers:!C&&j,wrapLines:!0,style:c.C5,children:a}),R&&(0,n.jsx)("div",{className:h().code__console,children:(0,n.jsx)(p.R,{code:R,showConsole:!0,isCopyable:!0,isEmbedded:!0})})]})]})})}},41395:e=>{e.exports={table_of_contents__title:"TableOfContents_table_of_contents__title__31aUG",SECONDARY:"TableOfContents_SECONDARY__mp5of",table_of_contents__button:"TableOfContents_table_of_contents__button__lf7Gl",PRIMARY:"TableOfContents_PRIMARY__7Hy_1"}},48700:e=>{e.exports={example_snippet:"ExampleSnippet_example_snippet__Fwo7u"}},55686:(e,s,t)=>{"use strict";t.d(s,{j:()=>n});let n={PRIMARY:"PRIMARY",SECONDARY:"SECONDARY"}},58411:e=>{e.exports={code:"Code_code___ALYP",code__wrapper:"Code_code__wrapper__VoZb9",code__header:"Code_code__header__XUQ5W",code__name:"Code_code__name__rsVhv",uppercase:"Code_uppercase__3suyI",code__body:"Code_code__body__Hy27d",code__highlighter:"Code_code__highlighter__JwMRG",code__icon:"Code_code__icon__HYjpp",code__control:"Code_code__control__yx_MM",demo__control:"Code_demo__control__r9nlJ",code__console:"Code_code__console__o8ueE"}},74343:e=>{e.exports={example:"Example_example__9St6s",DEFAULT:"Example_DEFAULT__HFLHk",EMBEDDED:"Example_EMBEDDED__MPi77",example__console:"Example_example__console__Gt__w",example__console_icon:"Example_example__console_icon__gj4yg",example__console_title:"Example_example__console_title__C_pUG",example__actions:"Example_example__actions__lpQQr",example__control:"Example_example__control__wPPLQ"}},78196:(e,s,t)=>{"use strict";t.d(s,{R:()=>g});var n=t(37876),a=t(14232),l=t(43747),r=t(78261),o=t(40502),i=t(9399),c=t(15039),_=t.n(c),d=t(26457),x=t(74343),m=t.n(x);let g=({code:e,isCopyable:s=!0,isEmbedded:t=!1,showConsole:c=!1})=>{let x=_().bind(m()),{translate:g}=(0,r.W)(),[p,u]=(0,a.useState)(!1),h=t?m().EMBEDDED:m().DEFAULT;return(0,n.jsx)("div",{className:x([m().example,h]),children:(0,n.jsxs)("div",{className:m().code__wrapper,children:[s&&(0,n.jsx)("div",{className:m().example__actions,children:(0,n.jsx)("button",{className:x([m().example__control,h]),onClick:()=>{navigator.clipboard.writeText(e),u(!0),setTimeout(()=>{u(!1)},5e3)},"aria-label":g(o.x_),children:p?(0,n.jsx)(i.fH,{}):(0,n.jsx)(i.LE,{})})}),c&&(0,n.jsxs)("div",{className:x([m().example__console,h]),children:[(0,n.jsx)(i.$2,{className:m().example__console_icon}),(0,n.jsx)("div",{className:m().example__console_title,children:"Console"})]}),(0,n.jsx)(l.A,{language:"javascript",showLineNumbers:!1,style:d.C5,wrapLines:!0,lineProps:()=>({style:{display:"block",position:"relative",paddingLeft:"1.5em"},className:"prefixed-line"}),children:e})]})})}},80478:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>L});var n=t(37876),a=t(14232),l=t(83577),r=t(27689),o=t(5351),i=t(28948),c=t(12062),_=t(84390),d=t(6549),x=t(37339),m=t(15039),g=t.n(m),p=t(23356),u=t.n(p);let h=()=>{let e=g().bind(u()),s=[{label:"Hello",styles:[u().VIOLET_FILLED,u().LOWERCASE]},{label:"Ciao",styles:[u().YELLOW_BORDERED,u().UPPERCASE,u().BOLD]},{label:"Bonjour",styles:[u().BLACK_FILLED,u().BOLD,u().LOWERCASE]},{label:"Aloha",styles:[u().GREY_FILLED,u().ITALIC,u().LOWERCASE]},{label:"안녕하세요",styles:[u().YELLOW_FILLED,u().ITALIC]},{label:"Hola",styles:[u().YELLOW_FILLED,u().LOWERCASE]},{label:"Salut",styles:[u().BLACK_BORDERED,u().LOWERCASE,u().ITALIC,u().BOLD]},{label:"こんにちは",styles:[u().VIOLET_BORDERED,u().BOLD]},{label:"Ol\xe1",styles:[u().VIOLET_FILLED,u().UPPERCASE]},{label:"你好",styles:[u().BLACK_BORDERED,u().BOLD]}];return(0,n.jsx)("div",{className:u().hero,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:u().hero__wrapper,children:s.map(s=>(0,n.jsx)("div",{className:e([u().hero__item,s.styles]),children:s.label},s.label))})})})},L=()=>{let e=(0,a.useRef)(null),s=(0,a.useRef)(null),t=(0,a.useRef)(null),m=(0,a.useRef)(null),g=(0,a.useRef)(null),p=(0,a.useRef)(null),u=(0,a.useRef)(null),L=(0,a.useRef)(null),j=(0,a.useRef)(null),E=[{title:"Планируем архитектуру",ref:e},{title:"Определяемся с языками",ref:s},{title:"Создаём контекст",ref:t},{title:"Создаём провайдер",ref:m},{title:"Создаём хук",ref:g},{title:"Организуем хранение переводов",ref:p},{title:"Переводим",ref:u},{title:"Добавляем переключатель языка",ref:L},{title:"Заключение",ref:j}],C=`src/
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
    └── ...`,N=`export enum ELang {
  ENG = 'ENG',
  RU = 'RU',
}`,R=`export const Language = {
  ENG: "English",
  RU: "Russian",
} as const;

export type Language = (typeof Language)[keyof typeof Language];`,f=`export const Language = {
  ENG: "English",
  RU: "Russian",
  GIB: "Gibberish"
} as const;

export type Language = (typeof Language)[keyof typeof Language];`,T=`import type { Language } from "../i18n/language";

export interface TranslationObject {
  [LANGUAGE.ENG]: string;
  [LANGUAGE.RU]: string;
}`,A=`import type { Language } from "../../i18n/language";

export interface ILanguageContextData {
  language: Language;
  toggleLanguage: () => void;
}`,b=`import { createContext } from "react";
import { type ILanguageContextData } from "./LanguageContext.types";

export const LanguageContext = createContext<ILanguageContextData | undefined>(
  undefined
);`,O=`import type { ReactNode } from "react";

export interface ILanguageProviderProps {
  children: ReactNode;
}`,P=`import { useState } from "react";
import type { ILanguageProviderProps } from "./LanguageProvider.types";
import { LanguageContext } from "./LanguageContext";
import { Language } from "../../i18n/language";

export const LanguageProvider = ({ children }: ILanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(LANGUAGE.ENG);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === LANGUAGE.ENG ? LANGUAGE.RU : LANGUAGE.ENG));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};`,S=`import { StrictMode } from "react";
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
);`,D=`import { useContext } from 'react';
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
};`,y=`import { useContext } from "react";
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
};`,I=`// ❌ Ошибка: нет перевода на русский
const HELLO_WORLD: TranslationObject = {
  [LANGUAGE.ENG]: "Hello, world!",
};

// ❌ Ошибка: значение не строка
const HELLO_WORLD: TranslationObject = {
  [LANGUAGE.ENG]: 42,
  [LANGUAGE.RU]: "Привет, мир!",
};`,v=`import type { TranslationObject } from "../../types/i18n.types";
import { Language } from "../language";

export const HELLO_WORLD: TranslationObject = {
  [LANGUAGE.ENG]: "Hello, world!",
  [LANGUAGE.RU]: "Привет, мир!",
};`,G=`import { useTranslate } from "../../../hooks/useTranslate";
import { HELLO_WORLD } from "../../../i18n";

export const HelloWorld = () => {
  const { translate } = useTranslate();

  return <p>{translate(HELLO_WORLD)}</p>;
};`,w=`import { useTranslate } from "../../../hooks/useTranslate";
import { Language } from "../../../i18n";

export const LanguageSwitcher = () => {
  const { toggleLanguage, language } = useTranslate();

  return (
    <button className="button" onClick={toggleLanguage}>
      {language === LANGUAGE.ENG ? LANGUAGE.RU : LANGUAGE.ENG}
    </button>
  );
};`;return(0,n.jsxs)(l.o,{postConfig:r.KG[r.Zr.CUSTOM_REACT_I18N],heroConfig:{size:x.Xd.SMALL,pattern:x.Uy.CROSS,content:(0,n.jsx)(h,{})},children:[(0,n.jsx)(d.M,{items:E,strictLanguage:r.KG[r.Zr.CUSTOM_REACT_I18N].language,hideNumbers:!0}),(0,n.jsx)("section",{className:"section outer",children:(0,n.jsxs)("p",{children:["Для локализации приложений обычно используются специальные библиотеки. Например для React часто используется одна из популярных библиотек ",(0,n.jsx)("em",{children:"react-i18next"})," на базе движка интернационализации ",(0,n.jsx)("em",{children:"i18next"}),". В этом же пошаговом уроке вместе напишем свой собственный i18n для React: разберём архитектуру, создадим контекст, сделаем переключение языков и удобный хук для переводов. Подойдёт для небольших проектов и для тех, кто хочет понять, как это работает изнутри."]})}),(0,n.jsxs)("section",{ref:e,className:"section outer",children:[(0,n.jsx)("h2",{children:"Планируем архитектуру"}),(0,n.jsx)("p",{children:"Как говорится \xabБез ТЗ результат ХЗ\xbb. Прежде чем писать код, представим, как будущая система локализации будет работать."}),(0,n.jsx)("p",{children:"Что нам нужно:"}),(0,n.jsxs)("ul",{className:"list markered",children:[(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"иметь список языков, на которые можно будет переводить;"})}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"где-то глобально хранить выбранный язык;"})}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"функция переключения языка;"})}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"где-то хранить переводы в каком-то удобном виде;"})}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"функция использования этих переводов;"})}),(0,n.jsx)("li",{className:"list__item",children:(0,n.jsx)("p",{className:"list__title",children:"выбранный язык и функцию переключения языка надо иметь возможность использовать в любом компоненте."})})]}),(0,n.jsx)("p",{children:"Выглядит страшно, но спойлер: это всё можно сделать буквально в несколько файлов."}),(0,n.jsxs)("p",{children:["Для решения поставленной задачи отлично подойдёт ",(0,n.jsx)("em",{children:"React Context"}),": создадим контекст, в котором будем хранить язык и функцию для переключения языка, а затем сможем получать к ним доступ из любого компонента в приложении с помощью провайдера."]}),(0,n.jsx)("p",{children:"Схематично будущая структура проекта с кастомной локализацией будет выглядеть примерно:"}),(0,n.jsx)(_.k,{code:C}),(0,n.jsx)("p",{className:"explanation",children:"Проект в примере собран с помощью Vite"}),(0,n.jsx)("p",{children:"Ваш итоговый вариант, конечно же, будет зависеть от ваших исходных данных и структуры вашего проекта. Главное тут понять принцип."})]}),(0,n.jsxs)("section",{ref:s,className:"section outer",children:[(0,n.jsx)("h2",{children:"Определяемся с языками"}),(0,n.jsxs)("p",{children:["Сначала нам нужно решить какие языки будем использовать для локализации в проекте. Пойдём простым путём и пусть будут всего лишь два языка — русский и английский. Раньше для перечисления языков часто использовали перечисления ",(0,n.jsx)("em",{children:"enum"}),":"]}),(0,n.jsx)(o.z,{code:N,lang:i.Pl.TYPESCRIPT}),(0,n.jsxs)("p",{children:["Однако в современных настройках TypeScript (особенно с ",(0,n.jsx)("em",{children:"isolatedModules: true"}),") использование"," ",(0,n.jsx)("em",{children:"enum"})," может вызывать ошибки. Поэтому будем использовать более современный подход: объект с"," ",(0,n.jsx)("em",{children:"as const"})," и выводимый из него тип ",(0,n.jsx)("em",{children:"type"}),". Это даст ту же строгую типизацию, но лучше совместимо со сборщиками нового поколения, например Vite. Будет выглядеть чуть длиннее:"]}),(0,n.jsx)(o.z,{code:R,name:"src/i18n/language",lang:i.Pl.TYPESCRIPT}),(0,n.jsxs)("p",{children:["Всё это надо, чтобы не заморачиваться с тем, как правильно потом прописывать названия языков, например может возникнуть путаница с",(0,n.jsx)("em",{children:"ENG"}),", ",(0,n.jsx)("em",{children:"EN"})," или",(0,n.jsx)("em",{children:"ENGLISH"}),". Со строгим типом будем просто вызывать константу и выбирать нужный язык. Если захотим потом расширить этот список — просто добавим новые языки. Например, если решим добавить в приложение тарабарский язык:"]}),(0,n.jsx)(o.z,{code:f,name:"src/i18n/language",lang:i.Pl.TYPESCRIPT})]}),(0,n.jsxs)("section",{ref:t,className:"section outer",children:[(0,n.jsx)("h2",{children:"Создаём контекст"}),(0,n.jsxs)("p",{children:["Создадим интерфейс для контекста ",(0,n.jsx)("em",{children:"ILanguagesContextData"}),", который будет описывать, что будет лежать в контексте. В нём будет всего лишь два свойства — язык и функция переключения языка:"]}),(0,n.jsx)(o.z,{code:A,lang:i.Pl.TYPESCRIPT,name:"src/LanguageContext/LanguageContext.types"}),(0,n.jsx)("p",{children:"Так как в примере всего два языка, то можно сделать простой переключатель по типу переключателя света - каждое нажатие на кнопку будет менять язык на второй возможный. Если вы хотите более сложный интерфейс или большее количество языков, то просто измените функцию переключения языка, добавив параметр - язык, на который нужно перевести всё, а кнопку замените, например на выпадающий список."}),(0,n.jsxs)("p",{children:["Контекст создаём с начальным значением ",(0,n.jsx)("em",{children:"undefined"}),", потом провайдер всё равно перезапишет его:"]}),(0,n.jsx)(o.z,{code:b,lang:i.Pl.REACT,name:"src/LanguageContext/LanguageContext"}),(0,n.jsx)("p",{children:"Контекст готов!"})]}),(0,n.jsxs)("section",{ref:m,className:"section outer",children:[(0,n.jsx)("h2",{children:"Создаём провайдер"}),(0,n.jsx)("p",{children:"Провайдер будет хранить состояние языка и переключать его для нас."}),(0,n.jsxs)("p",{children:["У провайдера будет только одно свойство - ",(0,n.jsx)("em",{children:"children"}),":"]}),(0,n.jsx)(o.z,{code:O,lang:i.Pl.TYPESCRIPT,name:"src/LanguageContext/LanguageProvider.types"}),(0,n.jsx)("p",{children:"Сам провайдер будет очень простым:"}),(0,n.jsx)(o.z,{code:P,lang:i.Pl.REACT,name:"src/LanguageContext/LanguageProvider"}),(0,n.jsx)("p",{children:"Что происходит в провайдере:"}),(0,n.jsxs)("ul",{className:"list markered",children:[(0,n.jsxs)("li",{className:"list__item",children:["С помощью хука ",(0,n.jsx)("em",{children:"useState"}),"\xa0храним текущий язык, по умолчанию это русский"]}),(0,n.jsxs)("li",{className:"list__item",children:["Функция ",(0,n.jsx)("em",{children:"toggleLanguage"}),"\xa0просто переключает язык между двумя возможными"]}),(0,n.jsxs)("li",{className:"list__item",children:["Провайдер отдаёт значение всему, что внутри него с помощью свойства ",(0,n.jsx)("em",{children:"children"})]})]}),(0,n.jsx)("p",{children:"Далее нужно обернуть корневой компонент этим провайдером:"}),(0,n.jsx)(o.z,{code:S,lang:i.Pl.REACT,customName:"src/main.tsx"})]}),(0,n.jsxs)("section",{ref:g,className:"section outer",children:[(0,n.jsx)("h2",{children:"Создаём хук"}),(0,n.jsxs)("p",{children:["Хранить язык в контексте — это хорошо, но каждый раз писать\xa0",(0,n.jsx)("em",{children:"useContext(LanguageContext)"}),"\xa0и проверять на\xa0",(0,n.jsx)("em",{children:"undefined"}),"\xa0не очень удобно:"]}),(0,n.jsx)(o.z,{code:D,lang:i.Pl.REACT,name:"HelloWorld"}),(0,n.jsx)("p",{className:"explanation",children:"Так делать не будем: в этом примере всё выглядит невинно, но чем больше компонент и чем больше будет самих компонентов, то тем тяжелее будет таскать и поддерживать за собой кучу ненужного кода. Помните: DRY!"}),(0,n.jsxs)("p",{children:["Сделаем специальный хук ",(0,n.jsx)("em",{children:"useTranslate"}),", который будет инкапсулировать (ого, мы прям настоящие программисты!) всю логику в одном месте и нам не нужно будет таскать во всех компоненты за собой одинаковый код."]}),(0,n.jsx)(o.z,{code:y,lang:i.Pl.REACT,name:"src/hooks/useTranslate"}),(0,n.jsx)("p",{className:"explanation",children:"А будем делать так: перенесём этот код в хук и будем вызывать этот хук там, где нам нужно что-то перевести"}),(0,n.jsx)("p",{children:"Что тут происходит:"}),(0,n.jsxs)("ol",{className:"list ordered",children:[(0,n.jsxs)("li",{className:"list__item",children:["Получаем контекст с помощью\xa0",(0,n.jsx)("em",{children:"useContext"})]}),(0,n.jsx)("li",{className:"list__item",children:"Проверяем, что контекст существует (защита от глупых ошибок)"}),(0,n.jsx)("li",{className:"list__item",children:"Создаём функцию-переводчик\xa0translate, которая просто берёт нужное поле из объекта."}),(0,n.jsxs)("li",{className:"list__item",children:["Возвращаем наружу функцию-переводчик ",(0,n.jsx)("em",{children:"translate"}),", функцию переключения ",(0,n.jsx)("em",{children:"toggleLang"})," и язык"]})]})]}),(0,n.jsxs)("section",{ref:p,className:"section outer",children:[(0,n.jsx)("h2",{children:"Организуем хранение переводов"}),(0,n.jsxs)("p",{children:["Мы подошли к вопросу где и в каком виде хранить переводы. Для этого создадим папку\xa0",(0,n.jsx)("em",{children:"i18n"})," в директории проекта."]}),(0,n.jsx)("p",{children:"Для переводов нам потребуется специальный объект:"}),(0,n.jsx)(o.z,{code:T,name:"~types/i18n.types",lang:i.Pl.TYPESCRIPT}),(0,n.jsx)("p",{children:"Этот объект поможет нам типизировать объекты перевода. Он будет говорить TypeScript'у: \xabЛюбой объект, который хочет быть переводом, должен содержать поля English и Russian, и эти оба поля должны быть строками\xbb. Таким образом, когда будем составлять словари, избежим дурацких ошибок:"}),(0,n.jsx)(o.z,{code:I,name:"src/i18n/translations/common",lang:i.Pl.TYPESCRIPT}),(0,n.jsxs)("p",{className:"explanation",children:["Пример дурацких ошибок при составлении объектов, благодаря ",(0,n.jsx)("em",{children:"TranslationObject"})," эти ошибки будут подсвечены сразу же"]}),(0,n.jsxs)("p",{children:["Далее создадим дочернюю папку ",(0,n.jsx)("em",{children:"translations"})," и будет складывать туда файлы c объектами с переводами в виде:"]}),(0,n.jsx)(o.z,{code:v,lang:i.Pl.TYPESCRIPT,name:"src/i18n/translations/common"}),(0,n.jsx)("p",{children:"Названия объектов написаны капсом чтобы в компонентах было сразу понятно: \xabага, это же перевод!\xbb."}),(0,n.jsxs)("p",{children:["Внутри папки ",(0,n.jsx)("em",{children:"i18n"})," переводы можно разделять по смыслу по файлами, например в файл ",(0,n.jsx)("em",{children:"common.ts"})," ","складывать переводы общих компонентов интерфейса, а в папку ",(0,n.jsx)("em",{children:"blog.ts"})," переводы для блога и т.д. и т.п."]})]}),(0,n.jsxs)("section",{ref:u,className:"section outer",children:[(0,n.jsx)("h2",{children:"Переводим"}),(0,n.jsx)("p",{children:"Осталось дело за малым - применить всё на деле."}),(0,n.jsxs)("p",{children:["Мы уже обернули корневой компонент приложения провайдером, поэтому чтобы использовать переводы достаточно вызвать в нужном компоненте хук ",(0,n.jsx)("em",{children:"useTranslate"})," и использовать из него функцию перевода"," ",(0,n.jsx)("em",{children:"translate"}),". В неё нужно будет просто передать нужный объект с переводом из папки ",(0,n.jsx)("em",{children:"i18n"}),". Например:"]}),(0,n.jsx)(o.z,{code:G,lang:i.Pl.REACT,name:"src/components/HelloWorld"})]}),(0,n.jsxs)("section",{ref:L,className:"section outer",children:[(0,n.jsx)("h2",{children:"Добавляем переключатель языка"}),(0,n.jsx)("p",{children:"У нас в примере всего два языка, поэтому кнопку смены языка можно сделать в виде переключателя - просто нажимаем на неё и язык меняется на второй возможный:"}),(0,n.jsx)(o.z,{code:w,lang:i.Pl.REACT,name:"src/components/LanguageSwitcher"}),(0,n.jsx)("p",{children:"Этот компонент можно использовать в меню, заголовках, футере и в любых других компонентах приложения вне зависимости от вложенности — переключение языка будет работать везде."})]}),(0,n.jsxs)("section",{ref:j,className:"section outer",children:[(0,n.jsx)("h2",{children:"Заключение"}),(0,n.jsxs)("p",{children:["Перейдя ",(0,n.jsx)(c.G,{href:"https://github.com/dtsiki/custom-react-i18n",label:"по этой ссылке"})," вам откроется репозиторий с проектом из этого урока. Можно склонировать его и потыкать всё своими руками."," "]}),(0,n.jsxs)("p",{children:["Если не хотите клонировать — перейдите"," ",(0,n.jsx)(c.G,{href:"https://dtsiki.github.io/custom-react-i18n",label:"по этой ссылке"})," и вам откроется демо этого проекта."]}),(0,n.jsx)("p",{className:"spacer bottom large",children:"Конечно же такое решение не претендует на звание самой лучшей локализации для React приложения в мире. Здесь нет плюрализации — для сложных склонений придётся писать всё ручками. Нет форматирования дат или чисел — это уже отдельная история. Нет большого сообщества и готовых плагинов. Этот список можно продолжать и продолжать. Целью этого урока было показать, что i18n это не магия, а просто объекты с переводами и пара функций. i18next, react-i18next и другие библиотеки всегда рядом и теперь вы знаете, что у них под капотом."})]})]})}},84390:(e,s,t)=>{"use strict";t.d(s,{k:()=>o});var n=t(37876),a=t(78196),l=t(48700),r=t.n(l);let o=({code:e,isCopyable:s})=>(0,n.jsx)("div",{className:r().example_snippet,children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col col--100 col--tablet-100",children:(0,n.jsx)(a.R,{code:e,isCopyable:s,showConsole:!0})})})})}},e=>{e.O(0,[230,867,459,577,636,593,792],()=>e(e.s=16865)),_N_E=e.O()}]);