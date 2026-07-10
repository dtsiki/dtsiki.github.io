import { forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { ENoteType } from 'src/components/common/Note/Note.types';
import { getGhostText } from 'src/utils/formatting';

export const MappedTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const syntaxTypeExampleCode = `type User {
  id: number;
  name: string;
  age?: number;
}

type NewType = {
  [K in keyof User]: User[K];
};`;

  const syntaxGenericExampleCode = `type NewType<T> = {
  [K in keyof T]: T[K];
};`;

  const optionalUserExampleCode = `type User = {
  name: string;
  age: number;
};

type OptionalUser = {
  [K in keyof User]?: User[K];
};`;

  const optionalUserResultExampleCode = `type OptionalUser = {
  name?: string | undefined;
  age?: number | undefined;
}`;

  const readonlyExampleCode = `type User = {
  id: number;
  name: string;
  age?: number;
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

const user: ReadOnly<User> = {
  id: 42,
  name: "веышлш"
};

user.name = 'dtsiki'; // Ошибка: Cannot assign to 'name' because it is a read-only property`;

  const partialUtilityTypeExampleCode = `// Встроенный тип:
type PartialUser = Partial<User>;

// Под капотом маппинг тип:
type Partial<T> = {
  [K in keyof T]?: T[K];
};`;

  const asExampleCode = `type StringKeys<T> = {
  [P in keyof T as P extends string ? P : never]: T[P];
};

type User {
  id: number;
  name: string;
  age: number;
  email: string;
  isAwesome: boolean;
}

type OnlyStrings = StringKeys<User>; `;

  return (
    <section ref={ref} id='Interfaces'>
      <h2>
        Маппинг типы
        {getGhostText('Mapped Types')}
      </h2>
      <p>
        Позволяют создавать новые типы на основе существующих, путём перебора ключей и последующей модификации их. По
        сути это функция <code className='code'>map</code>, но для типов: проходимся по каждому ключу и что-то делаем с
        ним.
      </p>
      <p>Есть два синтаксических подхода к написанию маппинга типов:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>Применяем маппинг сразу к конкретному типу:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={syntaxTypeExampleCode} />
        </li>
        <li className='list__item'>
          <p>Используем дженерик:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={syntaxGenericExampleCode} />
        </li>
      </ul>
      <p>
        В обоих случаях можно использовать модификаторы <strong>?</strong> (сделает свойство необязательным) и{' '}
        <strong>readonly</strong> (сделает свойство доступным только для чтения), а также{' '}
        <a href='#Utility Types' className='link PRIMARY'>
          встроенные типы
        </a>
        . Во время создания нового типа можно добавлять или удалять свойства, используя префиксы <strong>+</strong> (по
        умолчанию) и <strong>-</strong>.
      </p>
      <p>Например, с помощью маппинга типа сделаем все поля объекта необязательнымы:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={optionalUserExampleCode} />
      <p>В результате получится такой тип:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={optionalUserResultExampleCode} />
      <p>Можно сделать все поля доступными только для чтения:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={readonlyExampleCode} />
      <p>
        Также доступна фильтрация через ключевое слово <code className='code'>as</code>:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={asExampleCode} />

      <p>
        TypeScript уже содержит множество готовых{' '}
        <a href='#Utility Types' className='link PRIMARY'>
          встроенных типов
        </a>{' '}
        (Utility Types) на базе Mapped Types:
        <code className='code'>
          Pick<AngleBrackets>T, K</AngleBrackets>
        </code>
        ,{' '}
        <code className='code'>
          Record<AngleBrackets>K, T</AngleBrackets>
        </code>
        ,{' '}
        <code className='code'>
          Omit<AngleBrackets>T, K</AngleBrackets>
        </code>{' '}
        и т.д. Всё это дженерик-версии маппинг-типов. Именно поэтому они работают с любым типом. Например:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={partialUtilityTypeExampleCode} />
    </section>
  );
});

MappedTypes.displayName = 'MappedTypes';
