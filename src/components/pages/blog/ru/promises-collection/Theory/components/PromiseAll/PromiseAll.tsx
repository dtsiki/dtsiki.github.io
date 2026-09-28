import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { allInline } from '../../../utils';

export const PromiseAll = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseAllAllResolvedSnippetCode = `Promise.all([
  Promise.resolve('Первый выполнился'),
  Promise.resolve('Второй выполнился'),
  Promise.resolve('Третий выполнился'),
]).then((result) => console.log(result));`;

  const promiseAllAllResolvedSnippetLog = `['Первый выполнился', 'Второй выполнился', 'Третий выполнился']`;

  const promiseAllAllResolvedWithDelaySnippetCode = `const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
};

Promise.all([
  resolveWithDelay('Первый выполнился', 3000),
  resolveWithDelay('Второй выполнился', 1000),
  resolveWithDelay('Третий выполнился', 2000),
]).then((result) => console.log(result));`;

  const promiseAllAllResolvedWithDelaySnippetLog = `['Первый выполнился', 'Второй выполнился', 'Третий выполнился']`;

  const promiseAllOneRejectedSnippetCode = `const rejectWithDelay = (value, delay) => {
  return new Promise((_, reject) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      reject(value);
    }, delay)
  );
};

const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.all([
  resolveWithDelay('Первый', 3000),
  rejectWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
])
  .then((result) => console.log(\`\${result} выполнился\`))
  .catch((error) => console.error(\`\${error} упал\`));`;

  const promiseAllOneRejectedSnippetLog = `Второй пошёл
Error: Второй упал
Третий пошёл
Первый пошёл`;

  const promiseAllAllRejectedSnippetCode = `Promise.all([
  Promise.reject("Первый"),
  Promise.reject("Второй"),
  Promise.reject("Третий"),
])
  .then((result) => console.log(\`\${result} выполнился\`))
  .catch((error) => console.error(\`\${error} упал\`));`;

  const promiseAllAllRejectedSnippetLog = `Error: Первый упал`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {allInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Всё или ничего</h4>
      <p>
        {allInline} ждёт выполнения <strong>всех</strong> промисов. Если все переданные промисы выполнились успешно{' '}
        {LONG_DASH} результатом будет массив значений в <strong>исходном порядке</strong>:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllAllResolvedSnippetCode}
        consoleLog={promiseAllAllResolvedSnippetLog}
      />
      <p>Порядок результатов сохраняется, даже если промисы завершаются в разное время:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllAllResolvedWithDelaySnippetCode}
        consoleLog={promiseAllAllResolvedWithDelaySnippetLog}
      />
      <p>Если хотя бы один промис будет отклонён, результатом будет ошибка первого отклонённого промиса:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllOneRejectedSnippetCode}
        consoleLog={promiseAllOneRejectedSnippetLog}
      />
      <p>
        В случае, если один промис отклоняется, остальные промисы продолжают выполняться, а результаты их выполнения
        игнорируются:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseAllAllRejectedSnippetCode}
        consoleLog={promiseAllAllRejectedSnippetLog}
      />
    </section>
  );
});

PromiseAll.displayName = 'PromiseAll';
