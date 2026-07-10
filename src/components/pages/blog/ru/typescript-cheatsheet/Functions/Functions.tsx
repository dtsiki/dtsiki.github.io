import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const Functions = forwardRef<HTMLDivElement>(({}, ref) => {
  const functionWithArgsExampleCode = `function sum(a: number, b: number) {
  return a + b;
}`;

  const usageExampleCode = `sum(2, 2);
sum("Hello", 42); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
sum('2', '2'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'`;

  const arrowFunctionExampleCode = `const sayHello = (name: string) => {
  return \`Привет, \${name}\`;
};`;

  const typeFunctionExampleCode = `type MathOperation = (a: number, b: number) => number;

const sum: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;`;

  const returnValueTypeExampleCode = `function getFavoriteNumber(): number {
  return 42;
}`;

  const voidExampleCode = `const log = (message: string): void => {
  console.log(message);
};`;

  const functionWithOptionalAgrExampleCode = `function sayHello(name?: string) {
  return \`Привет, \${name ?? "таинственный гость"}\`;
}`;

  const functionWithDefaultArgExampleCode = `function sayHello(name: string = "таинственный гость") {
  return \`Привет, \${name}\`;
}`;

  const overloadsExampleCode = `function format(value: string): string;
function format(value: number): string;

function format(value: string | number): string {
  if (typeof value === "number") {
    return value.toFixed(2);
  }
  return value.trim();
}`;

  return (
    <section ref={ref}>
      <h2>Функции</h2>
      <article>
        <h3>Типизация входных параметров</h3>
        <p>В TypeScript можно типизировать аргументы функций:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={functionWithArgsExampleCode} />
        <p>Теперь когда аргументы протипизированы, TypeScript будет проверять их при вызове функции:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={usageExampleCode} />
        <p>Стрелочные функции тоже типизируются:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={arrowFunctionExampleCode} />
        <p>
          Можно создать тип для функции, чтобы использовать его повторно в переменных или параметрах других функций:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeFunctionExampleCode} />
        <p>
          Аргументы функций могут быть необязательными. Для того, чтобы сделать параметр необязательным, после его
          названия указывается знак вопроса <strong>?</strong>. В примере ниже таким образом аргумент <em>name</em>{' '}
          может принимать значение как <code className='code'>string</code>, так и{' '}
          <code className='code'>undefined</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={functionWithOptionalAgrExampleCode} />
        <p>Параметрам можно задать значение по умолчанию:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={functionWithDefaultArgExampleCode} />
        <p>Важно помнить, что необязательные параметры должны идти после обязательных. </p>
      </article>

      <article>
        <h3>Типизация возвращаемого значения</h3>
        <p>Также можно типизировать возвращаемое из функции значение:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={returnValueTypeExampleCode} />
        <p>
          Если функция ничего не возвращает, то для этого используем специальный тип <code className='code'>void</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={voidExampleCode} />
        <p>
          TypeScript определяет тип возвращаемого значения функции на основе оператора{' '}
          <code className='code'>return</code>, поэтому писать тип возвращаемого значения необязательно.
        </p>
      </article>

      <article>
        <h3>Перегрузки функций {getGhostText('Function Overloads')}</h3>
        <p>Можно заставить функцию вести себя по-разному в зависимости от аргументов с помощью перезагрузки:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={overloadsExampleCode} />
      </article>
    </section>
  );
});

Functions.displayName = 'Functions';
