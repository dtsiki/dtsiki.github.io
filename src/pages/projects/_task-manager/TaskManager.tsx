import React, { ReactElement } from 'react';
import Image from 'next/image';

import Hero from 'src/components/layout/Hero';
import Details from '../_details';

import taskManager from '/public/assets/projects/task-manager.png';

const TaskManager = (): ReactElement => {
  return (
    <>
      <Hero>
        <Image
          src={taskManager}
          alt='task manager' />
      </Hero>
      <Details
        title='Task manager'
        description='React with TypeScript simplified kanban board inspired by Trello. HTML drag and drop API is used here.'
        tags={['HTML', 'CSS', 'React', 'TypeScript']}
        sourceLink='https://github.com/dtsiki/task-manager'
      />
    </>
  );
};

export default TaskManager;
