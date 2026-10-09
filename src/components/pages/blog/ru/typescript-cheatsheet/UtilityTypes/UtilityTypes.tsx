import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { getGhostText, renderInlineList } from 'src/utils/formatting';

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

  const pickPlusPartialTypeExampleCode = `type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Выбираем name и email, делаем их необязательными
type UpdateUserDto = Partial<Pick<User, 'name' | 'email'>>;

const user: UpdateUserDto = {
  name: 'dtsiki', // email можно не указывать
};`;

  const omitPlusPartialTypeExampleCode = `type SafeUpdateUser = Partial<Omit<User, 'id'>>;

const updateData: SafeUpdateUser = {
  name: 'dtsiki',
  // id здесь использовать нельзя
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

  return (
    <section ref={ref} id='Utility Types' className='section outer'>
      <h2>
        Встроенные типы
        {getGhostText('Utility Types')}
      </h2>
      <p>Встроенные типы помогают создавать новые на основе уже существующих.</p>
      <section className='section inner'>
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
          <strong>Важно:</strong> встроенные типы создают новый тип, а исходный при этом не меняется.
        </p>
        <p>
          Для примера возьмём тип <InlineCode>User</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={userTypeExampleCode} />
        <p>На его основе создадим новые типы с помощью встроенных:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <InlineCode>
                Partial<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              делает все свойства типа <InlineCode>Type</InlineCode> необязательными (опциональными):
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={partialUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                Required<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              делает все свойства типа <InlineCode>Type</InlineCode> обязательными, даже если они были объявлены как
              опциональные:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={requiredUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                Readonly<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              делает все свойства типа <InlineCode>Type</InlineCode> доступными только для чтения, предотвращая
              последующие изменения:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={readonlyUserTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                Pick<AngleBrackets>Type, Keys</AngleBrackets>
              </InlineCode>{' '}
              выбирает только указанные свойства <InlineCode>Keys</InlineCode> из типа <InlineCode>Type</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={pickUserTypeExampleCode} />
            <p>
              <InlineCode>
                Pick<AngleBrackets>Type, Keys</AngleBrackets>
              </InlineCode>{' '}
              часто используется, чтобы сделать компактную версию типа для списка или превью.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                Omit<AngleBrackets>Type, Keys</AngleBrackets>
              </InlineCode>{' '}
              удаляет указанные свойства <InlineCode>Keys</InlineCode> из типа <InlineCode>Type</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={omitUserTypeExampleCode} />
            <p>
              <InlineCode>
                Omit<AngleBrackets>Type, Keys</AngleBrackets>
              </InlineCode>{' '}
              часто используется, чтобы скрыть служебные поля {LONG_DASH} например, <InlineCode>password</InlineCode>{' '}
              или <InlineCode>createdAt</InlineCode>.
            </p>
          </li>
        </ul>
        <p>
          Всё выше перечисленное будет работать и для интерфейсов т.к. для TypeScript типы и интерфейсы это одно и то же{' '}
          {LONG_DASH} объектный тип:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={userInterfaceExampleCode} />
      </section>
      <section className='section inner'>
        <h3>
          <InlineCode>
            Record<AngleBrackets>Keys, Type</AngleBrackets>
          </InlineCode>
        </h3>
        <p>
          Создает новый объект, где ключи имеют тип <InlineCode>Keys</InlineCode>, а значения {LONG_DASH} тип{' '}
          <InlineCode>Тype</InlineCode>.
        </p>
        <p>
          Чаще всего используется для создания словарей (хеш-таблиц), где ключом является строка, а значением{' '}
          {LONG_DASH} любой нужный тип:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={recordExampleCode} />
      </section>
      <section className='section inner'>
        <h3>{renderInlineList(['Exclude<Type, U>', 'Extract<Type, U>', 'NonNullable<Type>'], 'code', 'code')}</h3>
        <p>Позволяют фильтровать элементы в объединениях, например, оставлять только нужные.</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <InlineCode>
                Exclude<AngleBrackets>T, U</AngleBrackets>
              </InlineCode>{' '}
              исключает из объединения <InlineCode>T</InlineCode> все типы, которые можно присвоить{' '}
              <InlineCode>U</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={excludeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                Extract<AngleBrackets>T, U</AngleBrackets>
              </InlineCode>{' '}
              наоборот {LONG_DASH} оставляет только совпадающие:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extractExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                NonNullable<AngleBrackets>T</AngleBrackets>
              </InlineCode>{' '}
              убирает из <InlineCode>T</InlineCode> все <InlineCode>null</InlineCode> и{' '}
              <InlineCode>undefined</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={nonNullableExampleCode} />
          </li>
        </ul>
      </section>
      <section className='section inner'>
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
              <InlineCode>
                Parameters<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              позволяет получить типы аргументов функции <InlineCode>Type</InlineCode> в виде кортежа:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={parametersExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                ReturnType<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              позволяет получить тип возвращаемого значения из функции:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={returnTypeExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                ConstructorParameters<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              позволяет извлечь типы параметров конструктора класса в виде кортежа:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={constructorParametersExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              <InlineCode>
                InstanceType<AngleBrackets>Type</AngleBrackets>
              </InlineCode>{' '}
              позволяет извлечь тип, который возвращает конструктор класса:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={instanceTypeExampleCode} />
          </li>
        </ul>
      </section>
      <section className='section inner'>
        <h3>{renderInlineList(['Awaited<Type>'], 'code', 'code')}</h3>
        <p>
          <InlineCode>
            Awaited<AngleBrackets>T</AngleBrackets>
          </InlineCode>{' '}
          {LONG_DASH} специальная утилиты для работы с промисами, которая разворачивает (распаковывает) тип{' '}
          <InlineCode>Promise</InlineCode>, возвращая тип, который находится внутри него:
        </p>
        <p>
          Самый частый сценарий использования {LONG_DASH} получение типа возвращаемого значения из асинхронных функций в
          сочетании с <InlineCode>ReturnType</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={awaitedExampleCode} />
      </section>
      <section className='section inner'>
        <h3>Комбинация встроенных типов</h3>
        <p>
          Комбинировать можно абсолютно любые встроенные типы. Их можно вкладывать друг в друга как функции или
          объединять через пересечения <InlineCode>&</InlineCode>, создавая конструкции любой сложности.
        </p>
        <section className='section inner'>
          <h4>
            <InlineCode>
              Pick<AngleBrackets>Type, Keys</AngleBrackets>
            </InlineCode>{' '}
            +{' '}
            <InlineCode>
              Partial<AngleBrackets>Type</AngleBrackets>
            </InlineCode>
            : частичный тип на основе выбранных полей
          </h4>
          <p>Если нужно взять только пару полей из типа и сделать их необязательными:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={pickPlusPartialTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>
            <InlineCode>
              Omit<AngleBrackets>Type, Keys</AngleBrackets>
            </InlineCode>{' '}
            +{' '}
            <InlineCode>
              Partial<AngleBrackets>Type</AngleBrackets>
            </InlineCode>
            : исключение полей с последующим изменением обязательности
          </h4>
          <p>
            Если нужно запретить менять какое-то системное поле, например <InlineCode>id</InlineCode>, а остальные поля
            сделать опциональными:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={omitPlusPartialTypeExampleCode} />
        </section>
        <section>
          <h4>Частичное изменение конкретных свойств</h4>
          <p>
            <InlineCode>
              Partial<AngleBrackets>Type</AngleBrackets>
            </InlineCode>{' '}
            и{' '}
            <InlineCode>
              Required<AngleBrackets>Type</AngleBrackets>
            </InlineCode>{' '}
            действуют сразу на весь объект. Чтобы сделать только некоторые поля опциональными или обязательными, их
            комбинируют через пересечение <InlineCode>&</InlineCode>:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={partialRequiredTypeExampleCode} />
        </section>
      </section>
    </section>
  );
});

UtilityTypes.displayName = 'UtilityTypes';
