import { SKILLS } from 'src/i18n';
import { SKILLS_CONFIG } from 'src/data/skillsConfig';
import { useTranslate } from 'src/hooks/useTranslate';
import { ISkillsProps, SkillsPage } from './Skills.types';

import styles from './Skills.module.scss';

export const Skills = ({ page }: ISkillsProps) => {
  const { translate } = useTranslate();

  return (
    <section className={styles.skills}>
      {page === SkillsPage.FIRST && <h3 className={styles.skills__title}>{translate(SKILLS)}</h3>}
      <ul>
        {SKILLS_CONFIG.filter((item) => item.page === page).map(({ title }) => (
          <li key={title} className={styles.skills__item}>
            <p className={styles.skills__text}>{title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
