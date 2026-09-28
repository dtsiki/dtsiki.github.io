import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { EventLoopAnimation } from '../../EventLoopAnimation';
import { AnimationDemo } from '../../EventLoopAnimation.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getConsoleLog, getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 11;

export const RaceExample = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseRaceExampleCode = `console.log('Делаем ставки');

Promise.race([
    fetch('https://www.google.com').then(() => console.log('Гугл ответил')),
    fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
  ])
  .then(() => {
    console.log('Гонка завершена');
  });

console.log('Ставки сделаны');`;

  const promiseRaceExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Гонка завершена
Гугл ответил`;

  const promiseAllExampleCode = `console.log('Делаем ставки');

Promise.all([
    fetch('https://www.google.com').then(() => console.log('Гугл ответил')),
    fetch('https://www.yandex.ru').then(() => console.log('Яндекс ответил')),
  ])
  .then(() => {
    console.log('Гонка завершена');
  });

console.log('Ставки сделаны');`;

  const promiseAllExampleLog = `Делаем ставки
Ставки сделаны
Яндекс ответил
Гугл ответил
Гонка завершена`;

  return (
    <section ref={ref} id='promise_race' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Гонка запросов</div>
      </div>
      <p>
        Методы работа с коллекциями промисов <InlineCode>Promise.race()</InlineCode>,{' '}
        <InlineCode>Promise.all()</InlineCode>, <InlineCode>Promise.allSettled()</InlineCode> и{' '}
        <InlineCode>Promise.any()</InlineCode> по-разному собирают результаты и по-разному реагируют на завершение
        промисов. Они сами не создают дополнительных асинхронных операций, а только комбинируют уже запущенные промисы.
      </p>
      <p>
        Расмотрим гонку запросов на примере метода <InlineCode>Promise.race()</InlineCode>. Этот метод возвращает промис
        с результатом первого завершённого из переданных промисов и неважно, оказался ли он успешным или завершился с
        ошибкой. Остальные же промисы будут продолжаться выполняться в фоне, гонка будет продолжаться, но результаты
        других промисов будут уже проигнорированы.
      </p>
      <p>Итак, дамы и господа, делаем ставки:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseRaceExampleCode} name={`example(${EXAMPLE_NUMBER})`} />
      <p>Одним из вариантов вывода в консоль здесь может быть:</p>
      <ExampleSnippet code={promiseRaceExampleLog} />
      <p>
        Если Гугл ответит первым, то изменится только одна строчка вывода, но сообщение «Гонка завершена» всё равно
        будет всегда предпоследней, а не последней. Почему же так?
      </p>
      <p>Разберём пошагово:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Первая строчка синхронного кода {getConsoleLog('Делаем ставки')} попадает в стек вызовов, выполняется, в
            консоли появится {getTextWithChevrons('Делаем ставки')}, затем функция удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Доходим до промиса <InlineCode>Promise.race()</InlineCode>. Сама по себе эта операция синхронная и попадёт в
            стек вызовов: выполнится и удалится из стека вызовов. Создаётся промис, внутри начинается перебор массива.
            Во время этого перебора создадутся два промиса {LONG_DASH} по количеству запросов, сами запросы уйдут
            выполняться в Web API (см. следующий шаг). Колбэк <InlineCode>Promise.race()</InlineCode> просто
            регистрируется и никуда не отправляется. Он попадёт в очередь микрозадач только когда промис{' '}
            <InlineCode>Promise.race()</InlineCode> зарезолвится т.е. как только первый из переданных промисов с{' '}
            <InlineCode>fetch()</InlineCode> завершится (любым статусом).
          </p>
        </li>
        <li className='list__item'>
          <p>
            Выполнятся два <InlineCode>fetch()</InlineCode> в следующей последовательности каждый: сперва в стек вызовов
            попадёт вызов функции <InlineCode>fetch()</InlineCode> потому что это синхронная операция, затем в Web API
            появится запрос, <InlineCode>fetch()</InlineCode> возвращает промис в состоянии <em>pending</em>, затем{' '}
            <InlineCode>fetch()</InlineCode> удалится из стека вызовов. У каждого запроса есть свой колбэк. Эти колбэки
            попадут в очередь микрозадач только когда соответствующий запрос завершится. Пока что метод
            <InlineCode>then</InlineCode> будет вызван синхронно на возвращённом промисе только чтобы зарегистрировать
            колбэк.
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
            Стек вызовов пуст, а Event Loop ждёт. Дальше всё зависит от того, какой сервер ответит первым. Допустим,
            Яндекс ответил быстрее. Web API получает ответ от Яндекса, колбэк этого запроса с{' '}
            {getConsoleLog('Яндекс ответил')} отправляется в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop видит, что очередь микрозадач не пустая и забирает оттуда задачу: переносит колбэк запроса в стек
            вызовов, выполняет его, в консоли появится {getTextWithChevrons('Яндекс ответил')}, колбэк удаляется из
            стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Как только первый промис завершился, а это как раз и произошло, <InlineCode>Promise.race()</InlineCode>{' '}
            переходит в состояние <em>resolved</em>, а его колбэк попадает в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop забирает следующую микрозадачу: переносит колбэк в стек вызовов, выполняет его, в консоли
            появится {getTextWithChevrons('Гонка завершена')}, колбэк удаляется из стека вызовов.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Думаете всё? А вот и нет. Web API получает ответ от оставшийся запрос, он же же никуда не отменился. Колбэк
            с {getConsoleLog('Гугл ответил')} отправляется в очередь микрозадач.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Event Loop забирает последнюю микрозадачу: переносит колбэк в стек вызовов, выполняет его, в консоли
            появится {getTextWithChevrons('Гугл ответил')}, колбэк удаляется из стека вызовов.
          </p>
        </li>
      </ol>
      <EventLoopAnimation demo={AnimationDemo.PROMISE_RACE} />
      <p>
        Что изменилось, если бы в примере выше использовали не <InlineCode>Promise.race()</InlineCode>, а, например,{' '}
        <InlineCode>Promise.all()</InlineCode>?
      </p>
      <CodeSnippet code={promiseAllExampleCode} lang={ECodeLang.JAVASCRIPT} />
      <p>
        Этот метод ожидает выполнения <em>всех</em> промисов. Поэтому в этом случае вывод был бы таким (если оба запроса
        выполнились бы без ошибок):
      </p>
      <ExampleSnippet code={promiseAllExampleLog} />
      <p>
        Почему так: потому что здесь <InlineCode>Promise.all()</InlineCode> ждёт <strong>все</strong> промисы, и{' '}
        <InlineCode>then()</InlineCode> выполнится только после того, как <strong>оба</strong> запроса завершатся.
      </p>
    </section>
  );
});

RaceExample.displayName = 'RaceExample';
