import { ReactElement } from 'react';

const AboutWorkExperience = (): ReactElement => {
  const workExperiences = [
    {
      company: 'Infomaximum',
      position: 'frontend developer',
      start: 'apr 2023',
      end: 'aug 2025',
    },
    {
      company: 'Ronas IT',
      position: 'frontend developer',
      start: 'aug 2021',
      end: 'feb 2023',
    },
    {
      company: 'ADCI Solutions',
      position: 'frontend developer',
      start: 'june 2020',
      end: 'aug 2021',
    },
    {
      company: 'Central Design Bureau of Automation',
      position: 'DSP engineer',
      start: 'sep 2014',
      end: 'jan 2020',
    },
    {
      company: 'freelance',
      position: 'web developer and designer',
      start: 'sep 2009',
      end: 'sep 2014',
    },
  ];

  return (
    <ul className='list'>
      {workExperiences.map((workExperience) => (
        <li className='list__item' key={workExperience.company}>
          <h3 className='list__title'>{workExperience.position}</h3>
          <p>{workExperience.company}</p>
          <p className='list__footer'>
            {workExperience.start} - {workExperience.end ? workExperience.end : 'currently employed'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default AboutWorkExperience;
