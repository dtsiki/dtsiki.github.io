import { useTranslate } from 'src/hooks/useTranslate';
import { Language } from 'src/types';

export const HomeReadme = () => {
  const { language } = useTranslate();

  if (language === Language.RU) {
    return (
      <div>
        <section>
          <p>КРАТКОЕ ОПИСАНИЕ СИСТЕМЫ</p>
          <p>
            Приветствую тебя, незнакомый цифровой странник. Перед тобой персональная страница в сети интернет
            фронтенд-разработчицы @dtsiki, версия v2.0.1.
          </p>
          <p>
            Все элементы интерфейса функциональны (почти). Не бойся кликать на значки, они не укусят (но это не точно).
          </p>
          <p>Все совпадения с реальными операционными системами случайны, но тщательно спланированы.</p>
          <p>Для наилучшего опыта рекомендован браузер и любопытство.</p>
        </section>
        <section>
          <p>СОДЕРЖИМОЕ</p>
          <section>
            <p>1. ФАЙЛ «РЕЗЮМЕ(1).DOC»</p>
            <p>Резюме для альтернативной реальности.</p>
            <p>2. ПАПКА «БЛОГ»</p>
            <p>То сё, пятое десятое. Пишу туда всё о коде и не только. Периодически обновляется эссенцией опыта.</p>
            <p>3. ПРЕЗЕНТАЦИЯ «ПРЕЗЕНТ_NEW(1).PPT»</p>
            <p>Важнейшая презентация на свете!!!</p>
            <p>4. ФАЙЛ «README.TXT»</p>
            <p>Этот файл, который ты читаешь прямо сейчас.</p>
            <p>5. КОРЗИНА</p>
            <p>Корзина. Просто корзина.</p>
          </section>
        </section>
        <section>
          <p>БЛАГОДАРНОСТИ</p>
          <p>На этой веб-страничке используются: </p>
          <p>
            1. Набор иконок{' '}
            <a href='https://www.figma.com/community/file/952542622393317653/pixelarticons-free' className='link'>
              «Pixelarticons»
            </a>{' '}
            авторства Gerrit Halfmann
          </p>
          <p>
            2. Ещё один набор иконок{' '}
            <a href='https://www.figma.com/community/file/1196864707579677521' className='link'>
              «Free Pixel Icons»
            </a>{' '}
            авторства Streamline
          </p>
          <p>
            3. Паттерны с замечательного сайта{' '}
            <a href='https://heropatterns.com/' className='link'>
              «Hero Patterns»
            </a>{' '}
            авторства Steve Schoger
          </p>
          <p>
            4. И паттерны с другого замечательного сайта{' '}
            <a href='https://pattern.monster/' className='link'>
              «Pattern Monster»
            </a>{' '}
            авторства Naveen CS
          </p>
          <p>Спасибо авторам этих замечательным ресурсов &lt;3</p>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section>
        <p>SYSTEM OVERVIEW:</p>
        <p>
          This is an interactive digital system (version 2.0.1) also known as a CV also known as blog for frontend
          developer @dtsiki.
        </p>
        All UI elements are functional (or not). Don't be afraid to click everything (or be afraid, but just a little
        bit)
      </section>
      <section>
        <p>CONTENTS:</p>
        <section>
          <p>1. "CV.DOC" FILE</p>
          <p>A CV for an alternative reality.</p>
        </section>
        <section>
          <p>2. "BLOG" FOLDER</p>
          <p>I write this and that. About code and not. Periodically updated with the essence of experience.</p>
        </section>
        <section>
          <p>3. "SLIDES_NEW(1).PPT" FILE</p>
          <p>The most important presentation in the world. DO NOT DELETE!!!!!</p>
        </section>
        <section>
          <p>3. "README.MD" FILE</p>
          <p>This file</p>
        </section>
      </section>
      <section>
        <p>
          Any resemblance to actual operating systems is coincidental, but carefully planned. For the best experience, a
          browser and a healthy dose of curiosity are recommended.
        </p>
      </section>
      <section>
        <p>Credits</p>
        <p>
          1.{' '}
          <a href='https://www.figma.com/community/file/952542622393317653/pixelarticons-free' className='link'>
            Pixelarticons
          </a>{' '}
          by Gerrit Halfmann
        </p>
        <p>
          2.{' '}
          <a href='https://www.figma.com/community/file/1196864707579677521' className='link'>
            Free Pixel Icons
          </a>{' '}
          by Streamline
        </p>
        <p>
          3.{' '}
          <a href='https://heropatterns.com/' className='link'>
            Hero Patterns
          </a>{' '}
          by Steve Schoger
        </p>
        <p>
          4.{' '}
          <a href='https://pattern.monster/' className='link'>
            Pattern Monster
          </a>{' '}
          by Naveen CS
        </p>
        <p>
          Thank you <span style={{ color: '#8A2BE2' }}>❤</span>
        </p>
      </section>
    </div>
  );
};
