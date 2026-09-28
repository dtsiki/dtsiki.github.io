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
import { ENoteType, Note } from 'src/components/common/Note';
import { Accordion } from 'src/components/common/Accordion';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';

export const InstanceMethods = forwardRef<HTMLDivElement>((_, ref) => {
  const myPromiseMethodsTemplateSnippetCode = `const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
  };

  class MyPromise {
    constructor(executor) {
      ...
    }

    then(onFulfilled, onRejected) {
      // Что-то делаем с результатом
    }

    catch(onRejected) {
      // Что-то делаем с ошибкой
    }

    finally(onFinally) {
      // Что-то делаем
    }

    static resolve(value) {
    // Создать успешно выполненный промис с переданным значением
    }

    static reject(error) {
      // Создать отклоненный промис с указанной ошибкой
    }
  }`;

  const catchMethodSnippetCode = `catch(onRejected) {
    return this.then(null, onRejected);
  }`;

  const functionCheckThenSnippetCode = `then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };
  }`;

  const thenReturnPromiseSnippetCode = `then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      // Что-то делаем с результатом
    })
  }`;

  const statesCheckSnippetCode = `then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      if (this.state === STATUS.FULFILLED) {
        // Что-то делаем с результатом
      }

      if (this.state === STATUS.REJECTED) {
        // Что-то делаем с ошибкой
      }

      if (this.state === STATUS.PENDING) {
        // Откладываем колбэки
      }
    });
  }`;

  const handlesResultSnippetCode = `then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        // Что-то делаем с результатом
      };

      const handleRejected = () => {
        // Что-то делаем с ошибкой
      };

      if (this.state === STATUS.FULFILLED) {
        handleFulfilled();
      }

      if (this.state === STATUS.REJECTED) {
        handleRejected();
      }

      if (this.state === STATUS.PENDING) {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }`;

  const pendingCallbacksSyncSnippetCode = `if (this.state === STATUS.PENDING) {
    this.onFulfilledCallbacks.push(onFulfilled);
    this.onRejectedCallbacks.push(onRejected);
  }`;

  const queueMicrotaskSnippetCode = `if (this.state === STATUS.PENDING) {
    this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
    this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
  }`;

  const thenWhitoutHandlersCodeSnippetCode = `then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error; };

    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        // Что-то делаем с результатом
      };

      const handleRejected = () => {
        // Что-то делаем с ошибкой
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
  }`;

  const handleFulfilledSnippetCode = `const handleFulfilled = () => {
    try {
      // п.1 Получаем результат:
      const result = onFulfilled(this.value);

      if (result instanceof MyPromise) {
        // п.2 Если результат — промис, то нужно дождаться его выполнения:
        result.then(resolve, reject);
      } else {
        // п.3 Если результат не промис — вызываем resolve с этим значением
        resolve(result);
      }
    } catch (error) {
      // п.4 Если результат ошибка — обрабатываем ошибку и вызываем reject с этим значением
      reject(error);
    }
  };`;

  const handleRejectedSnippetCode = `const handleRejected = () => {
    try {
      // п.1 Получаем результат:
      const result = onRejected(this.value);

      if (result instanceof MyPromise) {
        // п.2 Если результат — промис, то нужно дождаться его выполнения:
        result.then(resolve, reject);
      } else {
        // п.3 Если результат не промис — вызываем resolve с этим значением
        resolve(result);
      }
    } catch (error) {
      // п.4 Если результат ошибка — обрабатываем ошибку и вызываем reject с этим значением
      reject(error);
    }
  };`;

  const chainRecoveryExample1SnippetCode = `Promise.reject('Ошибка')
    .catch(() => {
      return 'Всё хорошо';
    })
    .then((result) => console.log(result));`;

  const chainRecoveryExample2SnippetCode = `Promise.reject('Ошибка 1')
    .catch(() => {
      throw new Error('Ошибка 2');
    })
    .catch((error) => console.log(error.message));`;

  const finallyMethodStep1SnippetCode = `finally(onFinally) {
      return this.then(
        (value) => {
          // Выполнить onFinally и пробросить value дальше
        },
        (error) => {
          // Выполнить onFinally и выбросить error
        }
      );
    }`;

  const finallyMethodStep2SnippetCode = `finally(onFinally) {
    return this.then(
      (value) => {
        onFinally();
        return value;
      },
      (error) => {
        onFinally();
        throw error;
      }
    );
  }`;

  const finallyMethodStep3SnippetCode = `finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(x);
      },
      (error) => {
        return MyPromise.resolve(x);
      }
    );
  }`;

  const finallyMethodStep4SnippetCode = `  finally(onFinally) {
    return this.then(
      (value) => {
        return MyPromise.resolve(() => {
          onFinally();
          return value;
        });
      },
      (error) => {
        return MyPromise.resolve(() => {
          onFinally();
          throw error;
        });
      }
    );
  }`;

  const finallyErrorSnippetCode = `const promise = new MyPromise((resolve, reject) => {
    resolve(42);
  });

  promise
    .finally(() => new MyPromise((resolve) => setTimeout(resolve, 10000)))
    .then((result) => console.log('Результат:', result))
    .catch((error) => console.error('Ошибка:', error.message));`;

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

  const myPromiseResolvePromiseSnippetCode = `const promise1 = MyPromise.resolve(42);
const promise2 = MyPromise.resolve(promise1);

console.log(promise1 === promise2); // true`;

  const staticResolveRejectMethodsStep1SnippetCode = `static resolve(value) {
  // Что-то сделать
}

static reject(error) {
  // Что-то сделать
}`;

  const staticResolveRejectMethodsSnippetCode = `static resolve(value) {
  if (value instanceof MyPromise) return value;
  return new MyPromise((resolve) => resolve(value));
}

static reject(error) {
  return new MyPromise((_, reject) => reject(error));
}`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Обработка результата выполнения промиса</h3>
      <p>
        Методы {thenInline}, {catchInline} и {finallyInline}, в отличии от {getResolveInline()} и {getRejectInline()},
        доступны всем, кто ждёт результат промиса. Поэтому эти методы будут публичными методами класса. Также нам
        понадобятся <strong>статические</strong> методы {getResolveInline()} и {getRejectInline()}:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseMethodsTemplateSnippetCode} />
      <p>
        Можно начать с метода {catchInline} {LONG_DASH} это просто обёртка для {thenInline} с аргументами{' '}
        <InlineCode>null</InlineCode> и <InlineCode>onRejected</InlineCode>, поэтому:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={catchMethodSnippetCode} />
      <p>А теперь займёмся методом {thenInline}.</p>
      <p>
        В него по спецификации JavaScript передаётся два аргумента для двух возможных исходов промиса — функции{' '}
        <InlineCode>onFulfilled</InlineCode> и <InlineCode>onRejected</InlineCode> для успешного выполненого и
        выполненного с неудачей промиса соответственно. В свою очередь у <InlineCode>onFulfilled</InlineCode> и{' '}
        <InlineCode>onRejected</InlineCode> один аргумент — значение с которым промис был выполнен:{' '}
        {promiseResultInline} или просто <InlineCode>this.value</InlineCode> в нашем классе{' '}
        <InlineCode>MyPromise</InlineCode>.
      </p>
      <p>
        По спецификации, у <InlineCode>onFulfilled</InlineCode> и <InlineCode>onRejected</InlineCode> есть поведение на
        случай, если вместо них были переданы не функции. Ну мало ли, всякое бывает.
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>
            Если <InlineCode>onFulfilled</InlineCode> не функция, то автоматически возвращается результат
          </p>
        </li>
        <li className='list__item'>
          <p>
            Если <InlineCode>onRejected</InlineCode> не функция, то автоматически выбрасывается ошибка
          </p>
        </li>
      </ul>
      <p>
        Учтём это в методе {thenInline} в самом начале во избежание дальнейших ошибок, когда будем вызывать эти функции:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={functionCheckThenSnippetCode} hideLines={true} />
      <p>
        Главная особенность метода {thenInline} в том, что он всегда должен возвращать новый промис, на этом основана
        возможность строить цепочки промисов. Поэтому из метода {thenInline} должнен возвращаться промис:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenReturnPromiseSnippetCode} hideLines={true} />
      <br />
      <Note type={ENoteType.PRIMARY}>
        <div className='tags'>
          <div className='tag PRIMARY'>Важно</div>
        </div>
        <p>
          У возвращаемого промиса {getResolveInline()} и {getRejectInline()} {LONG_DASH} это не те {getResolveInline()}{' '}
          и {getRejectInline()}, что были в конструкторе. Это новые функции, которые управляют новым промисом — тем,
          который возвращает {thenInline}. Они нужны для продолжения цепочки промисов.
        </p>
      </Note>
      <p>
        Внутри возвращаемого промисы и будем проверить состояние <strong>текущего</strong> промиса. Промис может быть
        только в одном из трёх состояний, поэтому будет всего три условия:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={statesCheckSnippetCode} hideLines={true} />
      <p>В зависимости от состояния промиса может выполнится одно из трёх условий:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p>
            {pendingEm}: откладываем колбэки в массивы <InlineCode>onFulfilledCallbacks</InlineCode> и{' '}
            <InlineCode>onRejectedCallbacks</InlineCode>
          </p>
        </li>
        <li className='list__item'>
          <p>
            {fulfilledEm}: вызываем <InlineCode>onFulfilled</InlineCode> с результатом выполнения промиса
          </p>
        </li>
        <li className='list__item'>
          <p>
            {rejectedEm}: вызываем <InlineCode>onRejected</InlineCode> с результатом выполнения промиса (помним, что в
            этом случае в <InlineCode>this.value</InlineCode> будет записана ошибка)
          </p>
        </li>
      </ol>
      <p>
        Добавим вспомогательные функции <InlineCode>handleFulfilled</InlineCode> и{' '}
        <InlineCode>handleRejected</InlineCode> {LONG_DASH} они пригодятся для избежания повторения кода. Держа в голове
        список выше обновим условия:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={handlesResultSnippetCode} hideLines={true} />
      <p>Задержимся на условии проверки состояния {pendingEm}:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={pendingCallbacksSyncSnippetCode} hideLines={true} />
      <p>
        У такого кода есть огромная проблема: колбэки будут вызывать синхронно, а это полностью ломает весь смысл
        промисов. Как это исправить? С помощью функции <InlineCode>queueMicrotask</InlineCode>, которая добавляет
        переданную функцию в очередь микрозадач:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={queueMicrotaskSnippetCode} hideLines={true} />
      <p>
        Оборачивание колбэков в <InlineCode>queueMicrotask</InlineCode> в момент регистрации гарантирует, что даже если
        промис меняет статус синхронно (например сразу после создания промиса вызываем {getResolveInline()} со
        значением), колбэк выполнится после всего синхронного кода. Это точно соответствует спецификации промисов.
      </p>
      <p>
        Аналогично нужно обернуть оставшимиеся состояния в <InlineCode>queueMicrotask</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenWhitoutHandlersCodeSnippetCode} hideLines={true} />
      <p>
        Осталось разобраться со вспомогательными функциями <InlineCode>handleFulfilled</InlineCode> и{' '}
        <InlineCode>handleRejected</InlineCode>.
      </p>
      <p>Обе функции имеют одинаковый алгоритм:</p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p>
            С помощью колбэка, <InlineCode>onFulfilled</InlineCode> или <InlineCode>onRejected</InlineCode>, получаем
            результат: значение, ошибку, <InlineCode>undefined</InlineCode> или промис.
          </p>
        </li>
        <li className='list__item'>
          <p>Если результат — промис, то нужно дождаться его выполнения </p>
        </li>
        <li className='list__item'>
          <p>Если результат не промис — вызываем {getResolveInline()} с этим значением</p>
        </li>
        <li className='list__item'>
          <p>Если результат ошибка — обрабатываем ошибку и вызываем {getRejectInline()} с этим значением</p>
        </li>
      </ol>
      <p>
        В коде <InlineCode>handleFulfilled</InlineCode> будет выглядеть следующим образом:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={handleFulfilledSnippetCode} hideLines={true} />
      <p>
        Функция <InlineCode>handleRejected</InlineCode> похожа на <InlineCode>handleFulfilled</InlineCode>, но с
        разницей в получении результата:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={handleRejectedSnippetCode} />
      <p>
        Может показаться, что на (11) строчке затесалась ошибка и вместо {getResolveInline('result')} должно быть{' '}
        {getRejectInline('result')}, но это не так, всё написано верно. Давайте проведём небольшой эксперимент. Что
        выведет код ниже?
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={chainRecoveryExample1SnippetCode} hideLines={true} />
      <Accordion title='Правильный ответ'>
        <ExampleSnippet code='Всё хорошо' />
      </Accordion>
      <p>А здесь?</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={chainRecoveryExample2SnippetCode} hideLines={true} />
      <Accordion title='Правильный ответ'>
        <ExampleSnippet code='Ошибка 2' />
      </Accordion>
      <p>
        В первом примере изначальный промис выполняется с ошибкой «Ошибка», эту ошибку ловит {catchInline}, но из самого{' '}
        {catchInline} возвращается не ошибка, а обычное значение «Всё хорошо». Во втором примере изначальный промис тоже
        выполняется с ошибкой, эту ошибку ловит {catchInline}, но в этот раз из самого {catchInline} возвращается другая
        ошибка.
      </p>
      <p>
        Такое поведение можно назвать восстановлением после ошибки: если в цепочке выбрасывается ошибка — цепочка
        останется {rejectedEm}, но если вернуть из цепочки обычное значение, то состояние цепочки меняется с{' '}
        {rejectedEm} на {fulfilledEm} или другими словами восстанавливается. Собственно, в строчке (11) это и происходит{' '}
        {LONG_DASH} восстановление цепочки. При этом не следует путать: это меняется не состояние изначального промиса{' '}
        {LONG_DASH} он как был {rejectedEm} так и остался {rejectedEm}. Из каждого {thenInline} или {catchInline}{' '}
        возвращается новый промис с новым состоянием.
      </p>
      <p>Осталось написать метод {finallyInline}.</p>
      <p> Что нам о нём известно:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>Выполняется в любом случае</p>
          <p className='list__footer'>
            Если промис {fulfilledEm} и если промис {rejectedEm}
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Не меняет состояние промиса</p>
          <p className='list__footer'>
            Если промис был {fulfilledEm} {LONG_DASH} промис останется {fulfilledEm}, если был {rejectedEm} {LONG_DASH}{' '}
            останется {rejectedEm}
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Не меняет значение промиса</p>
          <p className='list__footer'>
            А передаёт его дальше (если есть методы дальше в цепочке). Если вернуть значение {LONG_DASH} оно будет
            проигнорировано
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Из {finallyInline} можно выбросить ошибку</p>
          <p className='list__footer'>Если вернуть значение, то оно будет проигнорировано</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>Это синтаксический сахар над {thenInline}</p>
          <p className='list__footer'>Не нужно писать всю логику с нуля, надо воспользоваться {thenInline}</p>
        </li>
      </ul>
      <p>
        Воспользуемся методом {thenInline}, написанным ранее. У метода есть два аргумента {LONG_DASH} колбэки{' '}
        <InlineCode>onFulfilled</InlineCode> (c аргументом <InlineCode>value</InlineCode>) и{' '}
        <InlineCode>onRejected</InlineCode> (с аргументом <InlineCode>error</InlineCode>). В обоих колбэках нам
        необходимо выполнить <InlineCode>onFinally</InlineCode>, значение пробросить дальше, а ошибку выбросить:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodStep1SnippetCode} hideLines={true} />
      <p>Первый вариант, который приходит в голову:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodStep2SnippetCode} hideLines={true} />
      <p>
        Выглядит отлично, все условия выполняются: выполняем <InlineCode>onFinally</InlineCode>, значение передаём
        дальше, ошибку выбрасываем. Но у этой этой реализации есть проблема. Пример, где всё сломается:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyErrorSnippetCode} hideLines={true} />
      <p>
        В консоли выведется «Результат: 42», но важно здесь не то, что выведется, а когда. Промис с задержкой от таймера
        в 10000 ms был проигнорирован! Результатом выполнения промиса может быть что угодно: число, строку,{' '}
        <InlineCode>undefined</InlineCode> и <strong>промис</strong>. Здесь про промисы вообще забыли. Хоть{' '}
        {finallyInline} и пробрасывает исходное значение дальше, но промисы все всегда обязаны ждать.
      </p>
      <p>
        Чтобы это исправить воспользуемся лайфхаком: если передать в <InlineCode>Promise.resolve()</InlineCode> другой
        промис, то метод вернет этот же самый переданный промис без изменений, новый объект создаваться не будет:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={promiseResolvePromiseSnippetCode} hideLines={true} />
      <p>
        Внутри движок JavaScript проверяет тип аргумента и если это промис, то он возвращается как есть, полностью
        сохраняя состояние и значение, будь они хоть {fulfilledEm} с результатом или {rejectedEm} с ошибкой.
      </p>
      <p>
        У нас этот механизм пока не реализован. Добавим для этого два статических метода в класс {LONG_DASH}{' '}
        {getResolveInline()} и {getRejectInline()}:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={staticResolveRejectMethodsStep1SnippetCode} name='snippet' />

      <p> Они буду отличаться от своих тёзок в конструкторе:</p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>
            {getResolveInline()} и {getRejectInline()} как методы в конструкторе
          </p>
          <p className='list__footer'>
            Работают только внутри функции-исполнителя <em>executor</em> и меняют состояние только текущего промиса
          </p>
        </li>
        <li className='list__item'>
          <p className='list__title'>
            {getResolveInline()} и {getRejectInline()} как статические методы
          </p>
          <p className='list__footer'>
            Создают новый промис и могут быть вызваны где угодно в коде. Это как <InlineCode>Math.random()</InlineCode>{' '}
            {LONG_DASH} <InlineCode>Math</InlineCode> тоже класс, а <InlineCode>random</InlineCode> {LONG_DASH} его
            статический метод.
          </p>
        </li>
      </ul>

      <p>
        Что должны делать эти статические методы? Мы уже отвечали на этот вопрос, например, когда писали{' '}
        <InlineCode>handleFulfilled</InlineCode> или <InlineCode>handleRejected</InlineCode>. Только здесь задача будет
        ещё проще:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <p>Если значение уже промис {LONG_DASH} возвращаем его как есть</p>
        </li>
        <li className='list__item'>
          <p>
            Если значение обычное значение {LONG_DASH} создаём новый промис, которому сразу вызываем{' '}
            {getResolveInline('value')}
          </p>
        </li>
        <li className='list__item'>
          <p>
            Если ошибка {LONG_DASH} создаём промис, которому сразу вызываем {getRejectInline('error')}
          </p>
        </li>
      </ul>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={staticResolveRejectMethodsSnippetCode} />
      <p>Проверим:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={myPromiseResolvePromiseSnippetCode} />
      <section id='custom_finally'>
        <p>Теперь надо подправить {finallyInline}. Добавляем возврат промиса из обоих колбэков:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodStep3SnippetCode} />
        <p>
          Теперь у нас есть защита на все случаи: если вернётся обычное значение, если вернётся ошибка, если вернётся
          промис {LONG_DASH} мы готовы ко всему. Осталось понять, что написать внутри.
        </p>
        <p>Но теперь нельзя просто так написать внутри промиса:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodStep4SnippetCode} />
        <p>
          В созданный статическим методом промис сейчас передаётся функция, а не результат её вызова.{' '}
          <InlineCode>onFinally</InlineCode> никогда не вызывается, <InlineCode>value</InlineCode> не возвращается,{' '}
          <InlineCode>error</InlineCode> никогда не выбрасывается.
        </p>
        <p>Нам нужно:</p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p>
              Вызвать <InlineCode>onFinally</InlineCode>, получить результат:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={'const result = onFinally();'} />
          </li>
          <li className='list__item'>
            <p>
              Передать <InlineCode>result</InlineCode> в статический метод <InlineCode>resolve</InlineCode>:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={'MyPromise.resolve(result)'} />
            <p>Это тот промис, который потом будем возвращать из каждого колбэка {thenInline}.</p>
          </li>
          <li className='list__item'>
            <p>
              Так как это промис, то мы можем вызвать у него {thenInline} и продолжить цепочку. В случае с {fulfilledEm}{' '}
              значение просто передаётся дальше:
            </p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={'return MyPromise.resolve(result).then(() => value);'} />
            <p>А в случае ошибки выбрасывается ошибка:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={'return MyPromise.resolve(result).then(() => { throw error; });'}
            />
          </li>
        </ol>
        <p>Вот и всё, {finallyInline} готов:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallyMethodSnippetCode} />
      </section>
    </section>
  );
});

InstanceMethods.displayName = 'InstanceMethods';
