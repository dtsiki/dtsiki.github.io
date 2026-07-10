import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { getGhostText } from 'src/utils/formatting';

export const OOP = forwardRef<HTMLDivElement>(({}, ref) => {
  const basicClassExampleCode = `class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): string {
    return \`Привет, \${this.name}!\`;
  }
}

const user = new User('dtsiki');
console.log(user.greet()); // Привет, dtsiki!`;

  const modifiersExampleCode = `class User {
  public name: string; // доступно везде
  private age: number; // только внутри класса
  protected email: string; // внутри класса и наследников
  readonly id: number; // только для чтения

  constructor(id: number, name: string, age: number, email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  private getAge(): number {
    return this.age; // доступно внутри класса
  }

  public getInfo(): string {
    return \`\${this.name} (\${this.getAge()})\`;
  }
}

const user = new User(42, 'dtsiki', 33, 'dtsiki@dtsiki.dtsiki');

// public:
console.log(user.name); // dtsiki

// private:
console.log(user.age); // Ошибка: Property 'age' is private and only accessible within class 'User'

// protected:
console.log(user.email); // Ошибка: Property 'email' is protected and only accessible within class 'User' and its subclasses

// readonly:
user.id = 1; // Ошибка: Cannot assign to 'id' because it is a read-only property`;

  const shortSyntaxModifiersExampleCode = `class User {
  constructor(readonly id: number, public name: string, private age: number, protected email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }
  ...
}`;

  const extendsExampleCode = `class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log(\`\${this.name} издает звук\`);
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name); // Обязательно вызываем super для инициализации родительского конструктора
  }

  // Переопределение метода
  makeSound(): void {
    console.log(\`\${this.name} лает: Гав-гав!\`);
  }

  fetch(): void {
    console.log(\`\${this.name} приносит палку\`);
  }
}

const myDog = new Dog("Кеша", "корги");
myDog.makeSound(); // Выведет: Кеша лает: Гав-гав!`;

  const abstractClassExampleCode = `abstract class AbstractUser {
  constructor(public id: number, public email: string) {}

  // Абстрактный метод — у него нет тела, дочерние классы обязаны его реализовать
  abstract getRole(): string;

  displayInfo(): void {
    console.log(\`Email: \${this.email}\`);
  }
}

class Admin extends AbstractUser {
  getRole(): string {
    return "Администратор";
  }
}

const admin = new Admin(1, "admin@site.ru");
admin.displayInfo(); // Email: admin@site.ru`;

  const multiplyInterfacesExampleCode = `interface CanRun {
  run(): void;
}

interface CanJump {
  jump(): void;
}

// Наследование нескольких интерфейсов
interface Athlete extends CanRun, CanJump {
  swim(): void;
}

class Decathlete implements Athlete {
  run() { console.log("Бег"); }
  jump() { console.log("Прыжок"); }
  swim() { console.log("Плавание"); }
}`;

  const implementsExampleCode = `interface Animal {
  name: string;
  makeSound(): void;
}

interface Pet {
  play(): void;
}

class Dog implements Animal, Pet {
  constructor(public name: string) {}

  makeSound() {
    console.log(\`\${this.name} лает: Гав-гав!\`);
  }

  play() {
    console.log(\`\${this.name} приносит палку...\`);
  }
}`;

  const staticClassExampleCode = `class MathUtils {
  // Приватный конструктор запрещает создание экземпляров с помощью new
  private constructor() {}

  // Статическое свойство (константа)
  static readonly PI = 3.14159;

  // Статический метод
  static calculateCircleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// Использование напрямую, без new MathUtils()
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.calculateCircleArea(5)); // 78.53975`;

  const stackClassExampleCode = `class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');
console.log(stringStack.pop()); // 'b'`;

  const setterAndGetterExampleCode = `class User {
  // Приватное поле, к которому нет прямого доступа извне
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // Геттер: вызывается при чтении (user.age)
  get age(): number {
    return this._age;
  }

  // Сеттер: вызывается при записи (user.age = 25)
  set age(newAge: number) {
    if (newAge < 0) {
      throw new Error("Возраст не может быть отрицательным");
    }
    this._age = newAge;
  }
}

const user = new User(20);
console.log(user.age); // 20 (сработал геттер)

user.age = 25; // сработал сеттер
// user.age = -5; // выбросит ошибку
`;

  return (
    <section ref={ref}>
      <h2>Объектно-ориентированное программирование в TypeScript</h2>
      <p>
        TypeScript полностью поддерживает классическое объектно-ориентированное программирование, предлагая строгую
        типизацию, классы, интерфейсы, модификаторы доступа, абстрактные классы и удобную реализацию наследования через
        ключевое слово <code className='code'>extends</code>.
      </p>
      <article>
        <h3>Классы</h3>
        <p>
          В TypeScript есть полноценная поддержка классов, унаследованная из стандарта ECMAScript, с добавлением мощных
          возможностей строгой типизации.
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={basicClassExampleCode} />
      </article>
      <article>
        <h3>Модификаторы доступа</h3>
        <p>
          В TypeScript есть четыре модификатора, которые управляют видимостью свойств и методов класса, обеспечивая
          инкапсуляцию:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>public</code>: свойства и методы с этим модификатором доступны из любого места —
              внутри класса, в дочерних классах и снаружи (в экземпляре объекта). Если модификатор не указан, по
              умолчанию свойство становится <code className='code'>public</code>.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>private</code>: свойства и методы доступны только внутри того класса, где они
              объявлены. Доступ к ним извне или из дочерних классов приведет к ошибке компиляции.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>protected</code>: свойства и методы доступны внутри самого класса, а также во всех
              его дочерних классах. Снаружи к ним обращаться нельзя.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>readonly</code>: свойства и методы доступы только для чтения, изменить их после
              создания или инициализации нельзя.
            </p>
          </li>
        </ul>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={modifiersExampleCode} />
        <p>
          TypeScript позволяет не объявлять свойства и не присваивать им значения вручную, а указать модификатор прямо в
          аргументах конструктора:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={shortSyntaxModifiersExampleCode} />
      </article>
      <article>
        <h3>Наследование</h3>
        <p>
          Дочерний класс наследует свойства и методы родительского, но может добавлять свои или переопределять
          существующие. Наследование осуществляется с помощью ключевого слова <code className='code'>extends</code>, а в
          дочернем классе обязательно нужно вызывать метод <code className='code'>super()</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={extendsExampleCode} />
        <p>
          В TypeScript нет множественного наследования классов, но его поддерживают интерфейсы — можно унаследовать
          сразу несколько интерфейсов через запятую с помощью ключевого слова <code className='code'>implements</code>{' '}
          (см.{' '}
          <a href='#Interfaces_Implementation' className='link PRIMARY'>
            Реализация интерфейсов
          </a>
          ).
        </p>
      </article>
      <article>
        <h3>Абстрактные классы</h3>
        <p>Абстрактные классы нельзя инстанциировать. Они нужны как шаблон для других классов.</p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={abstractClassExampleCode} />
      </article>
      <article id='Interfaces_Implementation'>
        <h3>Реализация интерфейсов</h3>
        <p>
          Ключевое слово <code className='code'>implements</code> в TypeScript заставляет класс строго соответствовать
          контракту, описанному в интерфейсе. Класс обязан реализовать все указанные свойства и методы; в противном
          случае компилятор выдаст ошибку:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={implementsExampleCode} />
        <p>
          В это пример,если не будет реализован, например, метод <code className='code'>play()</code>, то будет получена
          ошибка компиляции, сообщающая о том, что необходимо реализовать этот этот метод потому что он является
          обязательным в интерфейсе <code className='code'>Pet</code>.
        </p>
        <p>
          Разница между <code className='code'>extends</code> и <code className='code'>implements</code>:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <code className='code'>extends</code> используют для наследования: класс берёт и копирует готовую
              реализацию от родительского класса.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <code className='code'>implements</code>: класс лишь обязуется реализовать все свойства и методы,
              описанные в интерфейсе.
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3>Статические свойства и методы</h3>
        <p>
          В TypeScript нет выделенного ключевого слова для создания самих статических классов. Ключевое слово{' '}
          <code className='code'>static</code> помечает только свойства и методы, принадлежащие самому классу. Создать
          объект такого класса через <code className='code'></code> невозможно.
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={staticClassExampleCode} />

        <p>
          Статические классы используются для создания глобальных утилит (математические операции, работа со строками
          или датами), фабрик, сервисов и констант. Они группируют логику и данные, которые принадлежат самому классу, а
          не отдельным экземплярам, избавляя от необходимости вызывать <code className='code'>new ClassName()</code>.
        </p>
      </article>
      <article>
        <h3>Геттеры и сеттеры</h3>
        <p>
          Геттеры и сеттеры — это специальные методы, которые позволяют управлять доступом к свойствам класса. Они
          полезны для инкапсуляции, выполнения проверок перед изменением данных или вычисления значений на лету.
        </p>
        <p>
          Для их создания используются ключевые слова <code className='code'>get</code> и{' '}
          <code className='code'>set</code>, а при обращении к ним скобки не требуются:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={setterAndGetterExampleCode} />
      </article>
      <article>
        <h3>Классы с дженериками</h3>
        <p>
          И тут не обойдёмся без них: дженерики позволяют создавать классы, которые могут работать с разными типами
          данных, сохраняя при этом строгую типизацию.
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={stackClassExampleCode} />
      </article>
    </section>
  );
});

OOP.displayName = 'OOP';
