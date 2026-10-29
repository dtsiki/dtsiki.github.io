import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { CODE_LANG } from '~components/common/Code';
import { LONG_DASH } from 'src/constants';
import { getAngleBrackets, getGhostText, renderInlineList } from '~utils/formatting';
import { renderType, renderTypeName } from './UtilityTypes.utils';
import { UTILITY_TYPE } from './UtilityTypes.types';
import { NOTE_TYPE, Note } from '~components/common/Note';

export const UtilityTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const userTypeExampleCode = `type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
}`;

  const userInterfaceExampleCode = `interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type ReadonlyUser = Readonly<User>;
type PublicPickUser = Pick<User, 'id' | 'name'>;
type PublicOmitUser = Omit<User, 'email' | 'age'>;`;

  const partialUserTypeExampleCode = `type PartialUser = Partial<User>;
/*
type PartialUser = {
  id?: number | undefined;
  name?: string | undefined;
  email?: string | undefined;
  age?: number | undefined;
}
*/

// Ok:
const partialUser: PartialUser = {};

// Ошибка: "Type '{}' is missing the following properties from type 'User': id, name, email"
const defaultUser: User = {};`;

  const requiredUserTypeExampleCode = `type RequiredUser = Required<User>;
/*
type RequiredUser = {
  id: number;
  name: string;
  email: string;
  age: number; // <- поле стало обязательным
}
*/

// Ошибка: "Property 'age' is missing in type '{ id: number; name: string; email: string; }'"
const requiredUser: RequiredUser = {
  id: 42,
  name: "dtsiki",
  email: "dtsiki@dtsiki.dtsiki",
};`;

  const readonlyUserTypeExampleCode = `type ReadonlyUser = Readonly<User>;
/*
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly age?: number | undefined;
}
*/

const readonlyUser: ReadonlyUser = {
  id: 42,
  name: "dtsiki",
  email: "dtsiki@dtski",
};

// Ошибка: "Cannot assign to 'email' because it is a read-only property"
readonlyUser.email = "dtsiki@dtsiki";`;

  const pickUserTypeExampleCode = `type PublicUser = Pick<User, "id" | "name">;
/*
type PublicUser = {
  id: number;
  name: string;
}
*/

const publicUser: PublicUser = {
  id: 42,
  name: "dtsiki",
};

// Ошибка: "Property 'email' does not exist on type 'PublicUser'"
publicUser.email = 'dtsiki@dtsiki'`;

  const omitUserTypeExampleCode = `type PublicUser = Omit<User, "email" | "age">;
/*
type PublicUser = {
  id: number;
  name: string;
}
*/

const publicUser: PublicUser = {
  id: 42,
  name: "dtsiki",
};`;

  const recordExampleCode = `type Roles = 'admin' | 'user' | 'guest';
type Permissions = Record<Roles, string[]>;
// { admin: string[]; user: string[]; guest: string[] }

const p: Permissions = {
  admin: ['read', 'write'],
  user: ['read'],
  guest: [],
};`;

  const excludeExampleCode = `type All = 'a' | 'b' | 'c' | 'd';
type WithoutBAndC = Exclude<All, 'b' | 'c'>; // 'a' | 'd'`;

  const extractExampleCode = `type All = 'a' | 'b' | 'c' | 'd';
type WithBandC = Extract<All, 'b' | 'c'>; // 'b' | 'c'`;

  const nonNullableExampleCode = `type SomeStrangeType = string | null | undefined;
type SomeDefiniteType = NonNullable<SomeStrangeType>; // string`;

  const parametersExampleCode = `function sayHello(name: string, age?: number): string {
  return \`Привет, \${name}\`;
}

type Params = Parameters<typeof sayHello>; // [name: string, age?: number]`;

  const returnTypeExampleCode = `function fetchUser() {
  return { id: 42, name: '@dtsiki', isAwesome: true };
}

type User = ReturnType<typeof fetchUser>; // { id: number; name: string; isAwesome: boolean; }`;

  const instanceTypeExampleCode = `class User {
  id: number;
  name: string;
  isAwesome: boolean;
}

type UserInstance = InstanceType<typeof User>; // User`;

  const constructorParametersExampleCode = `class User {
  constructor(public name: string, public age: number) {}
}

type UserParams = ConstructorParameters<typeof User>; // [name: string, age: number]

// Теперь можно использовать этот тип для функций-фабрик или оберток
function createUser(...args: UserParams) {
  return new User(...args);
}`;

  const awaitedExampleCode = `type A = Awaited<Promise<string>>;  // string
type B = Awaited<Promise<number>>;  // number
type C = Awaited<string>;           // string: не промис — вернёт как есть
type D = Awaited<number>;           // number: не промис — вернёт как есть`;

  const awaitedInnerPromiseExampleCode = `type E = Awaited<Promise<Promise<number>>>; // number`;

  const awaitedFunctionExampleCode = `async function fetchUser() {
  return { id: 42, name: 'dtsiki' };
}

type User = Awaited<ReturnType<typeof fetchUser>>;
// type User = { id: number; name: string; }`;

  const pickPlusPartialTypeExampleCode = `type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UpdateUserDto = Partial<Pick<User, "name" | "email">>;
/*
type UpdateUserDto = {
  name?: string | undefined;
  email?: string | undefined;
}
*/

const user: UpdateUserDto = {
  name: "dtsiki",
};`;

  const omitPlusPartialTypeExampleCode = `type SafeUpdateUser = Partial<Omit<User, "id">>;
/*
type SafeUpdateUser = {
  name?: string | undefined;
  email?: string | undefined;
  age?: number | undefined;
}
*/

// Ошибка: "'id' does not exist in type 'Partial<Omit<User, "id">>'
const user: SafeUpdateUser = {
  id: 42,
  name: "dtsiki",
};`;

  const partialRequiredTypeExampleCode = `// Сделать часть свойств опциональными, а остальные оставить прежними
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Сделать часть свойств обязательными
type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

interface Post {
  id: number;
  title: string;
  body?: string;
}

// Делаем title обязательным (если он был опциональным) или меняем id
type StrictPost = RequiredBy<Post, 'body'>;
// Свойство body теперь точно string, а не string | undefined`;

  const readonlyPartialUserExampleCode = `type User = {
  id: number;
  name: string;
  email?: string;
  age?: number;
};

type ReadonlyPartialUser = Readonly<Partial<User>>;
/*
type ReadonlyPartialUser = {
  readonly id?: number | undefined;
  readonly name?: string | undefined;
  readonly email?: string | undefined;
  readonly age?: number | undefined;
}
*/`;

  const partialReadonlyUserExampleCode = `type User = {
  id: number;
  name: string;
  email?: string;
  age?: number;
};

type PartialReadonlyUser = Partial<Readonly<User>>;
/*
type PartialReadonlyUser = {
  readonly id?: number | undefined;
  readonly name?: string | undefined;
  readonly email?: string | undefined;
  readonly age?: number | undefined;
}
*/`;

  const requiredPartialRequiredUserExampleCode = `type RequiredPartialUser = Required<Partial<User>>;
/*
type RequiredPartialUser = {
  id: number;
  name: string;
  email: string;
  age: number;
}
*/
type PartialRequiredUser = Partial<Required<User>>;
/*
type PartialRequiredUser = {
  id?: number | undefined;
  name?: string | undefined;
  email?: string | undefined;
  age?: number | undefined;
}
*/`;

  return (
    <section ref={ref} id='Utility Types' className='section outer'>
      <h2>
        Встроенные типы
        {getGhostText('Utility Types')}
      </h2>
      <p>Встроенные типы помогают создавать новые на основе уже существующих.</p>
      <section className='section inner'>
        <h3>
          {renderInlineList([
            renderTypeName(UTILITY_TYPE.PARTIAL),
            renderTypeName(UTILITY_TYPE.REQUIRED),
            renderTypeName(UTILITY_TYPE.READONLY),
            renderTypeName(UTILITY_TYPE.PICK),
            renderTypeName(UTILITY_TYPE.OMIT),
          ])}
        </h3>
        <p>
          Эти встроенные типы изменяют модификаторы существующих полей в объектах: делают их опциональными,
          обязательными или доступными только для чтения, а также позволяют фильтровать, выбирая или удаляя нужные поля
          из типов.
        </p>
        <p>
          <strong>Важно:</strong> встроенные типы <strong>создают</strong> новый тип, а исходный при этом не меняется.
        </p>
        <p>
          Для примера возьмём тип <InlineCode>User</InlineCode>:
        </p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={userTypeExampleCode} />
        <p>На его основе создадим новые типы с помощью встроенных:</p>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.PARTIAL)}</h4>
          <p>
            {renderType(UTILITY_TYPE.PARTIAL)} делает все свойства типа <InlineCode>T</InlineCode> необязательными
            (опциональными):
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={partialUserTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.REQUIRED)}</h4>
          <p>
            {renderType(UTILITY_TYPE.REQUIRED)} делает все свойства типа <InlineCode>T</InlineCode> обязательными, даже
            если они были объявлены как опциональные:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={requiredUserTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.READONLY)}</h4>
          <p>
            {renderType(UTILITY_TYPE.READONLY)} делает все свойства типа <InlineCode>T</InlineCode> доступными только
            для чтения, предотвращая последующие изменения:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={readonlyUserTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.PICK)}</h4>

          <p>
            {renderType(UTILITY_TYPE.PICK)} выбирает только указанные свойства <InlineCode>K</InlineCode> из типа{' '}
            <InlineCode>T</InlineCode>:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={pickUserTypeExampleCode} />
          <p>
            {renderTypeName(UTILITY_TYPE.PICK)} часто используется, чтобы сделать компактную версию типа для списка или
            превью.
          </p>
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.OMIT)}</h4>
          <p>
            {renderType(UTILITY_TYPE.OMIT)} удаляет указанные свойства <InlineCode>K</InlineCode> из типа{' '}
            <InlineCode>T</InlineCode>:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={omitUserTypeExampleCode} />
          <p>
            {renderType(UTILITY_TYPE.OMIT)} часто используется, чтобы скрыть служебные поля {LONG_DASH} например,{' '}
            <InlineCode>password</InlineCode> или <InlineCode>createdAt</InlineCode>.
          </p>
        </section>
        <p>
          Всё выше перечисленное будет работать и для интерфейсов т.к. для TypeScript типы и интерфейсы это одно и то же{' '}
          {LONG_DASH} объектный тип:
        </p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={userInterfaceExampleCode} />
      </section>
      <section className='section inner'>
        <h3>{renderTypeName(UTILITY_TYPE.RECORD)}</h3>
        <p>
          {renderType(UTILITY_TYPE.RECORD)} создаёт новый объект, где ключи имеют тип <InlineCode>K</InlineCode>, а
          значения {LONG_DASH} тип <InlineCode>T</InlineCode>:
        </p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={recordExampleCode} />
        <p>
          {renderTypeName(UTILITY_TYPE.RECORD)} чаще всего используется для создания словарей (хеш-таблиц), где ключом
          является строка, а значением {LONG_DASH} любой нужный тип.
        </p>
      </section>
      <section className='section inner'>
        <h3>
          {renderInlineList([
            renderTypeName(UTILITY_TYPE.EXCLUDE),
            renderTypeName(UTILITY_TYPE.EXTRACT),
            renderTypeName(UTILITY_TYPE.NONNULLABLE),
          ])}
        </h3>
        <p>Позволяют фильтровать элементы в объединениях, например, оставляя или исключая только нужные.</p>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.EXCLUDE)}</h4>
          <p>
            {renderType(UTILITY_TYPE.EXCLUDE)} исключает из объединения <InlineCode>T</InlineCode> все типы, которые
            можно присвоить <InlineCode>U</InlineCode>:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={excludeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.EXTRACT)}</h4>
          <p>
            {renderType(UTILITY_TYPE.EXTRACT)} наоборот {LONG_DASH} оставляет только совпадающие:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={extractExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.NONNULLABLE)}</h4>
          <p>
            {renderType(UTILITY_TYPE.NONNULLABLE)} убирает из <InlineCode>T</InlineCode> все{' '}
            <InlineCode>null</InlineCode> и <InlineCode>undefined</InlineCode>:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={nonNullableExampleCode} />
        </section>
      </section>
      <section className='section inner'>
        <h3>
          {renderInlineList([
            renderTypeName(UTILITY_TYPE.PARAMETERS),
            renderTypeName(UTILITY_TYPE.RETURNTYPE),
            renderTypeName(UTILITY_TYPE.CONSTRUCTORPARAMETERS),
            renderTypeName(UTILITY_TYPE.INSTANCETYPE),
          ])}
        </h3>
        <p>Служат для извлечения информации о параметрах или возвращаемых значениях из сигнатур функций.</p>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.PARAMETERS)}</h4>
          <p>
            {renderType(UTILITY_TYPE.PARAMETERS)} позволяет получить типы аргументов функции <InlineCode>T</InlineCode>{' '}
            в виде кортежа:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={parametersExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.RETURNTYPE)}</h4>
          <p>{renderType(UTILITY_TYPE.RETURNTYPE)} позволяет получить тип возвращаемого значения из функции:</p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={returnTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.CONSTRUCTORPARAMETERS)}</h4>
          <p>
            {renderType(UTILITY_TYPE.CONSTRUCTORPARAMETERS)} позволяет извлечь типы параметров конструктора класса в
            виде кортежа:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={constructorParametersExampleCode} />
        </section>
        <section className='section inner'>
          <h4>{renderTypeName(UTILITY_TYPE.INSTANCETYPE)}</h4>
          <p>{renderType(UTILITY_TYPE.INSTANCETYPE)} позволяет извлечь тип, который возвращает конструктор класса:</p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={instanceTypeExampleCode} />
        </section>
      </section>
      <section className='section inner'>
        <h3>{renderTypeName(UTILITY_TYPE.AWAITED)}</h3>
        <p>
          {renderType(UTILITY_TYPE.AWAITED)} {LONG_DASH} специальный встроенный тип для работы с промисами.{' '}
          {renderType(UTILITY_TYPE.AWAITED)} разворачивает или распаковывает промис, возвращая тип, который находится
          внутри него:
        </p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={awaitedExampleCode} />
        <p>{renderTypeName(UTILITY_TYPE.AWAITED)} может рекурсивно разворачивать вложенные промисы:</p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={awaitedInnerPromiseExampleCode} />
        <p>
          Самый частый сценарий использования {LONG_DASH} получение типа возвращаемого значения из асинхронных функций в
          сочетании с <InlineCode>ReturnType</InlineCode>:
        </p>
        <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={awaitedFunctionExampleCode} />
      </section>
      <section className='section inner'>
        <h3>Комбинация встроенных типов</h3>
        <p>
          Можно комбинировать встроенные типы. Это делается вкладыванием друг в друга или объединением через пересечения{' '}
          <InlineCode>&</InlineCode>. Так можно создавать конструкции любой сложности.
        </p>
        <section className='section inner'>
          <p>Базовое правило комбинации встроенных типов {LONG_DASH} читаем изнутри наружу:</p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={readonlyPartialUserExampleCode} />
          <p>
            Здесь сначала применяется{' '}
            <InlineCode>
              Partial<AngleBrackets>User</AngleBrackets>
            </InlineCode>{' '}
            — сделает все поля у <InlineCode>User</InlineCode> необязательными, а затем{' '}
            <InlineCode>Readonly</InlineCode> сделает полученный результат <em>readonly</em>.
          </p>
          <p>Если поменять порядок {LONG_DASH} результат не поменяется:</p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={partialReadonlyUserExampleCode} />
          <p>
            <InlineCode>Partial</InlineCode> и <InlineCode>Readonly</InlineCode> — это <strong>сопоставимые</strong>{' '}
            встроенные типы: они сохраняют модификаторы друг друга, поэтому можно писать их в любом порядоке. Но так
            могут не все типы.
          </p>
          <p>
            <InlineCode>Partial</InlineCode>, <InlineCode>Readonly</InlineCode>, <InlineCode>Pick</InlineCode> сохраняют
            модификаторы {LONG_DASH} копируют исходные свойства один в один, сохраняя всё, что не было изменено
            модификаторами. Но для <InlineCode>Required</InlineCode> и <InlineCode>Record</InlineCode> порядок уже будет
            важен. Например, в случае с <InlineCode>Partial</InlineCode> <strong>и</strong>{' '}
            <InlineCode>Required</InlineCode> порядок будет менять итоговый результат:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={requiredPartialRequiredUserExampleCode} />
        </section>
        <section className='section inner'>
          <h4>Частичный тип на основе выбранных полей</h4>
          <p>
            Если нужно взять только пару полей из типа и сделать их необязательными, то можно использовать комбинацию{' '}
            {renderType(UTILITY_TYPE.PICK)} и {renderType(UTILITY_TYPE.PARTIAL)}.
          </p>
          <p>
            Например, если из типа <InlineCode>User</InlineCode> нужно оставить только поля{' '}
            <InlineCode>name</InlineCode> и <InlineCode>email</InlineCode> и сделать их необязательными:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={pickPlusPartialTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>Исключение полей с последующим изменением обязательности</h4>
          <p>
            Если нужно запретить менять какое-то системное поле, например <InlineCode>id</InlineCode>, а остальные поля
            сделать опциональными, то можно скомбинировать типы {renderType(UTILITY_TYPE.OMIT)} и{' '}
            {renderType(UTILITY_TYPE.PARTIAL)}:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={omitPlusPartialTypeExampleCode} />
        </section>
        <section>
          <h4>Частичное изменение конкретных свойств</h4>
          <p>
            {renderType(UTILITY_TYPE.PARTIAL)} и {renderType(UTILITY_TYPE.REQUIRED)} действуют сразу на весь объект.
            Чтобы сделать только некоторые поля опциональными или обязательными, их комбинируют через пересечение{' '}
            <InlineCode>&</InlineCode>:
          </p>
          <CodeSnippet lang={CODE_LANG.TYPESCRIPT} code={partialRequiredTypeExampleCode} />
        </section>
      </section>
    </section>
  );
});

UtilityTypes.displayName = 'UtilityTypes';
