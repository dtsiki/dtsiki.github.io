import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { Note } from 'src/components/common/Note';
import { InlineCode } from 'src/components/blog/InlineCode';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 4;

export const SingleTimeoutWithDelayExample = forwardRef<HTMLDivElement>((_, ref) => {
  const simpleTimeoutExampleCode = `console.log('Раз');

setTimeout(() => {
  console.log('Два');
}, 5000);

console.log('Три');`;

  const simpleTimeoutExampleLog = `Раз
Три
Два`;

  return (
    <section ref={ref} id='timeout_with_delay' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Таймер с задержкой</div>
      </div>
      <p>Рассмотрим следующий пример:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={simpleTimeoutExampleCode}
        name={`example(${EXAMPLE_NUMBER})`}
        consoleLog={simpleTimeoutExampleLog}
      />
      <p>
        В выводе в консоль нет ошибки: {getTextWithChevrons('Два')} выведется позже, чем {getTextWithChevrons('Три')}.
        Этот пример классическая иллюстрация того, как работает асинхронность в JavaScript. Разберём этот пример по
        шагам:
      </p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Первая строчка синхронного кода {getConsoleLog('Раз')} попадёт в стек вызовов, выполнится, в консоли
            выведется {getTextWithChevrons('Раз')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Доходим до <InlineCode>setTimeout</InlineCode>. Сам по себе вызов этой функции — синхронная операция,
            поэтому <InlineCode>setTimeout</InlineCode> появится в стеке вызовов, выполнится и удалиться. JavaScript при
            этом понимает, что нужно запустить таймер в Web API. Там таймер будет тикать независимо от основного потока,
            а JavaScript продолжит дальше идти по коду. Колбэк таймера при этом не выполняется сразу и пока что никуда
            не попадает, а ждёт завершения таймера.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Код выполняется дальше, доходим до {getConsoleLog('Три')}, функция попадёт в стек вызовов, выполнится, в
            консоли выведется {getTextWithChevrons('Три')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В Web API всё это время тикал таймер, не блокируя при этом основной поток. Проходит примерно 5 секунд{' '}
            {LONG_DASH} указанная задержка в таймере плюс минус различные факторы, влияющие косвенно на общее время
            обработки процессов. Браузер замечает, что таймер истёк, и перемещает колбэк таймера в очередь макрозадач.
          </p>
          <Note>
            <p>
              <strong>Важно:</strong> макрозадача появляется уже после того, как Web API закончил работу. Все
              макрозадачи это колбэки, которые дождались перемещения в очередь макрозадач, где будут ждать своего
              звёздного часа — когда Event Loop заберёт их в стек вызовов для выполнения.
            </p>
          </Note>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст. По алгоритму нужно проверить очередь микрозадач и выполнить оттуда <strong>ВСЕ</strong>{' '}
            микрозадачи, но там ничего нет. Затем по алгоритму нужно проверить очередь макрозадач и взять оттуда на
            выполнение <strong>ОДНУ</strong> микрозадачу — там лежит колбэк, который передавали с
            <InlineCode>setTimeout</InlineCode>. Event Loop берёт его из очереди макрозадач и перемещает в стек вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            В стеке вызовов появляется колбэк — {getConsoleLog('Два')}: выполняется, в консоли выводится{' '}
            {getTextWithChevrons('Два')} и затем удаляется из стека вызовов.
          </p>
        </li>
      </ol>
      <p>Без лишних слов {LONG_DASH} демо:</p>
      <EventLoopAnimation demo={AnimationDemo.SINGLE_TIMEOUT} />
    </section>
  );
});

SingleTimeoutWithDelayExample.displayName = 'SingleTimeoutWithDelayExample';
