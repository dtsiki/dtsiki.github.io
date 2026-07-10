import { ForwardRefExoticComponent, RefAttributes, RefObject, useMemo, useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import {
  InstallTS,
  DataTypes,
  PlaygroundTS,
  Types,
  Generics,
  Interfaces,
  ConditionalTypes,
  TypeNarrowing,
  UtilityTypes,
  DOM,
  React,
  Functions,
  LiteralTypes,
  DiscriminatedUnions,
  OOP,
  MappedTypes,
  RecursiveTypes,
  ReadMore,
} from 'src/components/pages/blog/ru/typescript-cheatsheet';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';

type TypeScriptSection = {
  title: string;
  ref: RefObject<HTMLDivElement>;
  component: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>>;
};

const Post = () => {
  const installTSRef = useRef<HTMLDivElement>(null);
  const playgroundTSRef = useRef<HTMLDivElement>(null);
  const dataTypesRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const interfacesRef = useRef<HTMLDivElement>(null);
  const genericsRef = useRef<HTMLDivElement>(null);
  const conditionalTypesRef = useRef<HTMLDivElement>(null);
  const typeNarrowingRef = useRef<HTMLDivElement>(null);
  const utilityTypesRef = useRef<HTMLDivElement>(null);
  const DOMRef = useRef<HTMLDivElement>(null);
  const reactRef = useRef<HTMLDivElement>(null);
  const functionsRef = useRef<HTMLDivElement>(null);
  const literalTypesRef = useRef<HTMLDivElement>(null);
  const discriminatedUnionsRef = useRef<HTMLDivElement>(null);
  const OOPref = useRef<HTMLDivElement>(null);
  const mappedTypesRef = useRef<HTMLDivElement>(null);
  const readMoreRef = useRef<HTMLDivElement>(null);
  const recursiveTypesRef = useRef<HTMLDivElement>(null);

  const SECTIONS_CONFIG: TypeScriptSection[] = [
    {
      title: 'Установка TypeScript',
      ref: installTSRef,
      component: InstallTS,
    },
    {
      title: 'Песочница TypeScript',
      ref: playgroundTSRef,
      component: PlaygroundTS,
    },
    {
      title: 'Типы данных и их типы',
      ref: dataTypesRef,
      component: DataTypes,
    },
    {
      title: 'Типизация функций',
      ref: functionsRef,
      component: Functions,
    },
    {
      title: 'Типы (Types)',
      ref: typesRef,
      component: Types,
    },
    {
      title: 'Интерфейсы (Interfaces)',
      ref: interfacesRef,
      component: Interfaces,
    },
    {
      title: 'Литералы (Literal Types)',
      ref: literalTypesRef,
      component: LiteralTypes,
    },
    {
      title: 'Дженерики (Generics)',
      ref: genericsRef,
      component: Generics,
    },
    {
      title: 'Условные типы (Conditional Types)',
      ref: conditionalTypesRef,
      component: ConditionalTypes,
    },
    {
      title: 'Сужение типов (Type Narrowing)',
      ref: typeNarrowingRef,
      component: TypeNarrowing,
    },
    {
      title: 'Дискриминирующие объединения (Discriminated Unions)',
      ref: discriminatedUnionsRef,
      component: DiscriminatedUnions,
    },
    {
      title: 'Маппинг типы (Mapped Types)',
      ref: mappedTypesRef,
      component: MappedTypes,
    },
    {
      title: 'Рекурсивные типы (Recursive Types)',
      ref: recursiveTypesRef,
      component: RecursiveTypes,
    },
    {
      title: 'Встроенные типы (Utility Types)',
      ref: utilityTypesRef,
      component: UtilityTypes,
    },
    {
      title: 'Объектно-ориентированное программирование в TypeScript',
      ref: OOPref,
      component: OOP,
    },
    {
      title: 'Типизация DOM и событий',
      ref: DOMRef,
      component: DOM,
    },
    {
      title: 'Типизация React',
      ref: reactRef,
      component: React,
    },
    {
      title: 'Полезные ссылочки и всякое такое',
      ref: readMoreRef,
      component: ReadMore,
    },
  ];

  const renderTableOfContents = useMemo(() => {
    return SECTIONS_CONFIG.map(({ title, ref }) => {
      return {
        title,
        ref,
      };
    });
  }, []);

  const renderSection = (section: TypeScriptSection) => {
    const { ref, component } = section;
    const Component = component;

    return <Component ref={ref} />;
  };

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.TYPESCRIPT_CHEATSHEET]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.ARCS,
      }}>
      <section>
        <TableOfContents
          items={renderTableOfContents}
          strictLanguage={POSTS_CONFIG_[EBlogPostRecord.TYPESCRIPT_CHEATSHEET].language}
          hideNumbers={true}
          showOnScroll={true}
        />
      </section>
      {SECTIONS_CONFIG.map((item) => renderSection(item))}
    </PostWrapper>
  );
};

export default Post;
