export const SkillsPage = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
} as const;

export type SkillsPage = typeof SkillsPage[keyof typeof SkillsPage];

export interface ISkillsProps {
  page: SkillsPage;
}
