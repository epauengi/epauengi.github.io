"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import type { WorkFilter } from "./WorkFilters";
import { WORK_PROJECTS } from "./workData";

type Props = {
  filter: WorkFilter;
};

export function WorkMouseFollow({ filter }: Props) {
  const { content } = usePortfolioLanguage();
  const visible = (classes: string) => filter === "all" || classes === filter;

  return (
    <>
      <div className="mouse-pos-list-image no-select"><div className="mouse-pos-list-image-bounce overlay"><ul className="float-image-wrap">
        {WORK_PROJECTS.map((project) => <li className={`mouse-pos-list-image-inner ${project.classes}${visible(project.classes) ? " visible" : ""}`} key={project.slug}><div className="overlay overlay-image" style={{ backgroundColor: project.color, backgroundImage: `url(${project.cursorSrc})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /></li>)}
      </ul></div></div>
      <div className="mouse-pos-list-btn no-select" />
      <div className="mouse-pos-list-span no-select"><p>{content.work.demo}</p></div>
    </>
  );
}
