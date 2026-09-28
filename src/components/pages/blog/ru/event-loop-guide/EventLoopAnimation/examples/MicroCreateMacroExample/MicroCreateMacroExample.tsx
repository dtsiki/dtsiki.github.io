import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { Accordion } from 'src/components/common/Accordion';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 13;

export const MicroCreateMacroExample = forwardRef<HTMLDivElement>((_, ref) => {
  const microCreateMacroExampleCode = `Promise.resolve().then(() => {
  console.log('Начало микрозадачи');

  setTimeout(() => {
    console.log('setTimeout внутри промиса (макрозадача)');
  }, 0);

  console.log('Конец микрозадачи');
});

console.log('Просто вывод');`;

  const microCreateMacroExampleLog = `Просто вывод
Начало микрозадачи
Конец микрозадачи
setTimeout внутри промиса (макрозадача)`;

  return (
    <section ref={ref} className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Микрозадачи, создающие макрозадачи</div>
      </div>
      <p>Начнём с более простого примера: микрозадача (промис) создаёт макрозадачу (таймер):</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={microCreateMacroExampleCode}
        hideLines={true}
        name={`example(${EXAMPLE_NUMBER})`}
      />
      <p className='spacer top medium'>Предлагаю предсказать вывод, прежде чем читать дальше.</p>
      <Accordion title='Правильный ответ' children={<ExampleSnippet code={microCreateMacroExampleLog} />} />
      <p>Разберём по шагам что здесь произошло:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Промис попадает в стек: выполняется, создаётся уже сразу <em>fulfilled</em>-промис, колбэк отправляется
            (почти) сразу в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Далее {getConsoleLog('Просто вывод')}: попадает как обычно в стек вызовов, выполняется, выводится в консоль{' '}
            {getTextWithChevrons('Просто вывод')}, удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Синхронный код кончился. Стек вызовов пустой. Event Loop идёт в очередь микрозадач, там лежит колбэк
            промиса. Event Loop перемещает его в стек вызовов, колбэк выполняется.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется колбэк промиса <InlineCode>then</InlineCode>. Первой строчкой идёт вывод в консоль{' '}
            {getConsoleLog('Начало микрозадачи')}: отправляется в стек, выполняется, выводится в консоль, удаляется из
            стека.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Продолжает выполняться колбэк промиса <InlineCode>then</InlineCode>. Следующей строчкой идёт{' '}
            <InlineCode>setTimeout</InlineCode>. Таймер отправляется в Web API (помним, что 0 мс этому не помеха, перед
            Web API все равны), там оттикивает свои условные 0 мс, затем Web API отправляет колбэк в очередь макрозадач.
            Продолжается тем временем выполнение колбэка микрозадачи {LONG_DASH} в стек отправится функция{' '}
            {getConsoleLog('Конец микрозадачи')}, выполнится, в консоли выведется{' '}
            {getTextWithChevrons('Конец микрозадачи')}, функция удалится из стека. Колбэк <InlineCode>then</InlineCode>{' '}
            полностью выполнился, он удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пустой. Очередь микрозадач пустая. Event Loop идёт в очередь макрозадач, оттуда перемещает
            колбэк таймера в стек вызовов, он выполняется, в консоли появляется{' '}
            {getTextWithChevrons('setTimeout внутри промиса (макрозадача)')}
          </p>
        </li>
      </ol>
      <p className='spacer bottom large'>
        Таким образом макрозадачи, созданные внутри микрозадач, попадают в конец очереди макрозадач и будут ждать там
        своей очереди. Всё в рамках алгоритма работы Event Loop. А что будет если всё будет ровно наоборот?
      </p>
    </section>
  );
});

MicroCreateMacroExample.displayName = 'MicroCreateMacroExample';
