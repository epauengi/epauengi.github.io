"use client";

import { GREETINGS } from "./data";
import { usePortfolioLanguage } from "./PortfolioLanguage";

export type LoaderLabel = "Home" | "Work" | "About" | "Contact";

type Props = { label?: LoaderLabel };

export function LoadingScreen({ label = "Home" }: Props) {
  const { content } = usePortfolioLanguage();
  const pageWords = ["Home", "Work", "About", "Contact"] as const;

  return (
    <>
      <div className="no-scroll-overlay" />
      <div className="loading-container">
        <div className="loading-screen">
          <div className="rounded-div-wrap top"><div className="rounded-div" /></div>
          <div className="loading-words">
            {GREETINGS.map((greeting) => <h2 key={greeting.text} className={greeting.extra}>{greeting.text}<div className="dot" /></h2>)}
            <h2 className="portfolio-loader-copy">{content.loader}<div className="dot" /></h2>
            {pageWords.map((word) => <h2 className={word === label ? "active" : undefined} key={word}>{word}<div className="dot" /></h2>)}
          </div>
          <div className="rounded-div-wrap bottom"><div className="rounded-div" /></div>
        </div>
      </div>
    </>
  );
}
