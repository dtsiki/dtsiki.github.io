import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 16;

export const MacroCreateMacroExample = forwardRef<HTMLDivElement>((_, ref) => {
  const macroCreateMacroExampleCode = `console.log('Начало');

setTimeout(() => {
  console.log('Макрозадача раз');

  // Генерируем макрозадачу внутри макрозадачи
  setTimeout(() => {
    console.log('Макрозадача два');
  }, 0);

  Promise.resolve().then(() => {
    console.log('Микрозадача из макрозадачи');
  });
}, 0);

console.log('Конец');`;

  const macroCreateMacroExampleLog = `Начало
Конец
Макрозадача раз
Микрозадача из макрозадачи
Макрозадача два`;

  return (
    <section ref={ref} className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Макрозадачи, создающие макрозадачи</div>
      </div>
      <p>Последний, но не по сложности, пример:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={macroCreateMacroExampleCode}
        hideLines={true}
        name={`example(${EXAMPLE_NUMBER})`}
        consoleLog={macroCreateMacroExampleLog}
      />
      <p className='spacer top medium'>Разберём по шагам что здесь произошло:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p>
            Выполняется синхронная функция {getConsoleLog('Начало')}, в консоли появится текст
            {getTextWithChevrons('Начало')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Доходим до <InlineCode>setTimeout</InlineCode>: таймер отправляется в Web API, хоть у него и стоит 0
            миллисекунд. После этого его колбэк ({getConsoleLog('Макрозадача раз')}, внутренний таймер и промис) уходит
            в очередь макрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется последняя синхронная функция {getConsoleLog('Конец')}, в консоли появится текст{' '}
            {getTextWithChevrons('Конец')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст, Event Loop первым делом идёт в очередь микрозадач и выполняет там всё, что там лежит. У
            нас там ничего нет, поэтому Event Loop идёт в очередь макрозадач и берёт оттуда колбэк таймера и перемещает
            его в стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Начинает выполняться наконец-то содержимое таймера. Сперва выполняется {getConsoleLog('Макрозадача раз')}, в
            консоли появится текст {getTextWithChevrons('Макрозадача раз')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Далее доходим до вложенного таймера. Сам таймер отправляется в Web API, а потом его колбэк появится в
            очереди макрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Далее доходим до промиса. В этом примере он нужен, чтобы показать, что принцип Event Loop не меняется: у
            микрозадач всё ещё будет приоритет. Выполняется промис, его колбэк отправляется в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Колбэк таймера закончился. Event Loop сейчас находится в очереди макрозадач. Он может обработать оттуда
            только одну задачу, что он и сделал. Хоть там и появилась ещё одна задача, его полномочия здесь всё. Теперь
            он идёт на следующий круг {LONG_DASH} идёт проверять очередь микрозадач. Там появилась задача, которую он
            перемещает в стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стек вызовов попадает колбэк промиса {getConsoleLog('Микрозадача из макрозадачи')}, в консоли появляется
            текст {getTextWithChevrons('Микрозадача из макрозадачи')}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop надо выполнить все задачи из очереди микрозадач, но их больше нет, поэтому можно идти обработать
            одну задачу из очереди макрозадач. Наконец-то в консоли появится текст{' '}
            {getTextWithChevrons('Макрозадача два')}.
          </p>
        </li>
      </ol>
      <p>
        Иногда может потребоваться рекурсивный <InlineCode>setTimeout</InlineCode> для контролируемого повторения задач
        с гарантированным интервалом времени между их фактическим выполнением. При этом, если в случае рекурсивных
        промисов легко вляпаться в бесконечный цикл, то в случае с макрозадачами такой проблемы нет. Такая цепочка
        никогда не переполнит стек вызовов так как каждая новая макрозадача выполняется в абсолютно чистом и пустом
        стеке, поскольку предыдущая функция к этому моменту уже полностью завершилась и вышла из стека.
      </p>
    </section>
  );
});

MacroCreateMacroExample.displayName = 'MacroCreateMacroExample';
