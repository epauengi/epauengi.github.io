/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Lenis from "lenis";
import { LayoutGrid, Mail, User, FlaskConical, Award } from "lucide-react";
import { Cursor } from "./components/Cursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Magnetic } from "./components/Magnetic";
import { LanguageProvider } from "./lib/LanguageContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ autoRaf: true });
    const onClick = (e: globalThis.MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      const el = id && document.getElementById(id);
      if (!a || !el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -72 });
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <LanguageProvider>
      {/* SVG filter defs for liquid glass refraction */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-distortion" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves="2" seed="92" result="noise" />
            <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
            <feDisplacementMap in="SourceGraphic" in2="soft" scale="60" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="relative w-full min-h-screen font-body text-on-surface">
        <LoadingScreen isLoading={isLoading} />
        <Cursor />

        <Header />
        <Sidebar />

        <main className="relative z-10 w-full mx-auto pb-20 overflow-x-hidden">
          {!isLoading && (
            <>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <CertificatesSection />
              <ProjectsSection />
              <ContactSection />
            </>
          )}
        </main>

        {/* Mobile bottom nav */}
        {!isLoading && (
          <motion.div
            className="fixed bottom-0 left-0 w-full px-8 py-6 flex justify-center lg:hidden z-50 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="liquid-glass rounded-full px-8 py-4 flex gap-6 sm:gap-8 pointer-events-auto">
              <Magnetic strength={0.4}>
                <a href="#about" title="About">
                  <User
                    className="text-on-surface-variant hover:text-primary-container transition-colors"
                    size={22}
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="#skills" title="Skills">
                  <FlaskConical
                    className="text-on-surface-variant hover:text-primary-container transition-colors"
                    size={22}
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="#certificates" title="Certificates">
                  <Award
                    className="text-on-surface-variant hover:text-primary-container transition-colors"
                    size={22}
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="#projects" title="Projects">
                  <LayoutGrid
                    className="text-on-surface-variant hover:text-primary-container transition-colors"
                    size={22}
                  />
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a href="#contact" title="Contact">
                  <Mail
                    className="text-on-surface-variant hover:text-primary-container transition-colors"
                    size={22}
                  />
                </a>
              </Magnetic>
            </div>
          </motion.div>
        )}
      </div>
    </LanguageProvider>
  );
}
