import Image from 'next/image';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ENoteType, Note } from 'src/components/common/Note';

import pulpFictionGifImage from 'public/assets/blog/this/pulp-fiction.gif';

const EXAMPLE_NAME = 'example';

const Post = () => {
  const inlineCodeThis = <InlineCode>this</InlineCode>;

  const devToolsThisExampleCode = `console.log(this); // window
console.log(this === window); // true`;

  const userThisExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

user.sayHello(); // Привет, я dtsiki`;

  const functionsThisExampleCode = `function doSomething() {
  console.log(this);
}

function doSomethingStrict() {
  'use strict';
  console.log(this);
}

doSomething(); // window
doSomethingStrict(); // undefined`;

  const arrowFunctionThisExampleCode = `const user = {
  name: 'dtsiki',
  sayHi: () => {
     console.log(\`Привет, я $\{this.name}\`);
  }
};

user.sayHi(); // Привет, я undefined`;

  const arrowFunctionsAnotherThisExampleCode = `const user = {
  name: 'dtsiki',
  skills: \['JavaScript', 'TypeScript', 'React'\],
  showSkills() {
    this.skills.forEach((skill) => {
      console.log(\`$\{this.name} знает $\{skill}\`);
    });
  }
};

user.showSkills();`;

  const arrowFunctionsAnotherThisExampleResult = `dtsiki знает JavaScript
dtsiki знает TypeScript
dtsiki знает React`;

  const undefinedObjThisExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const introduce = user.sayHello;
introduce(); // Привет, я undefined`;

  const functionConstructorExampleCode = `function User(name) {
  this.name = name;
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
}`;

  const functionConstructorThisExampleCode = `function User(name) {
  // Создаётся пустой объект this = {}
  this.name = name; // Записывается в this name
   sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
  // Функция возвращает этот объект this
}

const user = new User('dtsiki');
user.sayHello(); // Привет, я dtsiki
console.log(user.name); // dtsiki`;

  const classThisExampleCode = `class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
}

const user = new User('dtsiki');
user.sayHello(); // Привет, я dtsiki`;

  const callApplyExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const sayHello = user.sayHello;
sayHello.call(user); // Привет, я dtsiki
sayHello.apply(user); // Привет, я dtsiki`;

  const callIntroduceExampleCode = `function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

introduce.call(user, "фронтенд-разработчица", "JavaScript"); // Я dtsiki, я фронтенд-разработчица и я люблю JavaScript`;

  const applyIntroduceExampleCode = `function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

introduce.apply(user, ["фронтенд-разработчица", "JavaScript"]); // Я dtsiki, я фронтенд-разработчица и я люблю JavaScript`;

  const bindUserExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

const sayHello = user.sayHello.bind(user);
sayHello(); // Привет, я dtsiki`;

  const bindIntroduceExampleCode = `function introduce(position, language) {
  console.log(\`Я $\{this.name}, я $\{position} и я люблю $\{language}\`);
}

const user = {
  name: "dtsiki"
};

const introduceUser = introduce.bind(user, "фронтенд-разработчица", "JavaScript"); // "Я dtsiki, я фронтенд-разработчица и я люблю JavaScript"
introduceUser();`;

  const bindForeverAndEverExampleCode = `const sayHello = user.sayHi.bind(user);
sayHello.call({ name: 'Кто-то другой' }); // "Привет, я dtsiki"
sayHello.apply({ name: 'Ещё кто-то' }); // "Привет, я dtsiki"`;

  const timeoutThisExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

setTimeout(user.sayHello, 1000); // Привет, я undefined`;

  const timeoutWithArrowFunctionsThisExampleCode = `const user = {
  name: "dtsiki",
  sayHello() {
    console.log(\`Привет, я $\{this.name}\`);
  }
};

setTimeout(() => user.sayHi(), 1000); // Привет, я dtsiki`;

  const eventListenerThisExampleCode = `const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  console.log(this, event); // <button>, click
});`;

  const eventListenerArrowFunctionThisExampleCode = `const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log(this, event); // window, click
});`;

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.THIS]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.TRIANGLES,
      }}>
      <section className='section outer'>
        <p>{inlineCodeThis} — это указатель.</p>
        <p>
          {inlineCodeThis} — это указатель на объект, который функция получает при вызове. Через {inlineCodeThis}{' '}
          функция может получить доступ к свойствам и методам этого объекта. Всё это происходит внутри контекста
          выполнения функции, который включает в себя {inlineCodeThis}, переменные и ссылку на внешнюю область
          видимости.
        </p>
        <p>{inlineCodeThis} — это не контекст выполнения, а просто указатель.</p>
      </section>
      <section className='section outer'>
        <h2>Глобальный контекст</h2>
        <p>
          Если написать {inlineCodeThis} не внутри чего-либо, то он будет глобальным. Например, если написать прямо в
          консоли браузера:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={devToolsThisExampleCode} />
        <p>
          {inlineCodeThis} в этом случае ссылается на глобальный объект, в браузере это объект{' '}
          <InlineCode>window</InlineCode>, в Node.js это объект <InlineCode>global</InlineCode>. Независимо от строгого
          режима.
        </p>
      </section>
      <section className='section outer'>
        <h2>Объекты</h2>
        <p>
          В объектах {inlineCodeThis} указывает непосредственно на объект, который стоит перед точкой во время вызова:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={userThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Смотрим только на точку перед функцией в момент её запуска: {inlineCodeThis} указывает на объект{' '}
          <InlineCode>user</InlineCode>, функция видит <InlineCode>name</InlineCode>, всё работает.
        </p>
      </section>
      <section className='section outer'>
        <h2>Обычные функции {getGhostText('все, которые не стрелочные')}</h2>
        <p>
          У функций, объявленых через ключевое слово <InlineCode>function</InlineCode>, {inlineCodeThis} в строгом
          режиме равен <InlineCode>undefined</InlineCode>, а в нестрогом — <InlineCode>window</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={functionsThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Потому что обычные функции не умеют ходить дальше своей функции и брать контекст из лексического окружения. Но
          есть кто-то, кто так умеет.
        </p>
      </section>
      <section className='section outer'>
        <h2>Стрелочные функции</h2>
        <p>У стрелочных функций тоже нет контекста:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={arrowFunctionThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Когда стрелочная функция пишется как свойство объекта, она создаётся в глобальном контексте (не внутри другой
          функции). При этом стрелочная функция не привязывается к объекту, в котором она лежит как свойство.
        </p>
        <Note type={ENoteType.SECONDARY}>
          <p>
            Вместо <InlineCode>undefined</InlineCode> может выводится пустая строка в браузере, так как контекст может
            ссылаться на объект <InlineCode>window</InlineCode>, у которого есть поле <InlineCode>name</InlineCode> со
            своим дефолтным значением — пустая строка <InlineCode>""</InlineCode>.
          </p>
        </Note>
        <p>
          Но в отличии от обычных функций, стрелочные умеют брать контекст из родительского лексического окружения.
          Конечно же, зависит от того, где стрелочная функция написана. Как проявить суперспособность стрелочной
          функции:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={arrowFunctionsAnotherThisExampleCode} name={EXAMPLE_NAME} />
        <ExampleSnippet code={arrowFunctionsAnotherThisExampleResult} />
        <p>
          Внутри <InlineCode>forEach</InlineCode> стрелочная функция, у которой нет контекста, но код тем не менее
          работает. Всё потому, что стрелочная функция смотрит наверх и берёт контекст из родительского окружения т.е.
          из метода <InlineCode>showSkills</InlineCode>.
        </p>
      </section>
      <section className='section outer'>
        <h2>Функции-конструкторы</h2>
        <p>
          Функция-конструктор в JavaScript — это обычная функция, которая создает и настраивает новые объекты с помощью
          ключевого слова <InlineCode>new</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={functionConstructorExampleCode} name={EXAMPLE_NAME} />
        <p>
          Если функция вызывается как конструктор через <InlineCode>new</InlineCode>, то будет создан пустой объект и
          привязыван к {inlineCodeThis}:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={functionConstructorThisExampleCode} name={EXAMPLE_NAME} />
      </section>
      <section className='section outer'>
        <h2>Классы</h2>
        <p>
          Классы в JavaScript это синтаксический сахар над функциями-конструкторами. Поэтому в классах контекст ведет
          себя аналогично функциям-конструкторам:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={classThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Разница лишь в том, что контекст ссылается не на объект как таковой, а на конкретный экземпляр объекта,
          который был создан с помощью оператора <InlineCode>new</InlineCode>. Те же яйца, только в профиль.
        </p>
      </section>
      <section className='section outer'>
        <h2>Обработчики событий</h2>
        <p>
          В обработчиках событий {inlineCodeThis} ссылается на DOM-элемент, на который непосредственно привязан этот
          обработчик:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={eventListenerThisExampleCode} name={EXAMPLE_NAME} />
        <p>У стрелочных функций тут всё ещё контекста:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={eventListenerArrowFunctionThisExampleCode} name={EXAMPLE_NAME} />
      </section>
      <section className='section outer'>
        <h2>Снова объекты</h2>
        <p>В JavaScript контекст легко потерять:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={undefinedObjThisExampleCode} name={EXAMPLE_NAME} />
        <p>Куда делся контекст?</p>
        <div className='width-limiter medium centered spacer top bottom small'>
          <Image src={pulpFictionGifImage} layout='responsive' objectFit='cover' />
        </div>
        <p>
          На (8) строчке в переменную <InlineCode>introduce</InlineCode> передаётся только ссылка на функцию{' '}
          <InlineCode>sayHello</InlineCode>. Объект <InlineCode>user</InlineCode> в этот момент остался где-то в
          стороне. На (9) строчке функция вызывается как изолированная функция, не привязанная к объекту{' '}
          <InlineCode>user</InlineCode>. Контекст теперь начинает указывать либо глобальный объект{' '}
          <InlineCode>window</InlineCode>, либо становится <InlineCode>undefined</InlineCode> в строгом режиме. А у
          глобального объекта нет свойства <InlineCode>name</InlineCode>. Вот и потеряли {inlineCodeThis}.
        </p>
        <p>Аналогичная ситуация произойдёт если метод объекта передать куда-то как колбэк. Например так:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={timeoutThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Тут прописать <InlineCode>user.sayHello()</InlineCode> уже не прокатит — функция вызовется мгновенно.
        </p>
        <p>Что можно сделать здесь в таких ситуация?</p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p>
              Не забывать, что <InlineCode>obj.func</InlineCode> и <InlineCode>obj.func()</InlineCode> это совершенно
              разные вещи. Помним:
            </p>
            <ul className='list markered'>
              <li className='list__item'>
                <p className='list__title'>
                  <InlineCode>obj.func</InlineCode>
                </p>
                <p className='list__footer'>
                  — обращение к свойству объекта, значением которого является сама функция или ссылка на неё. Сама
                  функция при этом не вызывается
                </p>
              </li>
              <li>
                <p className='list__title'>
                  <InlineCode>obj.func()</InlineCode>
                </p>
                <p className='list__footer'>— непосредственный вызов этой функции как метода объекта</p>
              </li>
            </ul>
          </li>
          <li className='list__item'>
            <p className='list__title'>Использовать анонимную или стрелочную функцию</p>
            <p className='list__footer'>
              Вызывать метод напрямую нельзя, поэтому отдаем функцию-пустышку, внутри которой вызываем метод правильно —
              через точку:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={timeoutWithArrowFunctionsThisExampleCode}
              name={EXAMPLE_NAME}
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>Вручную привязать объект к контексту</p>
          </li>
        </ol>
      </section>
      <section className='section outer'>
        <h2>Принудительная привязка контекста</h2>
        <p>Вспомним пример где контекст потерялся:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={undefinedObjThisExampleCode} name={EXAMPLE_NAME} />
        <p>
          Помимо вызова метода через точку <InlineCode>user.sayHello()</InlineCode>, этот код можно исправить тремя
          способами.
        </p>
        <p>
          Можно вручную указать, что за контекст нужно принять такой-то конкретный объект. Для этого существуют три
          метода: <InlineCode>call</InlineCode>, <InlineCode>apply</InlineCode> и <InlineCode>bind</InlineCode>.
        </p>
        <section className='section inner'>
          <h3>
            <InlineCode>call</InlineCode> и <InlineCode>apply</InlineCode>
          </h3>
          <p>Принимают контекст первым аргументом::</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={callApplyExampleCode} name={EXAMPLE_NAME} />
          <p>Обе функции вызываются сразу</p>
          <p>
            Можно передать аргументы если они есть. Для <InlineCode>call</InlineCode> они передаются через запятую:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={callIntroduceExampleCode} name={EXAMPLE_NAME} />
          <p>
            Для <InlineCode>apply</InlineCode> в виде массива:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={applyIntroduceExampleCode} name={EXAMPLE_NAME} />
        </section>
        <section className='section inner'>
          <h3>
            <InlineCode>bind</InlineCode>
          </h3>
          <p>
            Метод <InlineCode>bind</InlineCode> не вызывает функцию сразу, а создает новую функцию-обёртку, которая
            будет <strong>всегда</strong> помнить на что {inlineCodeThis} теперь указывает:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={bindUserExampleCode} name={EXAMPLE_NAME} />
          <p>Аргументы тоже можно передать, если они есть. Передаются через запятую после будущего контекста:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={bindIntroduceExampleCode} name={EXAMPLE_NAME} />
          <p>
            Изменить контекст, который уже привязан с помощью <InlineCode>bind</InlineCode>, невозможно:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={bindForeverAndEverExampleCode} name={EXAMPLE_NAME} />
          <p>
            Если нужно, чтобы у функции менялся контекст, просто не используйте <InlineCode>bind</InlineCode>.
          </p>
        </section>
        <section className='section outer'>
          <h2>Резюмируем</h2>
          <p>
            Чтобы безошибочно понимать, чему равен {inlineCodeThis}, смотрите только на точку перед функцией в момент её
            запуска:
          </p>
          <ul className='list markered'>
            <li className='list__item'>
              <p className='list__title'>
                Точка стоит после объекта: <InlineCode>obj.doSomething()</InlineCode>
              </p>
              <p>
                {inlineCodeThis} равен объекту <InlineCode>obj</InlineCode> перед точкой{' '}
              </p>
            </li>
            <li className='list__item'>
              <p className='list__title'>
                Точки нет: <InlineCode>doSomething()</InlineCode>
              </p>
              <p>
                {inlineCodeThis} будет либо <InlineCode>undefined</InlineCode> в строгом режиме либо{' '}
                <InlineCode>window</InlineCode>
              </p>
            </li>
            <li className='list__item'>
              <p className='list__title'>
                Точки нет, но есть конструктор-функции c <InlineCode>new</InlineCode>:{' '}
                <InlineCode>new Something()</InlineCode>
              </p>
              <p>{inlineCodeThis} равен новому, только что созданному пустому объекту</p>
            </li>
            <li className='list__item'>
              <p className='list__title'>
                Есть <InlineCode>call</InlineCode>, <InlineCode>apply</InlineCode> или <InlineCode>bind</InlineCode>
              </p>
              <p>{inlineCodeThis} будет равен тому объекту, который вы передали в скобки</p>
            </li>
          </ul>
        </section>
        <p>Всё!</p>
      </section>
    </PostWrapper>
  );
};

export default Post;
