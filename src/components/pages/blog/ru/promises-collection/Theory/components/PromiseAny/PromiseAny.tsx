import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Note } from 'src/components/common/Note';
import { LONG_DASH } from 'src/constants';
import {
  allInline,
  anyInline,
  catchInline,
  myAllInline,
  myAnyInline,
  raceInline,
  resolveStaticInline,
  thenInline,
} from '../../../utils';
import { undefinedInline } from 'src/components/pages/blog/utils';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const PromiseAny = forwardRef<HTMLDivElement>((_, ref) => {
  const anyAllResolvedSnippetCode = `Promise.any([
    Promise.resolve('Успешный успех #1'),
    Promise.resolve('Успешный успех #2'),
    Promise.resolve('Успешный успех #3'),
  ]).then((result) => console.log(result));`;

  const anyAllResolvedSnippetLog = `Успешный успех #1`;

  const anyOnlyOneResolvedSnippetCode = `Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.resolve('Успешный успех'),
    Promise.reject('Ой-ой, ошибочка #2'),
  ]).then((result) => console.log(result));`;

  const anyOnlyOneResolvedSnippetLog = `Успешный успех`;

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

  const itemsForEachWithCallbacksSnippetCode = `items.forEach((item, index) => {
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
});`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {anyInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Спасибо, что живой</h4>
      <p>
        {anyInline} возвращает результат <strong>первого успешно выполненного</strong> промиса:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={anyAllResolvedSnippetCode} consoleLog={anyAllResolvedSnippetLog} />
      <p>Если есть хотя бы один успешно выполненный промис, то все отклонённые промисы будут проигнорированы:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={anyOnlyOneResolvedSnippetCode}
        consoleLog={anyOnlyOneResolvedSnippetLog}
      />
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
    </section>
  );
});

PromiseAny.displayName = 'PromiseAny';
