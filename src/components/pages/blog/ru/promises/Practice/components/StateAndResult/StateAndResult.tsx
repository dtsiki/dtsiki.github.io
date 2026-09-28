import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { fulfilledEm, pendingEm, promiseResultInline, rejectedEm } from '../../../utils';
import { LONG_DASH } from 'src/constants';

export const StateAndResult = forwardRef<HTMLDivElement>((_, ref) => {
  const statusObjectSnippetCode = `const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
  };`;

  const initMyPromiseClassSnippetCode = `const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
  }
}`;

  const myPromiseClassWithErrorFieldSnippetCode = `const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined; // Для результата
    this.error = undefined; // Для ошибки
  }
}`;

  return (
    <section className='section outer' ref={ref}>
      <h3>Состояние и результат</h3>
      <p>
        Класс можно начать с написания конструктора и инициализации. У промиса всего два свойства {LONG_DASH} состояние
        и результат. Статусы промиса можно сразу вынести в отдельный объект:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={statusObjectSnippetCode} name='MyPromise' />
      <p>
        Константы защищают от опечаток. Например если писать {pendingEm} вручную, можно случайно написать{' '}
        <em style={{ color: 'red' }}>pendig</em> и получить баг. С константами такого не будет, константы нам бро.
      </p>
      <p>
        При создании промис всегда в состоянии {pendingEm}, а значение неизвестно. Поэтому инициализация этих свойств
        будет выглядеть следующим образом:{' '}
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={initMyPromiseClassSnippetCode} name='MyPromise' />
      <p>
        Повторение мать учения: у промисов {promiseResultInline} хранит и результат выполнения промиса и ошибку. Это
        очень удобно благодаря тому, что у промиса может быть только три состояния: когда промис в состоянии {pendingEm}{' '}
        там записано <InlineCode>undefined</InlineCode>, когда промис в состоянии {fulfilledEm}, там записан результат,
        когда в {rejectedEm} {LONG_DASH} ошибка. Результат и ошибка никогда не существуют одновременно, потому что
        состояние меняется только один раз. Но если очень хочется, то можно всегда завести отдельное состояние для
        ошибки:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseClassWithErrorFieldSnippetCode} />
    </section>
  );
});

StateAndResult.displayName = 'StateAndResult';
