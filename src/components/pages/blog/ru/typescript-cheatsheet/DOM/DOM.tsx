import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog';
import { AngleBrackets } from 'src/components/blog/AngleBrackets/AngleBrackets';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
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
    <section ref={ref} id='DOM_and_Events' className='section outer'>
      <section className='section inner'>
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
      </section>
      <section className='section inner'>
        <h3>Проверка типов перед использованием</h3>
        <p>
          Методы вроде <InlineCode>getElementById</InlineCode> могут вернуть <InlineCode>null</InlineCode>, если
          элемента нет, поэтому TypeScript требует проверку:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={nullButtonExampleCode} />
      </section>
      <section className='section inner'>
        <h3>
          Приведение типов
          {getGhostText('Type Assertions')}
        </h3>
        <p>
          Иногда TypeScript не может точно определить элемент, например, при поиске по классу. Можно явно указать тип с
          помощью конструкции <InlineCode>as</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={asExampleCode} />
        <p>
          <strong>Важно понимать:</strong> это не преобразование, а лишь подсказка компилятору. При сборке в JavaScript
          эти конструкции будут удалены.
        </p>
      </section>
      <section className='section inner'>
        <h3>Type Guards</h3>
        <p>
          Альтренатива <InlineCode>as</InlineCode> {LONG_DASH} проверка класса объекта через{' '}
          <InlineCode>instanceof</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={instanceofExampleCode} />
      </section>
      <section className='section inner'>
        <h3>Полезные типы DOM</h3>
        <p>Рано или поздно вам пригодится каждый из этих типов:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>
              <b>HTMLElement</b>
            </p>
            <p>Базовый тип для всех HTML-элементов.</p>
            <p>От него наследуются все остальные типы HTML-элементов, например:</p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>
                  <b>HTMLDivElement</b>: тип для тега{' '}
                  <InlineCode>
                    <AngleBrackets>div</AngleBrackets>
                  </InlineCode>
                </p>
              </li>
              <li className='list__item'>
                <p>
                  <b>HTMLInputElement</b>: тип для тега{' '}
                  <InlineCode>
                    <AngleBrackets>input</AngleBrackets>
                  </InlineCode>
                </p>
                <p>
                  Этот тип будет иметь свойства поля ввода: <InlineCode>value</InlineCode>,{' '}
                  <InlineCode>type</InlineCode> и т.д.
                </p>
              </li>
              <li className='list__item'>
                <p>
                  <b>HTMLImageElement</b>: тип для тега{' '}
                  <InlineCode>
                    <AngleBrackets>img</AngleBrackets>
                  </InlineCode>
                </p>
                <p>
                  Этот тип будет иметь свойства тега <InlineCode>img</InlineCode>: <InlineCode>src</InlineCode>,
                  <InlineCode>alt</InlineCode> и прочие.
                </p>
              </li>
            </ul>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              <b>Event</b>
            </p>
            <p>Базовый тип для событий.</p>
            <p>От него наследуются все остальные типы для событий, например:</p>
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
      </section>
    </section>
  );
});

DOM.displayName = 'DOM';
