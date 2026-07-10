import { forwardRef } from 'react';
import classNames from 'classnames';
import { Note } from 'src/components/common/Note';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { AlertMiniIcon } from 'src/components/common/icons/ui';

import styles from './InstallTS.module.scss';

export const InstallTS = forwardRef<HTMLDivElement>(({}, ref) => {
  const bind = classNames.bind(styles);

  const nodeVersionCommandSnippet = `node --version
npm --version`;

  const installGlobalCommandSnippet = `npm install -g typescript`;

  const tsVersionCommandSnippet = `tsc -v`;

  const tsCompileFileCommandSnippet = `tsc <название-файла>.ts`;

  const tsCompileCommandSnippet = `npx tsc`;

  const installSaveDevCommandSnippet = `npm install --save-dev typescript`;

  const createReactAppInstallTSCommandSnippet = `npx create-react-app <название-репозитория>  --template typescript`;

  return (
    <section ref={ref}>
      <h2>Установка TypeScript</h2>
      <p>
        Перед установкой TypeScript проверьте, что у вас стоит Node.js. Если есть сомнение — откройте терминал
        (командную строку) и напишите:
      </p>
      <ExampleSnippet code={nodeVersionCommandSnippet} />
      <p>
        Если появились цифры типа <em>v18.18.0 и 9.8.</em> — всё ок. Если нет, то идём на{' '}
        <ExternalLink label='nodejs.org' href='https://nodejs.org/en' />, качаем LTS-версию, устанавливаем. Это всё
        бесплатно.
      </p>
      <p>
        Есть несколько вариантов установки TypeScript: глобальная, локальная вручную и автоматическая через сборщики.
      </p>

      <article>
        <h3>Глобальная установка</h3>
        <p>
          Позволяет использовать команды компилятора TypeScript в любом месте на вашем компьютере. Удобно для
          экспериментов и небольших скриптов.
        </p>

        <ExampleSnippet code={installGlobalCommandSnippet} />
        <p>Чтобы проверить, что TypeScript установился, просто введите команду проверки текущий версии:</p>
        <ExampleSnippet code={tsVersionCommandSnippet} />

        <p>
          Затем вы просто создаёте файлы с расширением <strong>.ts</strong>, в котором пишите TypeScript-код, сохраняете
          изменения, а для компиляции этих файлов запускаете команду:
        </p>
        <ExampleSnippet code={tsCompileFileCommandSnippet} />

        <p>
          После компиляции в директории проекта будет создан файл <em>&lt;название-файла&gt;.js</em>, который будет
          содержать JavaScript-код, скомпилированный из вашего TypeScript-кода.
        </p>

        <p> Если нужно скомпилировать весь проект используйте команду:</p>
        <ExampleSnippet code={tsCompileCommandSnippet} />
      </article>

      <article>
        <h3>Локальная установка вручную для проекта</h3>
        <p>Подойдёт для разработки конкретного приложения.</p>
        <p>В терминале перейдите в папку проекта и выполните команду:</p>
        <ExampleSnippet code={installSaveDevCommandSnippet} />
        <p>
          В зависимостях проекта появится TypeScript, а в директории проекта появится файл <em>tsconfig.json</em>.
        </p>
      </article>

      <article>
        <h3>Автоматическая установка через сборщики</h3>
        <p>
          Многие современные фреймворки и сборщики, например Vite или Next.js, настраивают TypeScript самостоятельно при
          создании проекта. Вам просто нужно выбрать соответствующий пункт при инициализации проекта.
        </p>
        <p>
          Если вы создаёте проект с помощью утилиты <em>create-react-app</em>, то достаточно указать флаг{' '}
          <em>--template typescript</em>:
        </p>
        <ExampleSnippet code={createReactAppInstallTSCommandSnippet} />
        <p>
          Будет создан шаблон React-приложения с файлом <em>tsconfig.json</em>, TypeScript в зависимостях и с файлами с
          расширением <strong>.ts/.tsx</strong>.
        </p>
        <Note>
          <p>
            <AlertMiniIcon className={styles.alert_icon} />
            Create React App официально признан устаревшим (deprecated) инструментом для создания React-приложений с 14
            февраля 2025 года. Инструмент больше не рекомендуется для создания новых проектов из-за медленной сборки на
            Webpack и отсутствия поддержки современных возможностей React 19. Рекомендуется переходить на более
            современный методы, например, Vite.
          </p>
        </Note>
      </article>
    </section>
  );
});

InstallTS.displayName = 'InstallTS';
