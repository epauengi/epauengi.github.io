"use client";

import { usePortfolioLanguage } from "../shared/PortfolioLanguage";

export function Certificates() {
  const { content } = usePortfolioLanguage();
  return (
    <section id="certificates" className="section about-certificates portfolio-certificates" data-scroll-section>
      <div className="container medium">
        <div className="row">
          <div className="flex-col">
            <div className="portfolio-certificate-seal-card">
              <div className="certificate-card-top">
                <span className="certificate-seal-badge">{content.certificateSection.badge}</span>
                <div className="certificate-seal-sparkle" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="certificate-card-body">
                <span className="certificate-card-issuer">Google AI</span>
                <h3 className="certificate-card-title">Gemini Certified Student</h3>
                <p className="certificate-card-focus">AI Applications · Prompt Engineering</p>
              </div>
              <div className="certificate-card-bottom">
                <div className="certificate-verified-badge">
                  <span className="verified-dot" />
                  <span>Official Certification</span>
                </div>
              </div>
            </div>
          </div>
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
                  <span>Prompt Engineering</span>
                  <span>Google Gemini</span>
                  <span>AI Integration</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
