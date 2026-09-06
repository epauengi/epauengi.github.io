"use client";

import { WORK } from "../shared/data";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function WorkTiles() {
  const { content } = usePortfolioLanguage();

  return (
    <section className="section work-tiles work-tiles-home" data-scroll-section>
      <div className="container"><ul>
        {WORK.map((project) => (
          <li className={`${project.category} visible`} key={project.slug}>
            <div className="single-tile-wrap">
              <a href={project.demo} target="_blank" rel="noreferrer" className="row">
                <div className="flex-col"><div className="tile-image"><div className="overlay overlay-image" style={{ backgroundColor: project.color, backgroundImage: `url(${project.image})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /></div></div>
                <div className="flex-col"><h4><span>{project.title}</span></h4><div className="stripe" /></div>
                <div className="flex-col"><p>{content.projects[project.slug].subtitle}</p></div>
                <div className="flex-col"><p>{content.home.view}</p></div>
              </a>
            </div>
          </li>
        ))}
      </ul></div>
    </section>
  );
}
