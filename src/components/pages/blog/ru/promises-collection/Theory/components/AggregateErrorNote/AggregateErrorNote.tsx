import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { InlineCode } from 'src/components/blog/InlineCode';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { ENoteType, Note } from 'src/components/common/Note';
import { LONG_DASH } from 'src/constants';

export const AggregateErrorNote = forwardRef<HTMLDivElement>((_, ref) => {
  const aggregateErrorErrorsPropExampleCode = `try {
    throw new AggregateError([
      new Error('Ой-ой, ошибочка'),
      new Error('Ой-ой, другая ошибочка'),
    ]);
  } catch (error) {
    console.error(error.errors);
  }`;

  const aggregateErrorErrorsPropExampleLog = `[
    { Error: 'Ой-ой, ошибочка' }
    { Error: 'Ой-ой, другая ошибочка' }
]`;

  const aggregateErrorSyntaxExampleCode = `new AggregateError(errors, message)`;

  const aggregateErrorExampleCode = `const error1 = new Error('Ой-ой, ошибка');
  const error2 = new Error('Ой-ой, другая ошибка');

  const errors = new AggregateError([error1, error2], 'Ой-ой, тут две ошибки');`;

  const aggregateMessagePropExampleCode = `try {
    throw new AggregateError(
      [new Error('Ой-ой, ошибочка'), new Error('Ой-ой, другая ошибочка')],
      'Обе операции упали'
    );
  } catch (error) {
    console.error(error.message);
  }`;

  const aggregateMessagePropExampleLog = `Обе операции упали`;

  return (
    <aside ref={ref} className='section inner'>
      <Note type={ENoteType.SECONDARY}>
        <div className='tags'>
          <div className='tag'>Дополнительная информация</div>
        </div>
        <p>
          <InlineCode>AggregateError</InlineCode> {LONG_DASH} это подкласс класс ошибки <InlineCode>Error</InlineCode>,
          который упаковывает несколько ошибок в одну.
        </p>
        <p>
          Что нам важно знать про <InlineCode>AggregateError</InlineCode>:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>Конструктор выглядит так:</p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={aggregateErrorSyntaxExampleCode} />
            <p className='list__footer'>
              Здесь <InlineCode>errors</InlineCode> это итерируемый объект (массив, коллекция) с ошибками, а{' '}
              <InlineCode>message</InlineCode> {LONG_DASH} необязательно человекочитаемое описание.
            </p>
            <p>Например:</p>
            <CodeSnippet lang={ECodeLang.JAVASCRIPT} code={aggregateErrorExampleCode} />
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Есть свойство <InlineCode>errors</InlineCode>:
            </p>
            <p className='list__footer'>Через это свойство можно получить список ошибок:</p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={aggregateErrorErrorsPropExampleCode}
              consoleLog={aggregateErrorErrorsPropExampleLog}
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Есть свойство <InlineCode>message</InlineCode>:
            </p>
            <p className='list__footer'>
              Через это свойство можно получить, соответственно, человекочитаемое описание:
            </p>
            <CodeSnippet
              lang={ECodeLang.JAVASCRIPT}
              code={aggregateMessagePropExampleCode}
              consoleLog={aggregateMessagePropExampleLog}
            />
          </li>
        </ul>
      </Note>
    </aside>
  );
});

AggregateErrorNote.displayName = 'AggregateErrorNote';
