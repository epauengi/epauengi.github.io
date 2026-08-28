"use client";

import { NavBar } from "../shared/NavBar";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function WorkHeader() {
  const { content } = usePortfolioLanguage();
  return <header className="section default-header work-header" data-scroll-section><NavBar currentRoute="/work/" /><div className="container medium"><div className="row"><div className="flex-col once-in"><h1><span>{content.work.heading}</span></h1></div></div></div></header>;
}
