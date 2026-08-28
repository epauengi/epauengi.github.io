"use client";

import { ArrowUpRight } from "../shared/icons";
import { NavBar } from "../shared/NavBar";
import { Magnetic } from "../shared/Magnetic";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { ContactDetails } from "./ContactDetails";

export function ContactHeader() {
  const { content } = usePortfolioLanguage();
  return (
    <header className="section default-header contact-header theme-dark" data-scroll-section>
      <NavBar currentRoute="/contact/" />
      <div className="container medium">
        <div className="row once-in"><div className="flex-col"><p className="portfolio-contact-eyebrow">{content.contact.eyebrow}</p><h1><span><span className="profile-picture portfolio-monogram" aria-hidden="true">PN</span> {content.contact.heading}</span></h1></div><div className="flex-col"><div className="profile-picture portfolio-monogram" aria-hidden="true">PN</div><div className="arrow"><ArrowUpRight /></div></div></div>
        <div className="row once-in"><div className="flex-col portfolio-contact-copy"><p>{content.contact.text}</p><div className="btn btn-normal"><Magnetic as="a" href={`mailto:${content.identity.email}`} strength={25} strengthText={15}><div className="btn-fill" /><span className="btn-text"><span className="btn-text-inner change">{content.contact.action}</span></span></Magnetic></div></div><ContactDetails /></div>
      </div>
    </header>
  );
}
