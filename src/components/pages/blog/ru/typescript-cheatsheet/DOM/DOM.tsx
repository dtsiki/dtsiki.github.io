import { forwardRef } from 'react';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText, renderInlineList } from 'src/utils/formatting';

export const DOM = forwardRef<HTMLDivElement>(({}, ref) => {
  const jsonTsConfig = `{
  "compilerOptions": {
    "lib": ["es2022", "dom"]
  }
}`;

  const asExampleCode = `const input = document.querySelector("input") as HTMLInputElement;`;

  const nullButtonExampleCode = `const awesomeButton = document.getElementById("awesome-button");

if (awesomeButton) {
  awesomeButton.addEventListener("click", () => {
    console.log("Кликнули на кнопку");
  });
}`;

  const instanceofExampleCode = `const element = document.getElementById("my-element");

if (element instanceof HTMLImageElement) {
  // Внутри этого блока element имеет тип HTMLImageElement
  element.src = "image.png";
}`;

  return (
    <section ref={ref}>
      <h2>Типизация DOM и событий</h2>
      <p>
        Для работы с DOM и событиями в TypeScript компилятор использует встроенные определения типов из файла{' '}
        <em>lib.dom.d.ts</em>. Там описаны{' '}
        {renderInlineList(['Document', 'HTMLElement', 'HTMLInputElement', 'Event', 'MouseEvent'], 'code', 'code')} и
        т.д.
      </p>
      <p>
        Файл <em>lib.dom.d.ts</em> не нужно устанавливать вручную, он по молчанию подключается компилятором. Чтобы он
        работал, достаточно чтобы в вашем файле конфигурации TypeScript <em>tsconfig.json</em> был правильно указан
        массив <em>"lib"</em>. Если вы используете среду браузера, в настройках должен быть включен параметр{' '}
        <em>"dom"</em>. Например:
      </p>
      <CodeSnippet lang={ECodeLang.JSON} code={jsonTsConfig} name='tsconfig' />
      <article>
        <h3>Проверка типов перед использованием</h3>
        <p>
          Методы вроде <code className='code'>getElementById</code> могут вернуть <code className='code'>null</code>,
          если элемента нет, поэтому TypeScript требует проверку:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={nullButtonExampleCode} />
      </article>
      <article>
        <h3>
          Приведение типов
          {getGhostText('Type Assertions')}
        </h3>
        <p>
          Иногда TypeScript не может точно определить элемент, например, при поиске по классу. Можно явно указать тип с
          помощью конструкции <code className='code'>as</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={asExampleCode} />
        <p>
          Важно понимать: <strong>это не преобразование, а лишь подсказка компилятору</strong>. При сборке в JavaScript
          эти конструкции будут удалены.
        </p>
      </article>
      <article>
        <h3>Type Guards</h3>
        <p>
          Альтренатива приведению типов с <code className='code'>as</code> — проверка класса объекта через{' '}
          <code className='code'>instanceof</code>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={instanceofExampleCode} />
      </article>
      <article>
        <h3>Полезные типы DOM</h3>
        <p>Рано или поздно вам пригодится каждый из этих типов:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              <b>HTMLElement</b>: базовый тип для всех HTML-элементов. От него наследуются все остальные типы
              HTML-элементов. Например:
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>
                  <b>HTMLInputElement</b>: тип для тега{' '}
                  <code className='code'>
                    <AngleBrackets>input</AngleBrackets>
                  </code>
                </p>
              </li>
            </ul>
          </li>

          <li className='list__item'>
            <p>
              <b>Event</b>: базовый тип для событий. От него наследуются все остальные события. Например:
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>
                  <b>MouseEvent</b>: событие, описывающее любое действие пользователя мышью (клики, наведение,
                  прокрутка)
                </p>
              </li>
              <li className='list__item'>
                <p>
                  <b>KeyboardEvent</b>: событие, возникающее при взаимодействии с клавиатурой (нажатие, удержание или
                  отпускание клавиши)
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </section>
  );
});

DOM.displayName = 'DOM';
