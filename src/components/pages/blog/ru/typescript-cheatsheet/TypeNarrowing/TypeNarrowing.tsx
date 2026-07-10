import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText, renderInlineList } from 'src/utils/formatting';

export const TypeNarrowing = forwardRef<HTMLDivElement>(({}, ref) => {
  const typeNarrowingExampleCode = `function print(value: string | number) {
  value.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'
}`;

  const typeofNarrowingExampleCode = `function process(value: string | number) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  return value.toFixed(2);
}`;

  const instanceofNarrowingExampleCode = `class Dog {
  bark() {
    console.log('Гав');
  }
}

class Cat {
  meow() {
    console.log('Мяу');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}`;

  const inNarrowingExampleCode = `interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

function operate(vehicle: Car | Boat) {
  if ('drive' in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}`;

  const customTypeGuardExampleCode = `interface User {
  name: string;
  age: number;
}

function isUser(obj: any): obj is User {
  return obj && typeof obj.name === 'string' && typeof obj.age === 'number';
}

function process(data: unknown) {
  if (isUser(data)) {
    // теперь TypeScript знает, что это User у него есть поле name
    console.log(data.name);
  }
}`;

  const truthinessNarrowingExampleCode = `function processName(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  }
}`;

  const equalityNarrowingExampleCode = `function doSomething(x: string | number, y: string) {
  if (x === y) {
    // x теперь string
  }
}`;

  return (
    <section ref={ref}>
      <h2>Сужение типов {getGhostText('Type Narrowing')}</h2>
      <p>Позволяет ограничить общий тип до более конкретного на основе проверок в коде.</p>
      <p>
        Например, объединения <code className='code'>string | number</code> можно уточнить к более узкому типу,
        например, <code className='code'>string</code> внутри блока кода:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeNarrowingExampleCode} />
      <p>
        Это позволяет безопасно вызывать специфичные методы. В примере выше будет получена ошибка из-за того, что в
        случае, если будет передана переменная типа <code className='code'>number</code>, метод{' '}
        <code className='code'>toUpperCase()</code> не будет найден т.к. его просто не существует. Этот метод
        предназначен исключительно для работы со строками.
      </p>
      <p>
        Функция, которая сужает тип, и будет называться <strong>type guard</strong>'ом.
      </p>
      <article>
        <h3>
          С помощью <code className='code'>typeof</code>
        </h3>
        <p>Подойдет для примитивов:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={typeofNarrowingExampleCode} />
      </article>
      <article>
        <h3>
          С помощью <code className='code'>instanceof</code>
        </h3>
        <p>Подойдёт для классов:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={instanceofNarrowingExampleCode} />
      </article>
      <article>
        <h3>
          С помощью оператора <code className='code'>in</code>
        </h3>
        <p>Можно проверять на наличие свойства:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={inNarrowingExampleCode} />
      </article>
      <article>
        <h3>Custom Type Guard</h3>
        <p>Когда нужно что-то сложнее, то можно написать свою функцию-проверку:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={customTypeGuardExampleCode} />
        <p>
          <code className='code'>obj is User</code> здесь <strong>предикат типа</strong> (type predicate). Это
          специальный синтаксис, который сообщает компилятору, что если функция возвращает <em>true</em>, то переданный
          аргумент фактически принадлежит к указанному типу.
        </p>
      </article>
      <article>
        <h3>
          Проверка на существование
          {getGhostText('Truthiness Narrowing')}
        </h3>
        <p>
          Это проверка, которая автоматически сужает тип переменной внутри условных конструкций, основываясь на том,
          является ли значение «истинным» (truthy) или «ложным» (falsy) в JavaScript:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={truthinessNarrowingExampleCode} />
        <p>
          Значения <code className='code'>null</code> и <code className='code'>undefined</code> здесь отфильтровались
          автоматически во время проверки значения <code className='code'>name</code>. Таким образом можно отсечь{' '}
          {renderInlineList(['null', 'undefined', '""', '0', 'false'], 'code', 'code')}
        </p>
      </article>
      <article>
        <h3>
          Сужение на основе равенства
          {getGhostText('Equality narrowing')}
        </h3>
        <p>
          В этом случае сужение будет происходить на основе проверок равенства с помощью операторов{' '}
          <code className='code'>===</code>, <code className='code'>!==</code>, <code className='code'>==</code> или{' '}
          <code className='code'>!=</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={equalityNarrowingExampleCode} />
      </article>
    </section>
  );
});

TypeNarrowing.displayName = 'TypeNarrowing';
