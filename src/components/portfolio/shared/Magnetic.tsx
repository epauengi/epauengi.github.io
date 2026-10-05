"use client";

import type { CSSProperties, ReactNode } from "react";

type Props = {
  as?: "a" | "div" | "button";
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
  rel?: string;
  strength?: number;
  strengthText?: number;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  title?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean | "true" | "false";
  "aria-controls"?: string;
};

export function Magnetic({
  as = "div",
  type = "button",
  href,
  target,
  rel,
  strength = 20,
  strengthText = 10,
  className = "",
  children,
  style,
  onClick,
  title,
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
}: Props) {
  const cls = `btn-click magnetic ${className}`.trim();
  const attrs = {
    className: cls,
    "data-strength": String(strength),
    "data-strength-text": String(strengthText),
    style,
    onClick,
    title,
    "aria-label": ariaLabel,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
  };
  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} {...attrs}>
        {children}
      </a>
    );
  }
  if (as === "button") {
    return (
      <button type={type} {...attrs}>
        {children}
      </button>
    );
  }
  return <div {...attrs}>{children}</div>;
}
