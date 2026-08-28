"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "./icons";
import { Magnetic } from "./Magnetic";
import { usePortfolioLanguage } from "./PortfolioLanguage";
import { SOCIALS } from "./data";

function useHoChiMinhTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat([], { timeZone: "Asia/Ho_Chi_Minh", timeZoneName: "short", hour: "2-digit", hour12: true, minute: "numeric" });
    const update = () => setTime(formatter.format(new Date()));
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export function Footer() {
  const { content } = usePortfolioLanguage();
  const time = useHoChiMinhTime();
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer-rounded-div" data-scroll-section><div className="rounded-div-wrap"><div className="rounded-div" /></div></div>
      <div className="footer-wrap footer-footer-wrap theme-dark" data-scroll-section>
        <footer className="section footer" data-scroll data-scroll-speed="-4" data-scroll-position="bottom">
          <div className="container medium">
            <div className="row"><div className="flex-col"><div className="arrow"><ArrowUpRight /></div><h2><span><span className="profile-picture portfolio-monogram" aria-hidden="true">PN</span> {content.footer.heading}</span></h2></div></div>
            <div className="row"><div className="flex-col"><div className="stripe" /><div className="btn-fixed"><div className="btn btn-round" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" data-scroll-position="bottom" data-scroll-offset="-50%, 0"><Magnetic as="a" href="/contact/" strength={100} strengthText={50}><div className="btn-fill" /><span className="btn-text"><span className="btn-text-inner">{content.footer.action}</span></span></Magnetic></div></div></div></div>
            <div className="row"><div className="flex-col"><div className="btn btn-normal"><Magnetic as="a" href={`mailto:${content.identity.email}`} strength={25} strengthText={15}><div className="btn-fill" /><span className="btn-text"><span className="btn-text-inner change">{content.identity.email}</span></span></Magnetic></div></div></div>
          </div>
          <div className="container no-padding"><div className="row bottom-footer">
            <div className="flex-col"><div className="credits"><h5>{content.footer.version}</h5><p>© {year} Phong Nguyen.</p></div><div className="time"><h5>{content.footer.time}</h5><p><span id="timeSpan">{time}</span></p></div></div>
            <div className="flex-col"><div className="socials"><h5>{content.nav.socials}</h5><ul>{SOCIALS.map((social) => <li className="btn btn-link btn-link-external" key={social.label}><Magnetic as="a" href={social.href} target="_blank" rel="noreferrer" strength={20} strengthText={10}><span className="btn-text"><span className="btn-text-inner">{social.label}</span></span></Magnetic></li>)}</ul><div className="stripe" /></div></div>
          </div></div>
        </footer>
        <div className="overlay overlay-gradient" />
      </div>
    </>
  );
}
