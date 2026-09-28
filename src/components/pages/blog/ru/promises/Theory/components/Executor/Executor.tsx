import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { InlineHint } from 'src/components/common/InlineHint';
import { LONG_DASH } from 'src/constants';
import {
  catchInline,
  fulfilledEm,
  getRejectInline,
  getResolveInline,
  pendingEm,
  promiseResultInline,
  promiseStateInline,
  rejectedEm,
  thenInline,
} from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';

export const Executor = forwardRef<HTMLDivElement>((_, ref) => {
  const newPromiseConstructorSnippetCode = `const promise = new Promise(executor);

function executor(resolve, reject) {
  // Здесь что-то делаем
}`;

  const newPromiseConstructor2SnippetCode = `const promise = new Promise(executor);

function executor(resolve, reject) {
  // Здесь что-то делаем
  // Затем resolve() и/или reject()
}`;

  const executorResolveSnippetCode = `const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  resolve('Успешный успех');
});`;

  const executorRejectSnippetCode = `const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  reject(new Error('Ой-ой, ошибочка'));
});`;

  const resolveValuesSnippetCode = `new Promise((resolve) => resolve());
new Promise((resolve) => resolve(42));
new Promise((resolve) => resolve({ id: 42, name: 'dtsiki', isAwesome: true }));

const innerPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Допустим, это сетевой запрос'), 1000);
});

new Promise((resolve) => resolve(innerPromise));`;

  const rejectValuesBadPracticeSnippetCode = `new Promise((resolve, reject) => {
  reject('Какая-то ошибка доступа');
});

new Promise((resolve, reject) => {
  reject(404);
});`;

  const rejectValuesSnippetCode = `new Promise((resolve, reject) => {
  reject(new Error('Что-то пошло не так'));
})`;

  const executorResolveRejectSnippetCode = `const promise = new Promise((resolve, reject) => {
  resolve('Успешный успех'); // Выполнится
  reject('Ой-ой, ошибочка'); // Не выполнится
  resolve('Снова успешный успех'); // Тоже не выполнится
});`;

  const executorWithoutRejectResolveSnippetCode = `const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
});

console.log(promise);`;

  const executorShouldResolveSnippetCode = `const promise = new Promise((resolve, reject) => {
  const shouldResolve = false;

  if (shouldResolve) {
    resolve('Успешный успех');
  }
});`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Управление состоянием промиса</h3>
      <p>
        Промис создается через конструктор <InlineCode>new Promise</InlineCode>, внутрь которого передаётся
        функция-исполнитель <em>executor</em>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={newPromiseConstructorSnippetCode} />
      <p>
        Функция-исполнитель запускается синхронно, сразу же в момент создания промиса (см.{' '}
        <a href='https://dtsiki.github.io/blog/ru/event-loop-guide' className='link'>
          статью про Event Loop
        </a>
        ). Она нужна всего для двух вещей:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p className='list__title'>запустить вложенную операцию</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>обработать её результат</p>
        </li>
      </ol>
      <p>Всё!</p>
      <p>
        Функция-исполнитель не обязана быть асинхронной, промис может вообще и не запускать асинхронную операцию. А вот
        методы обработки результата, {thenInline} и {catchInline}, выполняются асинхронно, через очередь микрозадач. Но
        до них мы ещё дойдём. В любом случае, какой бы код ни содержала функция-исполнитель, она не ждёт его выполнения
        {LONG_DASH} управление идёт дальше.
      </p>
      <p>
        Чтобы обработать результат вложенной операции, когда она выполнится, в функцию-исполнитель передаётся два
        колбэка для управления состоянием промиса {LONG_DASH} {getResolveInline()} и {getRejectInline()}:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={newPromiseConstructor2SnippetCode} />
      <section className='section inner'>
        <p>
          Колбэк {getResolveInline('value')} переводит промис в состояние {fulfilledEm} со значением{' '}
          <InlineCode>value</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={executorResolveSnippetCode} />

        <p>
          Колбэк {getRejectInline('error')} переводит промис в состояние {rejectedEm} с причиной:
          <InlineCode>error</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={executorRejectSnippetCode} />

        <p>
          {getResolveInline()} и {getRejectInline()} могут вызываться в любом месте функции-исполнителя в зависимости от
          логики. При этом в {getResolveInline()} можно передать любое значение: <InlineCode>undefined</InlineCode>,
          число, строку, булево значение, функцию, объект, массив и даже другой промис:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveValuesSnippetCode} />
        <p>
          Что именно происходит, когда в {getResolveInline()} передают другой промис, разберём в подразделе про{' '}
          <a href='#promises_collapsing' className='link'>
            схлопывание
          </a>
          .
        </p>
        <p>
          С {getRejectInline()} ситуация чуть отличается. Технически в него тоже можно передать любое значение{' '}
          {LONG_DASH} оно станет причиной отклонения. Но JavaScript не превращает его в объект{' '}
          <InlineCode>Error</InlineCode>: если передали строку, причиной будет строка; если число {LONG_DASH} число:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={rejectValuesBadPracticeSnippetCode} />
        <p>
          Поэтому хорошей практикой считается передавать экземпляр класса <InlineCode>Error</InlineCode> {LONG_DASH} он
          содержит стек вызовов, что упрощает отладку:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={rejectValuesSnippetCode} />
        <p>
          <strong>Сработает</strong> внутри функции-исполнителя {LONG_DASH} только один колбэк: либо{' '}
          {getResolveInline()}, либо {getRejectInline()}. Более того: сработает может только первый вызов одной из этих
          функций. Любые последующие вызовы {getResolveInline()} или {getRejectInline()} внутри одного промиса
          игнорируются:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={executorResolveRejectSnippetCode} />
      </section>
      <section className='section outer'>
        <p>
          Если забыть вызвать {getResolveInline()} и {getRejectInline()} промис может навсегда остаться в состоянии{' '}
          {pendingEm}:
        </p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={executorWithoutRejectResolveSnippetCode}
          consoleLog='Promise {<pending>}'
        />
        <p>И сколько бы не проверяли этот промис, он всегда будет в состоянии {pendingEm}.</p>
        <p>
          Если {getResolveInline()} и {getRejectInline()} вызываются только при определённом условии, промис тоже может
          зависнуть:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={executorShouldResolveSnippetCode} />
        <p>
          Такие промисы называют <strong>висячими</strong>. С ними стоит быть осторожными: если на висячий промис
          остаются ссылки, он может привести к утечке памяти. А ещё {LONG_DASH} код, который ждёт результата, может так
          его и не дождаться.
        </p>
      </section>
    </section>
  );
});

Executor.displayName = 'Executor';
