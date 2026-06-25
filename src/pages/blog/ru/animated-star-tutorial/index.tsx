import { PostWrapper } from 'src/components/blog/PostWrapper/PostWrapper';
import { EBlogPostRecord, POSTS_CONFIG_ } from 'src/data/postsConfig';
import { ExternalLink } from 'src/components/common/ExternalLink';
import { AnimatedStarDemo } from 'src/components/pages/blog/AnimatedStarDemo/AnimatedStarDemo';
import { EWindowPatternVariant, EWindowType } from 'src/components/common/Window/Window.types';
import { Window } from 'src/components/common/Window/Window';
import { DoubleCodeSnippet } from 'src/components/blog/DoubleCodeSnippet/DoubleCodeSnippet';
import { ECodeLang } from 'src/components/common/Code/Code.types';
import { PostImage } from 'src/components/blog/PostImage/PostImage';
import { CodeSnippet } from 'src/components/blog/CodeSnippet/CodeSnippet';
import { EHeroPattern, EHeroSize } from 'src/components/layout/Hero/Hero.types';

import styles from './index.module.scss';
import figmaPreviewPng from 'public/assets/blog/animated-star-tutorial/figma-preview.png';

const Post = () => {
  const exampleHTML1 = `<div class='container'>
  <div class='eye'></div>
  <div class='eye'></div>
</div>`;

  const exampleCSS1 = `.container {
  width: 350px;
  height: 323px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}`;

  const exampleCSS2 = `.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;
}

.eye:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  box-sizing: border-box;
}`;

  const exampleJS1 = `document.addEventListener('mousemove', moveEyesToCursor);`;

  const exampleJS2 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');
}`;

  const exampleJS3 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    // Здесь сделаем магию
  });
}`;

  const exampleJS4 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
  });
}`;

  const exampleJS5 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
  });
}`;

  const exampleJS6 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
  });
}`;

  const exampleJS7 = `function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;

    eye.style.transform = \`rotate(\${rotation}deg)\`;
  });
}`;

  const exampleJS8 = `document.addEventListener('mousemove', moveEyesToCursor);

function moveEyesToCursor() {
  const eyes = document.querySelectorAll('.eye');

  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;

    eye.style.transform = \`rotate(\${rotation}deg)\`;
  });
}`;

  const exampleCSS3 = `.container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;
}

.eye:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  box-sizing: border-box;
}`;

  const exampleReact1 = `const eyesRef = useRef<(HTMLDivElement | null)[]>([]);`;

  const exampleReact2 = `const addToRefs = (el: HTMLDivElement | null, index: number) => {
  if (el && !eyesRef.current.includes(el)) {
    eyesRef.current[index] = el;
  }
};`;

  const exampleReact3 = `return (
  <div className={styles.eyes_container}>
    <div ref={(el) => addToRefs(el, 0)} className={styles.eye}></div>
    <div ref={(el) => addToRefs(el, 1)} className={styles.eye}></div>
  </div>
;)`;

  const exampleReact4 = `const moveEyesToCursor = (event: MouseEvent) => {
  eyesRef.current.forEach((eye) => {
    if (!eye) {
      return;
    }

    const rect = eye.getBoundingClientRect();
    const x = rect.left + eye.clientWidth / 2;
    const y = rect.top + eye.clientHeight / 2;

    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rotation = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = \`rotate(\${rotation}deg)\`;
  });
};`;

  const exampleReact5 = `useEffect(() => {
  document.addEventListener('mousemove', moveEyesToCursor);

  return () => {
    document.removeEventListener('mousemove', moveEyesToCursor);
  };
}, []);`;

  const exampleJSX = `import styles from './app.module.scss';
...
return (
  <div className={styles.eyes_container}>
    <div className={styles.eye}></div>
    <div className={styles.eye}></div>
  </div>
);`;

  const exampleSCSS = `.eyes_container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    box-sizing: border-box;
  }
}`;

  const exampleReact6 = `import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

export const AnimatedStar = () => {
  const eyesRef = useRef<(HTMLDivElement | null)[]>([]);

  const moveEyesToCursor = (event: MouseEvent) => {
    eyesRef.current.forEach((eye) => {
      if (!eye) {
        return;
      }

      const rect = eye.getBoundingClientRect();
      const x = rect.left + eye.clientWidth / 2;
      const y = rect.top + eye.clientHeight / 2;

      const radian = Math.atan2(event.pageX - x, event.pageY - y);
      const rotation = radian * (180 / Math.PI) * -1 + 270;

    eye.style.transform = \`rotate(\${rotation}deg)\`;
    });
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveEyesToCursor);

    return () => {
      document.removeEventListener('mousemove', moveEyesToCursor);
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !eyesRef.current.includes(el)) {
      eyesRef.current[index] = el;
    }
  };

  return (
    <div className={styles.eyes_container}>
      <div ref={(el) => addToRefs(el, 0)} className={styles.eye}></div>
      <div ref={(el) => addToRefs(el, 1)} className={styles.eye}></div>
    </div>
  );
};`;

  const exampleSCSS2 = `.eyes_container {
  height: 323px;
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 350px 323px;
  background-image: url('./../../../../../public/assets/blog/animated-star-tutorial/star.svg');
}

.eye {
  position: relative;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  overflow: hidden;
  margin: -50px 10px 0;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    box-sizing: border-box;
  }
}`;

  return (
    <PostWrapper
      postConfig={POSTS_CONFIG_[EBlogPostRecord.ANIMATED_STAR_TUTORIAL]}
      heroConfig={{
        size: EHeroSize.SMALL,
        pattern: EHeroPattern.CROSS,
      }}>
      <section>
        <Window
          type={EWindowType.CUSTOM}
          filesCount={1}
          fileTitle='star_final_demo.exe'
          pattern={EWindowPatternVariant.CROSS}>
          <AnimatedStarDemo />
        </Window>
        <p className='explanation'>Начните двигать курсом по странице — такую анимацию будем делать в этом уроке</p>
      </section>
      <section>
        <h2>Подготовительные работы</h2>
        <p>
          Прежде чем приступать к созданию анимации нужно подготовить саму звезду. Это можно сделать разными способами,
          например:
          <ul className='list markered spacer top medium'>
            <li className='list__item'>Добавить звезду как фон элемента</li>
            <li className='list__item'>
              Вставить звезду как изображение через HTML-тег <code className='code'>img</code>
            </li>
            <li className='list__item'>
              Вставить звезду как векторное изображение <code className='code'>svg</code>
            </li>
          </ul>
        </p>
        <p>
          Я остановила свой выбор на первом варианте: расположить фигуру звездочки без глаз фоном в элементе-контейнере
          и затем добавить глаза и зрачки с помошью CSS.
        </p>
        <p className='spacer bottom medium'>
          За основу будущей анимированной звёздочки я взяла иллюстрацию, найденную на просторах интернета<b>*</b>. Затем
          в Figma обрисовала исходник и экспортировала получившийся вектор в формате <code className='code'>.svg</code>
        </p>
        <PostImage fileTitle='figma.jpeg' src={figmaPreviewPng} alt='Превью приложения Figma с созданием звезды' />
        <p className='note'>
          <b>*</b> Если вы являетесь правообладателем этой прекрасной звёздочки, пожалуйста, не ругайтесь, что я
          использовала её без указания авторских прав. У меня не было совершенно никакого умысла использовать ваш труд в
          коммерческих или каких-либо других целях получения выгоды. Свяжитесь со мной чтобы решить вопросы
          правообладания если таковые у вас есть.
        </p>
        <p className='spacer top bottom medium'>
          HTML-разметка и CSS-стили на данном этапе будут совсем простыми. Нам нужен будет контейнер-обёртка с классом{' '}
          <code className='code'>.container</code>, в котором будут лежать непосредственно глаза - два дива с одинаковым
          классом <code className='code'>.eye</code>. В дальнейшем эта HTML-разметка останется практически без
          изменений. В CSS на данном шаге мы пропишем только стили для контейнера-обёртки - добавим на фон звезду в
          формате <code className='code'>.svg</code> и отцентрируем внутреннее содержимое, это пригодится нам позже.
          Здесь <code className='code'>350px</code> и <code className='code'>323px</code> не магические числа, взятые из
          потолка, а размеры <code className='code'>.svg</code> файла звезды, который у меня получился в Figma.
        </p>
        <DoubleCodeSnippet
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
          name={['index', 'style']}
          code={[exampleHTML1, exampleCSS1]}
        />
        <p className='spacer top bottom medium'>
          На этом этапе звёздочка без глаз выглядит пока что совсем грустно. Поэтому на следующем этапе добавим глаза с
          помощью чистого CSS.
        </p>
        <Window
          type={EWindowType.CUSTOM}
          filesCount={1}
          fileTitle='star_demo_1.exe'
          pattern={EWindowPatternVariant.CROSS}>
          <div className={styles.demo_wrapper}>
            <div className={styles.eyes_container}></div>
          </div>
        </Window>
        <p className='explanation'>Ой, у звёздочки украли глаза! А, мы их ещё не сделали...</p>

        <p className='spacer top bottom medium'>
          Сам глаз застилизуем с помощью класса <code className='code'>.eye</code>, а зрачок добавим псевдоэлементом{' '}
          <code className='code'>:before</code>. HTML-разметка остаётся без изменений т.к. элементы с классом{' '}
          <code className='code'>.eye</code> мы добавили на прошлом шаге.
        </p>
        <DoubleCodeSnippet
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
          name={['index', 'style']}
          code={[exampleHTML1, exampleCSS2]}
        />

        <p className='spacer top bottom medium'>Теперь звёздочка выглядит отлично!</p>
        <Window
          type={EWindowType.CUSTOM}
          filesCount={1}
          fileTitle='star_demo_2.exe'
          pattern={EWindowPatternVariant.CROSS}>
          <div className={styles.demo_wrapper}>
            <div className={styles.eyes_container}>
              <div className={styles.eye}></div>
              <div className={styles.eye}></div>
            </div>
          </div>
        </Window>
        <p className='spacer top bottom medium'>
          Все размеры в коде выше я подбирала индивидуально. Не стесняйтесь экспериментировать на этом этапе: можно
          менять размер глаз, зрачков, расстояние между ними и т.д. Саму звёздочку можно поменять на другой рисунок:
          сердце, облако, яблоко, etc.
        </p>
      </section>
      <section>
        <h2>А теперь анимируем!</h2>
        <p className='spacer top bottom medium'>
          Сперва реализуем анимацию на чистом JavaScript, а затем я подскажу как перенести её на React.
        </p>
        <p className='spacer top bottom medium'>
          По задумке глаза должны следить за курсором, поэтому нам нужно подписаться на движение мышкой (курсором).
          Делается это просто с помощью метода подписки на событие <code className='code'>addEventListener</code>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS1} />

        <p className='spacer top bottom medium'>
          В этом коде <code className='code'>mousemove</code> — событие, которое срабатывает при каждом движении мыши,{' '}
          <code className='code'>moveEyesToCursor</code> — функция-обработчик, которая будет вызываться каждый раз при
          движении мыши.
        </p>
        <p className='spacer top bottom medium'>
          Напишем теперь эту самую функцию-обработчик <code className='code'>moveEyesToCursor</code>, которая и будет
          делать всю магию движения глаз. Для начала нужно найти все глаза, которые мы хотим анимировать. Сделаем это
          так:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS2} />

        <p className='spacer top bottom medium'>
          Метод <code className='code'>querySelectorAll</code> в JavaScript используется для поиска и возврата списка
          всех элементов документа, соответствующих заданному CSS-селектору. В нашем случае это класс{' '}
          <code className='code'>.eye</code>. Таким образом в переменной <code className='code'>eyes</code> будет
          храниться список объектов NodeList с нашими глазами-дивами и с ними можно будет что-то сделать.
        </p>
        <p className='spacer top bottom medium'>
          А сделаем мы вот что — пройдёмся по всем элементам полученного списка с помощью метода перебора элементов
          массива <code className='code'>forEach</code>:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS3} />

        <p className='spacer top bottom medium'>
          Время освежить курс математики. Для каждого глаза надо вычислить координаты его центра{' '}
          <code className='code'>x, y</code> по несложной формуле:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS4} />

        <p className='spacer top bottom medium'>Теперь вычислим угол между глазом и курсором:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS5} />

        <p className='spacer top bottom medium'>Преобразуем и скорректируем угол:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS6} />

        <p className='spacer top bottom medium'>
          Всё, с математикой закончили. Осталось с помощью CSS заставить глаза двигаться. Сделаем это с помощью CSS
          свойства <code className='code'>transform: rotate()</code>. Глаз будет поворачиваться так, чтобы смотреть на
          курсор:
        </p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS7} />

        <p className='spacer top bottom medium'>Собираем код вместе:</p>
        <CodeSnippet lang={ECodeLang.JAVASCRIPT} name='index' code={exampleJS8} />

        <DoubleCodeSnippet
          lang={[ECodeLang.HTML, ECodeLang.CSS]}
          name={['index', 'style']}
          code={[exampleHTML1, exampleCSS3]}
        />

        <p className='spacer top large'>
          Вы можете перейти по ссылке в песочницу на сайте{' '}
          <ExternalLink href='https://codepen.io/thevioletmaniac/pen/emJWLKx' label='Codepen' />, чтобы посмотреть и
          потыкать результат вживую 🔍
        </p>
      </section>
      <section>
        <h2>Переносим на React</h2>
        <p>
          Чтобы перенести наш код на React нужно чуть-чуть модернизировать HTML-разметку, сама разметка при этом
          практически не изменится. Нужно будет только поддержать тот вид стилизации, который вы используете у себя в
          проекте или предпочитаете сами. В моём случае это CSS Modules в связке с SASS. Поэтому моя HTML-разметка после
          переноса на JSX будет выглядеть следующим образом:
        </p>
        <DoubleCodeSnippet
          lang={[ECodeLang.REACT, ECodeLang.SCSS]}
          name={['AnimatedStar', 'app.module']}
          code={[exampleJSX, exampleSCSS]}
        />

        <p className='spacer top medium'>
          Псевдоэлемент <code className='code'>:before</code> я перенесла внутрь стиля{' '}
          <code className='code'>.eye</code> потому что SASS поддерживает такой синтаксис. Это все изменения, которые
          произошли в CSS-стилях.
        </p>
        <p className='spacer top medium'>
          Чтобы перенести анимацию на React нам понадобится какое-то хранилище, где мы будем хранить ссылки на
          DOM-элементы глаз. Делать это будем с помощью ссылок <code className='code'>ref</code> и хука{' '}
          <code className='code'>useRef</code>. Сперва проинициализируем ссылку:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact1} />

        <p>
          Не пугайтесь, я использую React в связке с TypeScript. Если вы не знакомы с TypeScript, то небольшое
          пояснение: <code className='code'>(HTMLDivElement | null)[]</code> в коде выше означает лишь типизацию
          элементов, которые будут храниться в нашей созданной только что ссылке, т.е. это будет массив элементов, где
          элемент может быть либо <code className='code'>null</code> либо специального типа DOM-дерева{' '}
          <code className='code'>HTMLDivElement</code>.
        </p>
        <p className='spacer top medium'>
          Чуть попозже назначим ссылки на элементы, но пока что займёмся другим - напишем функцию добавления ссылки в
          созданный массив <code className='code'>eyesRef</code>:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact2} />

        <p className='spacer top medium'>
          Вот теперь можно назначать ссылки. Созданная только что выше функция <code className='code'>addToRefs</code>{' '}
          будет вызываться для каждого глаза через свойство <code className='code'>ref</code> следующим образом:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact3} />

        <p className='spacer top medium'>
          Функция-обработчик движения глаз <code className='code'>moveEyesToCursor</code> при переносе на React остаётся
          почти без изменений, но нужно поддержать добавленные ссылки, добавив проверку{' '}
          <code className='code'>current</code>:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact4} />

        <p className='spacer top medium'>
          Чтобы использовать подписку на событие <code className='code'>mousemove</code> в React, как в нативном
          JavaScript выше, воспользуемся хуком <code className='code'>useEffect</code>:
        </p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact5} />

        <p className='spacer top medium'>
          Return-функция здесь выполняет роль очистки: удаляет обработчик при размонтировании компонента, предотвращая
          таким образом утечки памяти.
        </p>
        <p className='spacer top medium'>Ну вот и всё, собираем всё вместе:</p>
        <CodeSnippet lang={ECodeLang.REACT} name='AnimatedStar' code={exampleReact6} />
        <br />
        <CodeSnippet lang={ECodeLang.SCSS} name='styles' code={exampleSCSS2} />
      </section>
    </PostWrapper>
  );
};

export default Post;
