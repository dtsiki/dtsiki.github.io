import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { allInline, anyInline, catchInline, myAllInline, myAnyInline, thenInline } from '../../../utils';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const MyPromiseAny = forwardRef<HTMLDivElement>((_, ref) => {
  const anyAllResolvedSnippetCode = `Promise.any([
    Promise.resolve('Успешный успех #1'),
    Promise.resolve('Успешный успех #2'),
    Promise.resolve('Успешный успех #3'),
  ]).then((result) => console.log(result));`;

  const anyAllResolvedSnippetLog = `Успешный успех #1`;

  const anyAllRejectedSnippetCode = `Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).catch((error) => console.error(error.errors));`;

  const anyAllRejectedSnippetLog = `[ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]`;

  const anyTemplateSnippetCode = `static any(iterable) {
  return new MyPromise((resolve, reject) => {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      return reject(new TypeError('Argument must be iterable'));
    }

    const items = Array.from(iterable);

    if (items.length === 0) {
      return reject(new AggregateError([], 'All promises were rejected'));
    }
  });
}`;

  const errorsArrayAndCounterSnippetCode = `const errors = new Array(items.length);
let rejectedCount = 0;`;

  const itemsForEachSnippetCode = `items.forEach((item, index) => {
  MyPromise.resolve(item)
    .then((value) => {
      // Что-то делаем с результатом
    })
    .catch((error) => {
      // Что-то делаем с ошибкой
    });
});`;

  const resolveCallbackSnippetCode = `.then((value) => {
  resolve(value);
})`;

  const saveAndCountSnippetCode = `errors[index] = error;
rejectedCount++;`;

  const rejectResultsSnippetCode = `if (rejectedCount === items.length) {
  reject(new AggregateError(errors, 'All promises were rejected'));
}`;

  const myPromiseAnySnippetCode = `class MyPromise {
  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
        return reject(new TypeError('Argument must be iterable'));
      }

      const items = Array.from(iterable);

      if (items.length === 0) {
        return reject(new AggregateError([], 'All promises were rejected'));
      }

      const errors = new Array(items.length);
      let rejectedCount = 0;

      items.forEach((item, index) => {
        MyPromise.resolve(item)
          .then((value) => {
            resolve(value);
          })
          .catch((error) => {
            errors[index] = error;
            rejectedCount++;

            if (rejectedCount === items.length) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
      });
    });
  }
}`;

  const testMyAnyOnlyOneResolvedSnippetCode = `MyPromise.any([
  MyPromise.reject('Ой-ой, ошибочка #1'),
  MyPromise.resolve('Успешный успех'),
  MyPromise.reject('Ой-ой, ошибочка #2'),
]).then((result) => console.log(result));`;

  const testMyAnyOnlyOneResolvedSnippetLog = `Успешный успех`;

  const testMyAnyAllRejectedSnippetCode = `MyPromise.any([
  MyPromise.reject('Ой-ой, ошибочка #1'),
  MyPromise.reject('Ой-ой, ошибочка #2'),
  MyPromise.reject('Ой-ой, ошибочка #3'),
]).catch((error) => console.error(error.errors));`;

  const testFasterSnippetCode = `MyPromise.any([
  new MyPromise((resolve) => setTimeout(() => resolve('Быстрый выполнился'), 1000)),
  new MyPromise((resolve) => setTimeout(() => resolve('Медленный выполнился'), 3000)),
]).then(() => console.log(result));`;

  const testMyAnyAllRejectedSnippetLog = `[ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]`;

  const testMyAnyEdgeCaseEmptyArraySnippetCode = `MyPromise.any([]).catch((error) => console.log(error.errors));`;

  const testMyAnyEdgeCaseEmptyArraySnippetLog = `[];`;

  const testMyAnyEdgeCaseNullSnippetCode = `MyPromise.any(null).catch(() => console.error(error));`;

  const testMyAnyEdgeCaseNullSnippetLog = `TypeError: Argument must be iterable`;

  const testMyAnyEdgeCaseSetSnippetCode = `MyPromise.any(new Set([1, 2, 3, 4, 5])).then(console.log);`;

  const testMyAnyEdgeCaseSetSnippetLog = `1`;

  const testMyAnyEdgeCaseStringSnippetCode = `MyPromise.any('Hi').then((result) => console.log(result));`;

  const testMyAnyEdgeCaseStringSnippetLog = `H`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {myAnyInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Спасибо, что живой</h4>
      <p>
        {anyInline} возвращает результат <strong>первого успешно выполненного</strong> промиса:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyAllResolvedSnippetCode} consoleLog={anyAllResolvedSnippetLog} />
      <p>
        Если все промисы отклонились, {anyInline} отклоняется со специальной ошибкой{' '}
        <InlineCode>AggregateError</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyAllRejectedSnippetCode} consoleLog={anyAllRejectedSnippetLog} />
      <p>
        {anyInline} {LONG_DASH} отзеркаленная версия {allInline}. Если {allInline} успешен только когда успешны все
        промисы, то {anyInline} успешен, когда успешен хотя бы один. И наоборот: {allInline} отклоняется при первой
        ошибке, а {anyInline} {LONG_DASH} только если ошибочны все. Ошибки при этом собираются в том же порядке, в
        котором были переданы промисы. Это нам пригодится далее.
      </p>
      <p>Возьмём скелет реализации:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyTemplateSnippetCode} />
      <p>
        Раз нативный {anyInline} {LONG_DASH} отзеркаленная версия {allInline}, заведём массив {LONG_DASH} но не для
        результатов, а для ошибок, {LONG_DASH}и счётчик отклонённых промисов:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={errorsArrayAndCounterSnippetCode} />
      <p>Как и в других методах, запускаем перебор:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={itemsForEachSnippetCode} />
      <p>Осталось выяснить, что писать в колбэках.</p>
      <p>
        Начнём с {thenInline}. Нужно вернуть результат первого успешно выполненного промиса {LONG_DASH} это просто:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveCallbackSnippetCode} />
      <p>
        Теперь {catchInline}. Логика здесь зеркальна {myAllInline}: там мы сохраняли результаты в {thenInline}, а здесь
        сохраняем ошибки {LONG_DASH} в {catchInline}. Записываем ошибку по индексу и увеличиваем счётчик:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={saveAndCountSnippetCode} />
      <p>
        Когда счётчик сравняется с количеством промисов, отклоняем общий промис с{' '}
        <InlineCode>AggregateError</InlineCode>, внутри которого {LONG_DASH} массив всех ошибок:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={rejectResultsSnippetCode} />
      <p>Получаем в итоге:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={rejectResultsSnippetCode} />
      <p>Всё!</p>
      <p>Финальный метод будет выглядеть следующим образом:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseAnySnippetCode} />
      <h4>Тестируем</h4>
      <p>
        Снова возьмём примеры из теории. Главное {LONG_DASH} не забыть поменять <InlineCode>Promise</InlineCode> на{' '}
        <InlineCode>MyPromise</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testMyAnyOnlyOneResolvedSnippetCode} />
      <p>В консоли появится:</p>
      <ExampleSnippet code={testMyAnyOnlyOneResolvedSnippetLog} />
      <p>Проверим случай, когда все промисы отклонены:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAnyAllRejectedSnippetCode}
        consoleLog={testMyAnyAllRejectedSnippetLog}
      />
      <p>Первый выполненный промис побеждает, даже если остальные промисы ещё не завершились:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={testFasterSnippetCode} consoleLog='Быстрый выполнился' />
      <p>И проверим краевые случаи. Пустой массив:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAnyEdgeCaseEmptyArraySnippetCode}
        consoleLog={testMyAnyEdgeCaseEmptyArraySnippetLog}
      />
      <p>
        Значение <InlineCode>null</InlineCode>:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAnyEdgeCaseNullSnippetCode}
        consoleLog={testMyAnyEdgeCaseNullSnippetLog}
      />
      <p>
        Коллекция значений <InlineCode>Set</InlineCode>:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAnyEdgeCaseSetSnippetCode}
        consoleLog={testMyAnyEdgeCaseSetSnippetLog}
      />
      <p>И строка:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={testMyAnyEdgeCaseStringSnippetCode}
        consoleLog={testMyAnyEdgeCaseStringSnippetLog}
      />
    </section>
  );
});

MyPromiseAny.displayName = 'MyPromiseAny';
