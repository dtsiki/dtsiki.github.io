import { forwardRef } from 'react';
import { ExternalLink } from 'src/components/common/ExternalLink';

export const PlaygroundTS = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <section ref={ref}>
      <h2>Песочница TypeScript</h2>
      <p>
        У TypeScript есть официальная{' '}
        <ExternalLink label='онлайн-песочница' href='https://www.typescriptlang.org/play' />, где можно писать,
        тестировать и компилировать код TypeScript в браузере без установки пакетов. Там можно делать всё что душа
        захочет и сразу же видеть результат компиляции в JavaScript-код.
      </p>
    </section>
  );
});

PlaygroundTS.displayName = 'PlaygroundTS';
