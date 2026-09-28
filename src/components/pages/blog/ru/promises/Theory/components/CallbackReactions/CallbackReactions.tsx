import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import {
  catchInline,
  finallyInline,
  fulfilledEm,
  getRejectInline,
  getResolveInline,
  onRejectedInline,
  pendingEm,
  promiseFulfillReactionsInline,
  promiseRejectReactionsInline,
  promiseResultInline,
  promiseStateInline,
  rejectedEm,
  thenInline,
} from '../../../utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ENoteType, Note } from 'src/components/common/Note';
import { getTextWithChevrons } from 'src/utils';

export const CallbackReactions = forwardRef<HTMLDivElement>((_, ref) => {
  const fetchSnippetCode = `let isLoading = true;

fetch(url)
  .then((response) => response.json())
  .then((result) => renderResult(result))
  .catch((error) => renderError(error))
  .finally(() => {
    isLoading = false
  });`;

  const fetchWithPromisesLabelsSnippetCode = `fetch(url)                                // промис А
  .then((response) => response.json())    // промис B
  .then((result) => renderResult(result)) // промис C
  .catch((error) => renderError(error))   // промис D
  .finally(() => { isLoading = false });  // промис E`;

  return (
    <section ref={ref} className='section outer' id='callback_reactions'>
      <h2>Очереди колбэков</h2>
      <p>
        Кроме уже знакомых нам {promiseStateInline} и {promiseResultInline}, у промиса есть ещё два внутренних слота для
        очередей колбэков:
      </p>
      <ul className='list markered'>
        <li className='list__item'>
          <p className='list__title'>{promiseFulfillReactionsInline}</p>
          <p>Очередь для колбэков, которые выполнятся, когда промис перейдёт в состояние {fulfilledEm}</p>
        </li>
        <li className='list__item'>
          <p className='list__title'>{promiseRejectReactionsInline}</p>
          <p>Очередь для колбэков, которые выполнятся, когда промис перейдёт в состояние {rejectedEm}</p>
        </li>
      </ul>
      <p>
        Именно в этих очередях колбэки ждут, пока промис завершится. А сама асинхронность уже заслуга очереди
        микрозадач, в которую они попадают после смены состояния (подробнее {LONG_DASH} в{' '}
        <a href='https://dtsiki.github.io/blog/ru/event-loop-guide' className='link'>
          статье про Event Loop
        </a>
        ).
      </p>
      <p>Разберём, как это работает под капотом, на примере, приближенном к реальности:</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={fetchSnippetCode} />
      <br />
      <Note type={ENoteType.SECONDARY}>
        <div className='tags'>
          <div className='tag'>Обратите внимание</div>
        </div>
        <p>
          Функция <InlineCode>fetch(url)</InlineCode> сразу возвращает промис в состоянии {pendingEm}. Когда сервер
          ответит, промис переходит в {fulfilledEm} и возвращает объект <InlineCode>Response</InlineCode>. Сам по себе{' '}
          <InlineCode>Response</InlineCode> это ещё не готовые данные, а обёртка над ними. Чтобы прочитать тело ответа,
          нужно вызвать специальный метод в зависимости от формата {LONG_DASH}
          например, <InlineCode>json()</InlineCode> для JSON. Этот метод тоже возвращает промис.
        </p>
        <p>
          Поэтому в примере выше в первом {thenInline} выполняется <InlineCode>response.json()</InlineCode>, и из него
          возвращается промис. Это как будто лишний шаг: {thenInline} возвращает промис, но в цепочке он схлопывается с
          предыдущим. Подробнее {LONG_DASH} в{' '}
          <a href='#flattering' className='link'>
            разделе про схлопывание
          </a>
          ).
        </p>
      </Note>
      <p>Пройдёмся пошагово и разберёмся что происходит в этом примере:</p>
      <ol className='list stepped'>
        <li className='list__item'>
          <p>
            Функция <InlineCode>fetch()</InlineCode> сразу возвращает промис <em>(A)</em>, не дожидаясь ответа сервера.
            Изначальное состояние этого промиса {pendingEm}.
          </p>
          <p>Каждый колбэк в цепочке будет тоже возвращать новый промис:</p>
          <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={fetchWithPromisesLabelsSnippetCode} />
        </li>
        <li className='list__item'>
          <p>
            У <InlineCode>fetch()</InlineCode> нет видимой нам функции-исполнителя {LONG_DASH} браузер делает всю работу
            сам. Но представим, что на этом шаге начинает выполняться <em>executor</em>: в Web API отправляется сетевой
            запрос. При этом <em>executor</em> не ждёт ответа {LONG_DASH} неизвестно, сколько времени займёт запрос: это
            может быть и миллисекунда, и минута. Поэтому <em>executor</em> только запускает асинхронную операцию и не
            ждёт её результата. Код идёт дальше, а когда сервер ответит {LONG_DASH} вызовется {getResolveInline()} или{' '}
            {getRejectInline()}.
          </p>
        </li>
        <li className='list__item'>
          <p>
            Код продолжает выполняться. На пути цепочка промисов: два {thenInline}, {catchInline} и {finallyInline}.
            Движок не может выполнить колбэки внутри этих методов потому что первый промис <em>(A)</em> всё ещё в
            состоянии {pendingEm}. Здесь на помощь приходят очереди {promiseFulfillReactionsInline} и{' '}
            {promiseRejectReactionsInline}: колбэки будут откладываться каждый в соответствующую очередь:
          </p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                Колбэки из {thenInline} отправятся в {promiseFulfillReactionsInline}
              </p>
            </li>
            <li className='list__item'>
              <p>
                Колбэки из {catchInline} отправятся в {promiseRejectReactionsInline}
              </p>
            </li>
            <li className='list__item'>
              <p>
                Колбэки из {finallyInline} отправятся и в {promiseFulfillReactionsInline}, и в{' '}
                {promiseRejectReactionsInline}
              </p>
              <p className='list__footer'>
                Про это разберём отдельно в практике {LONG_DASH} в{' '}
                <a href='#flattering' className='link'>
                  разделе про кастомный {finallyInline}
                </a>
              </p>
            </li>
          </ul>
          <Note type={ENoteType.SECONDARY}>
            <p>
              У {thenInline} есть второй аргумент {onRejectedInline}. Если им воспользоваться, колбэк попадёт в
              {promiseRejectReactionsInline} {LONG_DASH} так же, как колбэк {catchInline}, который является
              синтаксическим сахаром <InlineCode>then(null, onRejected)</InlineCode>.
            </p>
          </Note>
          <p>Таким образом в очередях будут лежать следующие колбэки:</p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                {promiseFulfillReactionsInline}: колбэки из {thenInline} <InlineCode>response.json()</InlineCode> и{' '}
                <InlineCode>renderResult(result)</InlineCode>, а также колбэк из {finallyInline}
              </p>
            </li>
            <li className='list__item'>
              <p>
                {promiseRejectReactionsInline}:{' '}
                <InlineCode>renderError(error) и снова колбэк из {finallyInline}</InlineCode>
              </p>
            </li>
          </ul>
          <p>
            Когда выполнится промис, соответствующий колбэк будет взят из очереди и выполнен. При этом каждый колбэк
            должен отреагировать на {getTextWithChevrons('свой')} промис. В нашем случае будет следующая цепочка реакций
            и вызовов. Начнётся всё с того, что <InlineCode>fetch()</InlineCode> создаёт промис <em>(А)</em>. Когда:
          </p>
          <ul className='list markered'>
            <li className='list__item'>
              <p>
                <strong>
                  выполняется промис <em>(A)</em>:
                </strong>
              </p>
              <p>
                <b>
                  если <em>успешно</em>:
                </b>{' '}
                берётся колбэк первого {thenInline} из очереди {promiseFulfillReactionsInline} {LONG_DASH}{' '}
                <InlineCode>response.json()</InlineCode>. Этот колбэк в свою очередь тоже создаёт промис {LONG_DASH}{' '}
                <em>(B)</em>. Следующие колбэки ждут выполнения промиса <em>(B)</em>. Когда:
                <ul className='list markered nested'>
                  <li className='list__item'>
                    <p>
                      <strong>выполняется промис (B):</strong>
                    </p>
                    <p>
                      <b>
                        если <em>успешно</em>:
                      </b>{' '}
                      берётся колбэк второго {thenInline} из очереди {promiseFulfillReactionsInline}, {LONG_DASH}{' '}
                      <InlineCode>renderResult(result)</InlineCode>. Здесь тоже колбэк вернёт промис, {LONG_DASH}{' '}
                      <em>(C)</em>, даже если из функции нет явного возврата промиса. Когда:
                      <ul className='list markered nested'>
                        <li className='list__item'>
                          <p>
                            <strong>
                              выполняется промис <em>(C)</em>:
                            </strong>
                          </p>
                          <p>
                            <b>
                              если <em>успешно</em>:
                            </b>{' '}
                            берётся колбэк {finallyInline} из очереди {promiseFulfillReactionsInline}. Конец цепочки.
                          </p>
                          <p>
                            <b>
                              если <em>с ошибкой</em>:
                            </b>{' '}
                            выполняется колбэк из {catchInline} из очереди {promiseRejectReactionsInline}. Колбэк
                            создаёт промис <em>(D)</em>. Когда:
                            <ul className='list markered nested'>
                              <li className='list__item'>
                                <p>
                                  <strong>
                                    выполняется промис <em>(D)</em>:
                                  </strong>
                                </p>
                                <p>
                                  <b>
                                    если <em>успешно</em>:
                                  </b>{' '}
                                  из очереди {promiseFulfillReactionsInline} берётся колбэк {finallyInline} и
                                  выполняется.
                                </p>
                                <p>
                                  <b>
                                    если <em>c ошибкой</em>:
                                  </b>{' '}
                                  из очереди {promiseRejectReactionsInline} берётся колбэк {finallyInline} и
                                  выполняется.
                                </p>
                              </li>
                            </ul>
                          </p>
                        </li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </p>
              <p>
                <b>
                  если <em>с ошибкой</em>:
                </b>{' '}
                выполняется колбэк из {catchInline}. Колбэк создаёт промис <em>(D)</em>. Когда:
                <ul className='list markered nested'>
                  <li className='list__item'>
                    <p>
                      <strong>
                        выполняется промис <em>(D)</em>:
                      </strong>
                    </p>
                    <p>
                      <b>
                        если <em>успешно</em>:
                      </b>{' '}
                      из очереди {promiseFulfillReactionsInline} берётся колбэк {finallyInline} и выполняется.
                    </p>
                    <p>
                      <b>
                        если <em>c ошибкой</em>:
                      </b>{' '}
                      из очереди {promiseRejectReactionsInline} берётся колбэк {finallyInline} и выполняется.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
});

CallbackReactions.displayName = 'CallbackReactions';
