import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import {
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
  rejectedEm,
  thenInline,
} from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { getTextWithChevrons } from 'src/utils';

export const PromisesFlattering = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseResolvePromiseSnippetCode = `const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve(promise1);

console.log(promise1 === promise2);`;

  const promisesFlatteringSnippetCode = `Promise.resolve(1)
  .then((value) => Promise.resolve(value + 1))
  .then((value) => Promise.resolve(value * 2))
  .then((value) => console.log(value));`;

  const promisesWithoutFlatteringSnippetCode = `Promise.resolve(1)
  .then((value) => Promise.resolve(value + 1))
  .then((promise) => promise.then((value) => Promise.resolve(value * 2)))
  .then((promise) => promise.then((value) => console.log(value)));`;

  return (
    <section ref={ref} className='section outer' id='flattering'>
      <h3>Схлопывание и развёртывание промисов</h3>
      <p>
        Если передать в <InlineCode>Promise.resolve()</InlineCode> другой промис, то метод вернёт переданный промис без
        изменений. Новый промис создаваться не будет:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseResolvePromiseSnippetCode} consoleLog='true' />
      <p>Этот механизм называется схлопыванием промисов.</p>
      <p>
        Противоположный схлопыванию механизм происходит в {thenInline}. Если колбэк внутри {thenInline} возвращает новый
        промис, JavaScript не создаст структуру вида <InlineCode>Promise&lt;Promise&lt;value&gt;&gt;</InlineCode>, а
        дождётся разрешения внутреннего промиса и передаст его результат в следующий {thenInline}. Это называется
        разворачиванием вложенных промисов: промисов
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promisesFlatteringSnippetCode} consoleLog='4' />
      <p>Что здесь происходит:</p>
      <ul className='list stepped'>
        <li className='list__item'>
          <p>
            <InlineCode>Promise.resolve(1)</InlineCode> возвращает <strong>значение</strong> <InlineCode>1</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            Первый {thenInline} в цепочке возвращает <strong>промис</strong> со значением <InlineCode>2</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            Второй {thenInline} получает <strong>значение</strong> <InlineCode>2</InlineCode> {LONG_DASH} произошло
            разворачивание. Возвращает <strong>промис</strong> со значением <InlineCode>4</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            Третий {thenInline} получает <strong>значение</strong> <InlineCode>4</InlineCode> {LONG_DASH} снова
            произошло разворачивание. Результат просто выводится в консоль.
          </p>
        </li>
      </ul>
      <p>
        Без разворачивания пришлось бы каждый раз вручную вызывать {thenInline} на промисе, который вернул предыдущий
        колбэк:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promisesWithoutFlatteringSnippetCode} />
    </section>
  );
});

PromisesFlattering.displayName = 'PromisesFlattering';
