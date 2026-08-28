"use client";

import { Magnetic } from "./Magnetic";
import { RippleButton } from "./RippleButton";
import { usePortfolioLanguage } from "./PortfolioLanguage";
import { NAV, type SiteRoute } from "./data";

type Props = { currentRoute?: SiteRoute };

export function NavBar({ currentRoute = "/" }: Props) {
  const { content, toggleLanguage } = usePortfolioLanguage();

  return (
    <div className="nav-bar">
      <div className="brand-lockup">
        <div className="btn btn-link btn-left-top">
          <Magnetic as="a" href="/" strength={20} strengthText={10}>
            <span className="btn-text">
              <span className="brand-lockup__copyright">©</span>
              <span className="brand-lockup__copy">
                <span className="brand-lockup__prefix">Portfolio by </span>
                <span className="brand-lockup__owner"><span>Phong</span> <span>Nguyen</span></span>
              </span>
            </span>
          </Magnetic>
        </div>
      </div>
      <ul className="links-wrap">
        {NAV.slice(1).map((item) => (
          <li className={`btn btn-link${item.href === currentRoute ? " active" : ""}`} key={item.href}>
            <Magnetic as="a" href={item.href} strength={20} strengthText={10}>
              <span className="btn-text"><span className="btn-text-inner">{content.nav[item.key]}</span></span>
            </Magnetic>
          </li>
        ))}
        <li className="btn btn-link portfolio-language-toggle">
          <RippleButton type="button" className="btn-click magnetic lang-ripple-btn" onClick={toggleLanguage} aria-label={content.language.toggle}>
            <span className="btn-text"><span className="btn-text-inner">{content.language.label}</span></span>
          </RippleButton>
        </li>
        <li className="btn btn-link btn-menu">
          <Magnetic strength={20} strengthText={10}>
            <div className="btn-text"><span className="btn-text-inner">{content.nav.menu}</span></div>
          </Magnetic>
        </li>
      </ul>
    </div>
  );
}
