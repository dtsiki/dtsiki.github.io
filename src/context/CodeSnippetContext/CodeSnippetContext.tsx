import { createContext } from 'react';
import { ICodeSnippetContextData } from './CodeSnippetContext.types';

export const CodeSnippetContext = createContext<ICodeSnippetContextData | null>(null);
