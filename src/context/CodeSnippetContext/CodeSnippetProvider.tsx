import { useRef } from 'react';
import { ICodeSnippetProviderProps } from './CodeSnippetProvider.types';
import { CodeSnippetContext } from './CodeSnippetContext';

export const CodeSnippetProvider = ({ children }: ICodeSnippetProviderProps) => {
  const counterRef = useRef<number>(0);

  return <CodeSnippetContext.Provider value={{ counterRef }}>{children}</CodeSnippetContext.Provider>;
};
