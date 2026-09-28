import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 8;

export const AsyncFunctionsExample = forwardRef<HTMLDivElement>((_, ref) => {
  const asyncFunctionsExampleCode = `async function doSomethingAsync() {
  console.log('Сделать то');
  await doAnotherAsync();
  console.log('Сделать пятое, сделать десятое');
}

async function doAnotherAsync() {
  console.log('Сделать сё');
}

doSomethingAsync();`;

  const asyncFunctionsExampleLog = `Сделать то
Сделать сё
Сделать пятое, сделать десятое`;

  return (
    <section ref={ref} id='call_stack' className='section inner'>
      <p>
        Теперь можно разобрать, что же на самом деле значат <InlineCode>async</InlineCode> и{' '}
        <InlineCode>await</InlineCode>. Это синтаксический сахар для работы с промисами, который делает асинхронный код
        похожим на синхронный, но при этом:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>
            <InlineCode>async</InlineCode> перед функцией означает, что функция <strong>всегда</strong> возвращает
            промис
          </p>
        </li>
        <li className='list__item'>
          <p>
            <InlineCode>await</InlineCode> <strong>останавливает</strong> выполнение функции внутри себя, пока{' '}
            <strong>этот промис</strong> не вернёт результат
          </p>
        </li>
        <li className='list__item'>
          <p>
            всё, что находится после <InlineCode>await</InlineCode>, выполнится позже {LONG_DASH} когда промис
            завершится
          </p>
        </li>
      </ul>
      <p>На примере будет понятнее.</p>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Асинхронные функции</div>
      </div>
      <p>
        Не забыли пример из начала статьи с{' '}
        <a href='#sync_functions' className='link'>
          двумя простыми функциями
        </a>
        ? Немного его переделаем и сделаем эти же функции асинхронными с помощью синтаксиса{' '}
        <InlineCode>async</InlineCode>/<InlineCode>await</InlineCode>. Получится такой код:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={asyncFunctionsExampleCode}
        customName={`example(${EXAMPLE_NUMBER}).js`}
      />
      <p className='spacer top medium'>В консоли выведется следующее:</p>
      <ExampleSnippet code={asyncFunctionsExampleLog} />
      <p className='spacer top medium'>
        В примере с обычными функциями Event Loop не участвовал в процессе, а здесь же всё будет наоборот. Пройдёмся по
        шагам:
      </p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            <i>Объявления</i> функций в стек вызовов не попадают. Это правило касается и асинхронных функций. Поэтому
            объявления функций <InlineCode>doSomethingAsync</InlineCode> и <InlineCode>doAnotherAsync</InlineCode>{' '}
            просто пропускаем.
          </p>
        </li>
        <li className='list__item'>
          <p>
            После объявления асинхронных функций доходим до <i>вызова</i> функции{' '}
            <InlineCode>doSomethingAsync</InlineCode>. Она вызывается синхронно и тем самым попадает в стек вызовов.
            Первая строка в ней {LONG_DASH} функция {getConsoleLog('Сделать то')}: выполняется, попадает в стек вызовов
            после <InlineCode>doSomethingAsync</InlineCode>, в консоли выводится {getTextWithChevrons('Сделать то')},
            функция {getConsoleLog('Сделать то')} удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Следующая строка {LONG_DASH} вызов асинхронной функции <InlineCode>doAnotherAsync</InlineCode>. Хоть там и
            стоит <InlineCode>await</InlineCode> перед функцией, вызов функции сам по себе синхронный, поэтому вложенная
            асинхронная функция <InlineCode>doAnotherAsync</InlineCode>, как и в{' '}
            <a href='#sync_functions' className='link'>
              примере с обычными функциями{' '}
            </a>
            , отправляется в стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Внутри <InlineCode>doAnotherAsync</InlineCode> находится функция {getConsoleLog('Сделать сё')}, которая тоже
            отправляется в стек, выполняется, в консоли выводится текст {getTextWithChevrons('Сделать сё')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Функция <InlineCode>doAnotherAsync()</InlineCode> завершается. Она возвращает значение{' '}
            <InlineCode>undefined</InlineCode>, обёрнутое в промис или
            <InlineCode>Promise.resolve(undefined)</InlineCode>, но это тут неважно. Затем функция удаляется из стека
            вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Промис на шаге выше вернул <InlineCode>undefined</InlineCode>, но почему это не имеет значения? Потому что
            здесь <InlineCode>await</InlineCode> достаточно увидеть, что промис в функции{' '}
            <InlineCode>doAnotherAsync()</InlineCode> был выполнен. Это служит индикатором, что можно продолжать, но
            прежде, нужно код после <InlineCode>await</InlineCode> обернуть в микрозадачу и отправить в очередь
            микрозадач. Здесь это функция {getConsoleLog('Сделать пятое, сделать десятое')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Доходим до конца функции <InlineCode>doSomethingAsync()</InlineCode>, она завершается и удаляется из стека
            вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст, Event Loop идёт обрабатывать очередь микрозадач, там лежит{' '}
            {getConsoleLog('Сделать пятое, сделать десятое')}. Эта функция переходит в стек вызовов, выполняется, в
            консоли наконец-то выводится {getTextWithChevrons('Сделать пятое, сделать десятое')}, функция удаляется из
            стека вызовов.
          </p>
        </li>
      </ol>
      <EventLoopAnimation demo={AnimationDemo.ASYNC_FUNCTIONS} />
    </section>
  );
});

AsyncFunctionsExample.displayName = 'AsyncFunctionsExample';
