import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { ENoteType, Note } from 'src/components/common/Note';
import { InlineCode } from 'src/components/blog/InlineCode';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 2;

export const FunctionsExample = forwardRef<HTMLDivElement>((_, ref) => {
  const functionsExampleCode = `function doSomething() {
  console.log('Сделать то');
  doSomethingElse();
}

function doSomethingElse() {
  console.log('Сделать сё');
}

doSomething();`;

  const functionsExampleLog = `Сделать то
Сделать cё`;

  return (
    <section ref={ref} id='sync_functions' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Функции</div>
      </div>
      <p>Рассмотрим пример с двумя функциями:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={functionsExampleCode}
        customName={`example(${EXAMPLE_NUMBER}).js`}
        consoleLog={functionsExampleLog}
      />

      <p className='spacer top medium'> Пройдёмся по шагам:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Строки 1-4 и 6-8 {LONG_DASH} объявления функций, поэтому они в стек вызовов не попадают. На строке 10
            функция уже вызывается, поэтому <InlineCode>doSomething()</InlineCode> попадёт в стек вызовов. Больше в стек
            на данный момент ничего не поступает, функция <InlineCode>doSomething()</InlineCode>
            оказывается на верхушке стека и начнёт выполняться.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется функция <InlineCode>doSomething()</InlineCode>: первая строка функции {LONG_DASH}{' '}
            {getConsoleLog('Сделать то')}. {getConsoleLog()} {LONG_DASH} тоже функция, поэтому она попадает в стек
            вызовов. В консоли выведется текст {getTextWithChevrons('Сделать то')}, затем {getConsoleLog('Сделать то')}{' '}
            удалится из стека.
          </p>
          <Note type={ENoteType.SECONDARY}>
            <p>
              Почему следом в стек не попадает <InlineCode>doSomethingElse()</InlineCode>? Потому что стек не
              планировщик и не умеет смотреть в будущее. Он не видит, что после одной функции есть другие.{' '}
            </p>
            <p>Стек работает синхронно:</p>
            <ol className='list ordered'>
              <li className='list__item'>
                <p>Берётся текущая операция</p>
              </li>
              <li className='list__item'>
                <p>Если это вызов функции {LONG_DASH} функция попадает в стек и выполняется</p>
              </li>
              <li className='list__item'>
                <p>Когда она завершается {LONG_DASH} стек очищается</p>
              </li>
              <li className='list__item'>
                <p>Интерпретатор переходит к следующей инструкции</p>
              </li>
            </ol>
            <p>
              Главное правило: обрабатывается <b>ОДНА</b> операция за раз. Что ждёт дальше {LONG_DASH} пока что
              неизвестно, важна только текущая операция.
            </p>
          </Note>
        </li>
        <li className='list__item'>
          <p>
            Далее внутри функции <InlineCode>doSomething()</InlineCode> идёт вызов функции{' '}
            <InlineCode>doSomethingElse()</InlineCode>. Эта функция тоже отправится в стек вызовов и затем начнёт
            выполняться. Вложенная функция содержит только вывод в консоль
            {getConsoleLog('Сделать сё')}, аналогично функции логирования из предыдущего шага, она тоже попадёт в стек
            вызовов, выполнится, в консоли выведется текст, а затем удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стеке вызовов на вершине остаётся функция <InlineCode>doSomethingElse()</InlineCode>. В ней все операции
            выполнены, она удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стеке вызовов остаётся функция <InlineCode>doSomething()</InlineCode>. В ней все операции выполнены, она
            удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пустой. По алгоритму затем должна проверяться очередь микрозадач {LONG_DASH} там пусто, и
            очередь макрозадач {LONG_DASH}
            там тоже ничего нет. Пока что делать больше нечего. Здесь, как и в прошлом примере, Event Loop снова сидел
            без дела, работал только стек вызовов.
          </p>
        </li>
      </ol>
      <p>
        Всё это можно увидеть визуально в демо ниже {LONG_DASH} просто нажмите кнопку {getTextWithChevrons('Пуск')} и
        наблюдайте:
      </p>
      <EventLoopAnimation demo={AnimationDemo.FUNCTIONS} />
    </section>
  );
});

FunctionsExample.displayName = 'FunctionsExample';
