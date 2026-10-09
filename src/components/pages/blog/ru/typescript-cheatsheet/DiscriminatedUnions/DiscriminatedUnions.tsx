import { forwardRef } from 'react';
import { InlineCode } from 'src/components/blog';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const DiscriminatedUnions = forwardRef<HTMLDivElement>(({}, ref) => {
  const exampleCode = `// Общий тип "фигура" с полем-дискриминатором kind
interface Circle {
  type: 'circle';
  radius: number;
}

interface Square {
  type: 'square';
  side: number;
}

interface Rectangle {
  type: 'rectangle';
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;`;

  const exampleUsageCode = `function assertNever(type: never): never {
  throw new Error(\`Неизвестная фигура: \${type}\`);
}

function getArea(shape: Shape): number {
  switch (shape.type) {
    case 'circle':
      // TypeScript знает: здесь shape — Circle
      return Math.PI * shape.radius ** 2;
    case 'square':
      // TypeScript знает: здесь shape — Square
      return shape.side ** 2;
    case 'rectangle':
      // TypeScript знает: здесь shape — Rectangle
      return shape.width * shape.height;
    default:
      // Если добавим новую фигуру — попадём сюда
      return assertNever(shape);
  }
}

getArea({ type: 'circle', radius: 42 });`;

  return (
    <section ref={ref} className='section outer'>
      <h2>
        Дискриминирующие объединения
        {getGhostText('Discriminated Unions')}
      </h2>
      <p>
        Это набор типов, у которых есть общее поле-дискриминатор. Обычно это <InlineCode>type</InlineCode>,{' '}
        <InlineCode>kind</InlineCode> или <InlineCode>status</InlineCode>. По этому полю TypeScript понимает какой
        именно тип будет нужен.
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={exampleCode} />
      <p>
        Теперь TypeScript знает: если <InlineCode>shape.type === 'circle'</InlineCode>, то нужным типом точно будет{' '}
        <InlineCode>Circle</InlineCode>:
      </p>
      <CodeSnippet lang={ECodeLang.TYPESCRIPT} code={exampleUsageCode} />
    </section>
  );
});

DiscriminatedUnions.displayName = 'DiscriminatedUnions';
