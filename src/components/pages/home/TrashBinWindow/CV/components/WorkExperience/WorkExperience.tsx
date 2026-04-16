import classNames from 'classnames';
import { TCompanyType } from 'src/data/workExperienceConfig';
import { useTranslate } from 'src/hooks/useTranslate';
import { PRESENT, SELF_EMPLOYED, WORK_EXPERIENCE } from 'src/i18n';

import styles from './WorkExperience.module.scss';
import { nanoid } from 'nanoid';
import { IWorkExperienceProps, WorkExperiencePage } from './WorkExperience.types';

export const WorkExperience = ({ page }: IWorkExperienceProps) => {
  const bind = classNames.bind(styles);

  const { translate } = useTranslate();

  const renderCompany = (company: TCompanyType) => {
    if (!company) {
      return translate(SELF_EMPLOYED);
    }

    if (typeof company === 'string') {
      return company;
    }

    if (typeof company === 'object') {
      return translate(company);
    }
  };

  const WORK_EXPERIENCE_CONFIG = [
    {
      id: nanoid(),
      page: WorkExperiencePage.FIRST,
      company: 'Инфомаксимум',
      position: 'Тимлид направления JS-разработки (Frontend-разработчик)',
      start: 'Апрель 2023',
      end: 'Август 2025',
      stack: ['HTML', 'CSS (CSS in JS)', 'JavaScript', 'TypeScript', 'React', 'Next,js', 'MobX', 'GraphQL'],
      done: [
        'Выросла от разработчика до тимлида, руководила несколькими командами разработки, в том числе занималась декомпозицей, оценкой и распределением задач, контролем выполнения, проводила код-ревью',
        'Разрабатывала и поддерживала ключевые модули основного продукта компании — системы бизнес-аналитики Proceset',
        'Реализовала внутренний инструмент для отдела тестирования для автоматизации их рабочих процессов',
        'Руководила и занималась непосредственно разработкой нового интерфейса Proceset',
      ],
    },
    {
      id: nanoid(),
      page: WorkExperiencePage.FIRST,
      company: 'Ronas IT',
      position: 'Фронтенд-разработчица',
      start: 'Август 2021',
      end: 'Февраль 2023',
      stack: ['HTML', 'CSS', 'Angular', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
      done: [
        'Разрабатывала и поддерживала проекты на Angular, React и Next.js. Эффективно переключалась между стеком Angular и React в рамках разных проектов. Пришла в компанию без знания Angular, быстро вкатилась без предварительного опыта — хватило пары недель, чтобы чувствовать себя уверенно',
        'На проектах занималась адаптивной и кроссбраузерной вёрсткой, включая вёрстку email-рассылок. Обеспечивала качественную вёрстку под все типы требуемых устройств',
        'Поддерживала легаси-проекты, проводила рефакторинг, оптимизацию кода, производительности и загрузки',
      ],
    },
    {
      id: nanoid(),
      page: WorkExperiencePage.SECOND,
      company: 'ADCI Solutions',
      position: 'Фронтенд-разработчица',
      start: 'Июнь 2020',
      end: 'Август 2021',
      stack: ['HTML', 'CSS', 'Drupal', 'jQuery', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
      done: [
        'Разрабатывала кастомные темы для CMS Drupal с использованием нативного JavaScript и jQuery. Адаптировала нестандартные дизайн-макеты под ограничения CMS',
        'Бережно поддерживала и развивала проект на замороженной версии Next.js, находя нестандартные решения без возможности обновления стека. Боролась за стабильную работу интерфейсов в старых версиях IE и других браузерах. Внедряла веб-доступность не потому что «надо для галочки», а потому что из-за специфики сайт реально должен был быть доступен всем',
        'Принимала участие в разработке приложения на React. Отвечала за сложную визуализации данных: интерактивные графики и диаграммы. В этом же проекте отвечала за разработку и внедрение системы OAuth-авторизации с поддержкой трёх крупных зарубежных соцсетей с возможностью дальнейшего расширения списка',
      ],
    },
    {
      id: nanoid(),
      page: WorkExperiencePage.SECOND,
      company: 'ЦКБА',
      position: 'Инженер по цифровой обработке сигналов, 3 категории',
      start: 'Сентябрь 2014',
      end: 'Январь 2020',
      stack: ['C++', 'Assembler', 'VHDL', 'Verilog', 'AHDL'],
      done: [
        'Разрабатывала и занималась отладкой программного обеспечения для устройств на базе DSP и FPGA с использованием языков программирования C и C++',
        'Программировала на языках низкого уровня и описания аппаратуры',
        'Проектировала принципиальные схемы и проводила сопутствующие расчёты',
        'Проводила настройки и испытания изделий, анализ результатов',
        'Занималась оформлением технической документации в строгом соответствии с ЕСКД',
        'Получила опыт работы в условиях строгих стандартов качества и документооборота',
      ],
    },
    {
      id: nanoid(),
      page: WorkExperiencePage.THIRD,
      company: 'Фриланс',
      position: 'Дизайнер-верстальщик',
      start: 'Октябрь 2012',
      end: 'Сентябрь 2014',
      stack: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'jQuery'],
      done: [
        'Застала мир веб-разработки в эру мезозоя до того, как в него пришли CSS3, HTML5, React,  TypeScript, UI/UI с Figma и прочие финтифлюшки и где были популярны jQuery и Flash',
        'Верстала макеты с помощью HTML, CSS, JavaScript, JQuery',
        'Разрабатывала сайты для CMS Wordpress и на PHP',
        'Обрабатывала изображения в Adobe Photoshop',
      ],
    },
  ];

  return (
    <section className={styles.work_experience}>
      {page === WorkExperiencePage.FIRST && (
        <h3 className={styles.work_experience__title}>{translate(WORK_EXPERIENCE)}</h3>
      )}
      <ul className={bind([styles.work_experience__list, 'list markered'])}>
        {WORK_EXPERIENCE_CONFIG.filter((item) => item.page === page).map(
          ({ id, company, position, start, end, done, stack }) => (
            <li className={styles.work_experience__item} key={id}>
              <h4 className={styles.work_experience__position}>{position}</h4>
              <h5 className={styles.work_experience__company_name}>{renderCompany(company)}</h5>
              <p className={styles.work_experience__text}>
                {start} - {end ? end : translate(PRESENT)}
              </p>
              <ol className={styles.work_experience__done_list}>
                {done.map((item) => (
                  <li key={item} className={styles.work_experience__done_item}>
                    {item}
                  </li>
                ))}
              </ol>
              <p>
                <strong>Стек</strong>:{' '}
                {stack.map((item, index) => (
                  <span>
                    {item}
                    {index !== stack.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
