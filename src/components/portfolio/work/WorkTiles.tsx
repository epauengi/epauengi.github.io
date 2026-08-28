"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import type { WorkFilter, WorkView } from "./WorkFilters";
import { WORK_PROJECTS } from "./workData";

type Props = {
  filter: WorkFilter;
  view: WorkView;
  phase: "idle" | "out" | "in";
};

export function WorkTiles({ filter, view, phase }: Props) {
  const { content } = usePortfolioLanguage();
  const visible = (classes: string) => filter === "all" || classes === filter;
  const animation = phase === "idle" ? "" : ` tile-fade-${phase}`;

  return (
    <section className={`section work-tiles portfolio-work-tiles grid-fade grid-columns-part${view === "columns" ? " visible" : ""}${phase === "idle" ? "" : ` grid-fade-${phase}`}`} aria-hidden={view !== "columns"}>
      <div className="container"><ul>
        {WORK_PROJECTS.map((project) => {
          const details = content.projects[project.slug];
          return (
            <li className={`${project.classes}${visible(project.classes) ? " visible" : ""}${animation}`} key={project.slug}>
              <div className="single-tile-wrap portfolio-project-card">
                <div className="row">
                  <div className="flex-col"><a href={project.demo} target="_blank" rel="noreferrer" className="tile-image" aria-label={`${project.title}: ${content.work.demo}`}><span className="overlay overlay-image" style={{ backgroundColor: project.color, backgroundImage: `url(${project.image})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /></a></div>
                  <div className="flex-col portfolio-project-content">
                    <h4>{project.title}</h4><p className="portfolio-project-subtitle">{details.subtitle}</p><div className="stripe" /><p>{details.description}</p>
                    <div className="portfolio-project-meta"><h5>{content.work.features}</h5><ul>{details.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h5>{content.work.role}</h5><p>{details.role}</p><h5>{content.work.stack}</h5><p>{details.stack.join(" · ")}</p></div>
                    <div className="portfolio-project-actions"><a href={project.demo} target="_blank" rel="noreferrer">{content.work.demo}</a><a href={project.github} target="_blank" rel="noreferrer">{content.work.source}</a></div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul></div>
    </section>
  );
}
