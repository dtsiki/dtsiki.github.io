import React, { ReactElement } from 'react';
import Image from 'next/image';

import Hero from 'src/components/layout/Hero';
import Details from '../_details';

import todo from '/public/assets/projects/todo.png';

const Todo = (): ReactElement => {
  return (
    <>
      <Hero>
        <Image
          src={todo}
          alt='todo' />
      </Hero>
      <Details
        title='Todo'
        description='Simple task management application built with JavaScript library React. Redux-like manager Storeon and its localStorage module are used for state management.'
        tags={['HTML', 'CSS', 'React']}
        sourceLink='https://github.com/dtsiki/todo'
      />
    </>
  );
};

export default Todo;
