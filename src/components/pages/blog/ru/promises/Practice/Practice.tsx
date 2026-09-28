import { forwardRef } from 'react';
import { Executor, InstanceMethods, StateAndResult } from './components';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import {
  catchInline,
  finallyInline,
  fulfilledEm,
  getRejectInline,
  getResolveInline,
  pendingEm,
  promiseResultInline,
  rejectedEm,
  thenInline,
} from '../utils';
import { ENoteType, Note } from 'src/components/common/Note';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { Accordion } from 'src/components/common/Accordion';

export const Practice = forwardRef<HTMLDivElement>((_, ref) => {
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

  const finallyMethodSnippetCode = `finally(onFinally) {
    return this.then(
      (value) => {
        return Promise.resolve(onFinally()).then(() => value);
      },
      (error) => {
        return Promise.resolve(onFinally()).then(() => {
          throw error;
        });
      }
    );
  }`;

  const myPromiseSnippetCode = `const STATUS = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected",
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
  
        this.onFulfilledCallbacks.forEach((callback) => callback(this.value));
      };
  
      const reject = (error) => {
        if (this.state !== STATUS.PENDING) return;
        this.state = STATUS.REJECTED;
        this.value = error;
  
        this.onRejectedCallbacks.forEach((callback) => callback(this.value));
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (value) => value;
      onRejected = typeof onRejected === "function" ? onRejected : (error) => { throw error; };
  
      return new MyPromise((resolve, reject) => {
        const handleFulfilled = () => {
          try {
            const result = onFulfilled(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        const handleRejected = () => {
          try {
            const result = onRejected(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === STATUS.FULFILLED) {
          queueMicrotask(handleFulfilled);
        }
  
        if (this.state === STATUS.REJECTED) {
          queueMicrotask(handleRejected);
        }
  
        if (this.state === STATUS.PENDING) {
          this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
          this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    finally(onFinally) {
      return this.then(
        (value) => {
          return Promise.resolve(onFinally()).then(() => value);
        },
        (error) => {
          return Promise.resolve(onFinally()).then(() => {
            throw error;
          });
        }
      );
    }

    static resolve(value) {
      if (value instanceof MyPromise) return value;
      return new MyPromise((resolve) => resolve(value));
    }

    static reject(error) {
      return new MyPromise((_, reject) => reject(error));
    }
  }`;

  return (
    <section className='section outer' ref={ref}>
      <h2>Практика: пишем свой промис</h2>
      <p>Теорию разобрали, приступаем к написанию собственного класса промиса. Опираться будем на следующий пример:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={exampleForPracticeSnippetCode}
        consoleLog={exampleForPracticeSnippetLog}
      />
      <p>Что мы видим важное для нас в этом примере с первого взгляда:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>
            Конструкция <InlineCode>new Promise(...)</InlineCode>
          </p>
          <p className='list__footer'>
            Она создаёт новый объект промиса. <InlineCode>Promise</InlineCode> {LONG_DASH} это класс, который доступен
            глобально в движке JavaScript
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Функция-исполнитель</p>
          <p className='list__footer'>
            Функция-исполнитель запускает асинхронную операцию, которая выполнится только через какое-то время. Там в
            зависимости от того, какое число возвращает <InlineCode>Math.random()</InlineCode>, будет вызван один из
            двух колбэков: {getResolveInline()} или {getRejectInline()} с результатом.
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Результат обрабатывается в цепочке промисов</p>
          <p className='list__footer'>
            Колбэки внутри {thenInline} и {catchInline} просто выводят результат
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>В конце есть {finallyInline}</p>
          <p className='list__footer'>Просто выводит текст</p>
        </li>
      </ul>
      <StateAndResult />
      <Executor />
      <InstanceMethods />
      <section>
        <p>Вот и всё, {finallyInline} готов:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodSnippetCode} />
        <p>
          Класс <InlineCode>MyPromise</InlineCode> тоже:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseSnippetCode} name='MyPromise' />
      </section>
    </section>
  );
});

Practice.displayName = 'Practice';
