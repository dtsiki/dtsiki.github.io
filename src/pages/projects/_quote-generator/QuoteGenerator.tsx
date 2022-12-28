import { ReactElement } from 'react';

import Project from 'src/components/pages/projects/Project';

import quoteGeneratorPreview from 'public/assets/projects/previews/quote-generator.png';

const QuoteGenerator = (): ReactElement => {
  return (
    <Project
      name='Quote generator'
      description='A simple pure JavaScript generator shows random quote and random background color for every quote.'
      tags={['HTML', 'CSS', 'JavaScript']}
      preview={quoteGeneratorPreview}
      demoLink='https://dtsiki.github.io/quote-generator'
      repoLink='https://github.com/dtsiki/quote-generator' />
  )
};

export default QuoteGenerator;
