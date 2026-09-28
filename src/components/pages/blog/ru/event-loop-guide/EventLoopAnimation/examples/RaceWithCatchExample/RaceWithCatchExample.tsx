import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 12;

export const RaceWithCatchExample = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseAllCatchErrorExampleCode = `console.log('Делаем ставки');

Promise.all([
  fetch('https://www.google.google').then(() => console.log('Гугл ответил')),
  fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
])
  .then(() => {
    console.log('Гонка завершена');
  })
  .catch((error) => {
    console.log('Авария на гонке:', error);
  });

console.log('Ставки сделаны');`;

  const promiseAllCatchErrorExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Авария на гонке: TypeError: NetworkError when attempting to fetch resource.
Яндекс ответил`;

  return (
    <section ref={ref} id='promise_race_with_catch' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Обработка ошибок</div>
      </div>
      <p>
        До этого мы ещё не рассматривали обработку ошибок. Рассмотрим поведение <InlineCode>Promise.all()</InlineCode> с
        обработкой ошибки:
      </p>
      <CodeSnippet
        code={promiseAllCatchErrorExampleCode}
        lang={ECodeLang.JAVASCRIPT}
        name={`example(${EXAMPLE_NUMBER})`}
      />
      <p className='spacer top medium'>
        Главный нюанс здесь в том, первый запрос гарантированно упадёт с ошибкой, потому что такого домена не
        существует:
      </p>
      <ExampleSnippet code={promiseAllCatchErrorExampleLog} />
      <p>Давайте разберём по шагам:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p>
            Первая строчка синхронного кода {getConsoleLog('Делаем ставки')} попадёт в стек вызовов, ввыполнится, в
            консоли появится {getTextWithChevrons('Делаем ставки')}, затем функция удалится из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Встречается <InlineCode>Promise.all()</InlineCode>. Сама операция попадёт в стек вызовов, выполнится,
            удалится из стека вызовов. Создадутся два промиса, запросы в каждом уйдут в Web API, при этом первый запрос
            упадёт, т.к. такой домен не существует, а второй успешно выполнится.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Регистрируются колбэки для каждого запроса, но каждый из них попадёт в очередь микрозадач только когда
            соответствующий запрос завершится.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Регистрируются колбэки <InlineCode>Promise.all()</InlineCode>, их здесь два. Первый колбэк попадёт в очередь
            микрозадач если все промисы завершатся успешно, а второй если хотя бы один промис завершится ошибкой. Важно
            помнить, что <InlineCode>Promise.all()</InlineCode> зарезолвится (или упадёт) только когда{' '}
            <strong>все</strong> промисы завершатся.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполняется последняя строчка синхронного кода {getConsoleLog('Ставки сделаны')} попадёт в стек вызовов,
            ввыполнится, в консоли появится {getTextWithChevrons('Ставки сделаны')}, затем функция удалится из стека
            вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Стек вызовов пуст, Event Loop ждёт ответы от серверов. Теперь начинается самое интересное! Сначала приходит
            ошибка от первого запроса. Web API получает ошибку и промис переходит в состояние <em>rejected</em>. Колбэк
            же с {getConsoleLog('Гугл ответил')} <strong>НЕ</strong> вызывается, потому что промис упал.
          </p>
          <p>
            <InlineCode>Promise.all()</InlineCode> получает первую ошибку, ему этого достаточно для того чтобы
            немедленно перейти в состояние <em>rejected</em> (даже если другие промисы ещё не завершились). Колбэк из{' '}
            <InlineCode>catch</InlineCode> отправляется в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop забирает микрозадачу: переносит в стек вызовов, выполняется вывод в консоль{' '}
            {getTextWithChevrons('Авария на гонке: TypeError: ...')}, колбэк удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Второй запрос никуда не делся. Через некоторое время приходит успешный ответ от Яндекса. Web API переносит
            соответствующий колбэк в очередь микрозадач. Event Loop забирает последнюю микрозадачу, переносит в стек
            вызовов, выполняет, в консоли появляется {getTextWithChevrons('Яндекс ответил')}.
          </p>
        </li>
      </ol>
      <p>
        Колбэк c выводом {getConsoleLog('Гонка завершена')} здесь не выполнится, потому что промис{' '}
        <InlineCode>Promise.all()</InlineCode> перешёл в состояние <em>rejected</em> при первой же ошибке, и после этого
        он уже никогда не перейдёт в <em>fulfilled</em>, даже если потом Яндекс успешно ответит. Этот колбэк выполнился
        бы только если бы оба промиса завершились успешно. Если нужно дождаться всех промисов, даже с ошибками, можно
        использовать <InlineCode>Promise.allSettled()</InlineCode>.
      </p>
    </section>
  );
});

RaceWithCatchExample.displayName = 'RaceWithCatchExample';
