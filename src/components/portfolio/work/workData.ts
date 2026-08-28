import { WORK } from "../shared/data";

export type WorkProject = (typeof WORK)[number] & {
  classes: "development";
  tileSrc: string;
  cursorSrc: string;
};

export const WORK_PROJECTS: WorkProject[] = WORK.map((project) => ({
  ...project,
  classes: "development",
  tileSrc: project.image,
  cursorSrc: project.image,
}));
