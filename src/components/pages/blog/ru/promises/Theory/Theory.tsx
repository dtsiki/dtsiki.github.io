import { forwardRef } from 'react';
import {
  CallbackReactions,
  Executor,
  InstanceMethods,
  PromiseChaining,
  PromisesFlattering,
  StateAndResult,
  StaticMethods,
} from './components';

export const Theory = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section className='section outer' ref={ref}>
      <p>Но сперва, конечно же, теория.</p>
      <h2>Теория: что такое промисы</h2>
      <StateAndResult />
      <Executor />
      <InstanceMethods />
      <PromiseChaining />
      <CallbackReactions />
      <StaticMethods />
      <PromisesFlattering />
    </section>
  );
});

Theory.displayName = 'Theory';
