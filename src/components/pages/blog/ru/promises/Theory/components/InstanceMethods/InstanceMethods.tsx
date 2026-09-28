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

export const InstanceMethods = forwardRef<HTMLDivElement>((_, ref) => {
  const executorResolveSnippetCode = `const promise = new Promise((resolve, reject) => {
  console.log('Этот код выполнится сразу');
  resolve('Успешный успех');
});`;

  const promiseFulfilledSnippetCode = `setTimeout(() => console.log(promise), 5000);`;

  const promiseFulfilledSnippetLog = `Promise { <state>: 'fulfilled', <value>: 'Успешный успех' }`;

  const stateChangingSnippetCode = `if (promise.state === 'fulfilled') {
  // Здесь что-то делаем с результатом
} else if (promise.state === 'rejected') {
  // Здесь что-то делаем с ошибкой
}`;

  const finallyReturnIgnoreSnippetCode = `
const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise
  .finally(() => {
    return 'You shall not pass';
  })
  .then((result) => console.log('Результат:', result))
  .catch((error) => console.error('Ошибка:', error.message));`;

  const finallyReturnIgnoreSnippetLog = `Результат: 42`;

  const finallyThrowErrorSnippetCode = `
const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise
  .finally(() => {
    throw new Error('You shall not pass');
  })
  .then((result) => console.log('Результат:', result))
  .catch((error) => console.error('Ошибка:', error.message));`;

  const finallyThrowErrorSnippetLog = `Ошибка: You shall not pass`;

  const thenSyntaxSnippetCode = `promise.then(
  (result) => {
    // Здесь что-то делаем с результатом
  },
  (error) => {
    // Здесь что-то делаем с ошибкой
  }
);`;

  const thenResolveSyntaxSnippetCode = `const promise = new Promise((resolve, reject) => {
  resolve('Успешный успех!');
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
);`;

  const thenRejectSyntaxSnippetCode = `const promise = new Promise((resolve, reject) => {
  reject('Ой-ой, ошибочка!');
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
);`;

  const thenResolveSyntaxSnippetLog = `Успешный успех`;

  const thenRejectSyntaxSnippetLog = `Ой-ой, ошибочка`;

  const thenOnlyRejectSyntaxSnippetCode = `const promise = new Promise((resolve, reject) => {
  reject('Ой-ой, ошибочка!');
});

promise.then(
  null,
  (error) => {
    console.error(error);
  },
);`;

  const catchThenComparisonSnippetCode = `promise.catch((error) => {
  console.error(error);
});

promise.then(null, (error) => {
  console.error(error);
});`;

  const catchSyntaxSnippetCode = `const promise = new Promise((resolve, reject) => {
  throw new Error('Что-то пошло не так');
});

promise.catch((error) => {
  console.error(error);
});`;

  const finallySyntaxSnippetCode = `let isLoading = true;

loadData()
  .then((response) => response.json())
  .catch((error) => console.error(error))
  .finally(() => {
    isLoading = false;
  });`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Обработка результата выполнения промиса</h3>
      <p>Если запустить пример, который рассматривали выше, в консоли выведется только одна строка:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={executorResolveSnippetCode}
        consoleLog='Этот код выполнится сразу'
      />
      <p>
        При этом если проверить промис {LONG_DASH} он выполнился и не остался в состоянии {pendingEm}:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseFulfilledSnippetCode}
        consoleLog={promiseFulfilledSnippetLog}
      />
      <p>Куда же девается результат, который передали в {getResolveInline()}?</p>
      <p>
        Вернёмся к внутренним слотам промиса. {promiseStateInline} и {promiseResultInline} скрыты и прямого доступа к
        ним нет. Чтобы что-то сделать с результатом выполнения промиса, недостаточно написать что-то вроде:
      </p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={stateChangingSnippetCode} />
      <p>
        <strong>Обратите внимание:</strong> свойств <InlineCode>state</InlineCode> и <InlineCode>result</InlineCode> у
        промиса не существует. Это лишь иллюстрация того, что не сработает.
      </p>
      <p>
        Для работы с результатом используются специальные методы: {thenInline} и {catchInline}.
      </p>
      <section className='section inner'>
        <p>
          {thenInline} получает результат выполнения промиса. У него есть два необязательных параметра: колбэки{' '}
          {onFulfilledInline} и {onRejectedInline}. Обе функции принимают один аргумент {LONG_DASH} значение, которое
          лежит в {promiseResultInline}. Для {onFulfilledInline} это результат, для {onRejectedInline} {LONG_DASH}{' '}
          причина отклонения:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenSyntaxSnippetCode} />
        <p>
          Часто думают, что {thenInline} работает только с успешным результатом, когда промис в состоянии {fulfilledEm}.
          Но это не так:
        </p>
        <DoubleCodeSnippet
          lang={[ECodeLang.JAVASCRIPT, ECodeLang.JAVASCRIPT]}
          code={[thenResolveSyntaxSnippetCode, thenRejectSyntaxSnippetCode]}
          log={[thenResolveSyntaxSnippetLog, thenRejectSyntaxSnippetLog]}
          isEmbeddedLog={true}
        />
        <p>
          Как видно из примеров выше, {thenInline} умеет работать и с ошибками. Для этого достаточно передать только{' '}
          {onRejectedInline}:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={thenOnlyRejectSyntaxSnippetCode} consoleLog='Ой-ой, ошибочка!' />
      </section>
      <section className='section inner'>
        <p>Поздравляю! Мы только что написали метод {catchInline}!</p>
        <p>
          {catchInline} {LONG_DASH} синтаксический сахар для <InlineCode>then(null, onRejected)</InlineCode>. У него
          только один аргумент: {onRejectedInline}, а вместо {onFulfilledInline} передаётся{' '}
          <InlineCode>null</InlineCode>.
        </p>
        <p>Эти две записи делают одно и тоже:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={catchThenComparisonSnippetCode} />
        <p>
          Хоть {catchInline} и является обёрткой над {thenInline}, принято для успешного результата использовать{' '}
          {thenInline}, а для ошибок {LONG_DASH} {catchInline}:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={catchSyntaxSnippetCode} />
      </section>
      <section className='section inner'>
        <p>
          Ещё есть метод {finallyInline}. В него передаётся один колбэк {onFinallyInline}, который выполнится всегда,
          при любом исходе промиса: {fulfilledEm} или {rejectedEm}.
        </p>
        <p>
          {finallyInline} принято использовать для так называемой чистки. Например, чтобы скрыть индикатор загрузки:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={finallySyntaxSnippetCode} />
        <p>
          Технически {finallyInline} не является методом обработки результата: он ничего не делает с результатом, а
          просто передаёт его дальше. Возвращаемое из {finallyInline} значение игнорируется:
        </p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={finallyReturnIgnoreSnippetCode}
          consoleLog={finallyReturnIgnoreSnippetLog}
        />
        <p>
          В этом примере, несмотря на то что из {finallyInline} возвращается другое значение {LONG_DASH} строка{' '}
          {getTextWithChevrons('You shall not pass')}, {LONG_DASH} в {thenInline} по цепочке всё равно попадает
          результат исходного промиса {LONG_DASH} {getResolveInline('42')}.
        </p>
        <p>Но есть исключение: из {finallyInline} можно выбросить ошибку:</p>
        <CodeSnippet
          lang={ECodeLang.JAVASCRIPT}
          code={finallyThrowErrorSnippetCode}
          consoleLog={finallyThrowErrorSnippetLog}
        />
      </section>
      <p>
        Резюмируем: {finallyInline}, как и {catchInline}, — просто обёртки над {thenInline}. Когда мы вызываем{' '}
        {finallyInline}, под капотом вызывается
        {thenInline} с двумя колбэками: {onFulfilledInline} и {onRejectedInline}. Оба колбэка вызывают {onFinallyInline}
        , а потом пробрасывают исходное значение или ошибку дальше. Что именно происходит под капотом {finallyInline},
        разберём, когда будем писать этот метод в классе промиса.
      </p>
    </section>
  );
});

InstanceMethods.displayName = 'InstanceMethods';
