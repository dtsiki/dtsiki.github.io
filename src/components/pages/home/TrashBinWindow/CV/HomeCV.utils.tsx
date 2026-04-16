import { nanoid } from 'nanoid';
import { Header } from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Contacts } from './components/Contacts/Contacts';
import { TDocPage } from 'src/components/common/Window/components/DocFile/components/DocPage/DocPage.types';
import { Education } from './components/Education/Education';
import { WorkExperiencePage } from './components/WorkExperience/WorkExperience.types';

export const TRASH_BIN_CV_CONFIG: TDocPage[] = [
  {
    id: nanoid(),
    content: [<Header />, <AboutMe />],
  },
  {
    id: nanoid(),
    content: [<WorkExperience page={WorkExperiencePage.FIRST} />],
  },
  {
    id: nanoid(),
    content: [<WorkExperience page={WorkExperiencePage.SECOND} />],
  },
  {
    id: nanoid(),
    content: [<WorkExperience page={WorkExperiencePage.THIRD} />, <Education />, <Contacts />],
  },
];
