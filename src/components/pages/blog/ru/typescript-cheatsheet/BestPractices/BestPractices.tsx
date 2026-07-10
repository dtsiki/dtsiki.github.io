import { forwardRef } from 'react';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { getGhostText } from 'src/utils/formatting';

export const BestPractices = forwardRef<HTMLDivElement>(({}, ref) => {
  /*
  https://msiter.ru/tutorials/typescript/best-practices

  user.service.ts // Классы‑сервисы
user.model.ts // Определения типов
user.controller.ts // Контроллеры
user.component.ts // Компоненты
user.utils.ts // Вспомогательные функции
user.test.ts // Тестовые файлы

// Плохо
UserService.ts // Избегайте PascalCase для имён файлов
user_service.ts // Избегайте snake_case
userService.ts // Избегайте camelCase для имён файлов

*/

  return (
    <section ref={ref}>
      <h2>
        Лучшие практики
        {getGhostText('Best Practices')}
      </h2>
      <p>
        В этом разделе собраны архитектурные и синтаксические стандарты для написания чистого, поддерживаемого и
        надежного кода на TypeScript.
      </p>
      <article>
        <h3>
          Избегайте тип <code className='code'>any</code> как чумы
        </h3>
        <p>
          Используйте конкретные типы вместо <code className='code'>any</code>. Можно использовать{' '}
          <code className='code'>any</code> при миграции с JavaScript на TypeScript временно можно, но лучше сразу
          ставить <code className='code'>unknown</code>.
        </p>
      </article>
      <article>
        <h3>
          Используйте строгий режим
          {getGhostText('Strict Mode')}
        </h3>
        <p>
          Всегда устанавливайте <code className='code'>"strict": true</code> в файле конфигурации TypeScript{' '}
          <em>tsconfig.json</em>. Это автоматически активирует флаги вроде
          <code className='code'>noImplicitAny</code> и <code className='code'>strictNullChecks</code>, защищающие от
          непредвиденных <code className='code'></code>.
        </p>
      </article>
    </section>
  );
});

BestPractices.displayName = 'BestPractices';
