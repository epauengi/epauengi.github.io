"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Footer } from "../shared/Footer";
import { SiteFrame } from "../shared/SiteFrame";
import { WorkFilters, type WorkFilter, type WorkView } from "./WorkFilters";
import { WorkHeader } from "./WorkHeader";
import { WorkMouseFollow } from "./WorkMouseFollow";
import { WorkRows } from "./WorkRows";
import { WorkTiles } from "./WorkTiles";

const subscribeNone = () => () => {};
const readViewCookie = (): WorkView =>
  document.cookie.split("; ").find((cookie) => cookie.startsWith("view="))?.split("=")[1] === "columns"
    ? "columns"
    : "rows";

type Phase = "idle" | "out" | "in";

export function WorkPage() {
  const cookieView = useSyncExternalStore(subscribeNone, readViewCookie, () => "rows" as const);
  const [filter, setFilter] = useState<WorkFilter>("all");
  const [viewOverride, setViewOverride] = useState<WorkView | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<number[]>([]);
  const view = viewOverride ?? cookieView;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("work:layout-change", { detail: { phase: "update" } }));
  }, [filter, view]);

  useEffect(() => () => timers.current.forEach(window.clearTimeout), []);

  const runTransition = (update: () => void) => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    window.dispatchEvent(new CustomEvent("work:layout-change", { detail: { phase: "start" } }));
    setPhase("out");
    timers.current.push(window.setTimeout(() => {
      update();
      setPhase("in");
      window.dispatchEvent(new CustomEvent("work:layout-change", { detail: { phase: "middle" } }));
    }, 300));
    timers.current.push(window.setTimeout(() => {
      setPhase("idle");
      window.dispatchEvent(new CustomEvent("work:layout-change", { detail: { phase: "finish" } }));
    }, 700));
    timers.current.push(window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("work:layout-change", { detail: { phase: "update" } }));
    }, 1000));
  };

  const changeFilter = (next: WorkFilter) => {
    if (next !== filter) runTransition(() => setFilter(next));
  };

  const changeView = (next: WorkView) => {
    if (next === view) return;
    document.cookie = `view=${next}; max-age=1209600; path=/; samesite=lax`;
    runTransition(() => setViewOverride(next));
  };

  return (
    <SiteFrame pageId="work" loaderLabel="Work" beforeChrome={<WorkMouseFollow filter={filter} />}>
      <WorkHeader />
      <WorkFilters filter={filter} view={view} onFilterChange={changeFilter} onViewChange={changeView} />
      <section className="section-wrap section-wrap-work once-in" data-scroll-section>
        <WorkRows filter={filter} view={view} />
        <WorkTiles filter={filter} view={view} phase={phase} />
      </section>
      <Footer />
    </SiteFrame>
  );
}
