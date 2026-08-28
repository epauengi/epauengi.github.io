"use client";

import { Magnetic } from "./Magnetic";
import { usePortfolioLanguage } from "./PortfolioLanguage";

export function Hamburger() {
  const { content } = usePortfolioLanguage();

  return (
    <div className="btn btn-hamburger">
      <Magnetic strength={50} strengthText={25}>
        <div className="btn-fill" />
        <div className="btn-text">
          <div className="btn-bars" />
          <span className="btn-text-inner">{content.nav.menu}</span>
        </div>
      </Magnetic>
    </div>
  );
}
