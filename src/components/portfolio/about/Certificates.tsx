"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function Certificates() {
  const { content } = usePortfolioLanguage();
  return (
    <section id="certificates" className="section about-certificates portfolio-certificates" data-scroll-section>
      <div className="container medium"><div className="row">
        <div className="flex-col"><div className="single-image"><div className="overlay portfolio-certificate-mark"><span>{content.certificateSection.badge}</span></div><div className="overlay" /></div></div>
        <div className="flex-col"><div className="certificate-badge"><span>{content.certificateSection.label}</span></div><h2>{content.certificateSection.heading}</h2>{content.certificates.map((certificate) => <article className="portfolio-certificate" key={certificate.title}><h4>{certificate.title}</h4><p><strong>{certificate.issuer}</strong><br />{certificate.date}</p><p>{certificate.description}</p></article>)}</div>
      </div></div>
    </section>
  );
}
