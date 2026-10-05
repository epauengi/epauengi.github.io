"use client";

import { Magnetic } from "./Magnetic";
import { usePortfolioLanguage } from "./PortfolioLanguage";

export function Hamburger() {
  const { content } = usePortfolioLanguage();

  return (
    <div className="btn btn-hamburger">
      <Magnetic
        as="button"
        strength={50}
        strengthText={25}
        aria-label={content.nav.menu}
        aria-expanded={false}
        aria-controls="fixed-nav"
      >
        <div className="btn-fill" />
        <div className="btn-text">
          <div className="btn-bars" />
          <span className="btn-text-inner">{content.nav.menu}</span>
        </div>
      </Magnetic>
    </div>
  );
}
