import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { Accordion } from 'src/components/common/Accordion';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 9;

export const ComplexExample = forwardRef<HTMLDivElement>((_, ref) => {
  const complexExampleCode = `async function doSomethingAsync() {
  console.log('Раз');
  await doAnotherAsync();
  console.log('Два');
}

async function doAnotherAsync() {
  console.log('Три');
}

console.log('Четыре');

setTimeout(() => {
  console.log('Пять');
}, 0);

doSomethingAsync();

new Promise((resolve) => {
  console.log('Шесть');
  resolve();
}).then(() => {
  console.log('Семь');
});

console.log('Восемь');`;

  const complexExampleLog = `Четыре
Раз
Три
Шесть
Восемь
Два
Семь
Пять`;

  return (
    <section ref={ref} id='async_functions' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Всё и сразу: асинхронные функции, интервал, цепочка промисов</div>
      </div>
      <p>Разберём комплексный пример, в котором смешано всё и сразу:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={complexExampleCode} name={`example(${EXAMPLE_NUMBER})`} />
      <p>
        Здесь написать порядок вывода в косоль будет уже задачей со звёздочкой. Предлагаю сперва подумать, а потом уже
        открывать ответ. Готовы?
      </p>
      <Accordion title='Правильный ответ'>
        <ExampleSnippet code={complexExampleLog} />
        <p>Для удобства разделим весь процесс на 3 этапа:</p>
        <p>
          <b>Этап 1. Синхронный</b>
        </p>
        <p>
          Сперва будет выполняться весь синхронный код. Отсюда что-то может отправляться в очереди или Web API по
          надобности.
        </p>
        <ol className='list stepped'>
          <li className='list__item'>
            <p>
              Объявления асинхронных функций <InlineCode>doSomethingAsync</InlineCode> и{' '}
              <InlineCode>doAnotherAsync</InlineCode> в сам стек вызовов не попадают пока функции не начнут вызывать,
              поэтому их просто пропускаем.
            </p>
          </li>
          <li className='list__item'>
            <p>
              <p>
                После объявления асинхронных функций доходим до первой строчки синхронного кода {LONG_DASH}
                {getConsoleLog('Четыре')}. Она попадёт в стек вызовов, выполнится, в консоли появится{' '}
                {getTextWithChevrons('Четыре')}, затем функция удалится из стека вызовов.
              </p>
            </p>
          </li>
          <li className='list__item'>
            <p>
              Далее по коду таймер <InlineCode>setTimeout</InlineCode>. Без разницы какая здесь будет указана задержка{' '}
              {LONG_DASH} сам таймер в любом случае отправится в Web API, а колбэк в какой-то момент времени (не сразу,
              даже если у таймера нулевая задержка) будет перемещён в очередь макрозадач.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Наконец-то вызывается функция <InlineCode>doSomethingAsync</InlineCode>: попадает по всем правила в стек
              вызовов и начинает выполняться построчно. Код внутри неё до первого слова <InlineCode>await</InlineCode>{' '}
              выполняется синхронно. Поэтому успеет выполниться только {getConsoleLog('Раз')}: отправится тоже в стек
              вызовов, выполниться, в консоли появится {getTextWithChevrons('Раз')}, из стек вызовов удалится{' '}
              <InlineCode>await</InlineCode>.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Продолжает дальше выполняться содержимое функции <InlineCode>doSomethingAsync</InlineCode>, движок доходит
              до строчки <InlineCode>await doAnotherAsync()</InlineCode>. Функция{' '}
              <InlineCode>doAnotherAsync</InlineCode> вызывается, попадает в стек и начинается выполняться. Внутри лежит{' '}
              {getConsoleLog('Три')}, там уже всё понятно: стек вызовов, консол,
              {getTextWithChevrons('Три')}, вон из стека вызовов. Функция{' '}
              <InlineCode>await doAnotherAsync()</InlineCode> полностью выполнена, удаляется из стека вызовов.
            </p>
            <p>
              После <InlineCode>await</InlineCode> выполнение <InlineCode>doSomethingAsync</InlineCode>{' '}
              приостанавливается, а оставшаяся часть с {getConsoleLog('Два')}
              оборачивается в микрозадачу и уходит в соответствующую очередь.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Синхронный код продолжается. Далее создаётся новый промис {LONG_DASH} это синхронная операция: стек
              вызовов, выполнение, вон из стека вызовов. Затем начнёт выполнится функция-исполнитель, переданная при
              создании промиса. Туда передали {getConsoleLog('Шесть')}: в консоли появляется{' '}
              {getTextWithChevrons('Шесть')}. После этого выполняется <InlineCode>resolve()</InlineCode>, а колбэк{' '}
              <InlineCode>then</InlineCode> c {getConsoleLog('Семь')} попадает в очередь микрозадач.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Последняя строчка синхронного кода {LONG_DASH} {getConsoleLog('Восемь')}, в консоли появится{' '}
              {getTextWithChevrons('Восемь')}, синхронный код закончился.
            </p>
          </li>
          <li className='list__item'>
            <p>Стек вызовов пуст.</p>
          </li>
        </ol>
        <p>
          <b>Этап 2. Микрозадачи</b>
        </p>
        <p>Синхронный код весь выполнен, теперь Event Loop просыпается и переходит к обработке микрозадач:</p>
        <ol className='list stepped'>
          <li className='list__item'>
            <p>
              В очереди микрозадач сейчас 2 задачи: {getConsoleLog('Два')} из <InlineCode>doSomethingAsync</InlineCode>{' '}
              после <InlineCode>await</InlineCode> и {getConsoleLog('Семь')} из <InlineCode>then</InlineCode> промиса.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Event Loop забирает микрозадачи по очереди. Поэтому сперва берётся {getConsoleLog('Два')}, перемешается в
              стек вызовов, выполняется, в консоли выводится наконец-то {getTextWithChevrons('Два')}, функция удаляется
              из стека вызовов.
            </p>
          </li>
          <li className='list__item'>
            <p>
              Затем из очереди микрозадач берётся {getConsoleLog('Семь')} и делается всё тоже самое. В консоли выводится
              наконец-то {getTextWithChevrons('Семь')}.
            </p>
          </li>
          <li className='list__item'>
            <p>Очередь микрозадач пуста.</p>
          </li>
        </ol>
        <p>
          <b>Этап 3. Макрозадачи</b>
        </p>
        <p>Переходим к последнему этапу {LONG_DASH} к обработке макрозадач:</p>
        <ol className='list stepped'>
          <li className='list__item'>
            <p>
              В очереди макрозадачи лежит колбэк из <InlineCode>setTimeout</InlineCode>. Event Loop забирает{' '}
              {getConsoleLog('Пять')} в стек вызовов, выполняет, выводится {getTextWithChevrons('Пять')},{' '}
              {getConsoleLog('Пять')} удаляется из стека вызовов.
            </p>
          </li>
          <li className='list__item'>
            <p>
              В очереди макрозадач Event Loop больше ничего не может брать в работу (но там ничего и нет). Очередь
              микрозадач тоже пустая. Цикл завершает работу.
            </p>
          </li>
        </ol>
      </Accordion>
    </section>
  );
});

ComplexExample.displayName = 'ComplexExample';
