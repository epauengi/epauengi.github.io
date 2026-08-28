"use client";

import { Magnetic } from "../shared/Magnetic";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { SOCIALS } from "../shared/data";

export function ContactDetails() {
  const { content } = usePortfolioLanguage();
  return (
    <div className="flex-col">
      <h5>{content.contact.details}</h5>
      <ul className="links-wrap"><li className="btn btn-link btn-link-external"><Magnetic as="a" href={`mailto:${content.identity.email}`} strength={20} strengthText={10}><span className="btn-text"><span className="btn-text-inner">{content.identity.email}</span></span></Magnetic></li></ul>
      <h5>{content.identity.school}</h5>
      <ul className="links-wrap"><li><p>{content.contact.location}</p></li></ul>
      <h5>{content.nav.socials}</h5>
      <ul className="links-wrap">{SOCIALS.map((social) => <li className="btn btn-link btn-link-external" key={social.label}><Magnetic as="a" href={social.href} target="_blank" rel="noreferrer" strength={20} strengthText={10}><span className="btn-text"><span className="btn-text-inner">{social.label}</span></span></Magnetic></li>)}</ul>
    </div>
  );
}
