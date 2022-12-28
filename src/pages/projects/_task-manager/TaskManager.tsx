import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import taskManagerPreview from '/public/assets/projects/task-manager.png';

const TaskManager = (): ReactElement => {
  return (
    <Project
      name='Task manager'
      description='React with TypeScript simplified kanban board inspired by Trello. HTML drag and drop API is used here.'
      tags={['HTML', 'CSS', 'React', 'TypeScript']}
      preview={taskManagerPreview}
      repoLink='https://github.com/dtsiki/task-manager' />
  );
};

export default TaskManager;
