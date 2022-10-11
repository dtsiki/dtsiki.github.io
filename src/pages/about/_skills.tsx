import classNames from 'classnames';
import React, { ReactElement, useMemo } from 'react';

import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';
import Like from 'src/components/common/Like';

import styles from './about.module.scss';

interface Props {
  isExtended?: boolean;
}

const AboutSkills = ({ isExtended = false }: Props): ReactElement => {
  const bind = classNames.bind(styles);

  const primarySkills = [
    'HTML',
    'BEM',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Next.js',
    'Git flow'
  ];

  const extendedSkills = [
    'Webpack',
    'Linter',
    'Prettier',
    'Data APIs',
    'State management',
    'Accessibility'
  ];

  const renderSkills = useMemo(() => {
    const skills = isExtended ? [...primarySkills, ...extendedSkills] : [...primarySkills];

    return skills.map((skill) => {
      return (
        <li
          key={skill}
          className='list__item'>
          {isExtended ? (
            <div className='spacer bottom small'>
              <Like>
                {skill}
              </Like>
            </div>
          ) : (
            <Tag
              variant={TagVariant.DARK}
              isOutlined>
              {skill}
            </Tag>
          )}
        </li>
      );
    });
  }, [primarySkills, extendedSkills, isExtended]);

  return (
    <ul className={bind(['list inline', { [styles.about__likes]: isExtended }])}>
      {renderSkills}
    </ul>
  );
};

export default AboutSkills;
