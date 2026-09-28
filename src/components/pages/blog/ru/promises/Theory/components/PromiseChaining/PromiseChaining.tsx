import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { thenInline } from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { undefinedInline } from 'src/components/blog/utils';

export const PromiseChaining = forwardRef<HTMLDivElement>((_, ref) => {
  const promiseChainingSnippetCode = `Promise.resolve(1)
  .then((value) => {
    console.log('Первый:', value);
    return 2;
  })
  .then((value) => {
    console.log('Второй:', value);

    return new Promise(resolve => {
      setTimeout(() => resolve(3), 1000);
    });
  })
  .then((value) => console.log('Третий:', value));`;

  const promiseChainingSnippetLog = `Первый: 1
Второй: 2
Третий: 3 // Через 1 секунду`;

  return (
    <section ref={ref} className='section outer'>
      <h3>Цепочка промисов</h3>
      <p>
        Каждый вызов {thenInline} неявно создаёт и возвращает абсолютно новый промис. Как будет выглядеть этот промис
        зависит от того, что возвращается из колбэка прошлого {thenInline} в цепочке:
      </p>
      <ul className='list markered nested'>
        <li className='list__item'>
          <p className='list__title'>
            ничего (нет <InlineCode>return</InlineCode> из колбэка)
          </p>
          <p>Создаётся уже выполненный промис со значением {undefinedInline}</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>обычное значение: число, строка, булево значение, массив, объект</p>
          <p>Создаётся выполненный промис с этим значением</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>промис</p>
          <p>Всё равно создаётся новый промис, который будет ждать завершения того, что вернули вручную</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>
            ошибка, выброшенная через <InlineCode>throw</InlineCode>
          </p>
          <p>Создаётся уже отклонённый промис с этой ошибкой</p>
        </li>
      </ul>
      <p>
        Под капотом {thenInline} делает то же самое, что и мы, когда пишем <InlineCode>new Promise(...)</InlineCode>,{' '}
        {LONG_DASH} просто берёт на себя управление состоянием нового промиса.
      </p>
      <p>
        Если внутри одного {thenInline} всегда возвращается промис, а следующий {thenInline} обязательно дождётся его
        выполнения, то таким образом можно составлять цепочки. Они так и называются {LONG_DASH} цепочки промисов.
      </p>
      <p>Как это будет выглядеть:</p>
      <CodeSnippet
        lang={ECodeLang.JAVASCRIPT}
        code={promiseChainingSnippetCode}
        consoleLog={promiseChainingSnippetLog}
      />
      <p>
        Механизм, который стоит за этим поведением, называется схлопывание промисов. Его разберём отдельно {LONG_DASH}
        чуть позже (
        <a href='#flattering' className='link'>
          см. Схлопывание и развёртывание
        </a>
        ).
      </p>
    </section>
  );
});

PromiseChaining.displayName = 'PromiseChaining';
