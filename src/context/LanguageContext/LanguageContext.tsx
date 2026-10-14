import { createContext } from 'react';
import type { ILanguageContextData } from './LanguageContext.types';

export const LanguageContext = createContext<ILanguageContextData | undefined>(undefined);
