import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import {
  allInline,
  allSettledInline,
  anyInline,
  catchInline,
  finallyInline,
  fulfilledEm,
  getRejectInline,
  getResolveInline,
  onFinallyInline,
  onFulfilledInline,
  onRejectedInline,
  pendingEm,
  promiseResultInline,
  promiseStateInline,
  raceInline,
  rejectedEm,
  thenInline,
} from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { getTextWithChevrons } from 'src/utils';
import { ExternalLink } from 'src/components/common/ExternalLink';

export const StaticMethods = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseAllFulfilledSnippetCode = `Promise.all([
    Promise.resolve('Раз'),
    Promise.resolve('Два'),
    Promise.resolve('Три')
  ]).then((result) => console.log(result));`;

  const promiseAllRejectedSnippetCode = `Promise.all([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Три'),
    Promise.reject('Ой-ой, снова ошибочка'),
  ]).catch((error) => console.log(error));`;

  const promiseRaceFulfilledSnippetCode = `Promise.race([
    new Promise((resolve) => setTimeout(() => resolve('Раз'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Два'), 5000))
  ]).then((result) => console.log(result));`;

  const promiseRaceRejectedSnippetCode = `Promise.race([
    new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Успех'), 2000)),
    new Promise((_, reject) => setTimeout(() => reject('Ой-ой, снова ошибочка'), 3000)),
  ]).catch((error) => console.log(error));`;

  const promiseAllSettledSnippetCode = `Promise.allSettled([
    Promise.resolve('Раз'),
    Promise.reject('Ой-ой, ошибочка'),
    Promise.resolve('Два')
  ]).then((result) => console.log(result));`;

  const promiseAllSettledSnippetLog = `[
    { status: 'fulfilled', value: 'Раз' },
    { status: 'rejected', reason: 'Ой-ой, ошибочка' },
    { status: 'fulfilled', value: 'Два' }
  ]`;

  const promiseAllSettledRejectedSnippetCode = `Promise.allSettled([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).then((error) => console.log(error));`;

  const promiseAllSettledRejectedSnippetLog = `[
   { status: 'rejected', reason: 'Ой-ой, ошибочка #1' }
   { status: 'rejected', reason: 'Ой-ой, ошибочка #2' }
   { status: 'rejected', reason: 'Ой-ой, ошибочка #3' }
  ]`;

  const allSettledFieldFulfilled = `{ status: 'fulfilled', value: ... }`;

  const allSettledFieldRejected = `{ status: 'rejected', reason: ... }`;

  const promiseAnyFulfilledSnippetCode = `Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.resolve('Успех'),
    Promise.reject('Ой-ой, ошибочка #2'),
  ]).then((result) => console.log(result));`;

  const promiseAnyRejectedSnippetCode = `Promise.any([
    Promise.reject('Ой-ой, ошибочка #1'),
    Promise.reject('Ой-ой, ошибочка #2'),
    Promise.reject('Ой-ой, ошибочка #3'),
  ]).catch((error) => console.log(error.errors));`;

  const promiseAnyRejectedSnippetLog = ` [ 'Ой-ой, ошибочка #1', 'Ой-ой, ошибочка #2', 'Ой-ой, ошибочка #3' ]`;

  const withResolversSnippetCode = `const { promise, resolve, reject } = Promise.withResolvers();`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Статические методы</h3>
      <p>
        У промиса есть статические методы. Их можно разделить на две группы: методы для создания промисов и методы для
        работы с массивами промисов.
      </p>
      <section className='section inner'>
        <p>Первая группа {LONG_DASH} методы, с помощью которых можно создать уже выполненный промис:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>
              {getResolveInline()} создает успешно выполненный промис с переданным значением:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={"const promise = Promise.resolve('Готово');"} />
            <p>Такая запись будет эквивалента:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={"const promise = new Promise((resolve) => resolve('Готово'));"}
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>{getRejectInline()} создает отклоненный промис с указанной ошибкой:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={"const promise = Promise.reject(new Error('Ошибка доступа'));"}
            />
            <p>Такая запись будет эквивалента:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={"const promise = new Promise((_, reject)) => reject(new Error('Ошибка доступа')));"}
            />
          </li>
        </ul>
        <p>
          Не путайте эти статические методы с {getResolveInline()} и {getRejectInline()} внутри функции-исполнителя{' '}
          <em>executor</em>. Статические методы создают новый, уже готовый промис, а функции-аргументы управляют
          состоянием текущего, уже создающегося промиса.
        </p>
      </section>
      <section className='section inner'>
        <p>
          Вторая группа {LONG_DASH} методы для работы с коллекциями промисов. На самом деле, это не обязательно должны
          быть промисы, но обязательно итерируемый объект. JavaScript в этом случае любезно сам обернёт значение в
          промис.
        </p>
        <p>
          Все методы этой группы принимают на вход массив, а возвращают один новый промис. Состояние и результат этого
          промиса зависит от того, что произойдёт во время перебора всей коллекции.
        </p>
        <p>Есть 4 метода:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>
              {allInline} ждёт выполнения <strong>всех</strong> переданных промисов
            </p>
            <p>
              Возвращаемый промис будет {fulfilledEm} когда все переданные промисы выполнятся успешно, результат{' '}
              {LONG_DASH}
              массив результатов:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseAllFulfilledSnippetCode}
              consoleLog="['Раз', 'Два', 'Три']"
            />
            <p>
              Возвращаемый промис будет {rejectedEm} если хотя бы один переданный промис будет отклонён, результат{' '}
              {LONG_DASH}
              ошибка первого отклонённого промиса:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseAllRejectedSnippetCode}
              consoleLog='Ой-ой, ошибочка'
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>
              {raceInline} ждёт <strong>первый</strong> завершившийся промис
            </p>
            <p>
              Возвращаемый промис будет {fulfilledEm} когда самый быстрый промис завершится успешно, результат{' '}
              {LONG_DASH} результат выполнения этого промиса:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseRaceFulfilledSnippetCode} consoleLog='Раз' />
            <p>
              Возвращаемый промис будет {rejectedEm} если самый быстрый промис завершился с ошибкой, результат{' '}
              {LONG_DASH} снова результат выполнения этого промиса:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseRaceRejectedSnippetCode}
              consoleLog='Ой-ой, ошибочка'
            />
            <p>
              Здесь неважно: выполнился самый быстрый промис успешно или с ошибкой {LONG_DASH} {raceInline} всегда
              возвращает результат или ошибку первого завершённого промиса, а результаты остальных промисов
              игнорируются.
            </p>
          </li>
          <li className='list__item'>
            <p className='list__title'>{allSettledInline} ждёт когда все промисы завершатся</p>
            <p>
              Возвращаемый промис будет {fulfilledEm} когда все промисы завершились: неважно {LONG_DASH} успешно или с
              ошибкой. Результат {LONG_DASH} массив объектов с полями в следующем формате:
            </p>
            <ul className='list markered nested'>
              <li>
                <p>
                  <InlineCode>{allSettledFieldFulfilled}</InlineCode> для {fulfilledEm} промисов
                </p>
              </li>
              <li>
                <p>
                  <InlineCode>{allSettledFieldRejected}</InlineCode> для {rejectedEm} промисов
                </p>
              </li>
            </ul>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseAllSettledSnippetCode}
              consoleLog={promiseAllSettledSnippetLog}
            />
            <p>Возвращаемый промис никогда не будет {rejectedEm}, даже если все промисы будут отклонены:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseAllSettledRejectedSnippetCode}
              consoleLog={promiseAllSettledRejectedSnippetLog}
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>{anyInline} ждёт первый успешный, но падает если все упали</p>
            <p>Возвращаемый промис будет {fulfilledEm} когда самый быстрый промис завершился успешно:</p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseAnyFulfilledSnippetCode} consoleLog='Успех' />
            <p>
              Возвращаемый промис будет {rejectedEm} если все промисы завершились ошибкой. Результат {LONG_DASH}{' '}
              специальный объект{' '}
              <ExternalLink
                label={<InlineCode>AggregateError</InlineCode>}
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError'
              />
              , у которого можно получить список ошибок:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={promiseAnyRejectedSnippetCode}
              consoleLog={promiseAnyRejectedSnippetLog}
            />
          </li>
        </ul>
      </section>
      <section className='section inner'>
        <p>
          Отдельно хочется отметить относительно новый метод <InlineCode>withResolvers</InlineCode>, добавленный в
          ES2024. Он делает возможным управление промисов в функции-исполнителем <em>executor</em> снаружи. Этот метод
          возвращает объект, содержащий новый промис и колбэки для управления состоянием этого промиса{' '}
          {getResolveInline()} и {getRejectInline()} (не статические методы):
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={withResolversSnippetCode} />
      </section>
    </section>
  );
});

StaticMethods.displayName = 'StaticMethods';
