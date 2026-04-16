import { nanoid } from 'nanoid';
import { Header } from './components/Header/Header';
import { Skills } from './components/Skills/Skills';
import { Contacts } from './components/Contacts/Contacts';
import { TDocPage } from 'src/components/common/Window/components/DocFile/components/DocPage/DocPage.types';
import { SkillsPage } from './components/Skills/Skills.types';

export const HOME_CV_CONFIG: TDocPage[] = [
  {
    id: nanoid(),
    content: [<Header />, <Skills page={SkillsPage.FIRST} />],
  },
  {
    id: nanoid(),
    content: [<Skills page={SkillsPage.SECOND} />, <Contacts />],
  },
];
