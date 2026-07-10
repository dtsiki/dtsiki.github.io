import { forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const LiteralTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const literalExampleCode = `const admin = "admin";
let user = 'user';`;

  const stringLiteralTypeExampleCode = `type Status = 'idle' | 'loading' | 'success' | 'error'; // String literal type

function handleStatus(status: Status) {
  // статусом может быть только одним из четырёх значений
}`;

  const numberLiteralTypeExampleCode = `type Dice = 1 | 2 | 3 | 4 | 5 | 6; // Number literal type

function rollDice(): Dice {
  return Math.floor(Math.random() * 6) + 1 as Dice;
}`;

  const logicLiteralTypeExampleCode = `type SuccessResult = {
  success: true; // Boolean literal type
  data: string;
};

type FailureResult = {
  success: false; // Boolean literal type
  error: string;
};`;

  const objectLiteralTypeExampleCode = `const admin = {
  login: 'admin',
  password: 'admin',
} as const;`;

  const objectLiteralTypeExampleLog = `const admin: {
  readonly login: "admin";
  readonly password: "admin";
}`;

  const stringEnumExampleCode = `enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}`;

  const compiledStringEnumExampleCode = `var Status;
(function (Status) {
    Status["IDLE"] = "idle";
    Status["LOADING"] = "loading";
    Status["SUCCESS"] = "success";
    Status["ERROR"] = "error";
})(Status || (Status = {}));`;

  const enumBeforeExampleCode = `enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

function handleStatus(status: Status) {
  ...
}

handleStatus(Status.IDLE);`;

  const enumStringLiteralTypeExampleCode = `type Status = 'idle' | 'loading' | 'success' | 'error';

handleStatus('success');`;

  const enumAfterExampleCode = `const Status = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR = 'error'
} as const;

type Status = (typeof Status)[keyof typeof Status]; // 'idle' | 'loading' | 'success' | 'error'

handleStatus(Status.IDLE);`;

  const literalLetExampleCode = `let user = 'user' as const;`;

  const asConstExampleCode = `const colorTheme = {
  background: 'dark',
  text: 'light'
} as const;

colorTheme.background = 'light'; // Ошибка: Cannot assign to 'background' because it is a read-only property`;

  const templateLiteralsExampleCode = `type World = "world";
type Greeting = \`hello \${World}\`; // Тип: "hello world"

// Комбинирование union типов
type Direction = "top" | "bottom";
type Margin = \`margin-\${Direction}\`; // Тип: "margin-top" | "margin-bottom"`;

  const unionTemplateLiteralsExampleCode = `type Size = "small" | "large";
type Color = "red" | "blue";
type Style = \`\${Size}-\${Color}\`;
// Тип: "small-red" | "small-blue" | "large-red" | "large-blue"`;

  const CSSTemplateLiteralsExampleCode = `type CssSize = \`\${number}\${'px' | 'rem' | 'em'}\`;

const size: CssSize = '16px';
const size2: CssSize = '2rem';
// const invalid: CssSize = '16pt'; // Ошибка`;

  const actionTemplateLiteralsExampleCode = `type ActionType = 'add' | 'remove' | 'update';

type Action<T> = {
  type: \`\${ActionType}_\${T}\`;
  payload: T;
};

// Создаём конкретный тип
type UserAction = Action<'user'>;
// { type: 'add_user' | 'remove_user' | 'update_user'; payload: 'user' }

const action: UserAction = {
  type: 'add_user',
  payload: 'user',
};`;

  const APITemplateLiteralsExampleCode = `type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type ApiEndpoint = \`/\${string}\`;

const route: ApiEndpoint = '/users';
// const invalid: ApiEndpoint = 'users'; // Ошибка`;

  const capitalizeTemplateLiteralsExampleCode = `type EventName<T extends string> = \`on\${Capitalize<T>}\`;
type ClickEvent = EventName<"click">; // Тип: "onClick"`;

  const inferTemplateLiteralsExampleCode = `type GetterName<T extends string> = T extends \`get\${infer U}\` ? U : never;
type Prop = GetterName<"getUser">; // Тип: "User"`;

  return (
    <section ref={ref}>
      <h2>Литералы {getGhostText('Literal Types')}</h2>
      <p>
        В TypeScript можно использовать не только общие типы, но и конкретные значения как типы.{' '}
        <strong>Литерал</strong> — это тип, который принимает ровно одно конкретное значение.{' '}
      </p>
      <article>
        <h3>
          Расширение типов
          {getGhostText('Type Widening')}
        </h3>
        <p>
          TypeScript по разному реагирует на переменные, объявленние с помощью ключевых слов{' '}
          <code className='code'>let</code> и <code className='code'>const</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={literalExampleCode} name='literal-types-example(1)' />
        <p>
          В этом примере типом переменной <em>admin</em> будет не <code className='code'>string</code>, а строка{' '}
          <code className='code'>admin</code>. А вот типом переменной <em>user</em> будет как раз{' '}
          <code className='code'>string</code>. TypeScript превращает переменную <em>admin</em> в литерал.
        </p>
        <p>
          Если вы объявите переменную с помощью <code className='code'>const</code>, TypeScript автоматически сузит её
          тип до литерального, так как её значение не может измениться.
        </p>
      </article>
      <article>
        <h3>
          Заморозка литералов
          {getGhostText('Const Assertions')}
        </h3>
        <p>
          Можно добавить <code className='code'>as const</code> и присвоить литеральные типы:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={literalLetExampleCode} name='literal-types-example(2)' />
        <p>
          Теперь <em>user</em> будет литералом с типом <code className='code'>user</code>.
        </p>
        <p>
          Обычно это используется для заморозки объектов: все свойства автоматически помечаются как readonly, а их
          значения получают литеральные типы, чтобы избежать случайных ошибок перезаписи:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={asConstExampleCode} name='literal-types-example(3)' />
      </article>
      <article>
        <h3>Виды литералов</h3>
        <p>В TypeScript существует 3 основных вида литеральных типов: строковые, числовые и логические.</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>строковые литералы</p>
            <CodeSnippet
              lang={ECodeLang.TYPESCRIPT}
              code={stringLiteralTypeExampleCode}
              name='literal-types-example(2)'
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>числовые литералы</p>
            <CodeSnippet
              lang={ECodeLang.TYPESCRIPT}
              code={numberLiteralTypeExampleCode}
              name='literal-types-example(3)'
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>логические литералы</p>
            <CodeSnippet
              lang={ECodeLang.TYPESCRIPT}
              code={logicLiteralTypeExampleCode}
              name='literal-types-example(4)'
            />
          </li>
        </ul>
      </article>
      <article>
        <h3>Приведение к литеральному типу</h3>
        <p>
          Объекты тоже можно приводить к литеральному типу через Type Assertion с помощью{' '}
          <code className='code'>as const</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={objectLiteralTypeExampleCode} name='literal-types-example(5)' />
        <p>
          В результате будет получен тип с неизменяемыми <code className='code'>readonly</code> полями и литеральными
          типами в значении:
        </p>
        <CodeSnippet code={objectLiteralTypeExampleLog} lang={ECodeLang.TYPESCRIPT} name='literal-types-example(6)' />
        <p>Такой способ приведения применим и к массивам.</p>
      </article>
      <article>
        <h3>Перечисления или литеральные типы</h3>
        <p>
          Перечисления <code className='code'>enum</code> — это ещё способ задать набор именованных констант:
        </p>
        <CodeSnippet code={stringEnumExampleCode} lang={ECodeLang.TYPESCRIPT} name='literal-types-example(7)' />
        <p>
          Теперь можно использовать <code className='code'>Status.IDLE</code>,{' '}
          <code className='code'>Status.LOADING</code> и т.д. — и получать соответствующие строки.
        </p>
        <p>
          Рекомендуется избегать использования <code className='code'>enum</code> для именнованных констант и отдавать
          предпочтение типам и литералам. Связано это с тем, что типы и литералы — это чистый TypeScript, который
          исчезает после компиляции, в том время как перечисления — это реальный JavaScript-объект, который остаётся в
          рантайме и генерирует лишний код.
        </p>
        <p> Например, после компиляции перечисление из примера выше будет выглядеть так:</p>
        <CodeSnippet code={compiledStringEnumExampleCode} lang={ECodeLang.JAVASCRIPT} name='index' />
        <p>Тип же исчезнет при компиляции и не попадёт в бандл:</p>
        <CodeSnippet code={'// ничего нет'} lang={ECodeLang.JAVASCRIPT} name='index' />
      </article>
      <article>
        <h3>Как заменить перечисление на тип</h3>
        <p>Например, в вашем проекте сложилось использование перечислений в таком виде:</p>
        <CodeSnippet code={enumBeforeExampleCode} lang={ECodeLang.TYPESCRIPT} name='literal-types-example(8)' />
        <p>Задача: убрать перечисления, но очень не хочется переходить на использование строк:</p>
        <CodeSnippet
          code={enumStringLiteralTypeExampleCode}
          lang={ECodeLang.TYPESCRIPT}
          name='literal-types-example(9)'
        />
        <p>
          Эта замена — один из самых частых рефакторингов в современном TypeScript. Для решения создадим объект с{' '}
          <code className='code'>as const</code> и затем выведем из него тип:
        </p>
        <CodeSnippet code={enumAfterExampleCode} lang={ECodeLang.TYPESCRIPT} name='literal-types-example(10)' />
      </article>
      <article>
        <h3>
          Шаблонные литералы
          {getGhostText('Template Literal Types')}
        </h3>
        <p>
          Позволяет строить типы на основе строковых шаблонов. Это как шаблонные строки в JavaScript, но на уровне
          типов.
        </p>
        <CodeSnippet code={templateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
        <p>При использовании нескольких объединений шаблонный тип автоматически создаст все возможные комбинации:</p>
        <CodeSnippet code={unionTemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
        <p>Шаблонные литералы можно использовать для типизации:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>CSS-свойств:</p>
            <CodeSnippet code={CSSTemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
          </li>
          <li className='list__item'>
            <p>экшенов:</p>
            <CodeSnippet code={actionTemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
          </li>
          <li className='list__item'>
            <p>API-путей:</p>
            <CodeSnippet code={APITemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
          </li>
        </ul>
        <p>TypeScript предоставляет специальные функции для изменения регистра букв на уровне типов:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>
                Uppercase<AngleBrackets>T</AngleBrackets>
              </code>{' '}
              приводит к верхнему регистру
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Lowercase<AngleBrackets>T</AngleBrackets>
              </code>{' '}
              приводит к нижнему регистру
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Capitalize<AngleBrackets>T</AngleBrackets>
              </code>{' '}
              делает первую букву заглавной
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>
                Uncapitalize<AngleBrackets>T</AngleBrackets>
              </code>{' '}
              делает первую букву строчной
            </p>
          </li>
        </ul>
        <p>Например:</p>
        <CodeSnippet code={capitalizeTemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
        <p>
          TypeScript позволяет динамически извлекать части строк или проверять их соответствие шаблону внутри условных
          типов c помощью ключевого слова <code className='code'>infer</code>:
        </p>
        <CodeSnippet code={inferTemplateLiteralsExampleCode} lang={ECodeLang.TYPESCRIPT} />
      </article>
    </section>
  );
});

LiteralTypes.displayName = 'LiteralTypes';
