import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { getConsoleLog, getTextWithChevrons } from 'src/utils/formatting';
import { LONG_DASH } from 'src/constants';

const EXAMPLE_NUMBER = 1;

export const SyncCodeExample = forwardRef<HTMLDivElement>((_, ref) => {
  const syncExampleCode = `console.log('Сделать то');
console.log('Сделать сё');`;

  const syncExampleLog = `Сделать то
Сделать сё`;

  return (
    <section ref={ref} id='call_stack' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Синхронный код</div>
      </div>
      <p>Для разминки рассмотрим простой пример:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={syncExampleCode}
        customName={`example(${EXAMPLE_NUMBER}).js`}
        consoleLog={syncExampleLog}
      />
      <p className='spacer top medium'>
        Разберём по шагам, что в этот момент происходит в Event Loop (на самом деле Event Loop здесь даже не начинает
        работать):
      </p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Этот код выполняется напрямую в стеке вызовов строго по очереди, строка за строкой. Поэтому его называют
            синхронным. Сперва в стек вызовов попадёт первая строка {LONG_DASH} {getConsoleLog('Сделать то')}:
            выполнится, в консоли выведется текст {getTextWithChevrons('Сделать то')}, затем функция удалится из стека.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Следующая строка {LONG_DASH} {getConsoleLog('Сделать сё')}, снова снова отправится в стек вызовов:
            выполнится, в консоли выведется текст {getTextWithChevrons('Сделать сё')}, затем функция удалится из стека.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пустой. По алгоритму затем проверится очередь микрозадач {LONG_DASH} там пусто, и очередь
            макрозадач {LONG_DASH}
            там тоже ничего нет. Пока что делать больше нечего.
          </p>
        </li>
      </ol>
      <p>
        Всё это можно увидеть визуально в демо ниже {LONG_DASH} просто нажмите кнопку {getTextWithChevrons('Пуск')} и
        наблюдайте:
      </p>
      <EventLoopAnimation demo={AnimationDemo.SYNC_CODE} />
      <p>Выполняются сразу, помимо функции логирования {getConsoleLog()}:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>присвоение переменных</p>
        </li>
        <li className='list__item'>
          <p>математические операции: сложение, умножение, вычитание и т.д.</p>
        </li>
        <li className='list__item'>
          <p>
            циклы: <InlineCode>for</InlineCode>, <InlineCode>while</InlineCode>, <InlineCode>do...whilte</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            условные операторы: <InlineCode>if...else</InlineCode>, <InlineCode>switch</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            конструкции обработки ошибок <InlineCode>try...catch</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            методы работы с массивами: <InlineCode>forEach</InlineCode>, <InlineCode>map</InlineCode>,{' '}
            <InlineCode>filter</InlineCode>, <InlineCode>reduce</InlineCode> и т.д.
          </p>
        </li>
        <li className='list__item'>
          <p>работа с объектами: создание, деструктуризация и обращение к свойствам</p>
        </li>
        <li className='list__item'>
          <p>манипуляции со строками</p>
        </li>
        <li>
          <p>
            вызовы встроенных математических объектов: <InlineCode>Math.random()</InlineCode>,{' '}
            <InlineCode>Math.PI()</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>прямая работа с DOM: поиск элементов, изменение стилей, добавление классов, создание новых узлов</p>
        </li>
      </ul>
      <p>
        Если кратко: в JavaScript к синхронным операциям относится абсолютно всё, что выполняется здесь и сейчас и не
        делегируется внешнему окружению. Даже само по себе создание промисов это тоже синхронная операция.
      </p>
      <p>
        Как уже было замечено выше, если в коде есть только синхронный код, Event Loop даже не вступает в работу. Он
        просто ждёт пока стек опустеет, чтобы взять задачи из очередей.
      </p>
    </section>
  );
});

SyncCodeExample.displayName = 'SyncCodeExample';
