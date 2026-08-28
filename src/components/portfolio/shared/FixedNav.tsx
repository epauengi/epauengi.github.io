"use client";

import { Magnetic } from "./Magnetic";
import { RippleButton } from "./RippleButton";
import { usePortfolioLanguage } from "./PortfolioLanguage";
import { NAV, SOCIALS, type SiteRoute } from "./data";

type Props = { currentRoute?: SiteRoute };

export function FixedNav({ currentRoute = "/" }: Props) {
  const { content, toggleLanguage } = usePortfolioLanguage();

  return (
    <>
      <div className="overlay fixed-nav-back" />
      <div className="fixed-nav theme-dark">
        <div className="fixed-nav-rounded-div"><div className="rounded-div-wrap"><div className="rounded-div" /></div></div>
        <div className="fixed-nav-inner">
          <div className="row nav-row">
            <h5>{content.nav.navigation}</h5>
            <div className="stripe" />
            <ul className="links-wrap">
              {NAV.map((item) => (
                <li className={`btn btn-link${item.href === currentRoute ? " active" : ""}`} key={item.href}>
                  <Magnetic as="a" href={item.href} strength={24} strengthText={12}>
                    <span className="btn-text"><span className="btn-text-inner">{content.nav[item.key]}</span></span>
                  </Magnetic>
                </li>
              ))}
              <li className="btn btn-link portfolio-language-toggle">
                <RippleButton type="button" className="btn-click magnetic lang-ripple-btn" onClick={toggleLanguage} aria-label={content.language.toggle}>
                  <span className="btn-text"><span className="btn-text-inner">{content.language.label}</span></span>
                </RippleButton>
              </li>
            </ul>
          </div>
          <div className="row social-row">
            <div className="stripe" />
            <div className="socials">
              <h5>{content.nav.socials}</h5>
              <ul>
                {SOCIALS.map((social) => (
                  <li className="btn btn-link btn-link-external" key={social.label}>
                    <Magnetic as="a" href={social.href} target="_blank" rel="noreferrer" strength={20} strengthText={10}>
                      <span className="btn-text"><span className="btn-text-inner">{social.label}</span></span>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
