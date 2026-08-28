"use client";

import { Magnetic } from "../shared/Magnetic";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function HomeIntro() {
  const { content } = usePortfolioLanguage();

  return (
    <section className="section home-intro" data-scroll-section>
      <div className="container medium"><div className="row">
        <div className="flex-col"><h4 className="fade-in animate">{content.home.introLead}</h4></div>
        <div className="flex-col">
          <div className="text-wrap fade-in animate"><p>{content.home.introText}</p></div>
          <div className="btn btn-round" data-scroll data-scroll-speed="2">
            <Magnetic as="a" href="/about/" strength={100} strengthText={50}><div className="btn-fill" /><span className="btn-text"><span className="btn-text-inner">{content.home.aboutAction}</span></span></Magnetic>
          </div>
        </div>
      </div></div>
    </section>
  );
}
