import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const ConditionalTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const syntaxExample = `T extends U ? X : Y`;

  const isStringTypeExampleCode = `type IsString<T> = T extends string ? true : false;`;

  const isStringTypeUsageExampleCode = `type A = IsString<string>; // true
type B = IsString<number>; // false`;

  const wrapperExampleCode = `type Wrapped<T> = T extends string ? \`string: \${T}\` : T extends number ? \`number: \${T}\` : T;

type A = Wrapped<"Привет">;   // "string: Привет"
type B = Wrapped<42>;        // "number: 42"
type C = Wrapped<boolean>;   // boolean`;

  const unionFilterExampleCode = `type OnlyStrings<T> = T extends string ? T : never;

type A = OnlyStrings<"a" | "b" | 1 | 2>;   // "a" | "b"`;

  const inferReturnTypeExampleCode = `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type MyFunc = () => string;
type T1 = ReturnType<MyFunc>; // Тип T1 будет string`;

  const inferArrayTypeExampleCode = `type ElementType<T> = T extends (infer E)[] ? E : never;

type NumbersArray = number[];
type T2 = ElementType<NumbersArray>; // Тип T2 будет number`;

  const inferFuncArgsExampleCode = `type MyParams<T> = T extends (...args: infer P) => any ? P : never;

function doSomething(abc: string, num: number, flag: boolean) {
  return { id: 1, abc, num, flag };
}

type FuncArgs = MyParams<typeof doSomething>; // [abc: string, num: number, flag: boolean]`;

  return (
    <section ref={ref}>
      <h2>Условные типы {getGhostText('Conditional Types')}</h2>
      <p>
        Позволяют создавать типы, которые меняются в зависимости от условий. Это <code className='code'>if/else</code>,
        но для типов:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={syntaxExample} />
      <p>Например:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={isStringTypeExampleCode} />
      <p>Как использовать этот тип:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={isStringTypeUsageExampleCode} />

      <p>Что можно сделать с помощью условных типов:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>Делать проверку на конкретный тип (см. пример выше)</p>
        </li>
        <li className='list__item'>
          <p>Комбинировать с дженериками для возврата разных типов данных в зависимости от типа входных данных:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={wrapperExampleCode} />
        </li>
        <li className='list__item'>
          <p>Фильтровать типы:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={unionFilterExampleCode} />
          <p>
            Тип <code className='code'>never</code> в объединениях ведет себя как пустое множество: он просто исчезает
            из объединения, никак не влияя на итоговый тип.
          </p>
        </li>
      </ul>
      <article>
        <h3>
          <code className='code'>infer</code>
        </h3>
        <p>
          Ключевое слово <code className='code'>infer</code> используется в TypeScript внутри условных типов для того,
          чтобы:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>Вывести и сохранить в переменную часть другого типа:</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={inferReturnTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>Узнать тип элемента, который лежит внутри массива: тип:</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={inferArrayTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>Получить аргументы функции</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={inferFuncArgsExampleCode} />
          </li>
        </ul>
      </article>
    </section>
  );
});

ConditionalTypes.displayName = 'ConditionalTypes';
