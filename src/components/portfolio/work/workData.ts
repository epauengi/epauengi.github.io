import { WORK, type ProjectCategory } from "../shared/data";

export type WorkProject = (typeof WORK)[number] & {
  classes: ProjectCategory;
  tileSrc: string;
  cursorSrc: string;
};

export const WORK_PROJECTS: WorkProject[] = WORK.map((project) => ({
  ...project,
  classes: project.category,
  tileSrc: project.image,
  cursorSrc: project.image,
}));
