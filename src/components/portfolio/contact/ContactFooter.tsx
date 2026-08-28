"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "../shared/Magnetic";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { SOCIALS } from "../shared/data";

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

export function ContactFooter() {
  const { content } = usePortfolioLanguage();
  const time = useHoChiMinhTime();
  return <footer className="section footer footer-contact theme-dark" data-scroll-section><div className="container no-padding"><div className="row bottom-footer"><div className="flex-col"><div className="credits"><h5>{content.footer.version}</h5><p>© {new Date().getFullYear()} Phong Nguyen.</p></div><div className="time"><h5>{content.footer.time}</h5><p><span id="timeSpan">{time}</span></p></div></div><div className="flex-col"><div className="socials"><h5>{content.nav.socials}</h5><ul>{SOCIALS.map((social) => <li className="btn btn-link btn-link-external" key={social.label}><Magnetic as="a" href={social.href} target="_blank" rel="noreferrer" strength={20} strengthText={10}><span className="btn-text"><span className="btn-text-inner">{social.label}</span></span></Magnetic></li>)}</ul><div className="stripe" /></div></div></div></div></footer>;
}
