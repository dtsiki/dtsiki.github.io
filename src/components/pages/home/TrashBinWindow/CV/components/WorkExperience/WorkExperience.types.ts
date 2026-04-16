export const WorkExperiencePage = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
} as const;

export type WorkExperiencePage = typeof WorkExperiencePage[keyof typeof WorkExperiencePage];

export interface IWorkExperienceProps {
  page: WorkExperiencePage;
}
