import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import {
  fulfilledEm,
  pendingEm,
  promiseResultInline,
  rejectedEm,
  getResolveInline,
  getRejectInline,
  thenInline,
  catchInline,
  promiseRejectReactionsInline,
  promiseFulfillReactionsInline,
} from '../../../utils';
import { LONG_DASH } from 'src/constants';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ENoteType, Note } from 'src/components/common/Note';

export const Executor = forwardRef<HTMLDivElement>((_, ref) => {
  const paymentPromiseSnippetCode = `paymentPromise.resolve({ status: 'SUCCESS' });`;

  const resolveRejectMethodsSnippetCode = `const resolve = (value) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.FULFILLED;
  this.value = value;
};

const reject = (error) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.REJECTED;
  this.value = error;
};`;

  const initMyPromiseClassMethodsSnippetCode = `const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
    };
  }
}`;

  const executorSnippetCode = `try {
    executor(resolve, reject);
} catch (error) {
    reject(error);
}`;

  const myPromiseConstructorSnippetCode = `const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}`;

  const emptyCallbacksLists = `class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
    this.onFulfilledCallbacks = []; // <--- Добавили пустой массив для fulfilled-колбэков
    this.onRejectedCallbacks = []; // <--- Добавили пустой массив rejected-колбэков
    ...
  }
}`;

  const resolveRejectMethodsUpdatedSnippetCode = `const resolve = (value) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.FULFILLED;
  this.value = value;
  this.onFulfilledCallbacks.forEach(callback => callback(this.value));
};

const reject = (error) => {
  if (this.state !== STATUS.PENDING) return;
  this.state = STATUS.REJECTED;
  this.value = error;
  this.onRejectedCallbacks.forEach(callback => callback(this.value));
};`;

  const myPromiseConstructorFinalSnippetCode = `const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

class MyPromise {
  constructor(executor) {
    this.state = STATUS.PENDING;
    this.value = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.FULFILLED;
      this.value = value;
      this.onFulfilledCallbacks.forEach(callback => callback(this.value));
    };

    const reject = (error) => {
      if (this.state !== STATUS.PENDING) return;
      this.state = STATUS.REJECTED;
      this.value = error;
      this.onRejectedCallbacks.forEach(callback => callback(this.value));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}`;

  const testMyPromiseSnippetLog = `Жребий брошен
Uncaught TypeError: promise.then is not a function`;

  const exampleForPracticeSnippetCode = `const promise = new Promise((resolve, reject) => {
  console.log('Бросаем монету');

  setTimeout(() => {
    const value = Math.floor(Math.random() * 2);

    if (value) {
      resolve(\`Решка! Значение: \${value}\`);
    } else {
      reject(new Error(\`Орёл! Значение: \${value}\`));
    }
  }, 1000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message))
  .finally(() => console.log('Жребий брошен'));`;

  const exampleForPracticeSnippetLog = `Бросаем монету
Решка! Значение: 1 // Или выведет ошибку 'Орёл! Значение: 0'
Жребий брошен`;

  return (
    <section className='section outer' ref={ref}>
      <h3>Управление состоянием промиса</h3>
      <p>
        Для управления состоянием промиса нужны методы {getResolveInline()} и {getRejectInline()}. Их логика невероятно
        проста благодаря тому что состояние может меняться только один раз:{' '}
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p>
            Если состояние промиса не {pendingEm} {LONG_DASH} ничего не делаем
          </p>
        </li>
        <li className='list__item'>
          <p>
            Если состояние промиса {pendingEm} {LONG_DASH} обновляем состояние <InlineCode>this.state</InlineCode>: в{' '}
            {getResolveInline()} на {fulfilledEm}, в {getRejectInline()} на {rejectedEm}. Здесь же обновляем и результат
            выполнения промиса <InlineCode>this.value</InlineCode>: в {getResolveInline()}записываем результат, в{' '}
            {getRejectInline()} записываем ошибку
          </p>
        </li>
      </ol>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveRejectMethodsSnippetCode} />
      <p>Эти методы тоже добавляем в конструктор класса:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={initMyPromiseClassMethodsSnippetCode} name='MyPromise' />
      <br />
      <Note type={ENoteType.SECONDARY}>
        <div className='tags'>
          <div className='tag'>Вопросик</div>
        </div>
        <p>
          <b>
            Почему методы {getResolveInline()} и {getRejectInline()} добавляются в конструктор?
          </b>{' '}
          Если бы они были доступны снаружи, любой сторонний кусок кода мог бы вклиниться в работу промиса и
          принудительно завершить его, когда ему вздумается. Например:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={paymentPromiseSnippetCode} />
        <p>
          В этом примере внутри <InlineCode>paymentPromise</InlineCode> делается запрос к банку. Если бы{' '}
          {getRejectInline()} был бы доступен снаружи, злоумышленник или просто плохой код могли бы сфабриковать
          транзакцию. Выглядит не очень надёжно.
        </p>
        <p>
          Поэтому {getResolveInline()} и {getRejectInline()} внутри конструктора и вызвать их может только код, который
          находится прямо внутри функции-исполнителя. Внешний мир никак не может повлиять на исход операции.
        </p>
      </Note>
      <p>
        Помимо методов {getResolveInline()} и {getRejectInline()} в конструкторе должна выполняться сама
        функция-исполнитель. Сейчас в конструкторе ничего не проиходит. Функция-исполнитель уже передаётся в конструктор
        как аргумент, осталось просто запустить её. Для безопастности нужно обернуть её в{' '}
        <InlineCode>try…catch</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={executorSnippetCode} hideLines={true} />
      <p>Получаем на данном этапе следующий конструктор:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseConstructorSnippetCode} name='MyPromise' />
      <section>
        <h3>Очереди колбэков</h3>
        <p>
          Также нужно добавить в конструктор два массива колбэков: {promiseFulfillReactionsInline} и{' '}
          {promiseRejectReactionsInline}. В них будут складываться колбэки из {thenInline} и {catchInline} в том случае,
          если промис находится статусе {pendingEm}.
        </p>
        <p>При создании промиса они инициализируются как пустые списки поэтому:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={emptyCallbacksLists} hideLines={true} name='MyPromise' />
        <p>
          Нужно учесть эти массивы в методах {getResolveInline()} и {getRejectInline()}:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p>
              В {getResolveInline()} запускаем все сохраненные колбэки из {promiseFulfillReactionsInline}
            </p>
          </li>
          <li className='list__item'>
            <p>
              В {getRejectInline()} запускаем все сохраненные колбэки из {promiseRejectReactionsInline}
            </p>
          </li>
        </ul>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={resolveRejectMethodsUpdatedSnippetCode} hideLines={true} />
        <p>Собираем конструктор и получаем:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseConstructorFinalSnippetCode} name='MyPromise' />
        <p>С конструктором закончили. Можно протестировать, что промис создаётся и даже запускается.</p>
        <p>
          Вернёмся к примеру, который анализировали в самом начале этого раздела и запустим его, но уже с{' '}
          <InlineCode>MyPromise</InlineCode>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={exampleForPracticeSnippetCode} />
        <p>В консоли сейчас выведется:</p>
        <ExampleSnippet code={testMyPromiseSnippetLog} />
        <p>
          Всё потому, что мы написали только инициализацию и запуск промиса: выполняется синхронная функция-исполнитель,
          создаётся промис, а результат выполнения промиса никак не обрабатывается. Для обработки результата выполнения
          промиса нужно написать соответствующие методы обработки.
        </p>
      </section>
    </section>
  );
});

Executor.displayName = 'Executor';
