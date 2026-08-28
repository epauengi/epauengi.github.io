"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function AboutServices() {
  const { content } = usePortfolioLanguage();
  const columns = [content.skills.slice(0, 2), content.skills.slice(2, 4), content.skills.slice(4)];

  return (
    <section id="skills" className="section about-services" data-scroll-section>
      <div className="container">
        <div className="row"><div className="flex-col"><h2>{content.about.skillsHeading}</h2></div></div>
        <div className="row">
          {columns.map((column, index) => <div className="flex-col" key={index}><h5>0{index + 1}</h5><div className="stripe" />{column.map((skill) => <div className="portfolio-skill" key={skill.name}><h4>{skill.name}</h4><p>{skill.items}</p></div>)}{index === 2 && <div className="portfolio-proficiency"><h5>{content.about.proficiency}</h5>{content.proficiency.map((level) => <p key={level.name}><strong>{level.name}</strong><br />{level.items}</p>)}</div>}</div>)}
        </div>
      </div>
    </section>
  );
}
