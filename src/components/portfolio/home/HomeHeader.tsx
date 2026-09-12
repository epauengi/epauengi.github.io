"use client";

import { Globe, HangerShape } from "../shared/icons";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { NavBar } from "../shared/NavBar";
import { PortfolioOrb } from "./PortfolioOrb";

export function HomeHeader() {
  const { content } = usePortfolioLanguage();

  return (
    <header className="section home-header theme-dark" data-scroll-section>
      <div className="overlay personal-image no-select once-in" data-scroll data-scroll-speed="-3" data-scroll-position="top">
        <PortfolioOrb />
      </div>
      <div className="overlay get-height once-in once-in-secondary">
        <div className="hanger">
          <p><span>{content.identity.location}</span></p>
          <HangerShape />
          <div className="digital-ball"><div className="overlay" /><Globe /></div>
        </div>
      </div>
      <NavBar />
      <div className="container once-in once-in-secondary">
        <div className="row"><div className="flex-col">
          <h4><span>{content.identity.availability}</span> {content.identity.role}</h4>
        </div></div>
      </div>
      <div className="big-name"><div className="name-h1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top"><div className="name-wrap"><h1 className="no-select once-in once-in-secondary">{content.identity.name}<span className="spacer">—</span></h1></div></div></div>
      <div className="white-block" />
    </header>
  );
}
