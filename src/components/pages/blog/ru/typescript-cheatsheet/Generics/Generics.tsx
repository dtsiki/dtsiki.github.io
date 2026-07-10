import { forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const Generics = forwardRef<HTMLDivElement>(({}, ref) => {
  const anyPrintFunctionExampleCode = `function print(value: any): any {
  return value;
}

let str = print('Привет!'); // тип any
let num = print(42); // тип any
let isAwesome = print(true); // тип any`;

  const genericsPrintFunction = `function print<T>(value: T): T {
  return value;
}

let str = print('Привет!'); // тип string
let num = print(42); // тип number
let isAwesome = print(true); // тип boolean`;

  const pairExampleCode = `function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

let pairResult = pair(42, "Привет"); // тип [number, string]`;

  const historyStateExampleCode = `interface HistoryState<T, U, V> {
  current: T;
  previous: U;
  metadata: V;
}

const pageState: HistoryState<string, string | null, number> = {
  current: "/home",
  previous: null,
  metadata: 200 // HTTP код
};`;

  const typeExampleCode = `type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'Иван', age: 28 },
  status: 200,
  message: 'Success',
};

const stringResponse: ApiResponse<string[]> = {
  data: ['apple', 'banana'],
  status: 200,
  message: 'Success',
};`;

  const interfaceExampleCode = `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Использование с конкретными типами
const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: 'Иван', age: 28 },
  status: 200,
  message: 'Success',
};

const stringResponse: ApiResponse<string[]> = {
  data: ['apple', 'banana'],
  status: 200,
  message: 'Success',
};`;

  const extendsExampleCode = `type Lengthwise = {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
  console.log(item.length);
}

logLength("Текст"); // Разрешено: у строки есть .length
logLength([1, 2, 3]); // Разрешено: у массива есть .length
logLength(42); // Ошибка: у числа нет .length`;

  const lengthErrorExampleCode = `function logLength<T>(value: T) {
  console.log(value.length) // Ошибка: Property 'length' does not exist on type 'T'
}`;

  const classExampleCode = `class List<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Класс строго работает со строками
const stringList = new List<string>();
stringList.add("Яблоко");
// stringList.add(5); // Ошибка компиляции

// Класс строго работает с числами
const numberList = new List<number>();
numberList.add(10);`;

  const defaultValueExampleCode = `type Box<T = string> = {
  value: T;
};

const box: Box = { value: "Привет" }; // тип string`;

  return (
    <section ref={ref} id='Generics'>
      <h2>Дженерики {getGhostText('Generics')}</h2>
      <p>
        Это инструмент, который позволяет создавать компоненты (функции, классы, интерфейсы), способные работать с
        различными типами данных без потери строгой типизации. Вместо жесткого указания типа, он передается как
        параметр.
      </p>
      <article>
        <h3>Обобщённые функции</h3>
        <p>Позволяют зафиксировать тип аргумента так, чтобы функция возвращала значение того же типа.</p>
        <p>
          Например есть функция, которая возвращает то, что получила. Без дженериков придётся использовать{' '}
          <code className='code'>any</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={anyPrintFunctionExampleCode} />
        <p>
          Из-за использования <code className='code'>any</code> тип переменной будет утерян.
        </p>
        <p>Эту же функцию можно переписать с помощью дженерика, а тип переменной при этом будет сохранён:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={genericsPrintFunction} />
        <p>Что здесь происходит:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              С помощью{' '}
              <code className='code'>
                <AngleBrackets>T</AngleBrackets>
              </code>
               объявляем параметр типа. Можно назвать как угодно: <em>Value</em>, <em>Something</em>, но принято{' '}
              <em>T</em> или <em>Type</em>.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>value: T</code> — параметр функции будет иметь указанный перед этим.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>: T</code> — функция возвращает этот же тип
            </p>
          </li>
        </ul>
        <p>
          С помощью дженериков можно не привязываться к конкретно одному типу, а при вызове TypeScript автоматически
          будет подставлять конкретный тип.
        </p>

        <p>
          В TypeScript можно использовать несколько параметров дженерика. Для этого их нужно перечислить в угловых
          скобках{' '}
          <code className='code'>
            <AngleBrackets> </AngleBrackets>
          </code>{' '}
          через запятую. Для второго параметра принято использовать букву <em>U</em>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={pairExampleCode} />
      </article>
      <p>
        Для третьего параметра принято использовать букву <em>V</em> (следующая по алфавиту за <em>T</em> и <em>U</em>
        ).
      </p>
      <p>
        Три параметра часто нужны в сложных структурах данных. Например, для хранения текущего значения, предыдущего
        значения и метаданных:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={historyStateExampleCode} />
      <article>
        <h3>Обобщённые интерфейсы и типы</h3>
        <p>Используются когда структура данных должна оставаться гибкой.</p>
        <p>При использовании с интерфейсами они работают как параметры функций:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={interfaceExampleCode} />
        <p>Объявления типов работают с дженериками точно так же, как и интерфейсы:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeExampleCode} />
      </article>
      <article>
        <h3>
          Ограничения
          {getGhostText('Constraints')}
        </h3>
        <p>
          Это инструмент, который заставляет дженерики соответствовать определенной структуре. Они сужают
          "вседозволенность" обычных дженериков, позволяя компилятору гарантировать наличие нужных методов и свойств
          внутри функции или класса. Делается с помощью ключевого слова <code className='code'>extends</code>.
        </p>
        <p>Например, без ограничения получим ошибку:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={lengthErrorExampleCode} />
        <p>Если сузить круг возможных типов, передаваемых в дженерик, ошибки больше не будет:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extendsExampleCode} />
      </article>
      <article>
        <h3>Обобщённые классы</h3>
        <p>
          Дженерики в классах позволяют создавать шаблоны, способные работать с различными типами данных без
          дублирования кода.
        </p>
        <p>
          Синтаксис здесь такой же: в угловых скобках <AngleBrackets> </AngleBrackets> передаётся тип при создании
          экземпляра и затем TypeScript сам подставит нужный тип:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={classExampleCode} />
      </article>
      <article>
        <h3>Значения по умолчанию</h3>
        <p>Можно задать значение по умолчанию:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={defaultValueExampleCode} />
      </article>
    </section>
  );
});

Generics.displayName = 'Generics';
