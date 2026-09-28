import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { Accordion } from 'src/components/common/Accordion';
import { InlineCode } from 'src/components/blog/InlineCode';
import { LONG_DASH } from 'src/constants';
import { getTextWithChevrons } from 'src/utils';

const EXAMPLE_NUMBER = 5;

export const SingleTimeoutWithoutDelayExample = forwardRef<HTMLDivElement>((_, ref) => {
  const zeroDelayTimeoutExampleCode = `console.log("Раз");

setTimeout(() => {
  console.log("Два");
}, 0);

console.log("Три");`;

  const zeroDelayTimeoutExampleLog = `Раз
Три
Два`;

  return (
    <section ref={ref} id='timeout_wiithout_delay' className='section inner'>
      <div className='tags'>
        <div className='tag PRIMARY'>Пример #{EXAMPLE_NUMBER}</div>
        <div className='tag TEXT-ONLY'>Таймер с нулевой задержкой</div>
      </div>
      <p>Что будет если в примере выше поменять задержку таймера с 5000 миллисекунд на 0?</p>
      <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={zeroDelayTimeoutExampleCode} name={`example(${EXAMPLE_NUMBER})`} />
      <p className='spacer top medium'>
        Предлагаю подумать над ответом, прежде чем читать дальше. Если готовы {LONG_DASH} раскрывайте правильный ответ
        ниже.{' '}
      </p>
      <Accordion title='Правильный ответ'>
        <p>В консоли выведется следующее:</p>
        <ExampleSnippet code={zeroDelayTimeoutExampleLog} />
        <p>Да, будет тот же самый вывод, что и с задержкой 5000 миллисекунд.</p>
        <p>
          Здесь тоже нет ошибки {LONG_DASH} даже если задержка равна 0 миллисекунд, {getTextWithChevrons('Два')} всё
          равно появится после
          {getTextWithChevrons('Три')}. Многие попадают в эту ловушку, считая, что{' '}
          <InlineCode>setTimeout(callback, 0)</InlineCode> поможет выполнить колбэк «между строчками» синхронного кода.
          Помните, <strong>0 миллисекунд {LONG_DASH} это не гарантия немедленного выполнения</strong>. Это просто запись
          в очередь c пометкой <em>как можно скорее</em>, но всё равно после выполнения всего синхронного кода и
          микрозадач. Даже с задержкой 0 миллисекунд порядок вывода не меняется, шаги остаются такими же как и в примере
          выше.
        </p>
      </Accordion>
    </section>
  );
});

SingleTimeoutWithoutDelayExample.displayName = 'SingleTimeoutWithoutDelayExample';
