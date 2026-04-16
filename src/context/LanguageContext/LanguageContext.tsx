import { createContext } from 'react';
import { ILanguageContextData } from './LanguageContext.types';

export const LanguageContext = createContext<ILanguageContextData | undefined>(undefined);
