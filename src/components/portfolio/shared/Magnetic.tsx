"use client";

import type { CSSProperties, ReactNode } from "react";

type Props = {
  as?: "a" | "div";
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
};

export function Magnetic({
  as = "div",
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
  };
  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} {...attrs}>
        {children}
      </a>
    );
  }
  return <div {...attrs}>{children}</div>;
}
