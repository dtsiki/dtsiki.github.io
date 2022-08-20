import React, { ReactElement, useMemo } from 'react';
import Tag from 'src/components/common/Tag';
import { TagVariant } from 'src/components/common/Tag/Tag';

interface Props {
  isExtended?: boolean;
}

const AboutSkills = ({ isExtended = false }: Props): ReactElement => {
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
    'Git',
    'intermediate english'
  ];

  const extendedSkills = [
    'Webpack',
    'Linter',
    'Prettier',
    'Web API',
    'State management',
    'NPM',
    'a11y'
  ];

  const renderSkills = useMemo(() => {
    const skills = isExtended ? [...primarySkills, ...extendedSkills] : [...primarySkills];

    return skills.map((skill) => {
      return (
        <li
          key={skill}
          className='list__item'>
          <Tag
            variant={TagVariant.DARK}
            isOutlined>
            {skill}
          </Tag>
        </li>
      );
    });
  }, [primarySkills, extendedSkills, isExtended]);

  return (
    <ul className={`list inline ${isExtended ? ' align-right' : ''}`}>
      {renderSkills}
    </ul>
  );
};

export default AboutSkills;
