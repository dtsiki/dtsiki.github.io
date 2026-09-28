import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 10;

export const FetchExample = forwardRef<HTMLDivElement>((_, ref) => {
  const fetchExampleCode = `console.log('Начало');

fetch('https://www.google.com')
  .then(() => console.log('Запрос выполнился'));

console.log('Конец');`;

  const fetchExampleLog = `Начало
Конец
Запрос выполнился`;

  return (
    <section ref={ref} id='fetch' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Сетевой запрос</div>
      </div>
      <p>Начнём с простого примера с один запросом:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={fetchExampleCode}
        name={`example(${EXAMPLE_NUMBER})`}
        consoleLog={fetchExampleLog}
      />
      <p className='spacer top medium'>Это классический пример смешивания Web API, промисов и микрозадач.</p>
      <p className='spacer top medium'>Пройдёмся вместе с Event Loop по шагам по всему циклу:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Первая строчка синхронного кода {getConsoleLog('Начало')} попадает в стек вызовов и выполняется. В консоли
            появляется {getTextWithChevrons('Начало')}. Затем функция удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Функция <InlineCode>fetch()</InlineCode> попадает в стек вызовов {LONG_DASH} сама по себе это просто
            синхронная операция, которая отвечает за создание промиса: функция попала в стек вызовов, выполнилась,
            создала промис, сетевой запрос отправился выполняться в Web API, функция удалилась из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В Web API вне основого потока выполняется запрос. Основной поток не блокируется, поэтому можно идти дальше
            по коду: далее выполнится последняя строчка синхронного кода, стек вызовов берёт {getConsoleLog('Конец')}, в
            консоли появится {getTextWithChevrons('Конец')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            К этому моменту получаем ответ на сетевой запрос. Вызывается метод <InlineCode>then</InlineCode> {LONG_DASH}{' '}
            это тоже просто синхронная операция, поэтому она тоже попадёт в стек вызовов, выполнится и удалится.{' '}
            <InlineCode>fetch()</InlineCode>, хоть и будет выполняться в Web API, возвращает промис, поэтому его колбэки
            пойдут в очередь микрозадач. Колбэк {getConsoleLog('Запрос выполнился')} отпрвится в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек пуст, Event Loop проверяет очередь микрозадач, берёт оттуда колбэк запроса, перемещает в стек вызовов,
            выполняет, в консоли появляется {getTextWithChevrons('Запрос выполнился')}, колбэк удаляется из стека
            вызовов.
          </p>
        </li>
      </ol>
      <EventLoopAnimation demo={AnimationDemo.FETCH} />
      <p>
        Здесь важно понимать, что Event Loop, как только в очереди микрозадач появится колбэк ответа на запрос, не
        бросит всё, чтобы немедленно пойти выполнять этот колбэк. Например, если в этот момент в стеке вызовов
        выполняется много-много операций (или просто одна какая-то очень долгая), стек вызовов выполнит их все (или эту
        долгую) и только потом пойдёт проверять очередь микрозадач.
      </p>
    </section>
  );
});

FetchExample.displayName = 'FetchExample';
