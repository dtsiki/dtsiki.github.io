import { useContext, useRef } from 'react';
import { CodeSnippetContext } from 'src/context/CodeSnippetContext/CodeSnippetContext';

export const useCodeSnippetNumber = (isEnabled: boolean = true): number | null => {
  const context = useContext(CodeSnippetContext);
  const numberRef = useRef<number | null>(null);

  if (!context) {
    throw new Error('useCodeSnippetNumber must be used within a <CodeSnippetProvider>');
  }

  if (isEnabled && numberRef.current === null) {
    context.counterRef.current += 1;
    numberRef.current = context.counterRef.current;
  }

  return numberRef.current;
};
