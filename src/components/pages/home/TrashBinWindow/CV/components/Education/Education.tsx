import classNames from 'classnames';
import { TCompanyType } from 'src/data/workExperienceConfig';
import { useTranslate } from 'src/hooks/useTranslate';
import { EDUCATION, PRESENT, SELF_EMPLOYED, WORK_EXPERIENCE } from 'src/i18n';

import styles from './Education.module.scss';
import { nanoid } from 'nanoid';

export const Education = () => {
  const bind = classNames.bind(styles);
  const { translate } = useTranslate();

  const EDUCATION_CONFIG = [
    {
      id: nanoid(),
      place: 'Омский государственный технический университет',
      location: 'Омск',
      program: 'Отказоустойчивые вычислительные системы',
      degree: 'Магистр',
      start: '2014',
      end: '2016',
    },
    {
      id: nanoid(),
      place: 'Омский государственный технический университет',
      location: 'Омск',
      program: 'Информатика и вычислительная техника',
      degree: 'Бакалавр',
      start: '2010',
      end: '2014',
    },
  ];

  return (
    <section className={styles.education}>
      <h3 className={styles.education__title}>{translate(EDUCATION)}</h3>
      <ol className={bind([styles.education__list, 'list markered'])}>
        {EDUCATION_CONFIG.map(({ id, program, place, location, end, degree }) => (
          <li className={styles.education__item} key={id}>
            <h3 className={styles.education__position}>{program}</h3>
            <p className={styles.education__text}>
              {place}, {location}
            </p>
            <p className={styles.education__text}>
              {degree}, {end}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
