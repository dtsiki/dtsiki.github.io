import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { allInline, allSettledInline, catchInline, myAllInline, myAllSettledInline, thenInline } from '../../../utils';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const MyPromiseAllSettled = forwardRef<HTMLDivElement>((_, ref) => {
  const allSettledFieldFulfilled = `{ status: 'fulfilled', value: ... }`;

  const allSettledFieldRejected = `{ status: 'rejected', reason: ... }`;

  const methodTemplateSnippetCode = `static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return resolve([]);
      }
    });
  }`;

  const resultsCounterSnippetCode = `const results = new Array(items.length);
let completedCount = 0;`;

  const itemsForEachSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то сделать с результатом
    })
    .catch((error) => {
      // Что-то сделать с ошибкой
    });
});`;

  const thenCallbackSnippetCode = `.then((value) => {
  results[index] = { status: 'fulfilled', value };
})`;

  const catchCallbackSnippetCode = `.catch((error) => {
  results[index] = { status: 'rejected', reason: error };
})`;

  const countAndCheckSnippetCode = `completedCount++;
if (completedCount === items.length) resolve(results);`;

  const callbacksSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      results[index] = { status: 'fulfilled', value };
      completedCount++;
      if (completedCount === items.length) resolve(results);
    })
    .catch((error) => {
      results[index] = { status: 'rejected', reason: error };
      completedCount++;
      if (completedCount === items.length) resolve(results);
    });
});`;

  const additionalThenSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      results[index] = { status: 'fulfilled', value };
    })
    .catch((error) => {
      results[index] = { status: 'rejected', reason: error };
    })
    .then(() => {
      completedCount++;
      if (completedCount === items.length) resolve(results);
    });
});`;

  const myPromiseAllSettledSnippetCode = `class MyPromise {
  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return resolve([]);
      }

      const results = new Array(items.length);
      let completedCount = 0;

      items.forEach((item, index) => {
        MyPromise.resolve(item)
          .then((value) => {
            results[index] = { status: 'fulfilled', value };
          })
          .catch((error) => {
            results[index] = { status: 'rejected', reason: error };
          })
          .then(() => {
            completedCount++;
            if (completedCount === items.length) resolve(results);
          });
      });
    });
  }
}`;

  const testMyAllSettledSuccessSnippetCode = `Promise.allSettled([
  Promise.resolve('Раз'),
  Promise.reject('Ой-ой, ошибочка'),
  Promise.resolve('Два'),
]).then((result) => console.log(result));`;

  const testMyAllSettledSuccessSnippetLog = `[
  { status: 'fulfilled', value: 'Раз' },
  { status: 'rejected', reason: 'Ой-ой, ошибочка' },
  { status: 'fulfilled', value: 'Два' }
]`;

  const testMyAllSettledFailureSnippetCode = `Promise.allSettled([
  Promise.reject('Ой-ой, ошибочка #1'),
  Promise.reject('Ой-ой, ошибочка #2'),
  Promise.reject('Ой-ой, ошибочка #3'),
]).then((error) => console.log(error));`;

  const testMyAllSettledFailureSnippetLog = `[
  { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
]`;

  const testMyAllSettledEdgeCaseEmptyArraySnippetCode = `MyPromise.allSettled([]).then(console.log);`;

  const testMyAllSettledEdgeCaseEmptyArraySnippetLog = `[]`;

  const testMyAllSettledEdgeCaseNullSnippetCode = `MyPromise.allSettled(null).catch(console.error);`;

  const testMyAllSettledEdgeCaseNullSnippetLog = `TypeError: Argument must be iterable`;

  const testMyAllSettledEdgeCaseSetSnippetCode = `MyPromise.allSettled(new Set([1, 2, 3, 4, 5])).then((result) => console.log(result));`;

  const testMyAllSettledEdgeCaseSetSnippetLog = `[
  { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 2 },
  { status: 'fulfilled', value: 3 },
  { status: 'fulfilled', value: 4 },
  { status: 'fulfilled', value: 5 }
]`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {myAllSettledInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Вместе и до конца</h4>
      <p>
        {myAllSettledInline} самый терпеливый метод из всех: он никогда не отклоняется, а ждёт завершения абсолютно всех
        промисов.
      </p>
      <p>Для каждого промиса он формирует объект со статусом:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>
            <InlineCode>{allSettledFieldFulfilled}</InlineCode> {LONG_DASH} если промис выполнился успешно
          </p>
        </li>
        <li className='list__item'>
          <p>
            <InlineCode>{allSettledFieldRejected}</InlineCode> {LONG_DASH} если промис был отклонён
          </p>
        </li>
      </ul>
      <p>Результат {LONG_DASH} массив таких объектов.</p>
      <p>Возьмём скелет реализации:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodTemplateSnippetCode} />
      <p>
        {allSettledInline} {LONG_DASH} {allInline}, который никогда не отклоняется: он так же ждёт завершения всех
        промисов, но не прерывается при первой ошибке, а собирает результаты всех и идёт до конца. Поэтому структура
        здесь будет такая же как и {myAllInline}: понадобится массив и счётчик для промисов:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resultsCounterSnippetCode} />
      <p>И снова пройдёмся по всем элементам:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={itemsForEachSnippetCode} />
      <p>
        Колбэки в {thenInline} и {catchInline} здесь будут, очевидно, отличаться. В {thenInline} формируем объект для
        успешно выполненного промиса и сохраняем его по индексу:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenCallbackSnippetCode} />
      <p>
        В {catchInline} поступим аналогично, но с ключом <InlineCode>reason</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={catchCallbackSnippetCode} />
      <p>Затем нужно увеличить счётчик и проверить, равен ли он длине входящего массива:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={countAndCheckSnippetCode} />
      <p>
        Этот код можно добавить и в {thenInline}, и в {catchInline} {LONG_DASH} но тогда он продублируется:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={callbacksSnippetCode} />
      <p>А можно вынести счётчик в отдельный {thenInline} далее по цепочке:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={additionalThenSnippetCode} />
      <p>Всё!</p>
      <p>Собираем метод:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseAllSettledSnippetCode} />
      <h4>Тестируем</h4>
      <p>
        Берём примеры из теории и заменяем нативные промисы на <InlineCode>MyPromise</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testMyAllSettledSuccessSnippetCode} />
      <p>В консоли появится массив с объектами:</p>
      <ExampleSnippet code={testMyAllSettledSuccessSnippetLog} />
      <p>Даже если все промисы упадут {LONG_DASH} результат всё равно будет:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAllSettledFailureSnippetCode}
        consoleLog={testMyAllSettledFailureSnippetLog}
      />
      <p>
        Мы используем только {thenInline}, а не {catchInline} потому, что {allSettledInline} никогда не отклоняется,
        даже когда отклоняются все промисы.
      </p>
      <p>Проверим краевые случаи:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAllSettledEdgeCaseEmptyArraySnippetCode}
        consoleLog={testMyAllSettledEdgeCaseEmptyArraySnippetLog}
      />
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAllSettledEdgeCaseNullSnippetCode}
        consoleLog={testMyAllSettledEdgeCaseNullSnippetLog}
      />
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAllSettledEdgeCaseSetSnippetCode}
        consoleLog={testMyAllSettledEdgeCaseSetSnippetLog}
      />
    </section>
  );
});

MyPromiseAllSettled.displayName = 'MyPromiseAllSettled';
