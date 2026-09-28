import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { Accordion } from 'src/components/common/Accordion';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 14;

export const MacroCreateMicroExample = forwardRef<HTMLDivElement>((_, ref) => {
  const macroCreateMicroExampleCode = `setTimeout(() => {
  console.log('Начало макрозадачи');

  Promise.resolve().then(() => {
      console.log('Промис выполнился (микрозадача внутри макрозадачи)');
  });

  console.log('Конец макрозадачи');
}, 0);

console.log('Просто вывод');

Promise.resolve().then(() => console.log('Промис выполнился (микрозадача снаружи)'));`;

  const macroCreateMicroExampleLog = `Просто вывод
Промис выполнился (микрозадача снаружи)
Начало макрозадачи
Конец макрозадачи
Промис выполнился (микрозадача внутри макрозадачи)`;

  return (
    <section ref={ref} className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Макрозадачи, создающие микрозадачи</div>
      </div>
      <p>Следующий пример: макрозадача (таймер) создаёт промис микрозадачу (промис):</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={macroCreateMicroExampleCode}
        hideLines={true}
        name={`example(${EXAMPLE_NUMBER})`}
      />
      <p className='spacer top medium'>Предлагаю предсказать вывод, прежде чем читать дальше.</p>
      <Accordion title='Правильный ответ' children={<ExampleSnippet code={macroCreateMicroExampleLog} />} />
      <p className='spacer top medium'>Разберём по шагам что здесь произошло:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Код начинается с <InlineCode>setTimeout</InlineCode> {LONG_DASH} таймер отправляется в Web API, хоть у него
            и стоит задержка 0 миллисекунд, колбэк внутри него не выполняется немедленно. После этого колбэк с промисом
            внутри уйдут в очередь макрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            После <InlineCode>setTimeout</InlineCode> в коде {getConsoleLog('Просто вывод')}, он просто отправляется в
            стек вызовов, просто сразу выполняется, просто сразу выводится в консоли{' '}
            {getTextWithChevrons('Просто вывод')} и затем также просто удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Далее в синхронном коде промис. Промис создаётся сразу выполненным успешно {LONG_DASH} это синхронная
            операция, которая пройдёт через стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Метод промиса <InlineCode>then</InlineCode> регистрирует колбэк, а т.к. промис создан уже выполненным
            успешно, то колбэк отправляется в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Синхронный код кончился. Что имеем на данный момент: в очереди микрозадач один колбэк от промиса из
            синхронного кода, в очереди макрозадач один колбэк с промисом внутри от <InlineCode>setTimeout</InlineCode>.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст, Event Loop первым делом идёт в очередь микрозадач и выполняет там всё, что там лежит. У
            нас там колбэк от промиса из синхронного кода. Колбэк{' '}
            {getConsoleLog('Промис выполнился (микрозадача снаружи)')} перемещается в стек вызовов, выполняется, в
            консоли появляется {getTextWithChevrons('Промис выполнился (микрозадача снаружи)')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В очереди микрозадач Event Loop всё выполнил, идёт в очередь макрозадач. Там один колбэк с промисом внутри.
            Event Loop перемещает колбэк в стек вызовов и он начинает выполняться. Первая строчка в колбэке {LONG_DASH}{' '}
            вывод в консоль {getConsoleLog('Начало макрозадачи')}. Далее в колбэке таймера идёт создание выполненного
            промиса. Сама операция создания промиса синхронная и попадает в стек вызовов, быстренько выполняется и сразу
            удаляется. Метод промиса <InlineCode>then</InlineCode> отправляет колбэк в очередь микрозадач. Далее по коду
            колбэка таймера снова вывод в консоль {getConsoleLog('Конец макрозадачи')}. Код колбэка таймера закончился,
            он удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов снова пустой. Event Loop снова идёт по порядку: заглядывает в очередь микрозадач, а там уже
            ждёт колбэк промиса, созданного внутри таймера. Event Loop перемещает{' '}
            {getConsoleLog('Прромис выполнился (микрозадача внутри макрозадачи)')} в стек вызовов, выполняет, в консоли
            выводится {getTextWithChevrons('Промис выполнился(микрозадача внутри макрозадачи)')}, функция удаляется из
            стека вызовов.
          </p>
        </li>
      </ol>
      <p className='spacer bottom large'>
        Что из этого важно вынести: Event Loop не прерывает текущую макрозадачу ради микрозадачи {LONG_DASH} микрозадачи
        накопятся и выполнятся после завершения макрозадачи, хоть у микрозадач и есть приоритет над макрозадачами. При
        этом если в очереди макрозадач есть колбэки, которые ожидают своей очереди, а в процессе выполнения одной из
        макрозадач появились микрозадачи, выполнение оставшихся макрозадач отложится до тех пор, пока все микрозадачи не
        будут выполнены.
      </p>
    </section>
  );
});

MacroCreateMicroExample.displayName = 'MacroCreateMicroExample';
