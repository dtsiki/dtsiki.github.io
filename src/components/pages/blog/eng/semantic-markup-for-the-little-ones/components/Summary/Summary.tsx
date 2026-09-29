import { forwardRef } from 'react';

export const Summary = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref} className='section outer'>
      <h2>Summary</h2>
      <p>
        Semantic HTML is just a well-written HTML. Well, just write HTML well. It&apos;s not as difficult as you might
        think.
      </p>
    </section>
  );
});

Summary.displayName = 'Summary';
