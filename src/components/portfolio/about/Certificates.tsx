"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function Certificates() {
  const { content } = usePortfolioLanguage();
  return (
    <section id="certificates" className="section about-certificates portfolio-certificates" data-scroll-section>
      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            <div className="certificate-badge">
              <span>{content.certificateSection.label}</span>
            </div>
            <h2>{content.certificateSection.heading}</h2>
            {content.certificates.map((certificate) => (
              <article className="portfolio-certificate" key={certificate.title}>
                <h4>{certificate.title}</h4>
                <div className="portfolio-certificate-meta">
                  <span className="issuer">{certificate.issuer}</span>
                  <span className="divider">·</span>
                  <span className="date">{certificate.date}</span>
                </div>
                <p className="portfolio-certificate-desc">{certificate.description}</p>
                <div className="portfolio-certificate-tags">
                  {certificate.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
