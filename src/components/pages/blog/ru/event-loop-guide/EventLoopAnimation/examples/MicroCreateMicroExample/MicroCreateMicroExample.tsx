import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';

const EXAMPLE_NUMBER = 15;

export const MicroCreateMicroExample = forwardRef<HTMLDivElement>((_, ref) => {
  const infiniteMicrotaskLoopExampleCode = `let counter = 0;

function infiniteMicrotaskLoop() {
  // Добавляем микрозадачу, которая добавляет новую микрозадачу
  Promise.resolve().then(() => {
    counter++;
    // Обновляем текст на странице (но это никогда не отрендерится)
    document.getElementById('counter').textContent = counter;

    // Рекурсивно добавляем следующую микрозадачу
    infiniteMicrotaskLoop();
  });
}

infiniteMicrotaskLoop();`;

  const safeMicrotaskLoopExampleCode = `function safeLoop() {
  if (!isRunning) return;

  // Работаем в синхронном коде
  counter++;
  document.getElementById('counter').textContent = counter;

  // Разрываем цепочку через макрозадачу
  setTimeout(safeLoop, 0);
}`;

  const safeAnimationLoop = `function animationLoop() {
  if (!isRunning) return;

  counter++;
  document.getElementById('counter').textContent = counter;

  // Следующий кадр анимации (до рендеринга)
  requestAnimationFrame(animationLoop);
}`;

  return (
    <section ref={ref} className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Микрозадачи, создающие микрозадачи</div>
      </div>
      <p>
        Повышаем уровень сложности: рассмотрим пример, в котором микрозадачи (промисы), которые создают другие
        микрозадачи (промисы).
      </p>
      <p>
        <strong>Осторожно: бесконечные микрозадачи!</strong> Если внутри микрозадачи создавать новую микрозадачу, Event
        Loop может застрять в бесконечном цикле. В этом случае браузер никогда не дойдёт до фазы рендеринга и интерфейс
        зависнет.
      </p>
      <p>
        Это классическая ошибка при работе с промисами и/или <InlineCode>queueMicrotask()</InlineCode>:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={infiniteMicrotaskLoopExampleCode}
        customName='DO_NOT_DO_THIS(3).js'
      />
      <p className='spacer top medium'>Чтобы избежать этого можно:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>
            использовать макрозадачи для разрыва цепочки микрозадач. Отлично подойдут таймеры с нулевой задержкой{' '}
            <InlineCode>setTimeout(callback, 0)</InlineCode>:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={safeMicrotaskLoopExampleCode} customName='DO_THIS(1).js' />
        </li>
        <li className='list__item'>
          <p>
            использовать <InlineCode>requestAnimationFrame</InlineCode> для разрыва цепочки, чтобы дать браузеру
            возможность обновить экран:
          </p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={safeAnimationLoop} customName='DO_THIS(2).js' />
        </li>
        <li className='list__item'>
          <p>Следить за количеством микрозадач и не допускать застревания Event Loop в очереди микрозадач.</p>
        </li>
      </ul>
    </section>
  );
});

MicroCreateMicroExample.displayName = 'MicroCreateMicroExample';
