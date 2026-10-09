import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { getGhostText, renderInlineList } from 'src/utils/formatting';

export const DataTypes = forwardRef<HTMLDivElement>(({}, ref) => {
  const typeAnnotationExampleCode = `let isAwesome: boolean = true;
let answer: number = 42;
let username: string = "@dtsiki";
let notDefined: undefined = undefined;
let isNull: null = null;`;

  const typeAnnotationSkippedExampleCode = `let isAwesome = true;
let answer = 42;
let username = "@dtsiki";
let notDefined = undefined;
let isNull = null;`;

  const typeAnnotationCompliedJSSnipped = `let isAwesome = true;
let answer = 42;
let username = "@dtsiki";
let notDefined = undefined;
let isNull = null;`;

  const basicTypesExampleCode = `let isAwesome: boolean = true;
let answer: number = 42;
let username: string = "@dtsiki";
let notDefined: undefined = undefined;
let isNull: null = null;
let id: symbol = Symbol("id");
let REALLYBIGNUMBER: bigint = 123n;`;

  const basicTypesSkippedExampleCode = `let isAwesome = true;
let answer = 42;
let username = "@dtsiki";
let notDefined = undefined;
let isNull = null;
let id = Symbol("id");
let REALLYBIGNUMBER = 123n;`;

  const arrayTypeAnnotation1ExampleCode = `let abc: string[] = ['a', 'b', 'c'];
let nums: number[] = [1, 2, 3, 4, 5];
let flags: boolean[] = [true, false, true];`;

  const arrayTypeAnnotation2ExampleCode = `let abc: Array<string> = ['a', 'b', 'c'];
let nums: Array<number> =  [1, 2, 3, 4, 5];
let flags: Array<boolean> = [true, false, true]`;

  const arrayTypeErrorExampleCode = `const abc: string[] = ['a', 'b', 'c'];
abc.push(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'`;

  const tupleExampleCode = `let user: [number, string] = [42, "Daria"];`;

  const objectTypeExampleCode = `let user: { id: number; name: string; isAwesome: boolean } = {
  id: 42,
  name: "dtsiki",
  isAwesome: true
};`;

  const optionalObjectTypeExampleCode = `let user: { id: number; name: string; isAwesome: boolean, age?: number };`;

  const anyTypeExampleCode = `let anyVar: any = 42;
anyVar = "Yay";
anyVar = true;

const doSomething = (data: any) => {
  console.log(data);
};

doSomething(42);
doSomething("Привет");
doSomething({ name: "Кеша", age: 4 });`;

  const unknownTypeExampleCode = `let input: unknown = 'Что-то';

// input.toUpperCase(); // Ошибка! TS не уверен

if (typeof input === 'string') {
  console.log(input.toUpperCase()); // Теперь можно
}`;

  const neverTypeExampleCode = `function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}`;

  const voidTypeExampleCode = `function logMessage(message: string): void {
  console.log(message);
}`;

  const typeAssertionsExampleCode = `let someValue: any = "Привет, TypeScript";
let strLength: number = (someValue as string).length;`;

  const anyUnknownNeverVoidList = renderInlineList(['any', 'unknown', 'never', 'void'], 'code', 'code');

  return (
    <section ref={ref} id='Data_Types' className='section outer'>
      <h2>Типы данных и их типы</h2>
      <section id='Type_Annotations' className='section inner'>
        <h3>
          Аннотация типов
          {getGhostText('Type Annotations')}
        </h3>
        <p>
          Это способ явно указать, какие данные ожидаются в переменных, параметрах функций или возвращаемых значениях. В
          TypeScript она задается с помощью двоеточия <strong>:</strong> и названия типа, который идет сразу после имени
          переменной или функции:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeAnnotationExampleCode} />
        <p>В скомпилированном JavaScript аннотации удаляются, оставляя код чистым JavaScript:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={typeAnnotationCompliedJSSnipped} name='bundle' />
      </section>
      <section className='section inner'>
        <h3>
          Выводимость типов
          {getGhostText('Type Inference')}
        </h3>
        <p>
          TypeScript может сам автоматически определять типы переменных у примитивов и такую аннотацию можно не
          прописывать:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeAnnotationSkippedExampleCode} />
        <p>
          Это способность TypeScript автоматически определять тип переменной называется{' '}
          <strong>выводимость типов</strong>. Также TypeScript справляется сам и может определять тип возвращаемого
          значения из функции, типы у массивов с явными значениями, тип колбэков у методов массивов, в остальных случаях
          нужно помогать ему и прописывать аннотации.
        </p>
      </section>
      <section className='section inner'>
        <h3>
          Приведение типов
          {getGhostText('Type Assertions')}
        </h3>
        <p>
          Это способ, позволяющий явно указать компилятору точный тип переменной, когда он не может определить его
          самостоятельно:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeAssertionsExampleCode} />
        <p>
          <strong>Важно понимать:</strong> это не преобразование, а лишь подсказка компилятору.
        </p>
        <p>При сборке в JavaScript эти конструкции будут удалены.</p>
      </section>
      <section className='section inner'>
        <p>Итак, теперь можно разобрать как в JavaScript типизируются различные штуки с помощью TypeScript.</p>
        <h3>Примитивные типы данных</h3>
        <p>
          В TypeScript переехали из JavaScript все примитивные типы данных:{' '}
          {renderInlineList(['number', 'string', 'boolean', 'null', 'undefined', 'bigint', 'symbol'], 'code', 'code')}.
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={basicTypesExampleCode} />
        <p>
          TypeScript их не меняет, а просто добавляет к ним соответствующие аннотации типов. Как уже было написано чуть
          выше {LONG_DASH} такие анотации можно не писать, TypeScript может сам определить их тип.
        </p>
      </section>
      <section className='section inner'>
        <h3>{anyUnknownNeverVoidList}</h3>
        <p>
          В TypeScript появились новые типы данных:{' '}
          {renderInlineList(['any', 'unknown', 'never', 'void'], 'code', 'code')}. Этих типов нет в JavaScript. Они
          существуют только до компиляции, а после того как TypeScript компилируется в JavaScript, они исчезают.
        </p>
        <section className='section inner'>
          <h4>
            <InlineCode>any</InlineCode>
          </h4>
          <p>Тип данных, который представляет любое значение:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={anyTypeExampleCode} />
          <p>
            Хотя кажется, что использование <InlineCode>any</InlineCode> даёт гибкость, лучше избегать его, поскольку
            это может снизить надежность и читаемость кода. Лучше использовать явные типы данных.
          </p>
        </section>
        <section className='section inner'>
          <h4>
            <InlineCode>unknown</InlineCode>
          </h4>
          <p>
            Безопасная версия <InlineCode>any</InlineCode>: тоже можно присвоить что угодно, но перед использованием тип
            нужно проверить:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={unknownTypeExampleCode} />
          <p>
            Может показаться, что <InlineCode>unknown</InlineCode> работает так же, как <InlineCode>any</InlineCode>, но
            между ними есть различие. Тип <InlineCode>any</InlineCode> по сути отключает проверку типов и позволяет
            выполнять любые операции, например, обращаться к свойствам переменной. Тип <InlineCode>unknown</InlineCode>{' '}
            запрещает это и требует предварительной проверки типа переменной, либо приведения к нужному типу.
          </p>
        </section>
        <section className='section inner'>
          <h4>
            <InlineCode>never</InlineCode>
          </h4>
          <p>
            Используется для обозначения значений, которые никогда не происходят. Можно использовать для функций,
            которые выбрасывают ошибку или для бесконечных циклов:
          </p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={neverTypeExampleCode} />
        </section>
        <section className='section inner'>
          <h4>
            <InlineCode>void</InlineCode>
          </h4>
          <p>Обозначает отсутствие значения. Обычно используется для функций, которые ничего не возвращают:</p>
          <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={voidTypeExampleCode} />
        </section>
      </section>
      <section className='section inner'>
        <h3>Массивы</h3>
        <p>
          Массивы в TypeScript работают так же как и в JavaScript. В TypeScript есть два способа протипизировать
          массивы:
        </p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p>
              С помощью синтаксиса <InlineCode>T[]</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrayTypeAnnotation1ExampleCode} />
          </li>
          <li className='list__item'>
            <p>
              С помощью синтаксиса <InlineCode>Array&lt;T&gt;</InlineCode> (см.{' '}
              <a href='#Generics' className='link PRIMARY'>
                Дженерики
              </a>
              ):
            </p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrayTypeAnnotation2ExampleCode} />
          </li>
        </ol>
        <p>
          Оба варианта равнозначны, но чаще используют первый с <InlineCode>T[]</InlineCode>.
        </p>
        <p>
          При этом массивы являются строго типизированными {LONG_DASH} если изначально массив содержит строки, то в
          будущем он сможет работать только со строками. Если попытаться добавить в такой массив число, то будет
          получена ошибка:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrayTypeErrorExampleCode} />
      </section>
      <section className='section inner'>
        <h3>Кортежи {getGhostText('Tuples')}</h3>
        <p>
          Кортежи {LONG_DASH} это специальные массивы с фиксированной длиной и строго определенными типами для каждого
          элемента, даже если они разные. В отличие от обычных массивов, порядок элементов в кортеже имеет значение:
        </p>
        <p>Типизируются указанием типа для каждого элемента:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={tupleExampleCode} />
        <p>После компиляции в JavaScript кортежи превращаются в обычные массивы.</p>
      </section>
      <section className='section inner'>
        <h3>Объекты</h3>
        <p>
          Как и в JavaScript, в TypeScript можно создавать сложные объекты, которые состоят из других объектов, в том
          числе массивов и примитивных данных. Объекты тоже типизируются в TypeScript: c помощью определения структуры
          явно описывается какие свойства и типы значений должен содержать объект:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={objectTypeExampleCode} />
        <p>
          TypeScript позволяет делать какие-то свойства необязательными. Для этого после названия свойства указывается
          знак вопроса <strong>?</strong>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={optionalObjectTypeExampleCode} />
        <p className='spacer top medium'>
          Такое определение структуры объектов в TypeScript используется редко. Для определения структуры объектов
          следует использовать{' '}
          <a href='#Interfaces' className='link PRIMARY'>
            интерфейсы
          </a>{' '}
          или{' '}
          <a href='#Types' className='link PRIMARY'>
            типы
          </a>
          .
        </p>
      </section>
    </section>
  );
});

DataTypes.displayName = 'DataTypes';
