import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { ENoteType } from 'src/components/common/Note/Note.types';
import { getGhostText } from 'src/utils/formatting';

export const Interfaces = forwardRef<HTMLDivElement>(({}, ref) => {
  const interfaceExampleCode = `interface User {
  id: number;
  name: string;
  isAwesome: boolean;
  age?: number;
}

const user: User = { id: 42, name: 'dtsiki', isAwesome: true };`;

  const unionExampleCode = `interface User {
  name: string;
}

interface User {
  isAwesome: boolean;
}

const user: User = {
  name: "dtsiki",
  isAwesome: true,
};`;

  const extendsExampleCode = `type Department = 'frontend' | 'backend';

interface User {
  name: string;
  isAwesome: boolean;
}

interface Developer extends User {
  department: Department;
}`;

  const multipleExtendsExampleCode = `type Department = 'frontend' | 'backend';

interface User {
  name: string;
  isAwesome: boolean;
}

interface Developer extends User {
  department: Department;
}

interface TeamLead extends User, Developer {
  projects: string[];
}

const user: TeamLead = {
  name: 'Daria',
  isAwesome: true,
  department: 'frontend',
  projects: ['Awesome projects', 'Another awesome project']
}`;

  const functionExampleCode = `interface MathOperation {
  (a: number, b: number): number;
}`;

  const classExampleCode = `interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Гав!');
  }
}`;

  const classErrorExampleCode = `interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal { // Class 'Dog' incorrectly implements interface 'Animal', Property 'makeSound' is missing in type 'Dog' but required in type 'Animal'
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}`;

  const interfacePrimitivesErrorExampleCode = `interface ID = string | number; // Error! `;

  const interfaceUnionExampleCode = `interface A {}

interface B {}

interface C = A | B; // Error!`;

  return (
    <section ref={ref} id='Interfaces'>
      <h2>
        Интерфейсы
        {getGhostText('Interfaces')}
      </h2>
      <p>
        Интерфейсы подходят для описания структуры объектов, функций и классов. Ключевое здесь — в первую очередь для
        объектов.
      </p>
      <p>
        Интерфейсы записываются с помощью ключевого слова <code className='code'>interface</code>:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={interfaceExampleCode} />
      <div className='spacer top medium'>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Интерфейсы в TypeScript можно называть с префиксом <em>I</em>, например, <em>IUser</em> вместо <em>User</em>
            . Это не обязательное правило TypeScript, а соглашение, пришедшее из других языков для улучшения читаемости
            кода. Это помогает мгновенно отличить интерфейсы от других значений, например типов, классов или объектов.
          </p>
        </Note>
      </div>
      <p>Интерфейсы могут описывать функции:</p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={functionExampleCode} />

      <article>
        <h3>
          Объединение интерфейсов
          {getGhostText('Declaration Merging')}
        </h3>
        <p>
          Интерфейсы могут быть объединены, но если они имеют одно и то же имя. TypeScript автоматически сам слияет
          интерфейсы. Это позволяет добавлять новые свойства к существующим интерфейсам:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={unionExampleCode} />
        <p></p>
      </article>
      <article>
        <h3>Расширение интерфейсов</h3>
        <p>
          Интерфейсы могут расширять другие интерфейсы с помощью ключевого слова <code className='code'>extends</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extendsExampleCode} />
        <p>Можно расширять несколько интерфейсов сразу:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={multipleExtendsExampleCode} />
        <p>
          В отличии от автоматического слияния, расширение с помошью <code className='code'>extends</code> — это явное
          наследование одного интерфейса от другого.
        </p>
      </article>
      <article>
        <h3>Интерфейсы для классов</h3>
        <p>
          Класс может реализовать интерфейс. С помощью ключевого слова <code className='code'>implements</code>{' '}
          TypeScript заставляет класс строго соответствовать определенному интерфейсу:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={classExampleCode} />
        <p>Если чего-то не хватит — TypeScript покажет ошибку:</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={classErrorExampleCode} />
        <p>
          В отличии от <code className='code'>extends</code>, который наследует код (свойства, методы, конструктор),
          <code className='code'>implements</code> только проверяет соответствие формы.
        </p>
      </article>
      <article>
        <h3>Ограничения интерфейсов</h3>
        <ul className='list markered'>
          <li className='list__item'>
            <p>Нельзя использовать объединение (Union):</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={unionExampleCode} />
          </li>
          <li className='list__item'>
            <p>С помощью интерфейсов нельзя описывать примитивы:</p>
            <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={interfacePrimitivesErrorExampleCode} />
          </li>
        </ul>
      </article>
    </section>
  );
});

Interfaces.displayName = 'Interfaces';
