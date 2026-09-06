"use client";

import { WORK } from "../shared/data";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function WorkGrid() {
  const { content } = usePortfolioLanguage();

  return (
    <section className="section work-grid large-work-grid" data-scroll-section>
      <div className="container">
        <div className="grid-sub-title"><div className="flex-col"><h5>{content.home.recentWork}</h5></div></div>
        <ul className="work-items mouse-pos-list-image-wrap">
          {WORK.map((project) => (
            <li className={`${project.category} visible`} key={project.slug}>
              <div className="stripe animate" />
              <a href={project.demo} target="_blank" rel="noreferrer" className="row">
                <div className="flex-col"><h4><span>{project.title}</span></h4></div>
                <div className="flex-col animate"><p>{content.projects[project.slug].subtitle}</p></div>
              </a>
            </li>
          ))}
          <div className="stripe last animate" />
        </ul>
      </div>
    </section>
  );
}
