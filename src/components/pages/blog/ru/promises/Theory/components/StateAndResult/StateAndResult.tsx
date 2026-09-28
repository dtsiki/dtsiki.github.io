import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { InlineHint } from 'src/components/common/InlineHint';
import { LONG_DASH } from 'src/constants';
import {
  fulfilledEm,
  getRejectInline,
  pendingEm,
  promiseResultInline,
  promiseStateInline,
  rejectedEm,
} from '../../../utils';

export const StateAndResult = forwardRef<HTMLDivElement>((_, ref) => {
  const hintContent = (
    <>
      Внутренние слоты (internal slots) {LONG_DASH} служебные поля объекта, которые недоступны из кода напрямую. Они
      обозначаются двойными квадратными скобками <InlineCode>[[...]]</InlineCode> и используются движком JavaScript для
      внутренней логики.
    </>
  );

  const inlineHint = <InlineHint title='внутренних слота' hint={hintContent} />;

  return (
    <section ref={ref} className='section outer'>
      <h3>Состояние и результат</h3>
      <p>
        Промис - это, как и многое в JavaScript, просто объект. Просто объект со своими особенностями и нюансами. Вся
        магия промисов на самом деле не такая уж магия, если разобраться из чего они состоят.
      </p>
      <p>
        У промиса как объекта есть два {inlineHint} или простым языком свойства, недоступных напрямую. Они определяют
        всю логику промисов:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>{promiseStateInline} хранит состояние промиса</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>{promiseResultInline} хранит результат выполнения промиса</p>
        </li>
      </ul>
      <p>
        Состояние {promiseStateInline} может принимать строго три значения {LONG_DASH} {pendingEm}, {fulfilledEm},{' '}
        {rejectedEm} {LONG_DASH} и от него зависит, что лежит в {promiseResultInline}:
      </p>
      <ol className='list ordered'>
        <li className='list__item'>
          <p className='list__title'>{pendingEm} </p>
          <p>Начальное состояние промиса:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                {promiseStateInline} = {pendingEm}
              </p>
            </li>
            <li className='list__item'>
              {promiseResultInline} = <InlineCode>undefined</InlineCode>
            </li>
          </ul>
        </li>
        <li className='list__item'>
          <p className='list__title'>fulfilled</p>
          <p>Промис выполнен успешно:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                {promiseStateInline} = {fulfilledEm}
              </p>
            </li>
            <li className='list__item'>
              <p>{promiseResultInline} = значение, с которым промис выполнен</p>
            </li>
          </ul>
        </li>
        <li className='list__item'>
          <p className='list__title'>rejected</p>
          <p>Промис отклонён:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                {promiseStateInline} = {rejectedEm}
              </p>
            </li>
            <li className='list__item'>{promiseResultInline} причина отклонения (обычно ошибка)</li>
          </ul>
        </li>
      </ol>
      <p>
        Отдельного свойства для хранения ошибки нет. Всё потому, что промис ведёт себя как конечный автомат: состояние
        меняется только один раз: из {pendingEm} либо в {fulfilledEm}, либо в {rejectedEm}. Поэтому по состоянию промиса
        легко понять, что лежит в {promiseResultInline}:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <InlineCode>undefined</InlineCode> если промис в {pendingEm}
        </li>
        <li className='list__item'>значение если в {fulfilledEm}</li>
        <li className='list__item'>ошибка если в {rejectedEm}</li>
      </ul>
      <p>
        Со свойстами и состояними разобрались. Но кто переводит промис из {pendingEm} в {fulfilledEm} или {rejectedEm}?
        За это отвечают {getRejectInline()} и {getRejectInline()} {LONG_DASH} о них и поговорим дальше.
      </p>
    </section>
  );
});

StateAndResult.displayName = 'StateAndResult';
