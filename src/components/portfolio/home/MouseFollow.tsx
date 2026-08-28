"use client";

import { WORK } from "../shared/data";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function MouseFollow() {
  const { content } = usePortfolioLanguage();

  return (
    <>
      <div className="mouse-pos-list-image no-select"><div className="mouse-pos-list-image-bounce overlay"><div className="float-image-wrap">
        {WORK.map((project) => <li className="mouse-pos-list-image-inner development visible" key={project.slug}><div className="overlay overlay-image" style={{ backgroundColor: project.color, backgroundImage: `url(${project.image})`, backgroundPosition: "center center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} /></li>)}
      </div></div></div>
      <div className="mouse-pos-list-btn no-select" />
      <div className="mouse-pos-list-span no-select"><p>{content.home.view}</p></div>
    </>
  );
}
