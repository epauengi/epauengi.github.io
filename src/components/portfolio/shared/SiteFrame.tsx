"use client";

import type { ReactNode } from "react";
import { FixedNav } from "./FixedNav";
import { Hamburger } from "./Hamburger";
import { LoadingScreen, type LoaderLabel } from "./LoadingScreen";
import { SiteEngine } from "./SiteEngine";
import type { SiteRoute } from "./data";

type SitePageId = "home" | "work" | "about" | "contact";

type Props = {
  pageId: SitePageId;
  loaderLabel: LoaderLabel;
  children: ReactNode;
  beforeChrome?: ReactNode;
};

const ROUTES: Record<SitePageId, SiteRoute> = {
  home: "/",
  work: "/work/",
  about: "/about/",
  contact: "/contact/",
};

export function SiteFrame({ pageId, loaderLabel, children, beforeChrome }: Props) {
  const currentRoute = ROUTES[pageId];

  return (
    <>
      <LoadingScreen label={loaderLabel} />
      <main className="main no-touch" id={pageId}>
        {beforeChrome}
        <Hamburger />
        <FixedNav currentRoute={currentRoute} />
        <div className="main-wrap" data-scroll-container>
          {children}
        </div>
      </main>
      <SiteEngine pageId={pageId} />
    </>
  );
}
