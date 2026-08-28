"use client";

import { Magnetic } from "../shared/Magnetic";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function MoreWork() {
  const { content } = usePortfolioLanguage();
  return <section className="section center-grid-btn center-grid-btn-home" data-scroll-section><div className="container"><div className="grid-after-btn"><div className="btn btn-normal"><Magnetic as="a" href="/work/" strength={25} strengthText={15}><div className="btn-fill" /><span className="btn-text"><span className="btn-text-inner change">{content.home.moreWork}</span></span></Magnetic></div></div></div></section>;
}
