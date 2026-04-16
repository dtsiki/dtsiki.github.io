import { Accordion } from 'src/components/common/Accordion';

const JAVASCRIPT_QUESTIONS_CONFIG = [
  {
    question: (
      <>
        В чём разница между <code>var</code>, <code>let</code> и <code>const</code>
      </>
    ),
    answer: <></>,
  },
];
export const JavaScript = () => {
  return <Accordion title='JavaScript'>Вопросы по JavaScript</Accordion>;
};
