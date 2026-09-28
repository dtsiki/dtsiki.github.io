import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { LONG_DASH } from 'src/constants';
import { allInline, myRaceInline, raceInline } from '../../../utils';

export const PromiseRace = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseRaceAllResolvedSnippetCode = `Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Первый'), 3000)),
  new Promise((resolve) => setTimeout(() => resolve('Второй'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Третий'), 1000)),
]).then((result) => console.log(result));`;

  const promiseRaceAllResolvedSnippetLog = 'Третий';

  const promiseRaceFirstRejectedSnippetCode = `Promise.race([
  new Promise((resolve) => setTimeout(() => resolve('Успешный успех'), 5000)),
  new Promise((_, reject) => setTimeout(() => reject('Ой-ой, ошибочка'), 1000)),
]).catch((error) => console.error(error));`;

  const promiseRaceFirstRejectedSnippetLog = 'Ой-ой, ошибочка';

  const promiseRaceRejectedOtherResultsSnippetCode = `const resolveWithDelay = (value, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(value, 'пошёл');
      resolve(value);
    }, delay)
  );
};

Promise.race([
  resolveWithDelay('Первый', 3000),
  resolveWithDelay('Второй', 1000),
  resolveWithDelay('Третий', 2000),
]).then((result) => console.log(\`\${result} победил\`));`;

  const promiseRaceRejectedOtherResultsSnippetLog = `Второй пошёл // Через 1 секунду
Второй победил
Третий пошёл // Через 2 секунды
Первый пошёл // Через 3 секунды`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Метод {myRaceInline}</h3>
      <h4 className='accented italic secondary spacer top small'>Кто первый встал, того и тапки</h4>
      <p>
        {raceInline} ждёт <strong>первый завершившийся</strong> промис, возвращает результат его выполнения:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseRaceAllResolvedSnippetCode}
        consoleLog={promiseRaceAllResolvedSnippetLog}
      />
      <p>
        Без разницы как завершился этот промис {LONG_DASH} удачно или с ошибкой {LONG_DASH} результатом всегда будет
        результат выполнения этого промиса:
      </p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseRaceFirstRejectedSnippetCode}
        consoleLog={promiseRaceFirstRejectedSnippetLog}
      />
      <p>Остальные промисы, как и в случае с {allInline}, продолжают выполняться, а результаты их игнорируются:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseRaceRejectedOtherResultsSnippetCode}
        consoleLog={promiseRaceRejectedOtherResultsSnippetLog}
      />
    </section>
  );
});

PromiseRace.displayName = 'PromiseRace';
