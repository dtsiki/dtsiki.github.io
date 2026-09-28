import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { allSettledInline, catchInline, thenInline } from '../../../utils';

export const PromiseAllSettled = forwardRef<HTMLDivElement>((_, ref) => {
  const allSettledFieldFulfilled = `{ status: 'fulfilled', value: ... }`;

  const allSettledFieldRejected = `{ status: 'rejected', reason: ... }`;

  const allSettledExampleSnippetCode = `Promise.allSettled([
  Promise.resolve('Раз'),
  Promise.reject('Ой-ой, ошибочка'),
  Promise.resolve('Два'),
]).then((result) => console.log(result));`;

  const allSettledExampleSnippetLog = `[
  { status: 'fulfilled', value: 'Раз' },
  { status: 'rejected', reason: 'Ой-ой, ошибочка' },
  { status: 'fulfilled', value: 'Два' }
]`;

  const allSettledAllRejectedSnippetCode = `Promise.allSettled([
  Promise.reject('Ой-ой, ошибочка #1'),
  Promise.reject('Ой-ой, ошибочка #2'),
  Promise.reject('Ой-ой, ошибочка #3'),
]).then((error) => console.log(error));`;

  const allSettledAllRejectedSnippetLog = `[
  { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
  { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
]`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {allSettledInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Вместе и до конца</h4>
      <p>
        {allSettledInline} самый терпеливый метод из всех: он никогда не отклоняется, а ждёт завершения абсолютно всех
        промисов.
      </p>
      <p>Для каждого промиса он формирует объект со статусом:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>
            <InlineCode>{allSettledFieldFulfilled}</InlineCode> для выполненных успешно промисов
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>
            <InlineCode>{allSettledFieldRejected}</InlineCode> для отклонённых промисов
          </p>
        </li>
      </ul>
      <p>Результат {LONG_DASH} массив таких объектов:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={allSettledExampleSnippetCode}
        consoleLog={allSettledExampleSnippetLog}
      />
      <p>{allSettledInline} никогда не отклоняется, даже когда отклоняются все промисы:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={allSettledAllRejectedSnippetCode}
        consoleLog={allSettledAllRejectedSnippetLog}
      />
      <p>
        Обратите внимание: у {allSettledInline} для получения результатов используется только {thenInline}, а не{' '}
        {catchInline}.
      </p>
    </section>
  );
});

PromiseAllSettled.displayName = 'PromiseAllSettled';
