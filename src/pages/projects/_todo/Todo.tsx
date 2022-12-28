import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import todoPreview from 'public/assets/projects/previews/todo.png';

const Todo = (): ReactElement => {
  const name = 'Todo';
  const description = 'This is the most classic pet project - a simple task management application or to do list. Built using React and Redux-like manager Storeon with its localStorage module are used here for direct implementation of state management.';

  return (
    <Project
      name={name}
      description={description}
      tags={['HTML', 'CSS', 'React']}
      preview={todoPreview}
      repoLink='https://github.com/dtsiki/todo' />
  );
};

export default Todo;
