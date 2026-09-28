import { forwardRef } from 'react';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 6;

export const EventListenerExample = forwardRef<HTMLDivElement>((_, ref) => {
  const eventListenerClickExampleCode = `console.log('Начало');

document.getElementById('button').addEventListener('click', () => {
  console.log('Кнопка нажата');
});

console.log('Конец');`;

  const eventListenerClickExampleMarkup = `<div id="button">Нажми на меня</div>`;

  const eventListenerClickExampleLog = `Начало
Конец
Кнопка нажата // Только когда кнопка будет нажата`;

  return (
    <section ref={ref} id='event_listener' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Слушатели событий</div>
      </div>
      <p>Разберём пример с подпиской на событие {LONG_DASH} клик по кнопке:</p>
      <DoubleCodeSnippet
        lang={[ECodeLang.JAVASCRIPT, ECodeLang.HTML]}
        code={[eventListenerClickExampleCode, eventListenerClickExampleMarkup]}
        name={[`example(${EXAMPLE_NUMBER})`, `example(${EXAMPLE_NUMBER})`]}
      />
      <p>В консоли выведется следующее:</p>
      <ExampleSnippet code={eventListenerClickExampleLog} />
      <p>Что будет происходить в Event Loop по шагам:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Первая строчка синхронного кода {getConsoleLog('Начало')} попадает в стек вызовов и выполняется. В консоли
            появится текст {getTextWithChevrons('Начало')}. Затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется метод <InlineCode>getElementById('button')</InlineCode> {LONG_DASH} это синхронная функция,
            которая выполняется в стеке вызовов: движок доходит до этого метода, обращается к DOM-дереву, мгновенно
            находит элемент и возвращает ссылку на него в стек.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется <InlineCode>addEventListener()</InlineCode> {LONG_DASH} регистрация обработчика события{' '}
            <InlineCode>click</InlineCode> к найденному элементу на прошлом шаге.{' '}
            <InlineCode>addEventListener()</InlineCode> {LONG_DASH} это синхронный вызов, который тоже попадёт в стек
            вызовов, выполнится и удалится затем из стека вызовов, но он отправит запрос в Web API: слушать клики по
            такой-то кнопке, в случае клика реагировать таким-то колбэком.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В Web API появится слушатель события <InlineCode>click</InlineCode>. Он будет фоново ждать, когда
            пользователь сделает нужное действие, в данном случае {LONG_DASH} клик по кнопке.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется последняя строчка синхронного кода, {getConsoleLog('Конец')} попадает в стек вызовов, в консоли
            выводится {getTextWithChevrons('Конец')}, функция удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек пуст, Event Loop бездействует до того момента пока не будет нажата кнопка. Как только это произойдёт,
            колбэк события попадёт в очередь макрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop возвращается в стек вызовов, проверяет очередь микрозадач (там ничего нет), доходит до очереди
            макрозадач, обнаруживает там колбэк события, перемещает его в стек вызовов, где он начинается выполняться. В
            консоли будет выведен текст «Кнопка нажата», затем колбэк будет удалён из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст. Проверяем очередь микрозадач {LONG_DASH} там пусто, очередь макрозадач {LONG_DASH} тоже
            пусто. Пока что делать больше нечего.
          </p>
        </li>
      </ol>
      <p>Конечно же демо:</p>
      <EventLoopAnimation demo={AnimationDemo.CLICK_EVENT_LISTENER} />
    </section>
  );
});

EventListenerExample.displayName = 'EventListenerExample';
