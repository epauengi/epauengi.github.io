"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import { usePortfolioLanguage } from "../shared/PortfolioLanguage";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  PostgresIcon,
  SupabaseIcon,
  GitIcon,
} from "../shared/TechIcons";

interface SatelliteItem {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  labelEn: string;
  labelJp: string;
  angleOffset: number;
  isPrimary: boolean;
  className: string;
}

const ORBIT_A = 0.56;
const ORBIT_B = 0.2408;
const ORBIT_ALPHA = -24 * (Math.PI / 180);
const COS_ALPHA = Math.cos(ORBIT_ALPHA);
const SIN_ALPHA = Math.sin(ORBIT_ALPHA);
const ORBIT_CYCLE_SECONDS = 32;

// 8 core technologies spaced evenly at 45 degree (PI/4) intervals
const SATELLITES: SatelliteItem[] = [
  {
    id: "react",
    icon: ReactIcon,
    labelEn: "React",
    labelJp: "React",
    angleOffset: 0, // 0 deg
    isPrimary: true,
    className: "portfolio-systems-orb__icon--react",
  },
  {
    id: "typescript",
    icon: TypeScriptIcon,
    labelEn: "TypeScript",
    labelJp: "TypeScript",
    angleOffset: Math.PI * 0.25, // 45 deg
    isPrimary: true,
    className: "portfolio-systems-orb__icon--ts",
  },
  {
    id: "nextjs",
    icon: NextjsIcon,
    labelEn: "Next.js",
    labelJp: "Next.js",
    angleOffset: Math.PI * 0.5, // 90 deg
    isPrimary: true,
    className: "portfolio-systems-orb__icon--nextjs",
  },
  {
    id: "javascript",
    icon: JavaScriptIcon,
    labelEn: "JavaScript",
    labelJp: "JavaScript",
    angleOffset: Math.PI * 0.75, // 135 deg
    isPrimary: false,
    className: "portfolio-systems-orb__icon--js",
  },
  {
    id: "tailwind",
    icon: TailwindIcon,
    labelEn: "Tailwind CSS",
    labelJp: "Tailwind CSS",
    angleOffset: Math.PI, // 180 deg
    isPrimary: false,
    className: "portfolio-systems-orb__icon--tailwind",
  },
  {
    id: "postgres",
    icon: PostgresIcon,
    labelEn: "PostgreSQL",
    labelJp: "PostgreSQL",
    angleOffset: Math.PI * 1.25, // 225 deg
    isPrimary: true,
    className: "portfolio-systems-orb__icon--postgres",
  },
  {
    id: "supabase",
    icon: SupabaseIcon,
    labelEn: "Supabase",
    labelJp: "Supabase",
    angleOffset: Math.PI * 1.5, // 270 deg
    isPrimary: false,
    className: "portfolio-systems-orb__icon--supabase",
  },
  {
    id: "git",
    icon: GitIcon,
    labelEn: "Git",
    labelJp: "Git",
    angleOffset: Math.PI * 1.75, // 315 deg
    isPrimary: false,
    className: "portfolio-systems-orb__icon--git",
  },
];

export function PortfolioOrb() {
  const { language } = usePortfolioLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const satelliteRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const isHoveredRef = useRef(false);
  const angleRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let currentSize = container.offsetWidth || 500;
    const handleResize = () => {
      if (container) {
        currentSize = container.offsetWidth || 500;
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Position a satellite on the orbital ellipse
    const updatePosition = (index: number, angle: number, size: number) => {
      const el = satelliteRefs.current[index];
      if (!el) return;

      const cosT = Math.cos(angle);
      const sinT = Math.sin(angle);

      // Point on the unrotated ellipse (relative to orb size)
      const x0 = ORBIT_A * cosT;
      const y0 = ORBIT_B * sinT;

      // Rotate by orbit inclination (-24 deg)
      const relX = x0 * COS_ALPHA - y0 * SIN_ALPHA;
      const relY = x0 * SIN_ALPHA + y0 * COS_ALPHA;

      const posX = relX * size;
      const posY = relY * size;

      // Depth calculations
      // sinT > 0 is the front half of the orbit; sinT <= 0 is the back half
      const isFront = sinT > 0;
      const depthScale = isFront ? 1.0 + 0.12 * sinT : 1.0 + 0.1 * sinT;
      const opacity = isFront ? 1.0 : Math.max(0.75, 0.75 + 0.25 * (1 + sinT));
      const zIndex = isFront ? 3 : 0;

      el.style.transform = `translate(-50%, -50%) translate3d(${posX.toFixed(2)}px, ${posY.toFixed(2)}px, 0) scale(${depthScale.toFixed(3)})`;
      el.style.zIndex = String(zIndex);
      el.style.opacity = opacity.toFixed(3);
    };

    let animId: number;

    const renderStatic = () => {
      SATELLITES.forEach((sat, i) => {
        updatePosition(i, sat.angleOffset, currentSize);
      });
    };

    if (prefersReducedMotion) {
      renderStatic();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    const tick = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      // Decelerate smoothly on hover to allow inspection
      const speedMultiplier = isHoveredRef.current ? 0.2 : 1.0;
      const angularSpeed = ((2 * Math.PI) / ORBIT_CYCLE_SECONDS) * speedMultiplier;
      angleRef.current = (angleRef.current + angularSpeed * delta) % (2 * Math.PI);

      SATELLITES.forEach((sat, i) => {
        updatePosition(i, angleRef.current + sat.angleOffset, currentSize);
      });

      animId = requestAnimationFrame(tick);
    };

    renderStatic();
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      lastTimeRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="portfolio-systems-orb" aria-hidden="true">
      <div className="portfolio-systems-orb__core">
        <span className="portfolio-systems-orb__mesh">
          <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--north" />
          <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--middle" />
          <span className="portfolio-systems-orb__latitude portfolio-systems-orb__latitude--south" />
          <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--west" />
          <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--center" />
          <span className="portfolio-systems-orb__meridian portfolio-systems-orb__meridian--east" />
        </span>
      </div>

      {/* Orbital rings: back half (zIndex: 0) and front half (zIndex: 2) */}
      <span className="portfolio-systems-orb__orbit portfolio-systems-orb__orbit--a" />
      <span className="portfolio-systems-orb__orbit portfolio-systems-orb__orbit--b" />

      {/* Orbiting Satellites (zIndex dynamically 3 in front, 0 behind) */}
      <div className="portfolio-systems-orb__satellites">
        {SATELLITES.map((sat, index) => {
          const Icon = sat.icon;
          const label = language === "jp" ? sat.labelJp : sat.labelEn;
          const isTooltipActive = activeTooltip === sat.id;

          return (
            <div
              key={sat.id}
              ref={(el) => {
                satelliteRefs.current[index] = el;
              }}
              className={`portfolio-systems-orb__satellite ${
                !sat.isPrimary ? "portfolio-systems-orb__satellite--secondary" : ""
              }`}
              onMouseEnter={() => {
                isHoveredRef.current = true;
                setActiveTooltip(sat.id);
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
                setActiveTooltip(null);
              }}
              aria-label={label}
            >
              <div className={`portfolio-systems-orb__icon ${sat.className}`}>
                <Icon aria-hidden="true" />
              </div>

              <div
                className={`portfolio-systems-orb__tooltip ${
                  isTooltipActive ? "portfolio-systems-orb__tooltip--visible" : ""
                }`}
              >
                <span>{label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
