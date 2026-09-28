import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 3;

export const SinglePromiseExample = forwardRef<HTMLDivElement>((_, ref) => {
  const singlePromiseExampleCode = `console.log('Начало');

Promise.resolve().then(() => {
  console.log('Промис выполнился');
});

console.log('Конец');`;

  const singlePromiseExampleLog = `Начало
Конец
Промис выполнился`;

  const promiseWithDelayExampleCode = `console.log('Начало');

new Promise((resolve) => {
  const result = doSomethingSlow(); // Какая-то очень долгая операция

  if (result) {
    resolve();
  }
}).then(() => {
  console.log('Промис выполнился');
});

console.log('Конец');`;

  const promiseWithDelayExampleLog = `Начало
Конец
Промис выполнился // Через какое-то время`;

  const promiseRejectedExampleCode = `new Promise((_, reject) => {
  const result = doSomethingSlow(); // Какая-то очень долгая операция

  if (result) {
    reject();
  }
}).catch((error) => {
  console.log(error);
});

console.log('Конец');`;

  const promiseRejectedExampleLog = `Начало
Конец
Error: Ошибка // Через какое-то время`;

  return (
    <section ref={ref} id='promise' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Промисы</div>
      </div>
      <p>Рассмотрим простой пример с промисом:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={singlePromiseExampleCode}
        name={`example(${EXAMPLE_NUMBER})`}
        consoleLog={singlePromiseExampleLog}
      />
      <p className='spacer top medium'>Что будет происходить в Event Loop по шагам:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            В стек вызовов попадёт первая строчка синхронного кода {getConsoleLog('Начало')}: выполнится, в консоли
            появится текст {getTextWithChevrons('Начало')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Код дойдёт до промиса. Создание промиса через конструктор <InlineCode>new Promise(...)</InlineCode> само по
            себе синхронная операция, а вызов статического метода <InlineCode>Promise.resolve()</InlineCode> {LONG_DASH}{' '}
            где промис создаётся сразу уже выполненными, тем более. Поэтому здесь строка (3) попадает в стек вызовов,
            выполняется, создаётся промис. В движке пока что просто регистрируется колбэк внутри{' '}
            <InlineCode>then</InlineCode>.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Так как промис сразу же создаётся выполненным, колбэк внутри метода <InlineCode>then</InlineCode>
            почти сразу помещается в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стек вызовов попадает последняя строчка синхронного кода <InlineCode>console.log('Конец')</InlineCode>:
            выполняется, в консоли выводится текст «Конец», затем функция удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов становится пустым. Event Loop видит, что стек вызовов пуст и заглядывает в очередь микрозадач,
            чтобы выполнить оттуда <strong>ВСЕ</strong> задачи. Там лежит один единственный колбэк промиса.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop забирает колбэк промиса и помещает его в стек вызовов. Вот так асинхронные операции окольным
            путём попадают таки в стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стеке вызовов что-то появилось, нужно это выполнить. Выполняется колбэк промиса. В консоли появляется
            «Промис выполнился», а колбэк удаляется из стека.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Возвращаемся в очередь микрозадач потому что нужно выполнить оттуда все задачи, там больше ничего нет. Event
            Loop возвращается в стек вызовов, но он тоже пустой. Пока что делать больше нечего.
          </p>
        </li>
      </ol>
      <EventLoopAnimation demo={AnimationDemo.SINGLE_PROMISE} />
      <p>
        А если промис ещё не будет выполнен на момент, когда стек вызов будет уже пуст и Event Loop дойдёт до очереди
        микрозадач? Например:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseWithDelayExampleCode}
        consoleLog={promiseWithDelayExampleLog}
      />
      <p>
        Ничего не произойдёт {LONG_DASH} колбэки из <InlineCode>then</InlineCode> и <InlineCode>catch</InlineCode>{' '}
        просто ещё не будут добавлены в очередь микрозадач. Они будут ждать когда промис передёт из состояния{' '}
        <em>pending</em> в <em>fulfilled</em> или <em>rejected</em>, и только тогда колбэки уйдут в очередь микрозадач.
      </p>
      <p>
        В этих примерах внутри функции-исполнителя промиса может быть сетевой запрос и мы не можем знать наверняка через
        сколько получим ответ: сразу, через 1 минуту, через 5 минут. На этом и строится главный принцип работы промисов{' '}
        {LONG_DASH} выполнить операцию, зарегистрировать колбэки и фоново ждать результат, когда результат появится,
        выполнить колбэки. Это и называется асинхронностью.
      </p>
      <p>
        Если бы промис перешёл в состояние <em>rejected</em>, то в очередь микрозадач попал бы колбэк из{' '}
        <InlineCode>catch</InlineCode>:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseRejectedExampleCode}
        consoleLog={promiseRejectedExampleLog}
      />
      <p>
        Механизм точно такой же, как с <em>resolve</em>:
      </p>
      <p>
        Если промисов несколько, Event Loop будет брать их из очереди сразу и все подряд {LONG_DASH} у них приоритет.
        Если бы в очереди было 1000 промисов {LONG_DASH} они все выполнялись бы строго друг за другом.
      </p>
      <p>
        Подробнее про промисы рекомендую ознакомиться в отдельной статье{' '}
        <ExternalLink href='https://dtsiki.github.io/blog/ru/promises' label='отдельной статье' /> про них.
      </p>
    </section>
  );
});

SinglePromiseExample.displayName = 'SinglePromiseExample';
