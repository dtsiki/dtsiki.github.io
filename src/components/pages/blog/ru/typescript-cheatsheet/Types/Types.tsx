import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note, NoteType } from 'src/components/common/Note';
import { getGhostText } from 'src/utils/formatting';

export const Types = forwardRef<HTMLDivElement>(({}, ref) => {
  const typeExampleCode = `type User = {
  id: number;
  name: string;
  isAwesome: boolean;
  age?: number;
};

const user: User = { id: 42, name: 'dtsiki', isAwesome: boolean };`;

  const arrayTypeExampleCode = `type StringArray = string[];
type NumberArray = Array<number>;
type MixedArray = (string | number)[];

const abc: StringArray = ['a', 'b', 'c'];
const nums: NumberArray = [1, 2, 3];
const mixed: MixedArray = ['hello', 42];`;

  const unionTypesExampleCode = `type Status = "loading" | "success" | "error";`;

  const intersectionTypesExampleCode = `type A = { a: number };
type B = { b: string };

type C = A & B;`;

  const basicDataTypeExampleCode = `type ID = string | number;
const stringId: ID = 'asdfgh';
const numberId: ID = 42;
const bigintId: ID = 123n; // Ошибка: Type 'bigint' is not assignable to type 'ID'`;

  const functionTypeExampleCode = `type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;
const concat: MathOperation = (x, y) => \`\${x}\${y}\`; // Ошибка: Type 'string' is not assignable to type 'number'`;

  const tupleTypeExampleCode = `type Point = [number, number];`;

  const extendsTypeExampleCode = `type User = { name: string };
type Admin = User & { role: string };`;

  const typeRedeclarationErrorExampleCode = `type User = { name: string };
type User = { age: number }; //  Error: Duplicate identifier 'User' `;

  return (
    <section ref={ref} id='Types'>
      <h2>Типы {getGhostText('Types')}</h2>
      <p>
        С помощью типов можно описывать любые структуры данных: примитивные типы, объекты, функций, массивов и т.д.
        Ключевое слово здесь — <strong>любые</strong>.
      </p>
      <Note type={NoteType.SECONDARY}>
        Не следует путать с{' '}
        <a href='#Data_Types' className='link PRIMARY'>
          типами данных
        </a>
        .
      </Note>
      <p>
        Типы записываются с помощью ключевого слова <code className='code'>type</code>.
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeExampleCode} />

      <p>Можно описывать не только объекты, можно и примитивы:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={basicDataTypeExampleCode} />

      <p>Функции:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={functionTypeExampleCode} />

      <p>Массивы:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrayTypeExampleCode} />

      <p>Кортежи:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={tupleTypeExampleCode} />

      <div className='spacer top medium'>
        <Note type={NoteType.SECONDARY}>
          <p>
            Типы в TypeScript можно называть с префиксом <em>T</em>, например, <em>TUser</em> вместо <em>User</em>. Это
            не обязательное правило TypeScript, а соглашение, пришедшее из других языков для улучшения читаемости кода.
            Это помогает мгновенно отличить тип от других значений, например интерфейсов, классов или объектов.
          </p>
        </Note>
      </div>
      <article>
        <h3>Объединение и пересечение типов</h3>
        <p>
          Для создания нового типа можно комбинировать несколько типов с помощью объединения (Union) и пересечения
          (Intersection).
        </p>
        <p>
          Для объединения используется символ <code className='code'>|</code>. В результате объединения получается новый
          тип, который будет содержать всё, что есть в типах, участвующих в объединении:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={unionTypesExampleCode} />
        <p>
          Для пересечения используется символ <code className='code'>&</code>. Новый тип будет содержать свойства{' '}
          <strong>всех</strong> указанных при пересечении типов:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={intersectionTypesExampleCode} />
        <p>Также с помощью пересечения можно расширять типы:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extendsTypeExampleCode} />
      </article>
      <article>
        <h3>Ограничения типов</h3>
        <ul className='list markered'>
          <li className='list__item'>
            <p>Типы нельзя переопределять:</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeRedeclarationErrorExampleCode} />
          </li>
        </ul>
      </article>
    </section>
  );
});

Types.displayName = 'Types';
