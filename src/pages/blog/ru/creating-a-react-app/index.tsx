import { useRef } from 'react';
import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { HERO_CONFIG } from './index.utils';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import ExternalLink from 'src/components/common/ExternalLink';
import { Note } from 'src/components/common/Note/Note';
import { ENoteType } from 'src/components/common/Note/Note.types';
import { ExampleSnippet } from 'src/components/blog/ExampleSnippet/ExampleSnippet';
import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { TableOfContents } from 'src/components/pages/blog/TableOfContents/TableOfContents';
import { IItemOfContent } from 'src/interfaces';

import newRepoButtonImage from 'public/assets/blog/creating-a-react-app/new-repo-button.png';
import newRepoFormImage from 'public/assets/blog/creating-a-react-app/new-repo-form.png';
import newRepoNameFieldImage from 'public/assets/blog/creating-a-react-app/repo-name-field.png';
import repoLinkImage from 'public/assets/blog/creating-a-react-app/repo-link.png';
import reactTemplateImage from 'public/assets/blog/creating-a-react-app/react-template.png';
import reactTemplateFolderImage from 'public/assets/blog/creating-a-react-app/react-template-src.png';
import reactTemplateEditImage from 'public/assets/blog/creating-a-react-app/react-template-edit.png';
import githubSettingsPagesImage from 'public/assets/blog/creating-a-react-app/github-settings-pages.png';
import githubActionsImage from 'public/assets/blog/creating-a-react-app/github-actions.png';
import viteReactTemplateImage from 'public/assets/blog/creating-a-react-app/vite-react-template.png';
import viteReactTemplateFolderImage from 'public/assets/blog/creating-a-react-app/vite-template.png';
import viteReactTemplateEditImage from 'public/assets/blog/creating-a-react-app/vite-template-edit.png';

const Post = () => {
  const preparationRef = useRef<HTMLDivElement>(null);
  const creatingRepoRef = useRef<HTMLDivElement>(null);
  const cloningRepoRef = useRef<HTMLDivElement>(null);
  const reactInstallRef = useRef<HTMLDivElement>(null);
  const projectIntroRef = useRef<HTMLDivElement>(null);
  const ghPagesRef = useRef<HTMLDivElement>(null);
  const buildDeployRef = useRef<HTMLDivElement>(null);
  const gitRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const tableOfContents: Array<IItemOfContent> = [
    {
      title: 'Что вам понадобится перед началом',
      ref: preparationRef,
    },
    {
      title: 'Шаг 1. Создаём удалённый репозиторий',
      ref: creatingRepoRef,
    },
    {
      title: 'Шаг 2. Клонируем репозиторий',
      ref: cloningRepoRef,
    },
    {
      title: 'Шаг 3. Устанавливаем React',
      ref: reactInstallRef,
    },
    {
      title: 'Шаг 4. Знакомимся со структурой проекта',
      ref: projectIntroRef,
    },
    {
      title: 'Шаг 5. Готовим проект к публикации',
      ref: ghPagesRef,
    },
    {
      title: 'Шаг 6. Собираем и деплоим',
      ref: buildDeployRef,
    },
    {
      title: 'Шаг 7. Сохраняем изменения',
      ref: gitRef,
    },
    {
      title: 'Что делать, если что-то пошло не так',
      ref: faqRef,
    },
  ];

  const nodeInstallBashSnippet = `node --version
npm --version`;

  const cloneRepoTemplateSnippet = `git clone <ссылка-на-репозиторий>`;

  const cloneRepoExampleSnippet = `git clone git@github.com:dtsiki/hello-react.git`;

  const createReactAppTemplateSnippet = `npx create-react-app <название-репозитория>  --template typescript`;

  const createReactAppExampleSnippet = 'npx create-react-app hello-react  --template typescript';

  const cdTemplateSnippet = `cd <название-репозитория>`;

  const cdExampleSnippet = `cd hello-react`;

  const npmStartSnippet = `npm start`;

  const appTextBeforeSnippet = `<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>`;

  const appTextAfterSnippet = `<p>
  Привет, мир, это моё первое React-приложение!
</p>`;

  const viteAppTextBeforeSnippet = `<p>
  Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
</p>`;

  const viteAppTextAfterSnippet = `<p>Привет, мир, это моё первое React-приложение!</p>`;

  const npmInstallGhPagesSnippet = `npm install gh-pages --save-dev`;

  const ghPagesURLTemplateSnippet = `https://<имя-пользователя>.github.io/<название-репозитория>`;

  const buildDeployScriptsSnippet = `"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}`;

  const defaultScriptsSnippet = `"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}`;

  const viteBuildDeployScriptsSnippet = `"scripts": {
  ...
  "deploy": "npm run build && npx gh-pages -d dist"
}`;

  const viteDefaultScriptsSnippet = `"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview",
},`;

  const npmBuildCommandSnippet = 'npm run build';

  const npmDeployCommandSnippet = 'npm run deploy';

  const publishedResultSnippet = 'Published';

  const addAllCommandSnippet = 'git add .';

  const addFolderCommandSnippet = 'git add /<какая-то папка>';

  const addFileCommandSnippet = 'git add awesome-file.js';

  const commitCommandSnippet = `git commit -m 'Сделано то, сделано сё'`;

  const pushCommandSnippet = 'git push origin main';

  const homepageHelloReactSnippet = `{
  "name": "hello-react",
  "homepage": "https://dtsiki.github.io/hello-react",
  ...
}`;

  const viteInstallLogSnippet = `> npm create vite@latest hello-react -- --template react-ts

> npx
> create-vite hello-react --template react-ts

│
◇  Target directory "hello-react" is not empty. Please choose
│  how to proceed:
│  Remove existing files and continue
│
◇  Install with npm and start now?
│  No
│
◇  Scaffolding project in /home/projects/hello-react...
│
└  Done. Now run:

  cd hello-react
  npm install
  npm run dev`;

  const viteRunLogSnippet = `VITE v8.0.3  ready in 348 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
`;

  const viteBaseConfigSnippet = `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/hello-react/",
});`;

  return (
    <PostWrapper postConfig={POSTS_CONFIG_[EBlogPostRecord.CREATING_A_REACT_APP]} heroConfig={HERO_CONFIG}>
      <section>
        <TableOfContents
          items={tableOfContents}
          strictLanguage={POSTS_CONFIG_[EBlogPostRecord.CREATING_A_REACT_APP].language}
          hideNumbers={true}
        />
      </section>
      <section ref={preparationRef}>
        <h2>Что вам понадобится перед началом</h2>
        <p>Перед стартом проверим, всё ли готово. Нам нужно всего две вещи:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <h3 className='list__title'>Установленный Node.js и npm </h3>
            <div>
              <p>
                Это среда, в которой живёт React. Если есть сомнение есть ли такое у вас - откройте терминал (командную
                строку) и напишите:
              </p>
              <CodeSnippet code={nodeInstallBashSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>
                Если появились цифры типа <em>v20.20.2</em> и <em>10.8.2</em> - то всё ок. Если нет - идём на{' '}
                <ExternalLink label='nodejs.org' href='https://nodejs.org/en' />, качаем LTS-версию, устанавливаем. Это
                всё бесплатно.
              </p>
            </div>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>Аккаунт на GitHub</h3>
            <div>
              <p>
                Идём на <ExternalLink label='github.com' href='https://github.com/' /> и регистрируемся (если вдруг ещё
                нет). Это тоже бесплатно. Понадобится дополнительно настроить{' '}
                <ExternalLink
                  href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh'
                  label='SSH ключи'
                />{' '}
                для дальнейшей работы с GitHub. Немножко муторно, но это важно.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section ref={creatingRepoRef}>
        <h2>Шаг 1. Создаём удалённый репозиторий</h2>
        <p>Первым шагом нужно создать удалённый репозиторий на GitHub для вашего проекта на React.</p>
        <Note>
          <p>
            Удаленный репозиторий - это версия вашего проекта, хранящаяся в сети или на удаленном сервере, например, на
            GitHub или GitLab. Это нужно для совместной работы, резервного копирования и синхронизации изменений между
            разработчиками.
          </p>
          <p>
            Локальный репозиторий - это копия удалённого репозитория на вашего устройстве (ноутбуке или персональном
            компьютере). Вы можете вносить в этот репозиторий свои какие угодно изменения и до сохранения их в удалённом
            репозитории они будут доступны только вам.
          </p>
        </Note>
        <p>
          В этом уроке рассматривается процесс публикации сайта на GitHub. У GitLab тоже есть{' '}
          <ExternalLink href='https://docs.gitlab.com/user/project/pages/' label='GitLab Pages' />, но порядок
          публикации сайтов там немножко отличается от GitHub Pages.{' '}
        </p>
        <p>Создать удалённый репозиторий на GitHub просто:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>
              Нажмите на кнопку <em>«New»</em> вверху слева страницы на главной странице GitHub:
            </p>
            <PostImage
              src={newRepoButtonImage}
              fileTitle='new_repo_button_github.png'
              alt='Кнопка New на главной странице сайте GitHub'
              maxWidth={600}
            />
            <p className='spacer top medium'>
              Или перейдите напрямую на страницу создания нового репозитория по ссылке{' '}
              <ExternalLink href='https://github.com/new' label='https://github.com/new' />
            </p>
            <p>Откроется форма создания нового репозитория:</p>
            <PostImage
              src={newRepoFormImage}
              fileTitle='new_repo_form_github.png'
              alt='Форма создания нового репозитория на сайте GitHub'
              maxWidth={600}
            />
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Введите уникальное имя репозитория в поле <em>«Repository name»:</em>
            </p>
            <PostImage
              src={newRepoNameFieldImage}
              fileTitle='new_repo_name_field_github.png'
              alt='Поле ввода названия нового репозитория на GitHub'
              maxWidth={600}
            />
            <p>Имя должно быть уникальным только в рамках вашего репозитория.</p>
          </li>
          <li className='list__item'>
            <p className='list__title'>
              Нажмите кнопку <em>«Create repository»</em> внизу формы. Будет создан новый репозиторий и откроется
              страница с ним.
            </p>
          </li>
        </ul>
        <p>
          Для этого урока я создала репозиторий под названием{' '}
          <ExternalLink href='https://github.com/dtsiki/hello-react' label='hello-react' />.
        </p>
      </section>
      <section ref={cloningRepoRef}>
        <h2>Шаг 2. Клонируем репозиторий</h2>
        <p>
          Пока что репозиторий есть только на сервисе GitHub и он абсолютно пустой. Нам нужно склонировать удалённый
          репозиторий к себе на устройство (ноутбук или персональный компьютер) и начать заполнять его там React'ом.
        </p>
        <p>
          Для копирования к себе нам потребуется ссылка на удалённый репозиторий. Ссылку можно скопировать на странице
          только что созданного репозитория, прописывать её вручную не обязательно:
        </p>
        <PostImage
          src={repoLinkImage}
          fileTitle='repo_ssh_link_github.png'
          alt='SSH ссылка для клонирования репозитория с GitHub'
          maxWidth={600}
        />
        <p>Эту ссылку нужно будет подставить в команду клонирования и выполнить её в терминале:</p>
        <CodeSnippet code={cloneRepoTemplateSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Для моего созданного выше репозитория <em>hello-react</em> команда клонирования будет выглядеть вот так:
        </p>
        <CodeSnippet code={cloneRepoExampleSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          После выполнения команды клонирования будет создана папка с названием вашего удалённого репозитория. Пока что
          эта папка будет пуста. А заполнять её будет уже на следующем шаге.
        </p>
      </section>
      <section ref={reactInstallRef}>
        <h2>Шаг 3. Устанавливаем React</h2>
        <h3>Вариант 1. С помощью Create React App</h3>
        <p>
          Для быстрой установки React можно использовать специальную утилиту Create React App или  create-react-app -
          это набор инструментов, созданный и поддерживаемый разработчиками из Facebook, который предназначен для
          быстрого создания шаблонных проектов на React. Никакой сложной настройки, никаких танцев с бубном.
        </p>
        <Note type={ENoteType.ALERT}>
          Create React App официально признан устаревшим (deprecated) инструментом для создания React-приложений с 14
          февраля 2025 года. Инструмент больше не рекомендуется для создания новых проектов из-за медленной сборки на
          Webpack и отсутствия поддержки современных возможностей React 19. Рекомендуется переходить на более
          современный методы, например, Vite (cм. ниже Вариант 2.). Вы всё ещё можете использовать Create React App, но
          нужно учесть, что инструмент больше не поддерживается.
        </Note>
        <p>При использовании этой утилиты шаблонный React-проект создаётся с помощью всего одной команды:</p>
        <CodeSnippet code={createReactAppTemplateSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          На примере репозитория <em>hello-react</em>:
        </p>
        <CodeSnippet code={createReactAppExampleSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Указанный флаг <code className='code'>--template</code> со значением <em>typescript</em> нужен для того, чтобы
          в шаблоне был сразу предустановлен TypeScript.{' '}
        </p>
        <p>
          Выполнять эту команду нужно не в директории созданного репозитория иначе будет создана папка с проектром
          внутри папки, например <em>hello-react</em> внутри <em>hello-react</em>.
        </p>
        <p>
          Установка <em>create-react-app</em> может занять какое-то время, это нормально.
        </p>
        <p>После установки можно будет перейти в папку:</p>
        <CodeSnippet code={cdTemplateSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>Например:</p>
        <CodeSnippet code={cdExampleSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>Чтобы запустить созданное React-приложение и проверить что всё в порядке нужно выполнить команду запуска:</p>
        <CodeSnippet code={npmStartSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Созданное приложение должно будет автоматически открыться в браузере по адресу{' '}
          <ExternalLink label='http://localhost:3000/' href='http://localhost:3000/' />. Спойлер: там уже что-то будет!
          Вы должны будете увидеть шаблон React-приложения:
        </p>
        <PostImage
          src={reactTemplateImage}
          fileTitle='react_template.png'
          alt='Приложение на React, созданное с помощью утилиты Create React App'
          maxWidth={600}
        />
        <p className='spacer bottom medium'>
          Если приложение не откроется автоматически в браузере, то просто откройте этот адрес вручную.
        </p>

        <h3>Вариант 2. С помощью Vite</h3>
        <p>
          Vite - инструмент сборки и сервер разработки для фронтенд-проектов, аналог Webpack. С помощью него можно тоже
          быстро создать React-приложение. Сейчас это главная замена Create React App.
        </p>
        <p>
          Для создания шаблона приложения через Vite вам нужно убедиться, что у вас стоит node не ниже 20 версии. Если
          не уверены какая у вас версия node, то проверить её можно командой:
        </p>
        <CodeSnippet code={`node -v`} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Если версия ниже <em>20.хх.х</em>, то сперва устаналиваем 20 версию:
        </p>
        <CodeSnippet code={`nvm install 20`} lang={ECodeLang.BASH} hideLines={true} />
        <p>А затем переключаемся на неё командой:</p>
        <CodeSnippet code={`nvm use 20`} lang={ECodeLang.BASH} hideLines={true} />
        <p>Теперь когда убедились, что node нужной версии запускаем команду:</p>
        <CodeSnippet
          code={`npm create vite@latest <название-репозитория> -- --template react-ts`}
          lang={ECodeLang.BASH}
          hideLines={true}
        />
        <p>
          Указанный флаг <code className='code'>--template</code> со значением <em>react-ts</em> нужен для того, чтобы в
          шаблоне был сразу предустановлен React в связке с TypeScript.{' '}
        </p>
        <p>
          Выполнять эту команду нужно не в директории созданного репозитория иначе будет создана папка с проектром
          внутри папки, например <em>hello-react</em> внутри <em>hello-react</em>.
        </p>
        <p>
          В терминале нужно будет подтвердить установку модулей. После этого какое-то время они будут устанавливаться,
          это может занять какое-то время. После этого в терминале должно появиться сообщение о запуске локального
          сервера. Примерный лог после всех манипуляций c Vite будет таков:
        </p>
        <ExampleSnippet code={viteInstallLogSnippet} />
        <p>После установки можно будет перейти в папку:</p>
        <CodeSnippet code={cdTemplateSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>Например:</p>
        <CodeSnippet code={cdExampleSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <p>Чтобы запустить созданное React-приложение и проверить что всё в порядке нужно выполнить команду запуска:</p>
        <CodeSnippet code={`npm run dev`} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Созданное приложение можно будет открыть в браузере по адресу указанному в терминале, скорее всего это будет{' '}
          <ExternalLink label='http://localhost:5173/' href='http://localhost:5173/' />:
        </p>
        <ExampleSnippet code={viteRunLogSnippet} />
        <p>Спойлер: там уже что-то будет! Вы увидите шаблон React-приложения:</p>
        <PostImage
          src={viteReactTemplateImage}
          fileTitle='vite_react_template.png'
          alt='Приложение на React, созданное с помощью Vite'
          maxWidth={600}
        />
      </section>
      <section ref={projectIntroRef}>
        <h2>Шаг 4. Знакомимся со структурой проекта</h2>
        <p>Этот шаг можно пропустить и вернуться к нему позже.</p>
        <h3>Вариант 1. Если вы создавали приложение с помощью Create React App</h3>
        <p>
          Созданное шаблонное приложение будет иметь примерно следующую структуру (на момент написания этого урока):
        </p>
        <PostImage
          src={reactTemplateFolderImage}
          fileTitle='react_template_folder.png'
          alt='Содержимое директории приложения на React, созданного с помощью утилиты Create React App'
          maxWidth={600}
        />
        <p>Что важно из этого знать:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <h3 className='list__title'>public/index.html </h3>
            <p>
              Единственная HTML-страница, которую видит браузер. Внутри есть 
              <code className='code'>&lt;div id="root"&gt;&lt;div&gt;</code>,  туда React будет вставлять всё
              приложение.
            </p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>src/App.tsx</h3>
            <p>
              Главный компонент приложения <code className='code'>&lt;App /&gt;</code>. Именно его и нужно изменять,
              чтобы сделать своё приложение.
            </p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>src/index.tsx</h3>
            <p>
              Точка входа. Здесь React рендерит <code className='code'>&lt;App /&gt;</code> в 
              <code className='code'>&lt;div id="root"&gt;&lt;div&gt;</code> в файле <em>index.html.</em>
            </p>
          </li>
        </ul>
        <p>
          Попробуем что-нибудь изменить в приложении. Откройте файл <em>src/App.tsx</em> и найдите параграф со следующим
          текстом:
        </p>
        <CodeSnippet code={appTextBeforeSnippet} lang={ECodeLang.REACT} customName='App.tsx' hideLines={true} />
        <p>Измените текст, например:</p>
        <CodeSnippet code={appTextAfterSnippet} lang={ECodeLang.REACT} customName='App.tsx' hideLines={true} />
        <p>Сохраните файл, затем браузер сам обновит страницу с приложением и там появится новый текст:</p>
        <PostImage
          src={reactTemplateEditImage}
          fileTitle='hello_react.png'
          alt='Изменённое шаблонное приложение на React, созданное с помощью утилиты Create React App'
          maxWidth={600}
        />
        <p className='spacer bottom large'>Поздравляю, ваше первое приложение на React готово!</p>

        <h3>Вариант 2. Если вы создавали приложение с помощью Vite</h3>
        <p>
          Созданное шаблонное приложение будет иметь примерно следующую структуру (на момент написания этого урока):
        </p>
        <PostImage
          src={viteReactTemplateFolderImage}
          fileTitle='vite_react_template_folder.png'
          alt='Содержимое директории приложения на React, созданного с помощью Vite'
          maxWidth={600}
        />
        <p>Что важно из этого знать:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <h3 className='list__title'>index.html </h3>
            <p>
              Единственная HTML-страница, которую видит браузер. Внутри есть 
              <code className='code'>&lt;div id="root"&gt;&lt;div&gt;</code>,  туда React будет вставлять всё
              приложение. В отличии от Create React App, здесь этот файл находится не в папке <em>public</em>.
            </p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>src/App.tsx</h3>
            <p>
              Главный компонент приложения <code className='code'>&lt;App /&gt;</code>. Именно его и нужно изменять,
              чтобы сделать своё приложение.
            </p>
          </li>
          <li className='list__item'>
            <h3 className='list__title'>src/main.tsx</h3>
            <p>
              Точка входа. Здесь React рендерит <code className='code'>&lt;App /&gt;</code> в 
              <code className='code'>&lt;div id="root"&gt;&lt;div&gt;</code> в файле <em>index.html.</em>
            </p>
          </li>
        </ul>
        <p>
          Попробуем что-нибудь изменить в приложении. Откройте файл src/App.tsx и найдите параграф со следующим текстом:
        </p>
        <CodeSnippet code={viteAppTextBeforeSnippet} lang={ECodeLang.REACT} customName='App.tsx' hideLines={true} />
        <p>Измените текст, например:</p>
        <CodeSnippet code={viteAppTextAfterSnippet} lang={ECodeLang.REACT} customName='App.tsx' hideLines={true} />
        <p>Сохраните файл, обновите страницу с приложением и там появится новый текст:</p>
        <PostImage
          src={viteReactTemplateEditImage}
          fileTitle='hello_vite_react.png'
          alt='Изменённое шаблонное приложение на React, созданное с помощью Vite'
          maxWidth={600}
        />
      </section>
      <section ref={ghPagesRef}>
        <h2>Шаг 5. Готовим проект к публикации</h2>
        <p>
          Прежде чем сделать приложение доступным в интернете осталось всего два небольших действия: собрать и
          опубликовать приложение. Это можно сделать с помощью Github Pages - сервиса для хостинга статических сайтов из
          репозиториев. Для этого нужно установить сам пакет <em>gh-pages</em> в проект. Команда для установки:
        </p>
        <CodeSnippet code={npmInstallGhPagesSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <Note type={ENoteType.ALERT}>
          Выполнять команду установки GitHub Pages следует в директории вашего проекта.
        </Note>
        <p>
          Затем нужно будет отредактировать <em>package.json</em> в директории вашего проекта. Откройте этот файл и
          добавьте следующие поля:
        </p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>Добавьте homepage будущего GitHub Pages</p>
            <p>Это должна быть ссылка в формате:</p>
            <CodeSnippet code={ghPagesURLTemplateSnippet} lang={ECodeLang.JSON} name='package' hideLines={true} />
            <Note type={ENoteType.ALERT} title='Обратите внимание'>
              проект с URL <strong>https://&lt;ваше-имя-пользователя&gt;.github.io</strong> собирается и билдится в
              отдельном репозитории, название у этого репозитория будет{' '}
              <strong>&lt;ваше имя пользователя&gt;.github.io</strong>. В нём нужно повторить все перечисленные в этом
              уроке шаги, собрать и задеплоить проект, чтобы увидеть проект именно по адресу{' '}
              <strong>https://&lt;ваше-имя-пользователя&gt;.github.io</strong>. Остальные же ваши репозитории будут
              собираться по URL{' '}
              <strong>https://&lt;ваше-имя-пользователя&gt;.github.io/&lt;название-репозитория&gt;</strong>
            </Note>
            <p>
              Для проекта <em>hello-react</em> <strong>homepage</strong> будет выглядеть следующим образом, можно
              добавить это после сразу после названия проекта:
            </p>
            <CodeSnippet code={homepageHelloReactSnippet} lang={ECodeLang.JSON} name='package' hideLines={true} />
          </li>
          <li className='list__item'>
            <p className='list__title'>Добавьте скрипты для деплоя в раздел "scripts"</p>

            <ul className='list markered'>
              <li className='list__item'>
                <p className='list__title'>Вариант 1. Если вы создавали приложение с помощью Create React App</p>

                <p>Нужно добавить в следующие две команды:</p>
                <CodeSnippet code={buildDeployScriptsSnippet} lang={ECodeLang.JSON} name='package' hideLines={true} />
                <p>
                  Скоре всего в разделе <em>"scripts"</em> уже будут следующие команды:
                </p>
                <CodeSnippet code={defaultScriptsSnippet} lang={ECodeLang.JSON} name='package' hideLines={true} />
                <p>
                  Ничего страшного, нужно просто добавить к ним ниже команды <em>predeploy</em> и <em>deploy</em>.
                </p>
              </li>
              <li className='list__item'>
                <p className='list__title'>Вариант 2. Если вы создавали приложение с помощью Vite</p>
                <p>
                  Если же вы инициировали проект с помощью Vite, то нужно будет добавить в раздел “scripts” только одну
                  команду:
                </p>
                <CodeSnippet
                  code={viteBuildDeployScriptsSnippet}
                  lang={ECodeLang.JSON}
                  name='package'
                  hideLines={true}
                />
                <p>
                  Скоре всего в разделе <em>"scripts"</em> уже будут следующие команды:
                </p>
                <CodeSnippet code={viteDefaultScriptsSnippet} lang={ECodeLang.JSON} name='package' hideLines={true} />
                <p>
                  Ничего страшного, нужно просто добавить к ним ниже команды <em>predeploy</em> и <em>deploy</em>.
                </p>
                <p>
                  Обртите внимание, что Vite собирает проект не в папку <em>build</em>, а в папку <em>dist</em> - здесь
                  нет ошибки.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p>Зачем это всё нужно? Чтобы GitHub Pages понимал откуда грузить файлы.</p>
        <p>
          Помимо этого если вы настраивали проект с помощью Vite нужно добавить в файл конфигурации самого Vite{' '}
          <em>vite.config.ts</em> поле <strong>base</strong>:
        </p>
        <CodeSnippet code={`base: "/<название-репозитория>/"`} lang={ECodeLang.BASH} hideLines={true} />
        <p>Например:</p>
        <CodeSnippet code={viteBaseConfigSnippet} lang={ECodeLang.TYPESCRIPT} name='vite.config' hideLines={false} />
        <p>Теперь осталось только собрать проект и опубликовать его.</p>
      </section>
      <section ref={buildDeployRef}>
        <h2>Шаг 6. Собираем и деплоим</h2>
        <h3>Вариант 1. Если вы создавали приложение с помощью Create React App</h3>
        <p>Для того, чтобы можно было увидеть проект вживую в интернете нужно будет выполнить всего две команды:</p>
        <ul className='list markered'>
          <li className='list__item'>
            <p className='list__title'>Собрать проект с помощью команды сборки:</p>
            <div className='spacer top medium'>
              <CodeSnippet code={npmBuildCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>
                Эта команда создаст в директории проекта папку <em>build</em>.
              </p>
            </div>
          </li>
          <li className='list__item'>
            <p className='list__title'>Опубликовать проект на GitHub Pages с помощью команды деплоя:</p>
            <div className='spacer top medium'>
              <CodeSnippet code={npmDeployCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>
                Эта команда создаст ветку <em>gh-pages</em> в репозитории и загрузит туда собранные файлы из папки 
                <em>build</em>.
              </p>
            </div>
          </li>
        </ul>
        <p>Если всё прошло успешно, то в конце вы увидете заветное слово:</p>
        <ExampleSnippet code={publishedResultSnippet} />
        <p>
          Теперь нужно перейти в репозиторий на GitHub и открыть вкладку <em>Settings</em>. В разделе <em>Pages</em>{' '}
          нужно выбрать ветку <em>gh-pages</em> и папку <em>/(root)</em>. Скорее всего они будут выбраны уже по
          умолчанию после деплоя, но если это не так, нужно сделать это вручную:
        </p>
        <PostImage
          src={githubSettingsPagesImage}
          fileTitle='github_settings_pages.png'
          alt='Страница Settings репозитория на GitHub, раздел Pages с правильным настройками'
          maxWidth={600}
        />
        <p>
          Через пару минут приложение будет доступно по ссылке, которая была указана в <strong>homepage</strong>. Ура,
          приложение работает в интернете!
        </p>
        <p>
          Теперь, каждый раз когда в проект будут вноситься изменения, чтобы обновить приложение нужно просто выполнить
          последовательно две команды, собрать проект и задеплоить изменения:
        </p>
        <CodeSnippet code={npmDeployCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
        <br />
        <CodeSnippet code={npmBuildCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />

        <h3 className='spacer top large'>Вариант 2. Если вы создавали приложение с помощью Vite</h3>

        <p>Для того, чтобы можно было увидеть проект вживую в интернете нужно будет выполнить всего одну команду:</p>
        <CodeSnippet code={`npm run deploy`} lang={ECodeLang.BASH} hideLines={true} />
        <p>
          Сборщик сам соберёт проект в папку <em>dist</em>, создаст ветку <em>gh-pages</em> в репозитории и загрузит
          туда собранные файлы из <em>папки dist</em>.
        </p>

        <p>
          Теперь нужно перейти в репозиторий на GitHub и открыть вкладку <em>Settings</em>. В разделе <em>Pages</em>{' '}
          нужно выбрать ветку <em>gh-pages</em> и папку <em>/(root)</em>. Скорее всего они будут выбраны уже по
          умолчанию после деплоя, но если это не так, нужно сделать это вручную:
        </p>
        <PostImage
          src={githubSettingsPagesImage}
          fileTitle='github_settings_pages.png'
          alt='Страница Settings репозитория на GitHub, раздел Pages с правильным настройками'
          maxWidth={600}
        />
        <p>
          Чтобы убедиться, что публикация проекта прошла успешно (или нет) можно открыть раздел <em>Actions</em> в
          репозитории. Там хранится список всех публикаций проекта. Например так выглядит этот раздел после первого
          деплоя:
        </p>
        <PostImage
          src={githubActionsImage}
          fileTitle='github_actions.png'
          alt='Страница Actions в репозиторий на GitHub'
          maxWidth={600}
        />
        <p>
          Если что-то пойдёт при публикации не так, то это отобразится в соответствующем событии в разделе{' '}
          <em>Actions</em>. Также полезно смотреть за логами сборки и деплоя в терминале.
        </p>
      </section>
      <section ref={gitRef}>
        <h2>Шаг 7. Сохраняем изменения</h2>
        <p>
          Пока что изменения в коде вашего приложения хранятся только в вашем локальном репозитории. Если вы откроете
          удалённый репозитории и выберете ветку разработки (обычно это <em>master</em> или <em>main</em> на GitHub), то
          она будет пуста. Чтобы сохранить изменения в коде проекта используйте стандартный порядок действий в работе с
          git:
        </p>
        <ol className='list ordered'>
          <li className='list__item'>
            <p className='list__title'>Сохраните изменения локально:</p>
            <div className='spacer top medium'>
              <p>Можно сохранить все изменения: </p>
              <CodeSnippet code={addAllCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>Сохранить изменения в конкретной папке: </p>
              <CodeSnippet code={addFolderCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>Сохранить изменения в конкретном файле: </p>
              <CodeSnippet code={addFileCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
            </div>
          </li>
          <li className='list__item'>
            <p className='list__title'>Закоммитить изменения:</p>
            <div className='spacer top medium'>
              <CodeSnippet code={commitCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
            </div>
          </li>
          <li className='list__item'>
            <p className='list__title'>Опубликовать их в ветку:</p>
            <div className='spacer top medium'>
              <CodeSnippet code={pushCommandSnippet} lang={ECodeLang.BASH} hideLines={true} />
              <p>
                Если спросит логин и пароль - вводим. Для пароля теперь нужно использовать токен, а не обычный пароль.
                Но если вы не настраивали SSH, GitHub сам предложит залогиниться через браузер - нужно согласиться.
              </p>
            </div>
          </li>
        </ol>
        <p>Всё тоже самое можно проделать и с графическим интерфейсом любого редактора кода, например VSCode.</p>
        <p>
          Здесь приведён лишь самый краткий порядок работы с системам контроля версий, если вам эта тема не знакома,
          советую самостоятельно изучить этот вопрос.
        </p>
      </section>
      <section ref={faqRef}>
        <h2>Что делать, если что-то пошло не так</h2>
        <p>
          Такое тоже бывает, в этом нет ничего страшного. В этом разделе разберём самые частые ошибки, которые могут
          возникнуть при создании вашего первого приложения и публикации его.
        </p>
        <section className='spacer bottom large'>
          <h3>Ошибка 404</h3>
          <p>
            Проверьте название репозитория. Если проект назвали <em>my-awesome-app</em>, а в homepage написано 
            <em>my-app</em>, то возникнет ошибка 404 - страница не будет найдена. Адрес должен строго совпадать с именем
            репозитория.
          </p>
          <p>
            Обратите также внимание, что проект по URL <strong>https://&lt;ваше-имя-пользователя&gt;.github.io</strong>{' '}
            собирается и билдится в отдельном репозитории, название у этого репозитория будет{' '}
            <em>&lt;ваше имя пользователя&gt;.github.io</em>. В нём нужно повторить все перечисленные в этом уроке шаги,
            собрать и задеплоить проект, чтобы увидеть проект по адресу{' '}
            <strong>https://&lt;ваше-имя-пользователя&gt;.github.io</strong>.
          </p>
        </section>
        <section className='spacer bottom large'>
          <h3>Команда deploy не работает</h3>
          <p>
            Убедитесь, что пакет <em>gh-pages</em> установлен, а нужные команды добавлены в файл <em>package.json</em>
          </p>
        </section>
        <section className='spacer bottom large'>
          <h3>Изменения не появляются на сайте</h3>
          <p>
            После каждого изменения нужно запускать команду деплоя заново, просто так сайт не обновится. Также нужно
            убедиться что сборка перед этим прошла успешно без ошибок.
          </p>
        </section>
      </section>
    </PostWrapper>
  );
};

export default Post;
