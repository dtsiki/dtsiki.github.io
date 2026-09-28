import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 7;

export const PromiseChainingExample = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseAndTimeoutExampleCode = `console.log('Начало');

setTimeout(() => {
  console.log('Колбэк таймаута');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('Колбэк промиса раз');
  })
  .then(function () {
    console.log('Колбэк промиса два');
  });

console.log('Конец');`;

  const promiseAndTimeoutExampleLog = `Начало
Конец
Колбэк промиса раз
Колбэк промиса два
Колбэк таймаута`;

  return (
    <section ref={ref} id='promise_chaining' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Цепочка промисов и таймер</div>
      </div>
      <p>
        Пришло время разобраться и с промисами и с очередью макрозадач. Добавим в пример выше с таймером не просто
        промис, а промис с цепочкой и разберёмся как работают все компоненты Event Loop вместе:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAndTimeoutExampleCode}
        name={`example(${EXAMPLE_NUMBER})`}
        consoleLog={promiseAndTimeoutExampleLog}
      />
      <p>Что здесь происходит:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Выполнится первая строчка синхронного кода: {getConsoleLog('Начало')} попадёт в стек вызовов, выполнится, в
            консоли появится надпись {getTextWithChevrons('Начало')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Далее по коду дойдём до <InlineCode>setTimeout</InlineCode>. Без разницы какая будет у него задержка{' '}
            {LONG_DASH}
            таймер в любом случае отправится тикать в Web API, а колбэк после того как время истечёт будет перемещён в
            очередь макрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Идём дальше по коду и доходим до промиса. Будет создан промис {LONG_DASH} это синхронная операция и{' '}
            <InlineCode>Promise.resolve()</InlineCode> появится в стеке вызовов и удалится оттуда. Далее доходим до
            первого <InlineCode>then</InlineCode> и колбэк плюс минус почти сразу отправляется в очередь микрозадач.
            Следующий колбэк в цепочке промисов попадёт в очередь только после выполнения первого.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Идём дальше по коду, выполнится последняя строчка синхронного кода: стек вызовов берёт{' '}
            {getConsoleLog('Конец')}, выполняет, в консоли появится надпись {getTextWithChevrons('Конец')}, затем
            функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст. По алгоритму нужно проверить очередь микрозадач т.к. микрозадачи имеют приоритет выше.
            Нам нужно выполнить <strong>всё</strong>, что лежит в этой очереди. Там сейчас лежит <em>ОДИН</em> колбэк
            промиса. Event Loop берёт его и переносит из очереди микрозадач в стек вызовов и затем сразу же выполняет: в
            консоли выводится {getTextWithChevrons('Колбэк промиса раз')}. Затем колбэк удаляется из стека вызовов.
            Первый колбэк промиса выполнился, поэтому в очередь микрозадач отправляется по цепочке следующий колбэк
            промиса. Event Loop сразу же берёт и переносит его в стек вызовов и выполняет: в консоли выводится{' '}
            {getTextWithChevrons('Колбэк промиса два')}. Затем колбэк удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Очередь микрозадач наконец-то опустела. Дальше по алгоритму проверяем очередь макрозадач. Пока Event Loop
            разбирался с цепочкой промисов в Web API протикала формально нулевая задержка и затем в очереди макрозадач
            появился колбэк таймера. Event Loop переносит его в стек вызовов: {getConsoleLog('Колбэк таймаута')}{' '}
            выполняется, в консоли выводится {getTextWithChevrons('Колбэк таймаута')}, колбэк удаляется из стека
            вызовов.
          </p>
        </li>
      </ol>
      <EventLoopAnimation demo={AnimationDemo.PROMISE_AND_TIMEOUT} />
    </section>
  );
});

PromiseChainingExample.displayName = 'PromiseChainingExample';
