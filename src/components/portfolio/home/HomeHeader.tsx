"use client";

import { Blocks, Bot, CodeXml, GitBranch } from "lucide-react";
import { ArrowUpRight, Globe, HangerShape } from "../shared/icons";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { NavBar } from "../shared/NavBar";

export function HomeHeader() {
  const { content } = usePortfolioLanguage();

  return (
    <header className="section home-header theme-dark" data-scroll-section>
      <div className="overlay personal-image no-select once-in" data-scroll data-scroll-speed="-3" data-scroll-position="top">
        <div className="portfolio-systems-orb" aria-hidden="true">
          <div className="portfolio-systems-orb__core">
            <span className="portfolio-systems-orb__mesh">
              <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--north" />
              <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--middle" />
              <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--south" />
              <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--west" />
              <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--center" />
              <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--east" />
            </span>
          </div>
          <span className="portfolio-systems-orb__orbit portfolio-systems-orb__orbit--a" />
          <span className="portfolio-systems-orb__orbit portfolio-systems-orb__orbit--b" />
          <span className="portfolio-systems-orb__track portfolio-systems-orb__track--a">
            <span className="portfolio-systems-orb__track-rotor">
              <span className="portfolio-systems-orb__icon-anchor portfolio-systems-orb__icon-anchor--top"><span className="portfolio-systems-orb__icon portfolio-systems-orb__icon--code"><CodeXml /></span></span>
              <span className="portfolio-systems-orb__icon-anchor portfolio-systems-orb__icon-anchor--bottom"><span className="portfolio-systems-orb__icon portfolio-systems-orb__icon--git"><GitBranch /></span></span>
            </span>
          </span>
          <span className="portfolio-systems-orb__track portfolio-systems-orb__track--b">
            <span className="portfolio-systems-orb__track-rotor">
              <span className="portfolio-systems-orb__icon-anchor portfolio-systems-orb__icon-anchor--top"><span className="portfolio-systems-orb__icon portfolio-systems-orb__icon--framework"><Blocks /></span></span>
              <span className="portfolio-systems-orb__icon-anchor portfolio-systems-orb__icon-anchor--bottom"><span className="portfolio-systems-orb__icon portfolio-systems-orb__icon--ai"><Bot /></span></span>
            </span>
          </span>
        </div>
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
          <div className="header-above-h4" data-scroll data-scroll-speed="1"><div className="arrow big"><ArrowUpRight /></div></div>
          <h4><span>{content.identity.availability}</span> {content.identity.role}</h4>
        </div></div>
      </div>
      <div className="big-name"><div className="name-h1" data-scroll data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top"><div className="name-wrap"><h1 className="no-select once-in once-in-secondary">{content.identity.name}<span className="spacer">—</span></h1></div></div></div>
      <div className="white-block" />
    </header>
  );
}
