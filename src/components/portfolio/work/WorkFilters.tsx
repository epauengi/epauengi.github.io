"use client";

import type { ReactNode } from "react";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import { WORK_PROJECTS } from "./workData";

export type WorkFilter = "all" | "development";
export type WorkView = "rows" | "columns";

type Props = {
  filter: WorkFilter;
  view: WorkView;
  onFilterChange: (filter: WorkFilter) => void;
  onViewChange: (view: WorkView) => void;
};

function RowsIcon() {
  return <svg aria-hidden="true" width="20" height="19" viewBox="0 0 20 19"><path d="M0 6h20v1H0zM0 0h20v1H0zM0 12h20v1H0zM0 18h20v1H0z" fill="currentColor" /></svg>;
}

function ColumnsIcon() {
  return <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20"><path d="M8 0H0v8h8V0zM7 1v6H1V1h6zM8 12H0v8h8v-8zm-1 1v6H1v-6h6zM20 0h-8v8h8V0zm-1 1v6h-6V1h6zM20 12h-8v8h8v-8zm-1 1v6h-6v-6h6z" fill="currentColor" /></svg>;
}

function Control({ active, className, label, onClick, children }: {
  active: boolean;
  className: string;
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className={`btn btn-normal ${className}${active ? " active" : " not-active"}`}>
      <button type="button" className="btn-click magnetic" data-strength="25" data-strength-text="15" aria-label={label} aria-pressed={active} onClick={onClick}>
        <span className="btn-fill" />
        <span className="btn-text"><span className="btn-text-inner change">{children}</span></span>
      </button>
    </div>
  );
}

export function WorkFilters({ filter, view, onFilterChange, onViewChange }: Props) {
  const { content } = usePortfolioLanguage();
  const count = WORK_PROJECTS.length;

  return (
    <section className="section work-filters" data-scroll-section>
      <div className="container once-in">
        <div className="filter-row">
          <div className="toggle-row">
            <Control active={filter === "all"} className="all-btn" label={content.work.all} onClick={() => onFilterChange("all")}>{content.work.all}<span className="count-nr">{count}</span></Control>
            <Control active={filter === "development"} className="development-btn" label={content.work.development} onClick={() => onFilterChange("development")}>{content.work.development}<span className="count-nr">{count}</span></Control>
          </div>
          <div className="grid-row" aria-label="Project layout">
            <Control active={view === "rows"} className="btn-icon rows-btn" label="Rows" onClick={() => onViewChange("rows")}><RowsIcon /></Control>
            <Control active={view === "columns"} className="btn-icon columns-btn" label="Columns" onClick={() => onViewChange("columns")}><ColumnsIcon /></Control>
          </div>
        </div>
      </div>
    </section>
  );
}
