import { forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText, renderInlineList } from 'src/utils/formatting';

export const UtilityTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const userTypeExampleCode = `type User {
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

const user1: User = {}; // Type '{}' is missing the following properties from type 'User': id, name, email
const user2: PartialUser = {};`;

  const requiredUserTypeExampleCode = `type RequiredUser = Required<User>;

const user: RequiredUser = { // Property 'age' is missing in type '{ id: number; name: string; email: string; }' but required in type 'Required<User>'
  id: 42,
  name: 'dtsiki',
  email: 'dtsiki@dtsiki.dtsiki'
};`;

  const readonlyUserTypeExampleCode = `type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 42,
  name: 'dtsiki',
  email: 'dtsiki@dtsiki'
};

user.email = 'dtsiki@dtsiki.dtsiki'; // Cannot assign to 'email' because it is a read-only property`;

  const pickUserTypeExampleCode = `type PublicUser = Pick<User, 'id' | 'name'>;

const user: PublicUser = {
  id: 42,
  name: 'dtsiki',
};`;

  const omitUserTypeExampleCode = `type PublicUser = Omit<User, 'email' | 'age'>;

const user: PublicUser = {
  id: 42,
  name: 'dtsiki',
};`;

  const recordExampleCode = `type PetInfo = {
  age: number;
  breed: string;
}

const myPets: Record<string, PetInfo> = {
  "Kesha": { age: 5, breed: "Pembroke Welsh Corgi" },
  "Lucky": { age: 3, breed: "Mixed Breed Cat" },
  "Smoke": { age: 16, breed: "Mixed Breed Cat" },
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

  const awaitedExampleCode = `async function fetchUser(): Promise<{ id: number; name: string; isAwesome: boolean }> {
  return { id: 42, name: 'dtsiki', isAwesome: true };
}

// Обычный тип функции: () => Promise<{ id: number; name: string; isAwesome: boolean  }>
type UserFunctionReturnType = ReturnType<typeof fetchUser>;

// Распакованный тип: { id: number; name: string; isAwesome: boolean  }
type User = Awaited<UserFunctionReturnType>;`;

  return (
    <section ref={ref} id='Utility Types'>
      <h2>
        Встроенные типы
        {getGhostText('Utility Types')}
      </h2>
      <p>Встроенные типы помогают создавать новые на основе уже существующих. </p>
      <article>
        <h3>
          {renderInlineList(
            ['Partial<Type>', 'Required<Type>', 'Readonly<Type>', 'Pick<Type, Keys>', 'Omit<Type, Keys>'],
            'code',
            'code'
          )}
        </h3>
        <p>
          Эти встроенные типы изменяют модификаторы существующих полей в объектах: делают их опциональными,
          обязательными или доступными только для чтения, а также позволяют фильтровать, выбирая или удаляя нужные поля
          из типов.
        </p>
        <p>
          <strong>Важно: встроенные типы создают новый тип, а исходный при этом не меняется.</strong>
        </p>
        <p>
          Для примера возьмём тип <code className='code'>User</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={userTypeExampleCode} />
        <p>На его основе создадим новые с помощью встроенных типов:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>
                Partial<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              делает все свойства типа <code className='code'>Type</code> необязательными (опциональными):
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={partialUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Required<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              делает все свойства типа <code className='code'>Type</code> обязательными, даже если они были объявлены
              как опциональные:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={requiredUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Readonly<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              делает все свойства типа <code className='code'>Type</code> доступными только для чтения, предотвращая
              последующие изменения:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={readonlyUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Pick<AngleBrackets>Type, Keys</AngleBrackets>
              </code>{' '}
              выбирает только указанные свойства <code className='code'>Keys</code> из типа{' '}
              <code className='code'>Type</code>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={pickUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Omit<AngleBrackets>Type, Keys</AngleBrackets>
              </code>{' '}
              удаляет указанные свойства <code className='code'>Keys</code> из типа <code className='code'>Type</code>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={omitUserTypeExampleCode} />
          </li>
        </ul>
        <p>
          Всё выше перечисленное будет работать и для интерфейсов т.к. для TypeScript типы и интерфейсы это одно и то же
          — объектный тип:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={userInterfaceExampleCode} />
      </article>
      <article>
        <h3>
          <code className='code'>
            Record<AngleBrackets>Keys, Type</AngleBrackets>
          </code>
        </h3>
        <p>
          Создает новый объект, где ключи имеют тип <code className='code'>Keys</code>, а значения — тип{' '}
          <code className='code'>Тype</code>.
        </p>
        <p>
          Чаще всего используется для создания словарей (хеш-таблиц), где ключом является строка, а значением — любой
          нужный тип:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={recordExampleCode} />
      </article>
      <article>
        <h3>{renderInlineList(['Exclude<Type, U>', 'Extract<Type, U>', 'NonNullable<Type>'], 'code', 'code')}</h3>
        <p>Позволяют фильтровать элементы в объединениях, например, оставлять только нужные.</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>
                Exclude<AngleBrackets>T, U</AngleBrackets>
              </code>{' '}
              исключает из объединения <code className='code'>T</code> все типы, которые можно присвоить{' '}
              <code className='code'>U</code>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={excludeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Extract<AngleBrackets>T, U</AngleBrackets>
              </code>{' '}
              наоборот — оставляет только совпадающие:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extractExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                NonNullable<AngleBrackets>T</AngleBrackets>
              </code>{' '}
              убирает из <code className='code'>T</code> все <code className='code'>null</code> и{' '}
              <code className='code'>undefined</code>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={nonNullableExampleCode} />
          </li>
        </ul>
      </article>
      <article>
        <h3>
          {renderInlineList(
            ['Parameters<Type>', 'ReturnType<Type>', 'ConstructorParameters<Type>', 'InstanceType<Type>'],
            'code',
            'code'
          )}
        </h3>
        <p>Служат для извлечения информации о параметрах или возвращаемых значениях из сигнатур функций.</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>
                Parameters<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              позволяет получить типы аргументов функции <code className='code'>Type</code> в виде кортежа:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={parametersExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                ReturnType<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              позволяет получить тип возвращаемого значения из функции:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={returnTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                ConstructorParameters<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              позволяет извлечь типы параметров конструктора класса в виде кортежа:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={constructorParametersExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                InstanceType<AngleBrackets>Type</AngleBrackets>
              </code>{' '}
              позволяет извлечь тип, который возвращает конструктор класса:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={instanceTypeExampleCode} />
          </li>
        </ul>
      </article>
      <article>
        <h3>{renderInlineList(['Awaited<Type>'], 'code', 'code')}</h3>
        <p>
          <code className='code'>
            Awaited<AngleBrackets>T</AngleBrackets>
          </code>{' '}
          — специальная утилиты для работы с промисами, которая разворачивает (распаковывает) тип{' '}
          <code className='code'>Promise</code>, возвращая тип, который находится внутри него:
        </p>
        <p>
          Самый частый сценарий использования — получение типа возвращаемого значения из асинхронных функций в сочетании
          с <code className='code'>ReturnType</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={awaitedExampleCode} />
      </article>
    </section>
  );
});

UtilityTypes.displayName = 'UtilityTypes';
