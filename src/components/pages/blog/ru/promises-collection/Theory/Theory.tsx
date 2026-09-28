import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { ENoteType, Note } from 'src/components/common/Note';
import { LONG_DASH } from 'src/constants';
import { getTextWithChevrons } from 'src/utils';
import { allInline, raceInline, allSettledInline, anyInline, iterableInline, thenInline, catchInline } from '../utils';
import { PromiseAll, PromiseAllSettled, PromiseRace, AggregateErrorNote } from './components';

export const Theory = forwardRef<HTMLDivElement>((_, ref) => {
  const methodsSyntaxExampleCode = `Promise.all(iterable);
Promise.race(iterable);
Promise.any(iterable);
Promise.allSettled(iterable);`;

  return (
    <section ref={ref} className='section outer'>
      <Note>
        <div className='tags'>
          <div className='tag PRIMARY'>Важно</div>
        </div>
        <p>
          Статья опирается на{' '}
          <ExternalLink href='https://dtsiki.github.io/blog/ru/promises' label='предыдущую статью про промисы' />. В ней
          мы написали класс <InlineCode>MyPromise</InlineCode> {LONG_DASH} его реализация используется и здесь. Если вы
          её не читали, рекомендую начать с неё.
        </p>
      </Note>
      <br />
      <p>Но сперва, конечно же, теория.</p>
      <h2>Теория: зачем объединять промисы</h2>
      <section className='section inner'>
        <p>
          {getTextWithChevrons('Коллекция промисов')} звучит пафосно, но на самом деле это просто группа (почему не
          массив {LONG_DASH} станет понятно ниже), элементами которой являются объекты класса{' '}
          <InlineCode>Promise</InlineCode>. Причём это могут быть и не промисы вовсе {LONG_DASH} обычные значения,
          которые JavaScript сам приведёт к промису.
        </p>
        <p>
          Зачем объединять промисы в группы? Чаще всего {LONG_DASH} когда одна и та же операция запускается для
          нескольких задач, и за их результатами нужно следить как за единым целым. Простой пример: несколько сетевых
          запросов к API, которые должны уйти не друг за другом, а одновременно, а результаты должны обработаться
          вместе. Вот тут и приходят на помощь методы для работы с группой промисов.
        </p>
        <p>
          Для этих целей и нужны методы {allInline}, {raceInline}, {allSettledInline} и {anyInline}.
        </p>
        <p>У них простой синтаксис:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={methodsSyntaxExampleCode} />
        <p>Все четыре метода:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>принимают на вход итерирумый объект {iterableInline}</p>
            <p>
              Элементами этого объекта не обязательно должны быть промисы, это могут быть любые значения. Если значение
              не промис, JavaScript сам приведёт его к промису. Главное, чтобы сам объект был итерируемым. Подробнее о
              том, что такое итерируемые объекты и чем они отличаются от массивов {LONG_DASH} в разделе практики{' '}
              <a href='#iterable' className='link' style={{ fontWeight: '600' }}>
                (Перейти)
              </a>
              .
            </p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              возвращают <strong>один новый</strong> промис
            </p>
            <p>
              Состояние и результат этого промиса зависит от того, что произойдёт с {iterableInline} внутри каждого
              метода. Все они ждут выполнения, но все разного:
            </p>
            <ul className='list markered nested'>
              <li className='list__item'>
                <p>
                  {allInline} ждёт выполнения <strong>всех</strong> промисов
                </p>
              </li>
              <li className='list__item'>
                <p>
                  {raceInline} ждёт <strong>первый завершившийся</strong> промис
                </p>
              </li>
              <li className='list__item'>
                <p>
                  {allSettledInline} ждёт, когда <strong>завершатся все</strong> промисы
                </p>
              </li>
              <li className='list__item'>
                <p>
                  {anyInline} ждёт <strong>первый успешно выполненный</strong> промис
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Разберём каждый метод отдельно. Под заголовком с названием каждого метода{' '}
          <span className='accented italic secondary'>вот так</span> указано короткое, но ёмкое правило для быстрого
          запоминания, что именно он делает.
        </p>
      </section>
      <PromiseAll />
      <PromiseRace />
      <PromiseAllSettled />
      <AggregateErrorNote />
    </section>
  );
});

Theory.displayName = 'Theory';
