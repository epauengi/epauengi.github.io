"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import type { WorkFilter, WorkView } from "./WorkFilters";
import { WORK_PROJECTS } from "./workData";

type Props = {
  filter: WorkFilter;
  view: WorkView;
};

export function WorkRows({ filter, view }: Props) {
  const { content } = usePortfolioLanguage();
  const visible = (classes: string) => filter === "all" || classes === filter;

  return (
    <section className={`section work-grid small-work-grid grid-fade grid-rows-part${view === "rows" ? " visible" : ""}`} aria-hidden={view !== "rows"}>
      <div className="container">
        <div className="grid-sub-title">
          <div className="flex-col"><h5>{content.work.all}</h5></div>
          <div className="flex-col"><h5>{content.work.role}</h5></div>
          <div className="flex-col"><h5>{content.work.stack}</h5></div>
          <div className="flex-col"><h5>{content.work.demo}</h5></div>
        </div>
        <ul className={`work-items mouse-pos-list-image-wrap ${filter}-active`}>
          {WORK_PROJECTS.map((project) => {
            const details = content.projects[project.slug];
            const actionLabel = project.demo !== project.github ? content.work.demo : content.work.source;
            return (
              <li className={`${project.classes}${visible(project.classes) ? " visible" : ""}`} key={project.slug}>
                <div className="stripe animate" />
                <a href={project.demo} target="_blank" rel="noreferrer" className="row" aria-label={`${project.title}: ${actionLabel}`}>
                  <div className="flex-col"><h4><span>{project.title}</span></h4></div>
                  <div className="flex-col animate"><p>{details.role}</p></div>
                  <div className="flex-col animate"><p>{details.stack.slice(0, 3).join(" · ")}</p></div>
                  <div className="flex-col animate"><p>{actionLabel}</p></div>
                </a>
              </li>
            );
          })}
          <li className="stripe last animate" aria-hidden="true" role="presentation" />
        </ul>
      </div>
    </section>
  );
}
