"use client";

import { NavBar } from "../shared/NavBar";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function AboutHeader() {
  const { content } = usePortfolioLanguage();
  return <header id="about" className="section default-header about-header" data-scroll-section><NavBar currentRoute="/about/" /><div className="container medium once-in"><div className="row"><div className="flex-col"><h1><span>{content.about.heading}</span></h1></div></div></div></header>;
}
