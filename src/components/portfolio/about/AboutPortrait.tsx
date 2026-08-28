"use client";

import { ArrowUpRight } from "../shared/icons";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function AboutPortrait() {
  const { content } = usePortfolioLanguage();
  return (
    <section className="section about-image once-in" data-scroll-section>
      <div className="bottom-lightgray" />
      <div className="container"><div className="row">
        <div className="flex-col"><div className="arrow"><ArrowUpRight /></div><p data-scroll data-scroll-speed="-1" data-scroll-position="top" data-scroll-offset="0%, -50%">{content.about.text}</p><p data-scroll data-scroll-speed="-1" data-scroll-position="top" data-scroll-offset="0%, -50%"><span className="portfolio-focus-label">{content.about.focus}</span><span className="portfolio-focus-list">{content.about.focusItems.join(" · ")}</span></p></div>
        <div className="flex-col"><div className="single-about-image portfolio-about-badge"><div className="overlay overlay-image"><span>UIT</span><small>{content.identity.school}</small></div><div className="overlay" /></div></div>
      </div></div>
    </section>
  );
}
