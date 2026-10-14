import { createContext } from 'react';
import type { ICodeSnippetContextData } from './CodeSnippetContext.types';

export const CodeSnippetContext = createContext<ICodeSnippetContextData | null>(null);
