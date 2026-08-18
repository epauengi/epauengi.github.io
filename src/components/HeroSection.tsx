import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { ThreeBackground } from "./ThreeBackground";
import { Magnetic } from "./Magnetic";

const CHARSET = "ABCDEF0123456789#$%&";

// Decode effect: runs once per mount; language switches after decode swap text instantly
function useScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const revealed = useRef(false);

  useEffect(() => {
    if (revealed.current) {
      setDisplay(text);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealed.current = true;
      return;
    }
    let frame = 0;
    const total = 28; // ~0.9s at 33ms
    const id = setInterval(() => {
      frame++;
      const revealCount = Math.floor((frame / total) * text.length);
      setDisplay(
        text
          .split("")
          .map((ch, i) =>
            ch === " " || i < revealCount
              ? ch
              : CHARSET[Math.floor(Math.random() * CHARSET.length)]
          )
          .join("")
      );
      if (frame >= total) {
        revealed.current = true;
        setDisplay(text);
        clearInterval(id);
      }
    }, 33);
    return () => clearInterval(id);
  }, [text]);

  return display;
}

export function HeroSection() {
  const { t } = useLanguage();
  const name = useScramble(t.hero.name);
  const title = useScramble(t.hero.title);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center p-8 md:p-10 lg:pl-32 pt-28 pb-12 relative"
    >
      <ThreeBackground />
      <div className="max-w-4xl z-10 md:ml-12 lg:ml-16 my-auto pointer-events-none">
        <motion.p
          className="font-mono text-xs md:text-sm text-primary-container font-semibold tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.hero.greeting}
        </motion.p>
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-[72px] leading-[1.15] md:leading-[80px] tracking-tight text-on-surface mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {name} <br />
          <span className="text-primary-container text-3xl sm:text-4xl md:text-[52px]">
            {title}
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-6 pointer-events-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Magnetic strength={0.3}>
            <a
              href="#projects"
              className="bg-primary-container text-on-primary-fixed border border-primary-container px-8 py-4 font-mono text-xs tracking-[0.15em] font-medium hover:bg-transparent hover:text-primary-container transition-all duration-300 text-center inline-block"
            >
              {t.hero.projectsBtn}
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              className="bg-surface/30 backdrop-blur-md border border-outline-variant px-8 py-4 font-mono text-xs tracking-[0.15em] font-medium hover:border-primary-container hover:text-primary-container transition-all duration-300 text-center inline-block"
            >
              {t.contact.resumeBtn}
            </a>
          </Magnetic>
        </motion.div>

        {/* Location & Status Footer (Flow-based to prevent any overlapping) */}
        <div className="flex justify-between items-end pt-6 border-t border-outline-variant/20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[11px] md:text-[13px] text-on-surface-muted font-medium mb-1 tracking-wider">
              LOCATION
            </p>
            <p className="font-display text-base md:text-xl text-on-surface font-semibold tracking-wide uppercase">
              {t.hero.location}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-end hidden md:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-surface/40 backdrop-blur-md border border-outline-variant/30 rounded-full text-[10px] font-mono tracking-[0.15em] text-on-surface-variant uppercase font-medium">
                AVAILABLE FOR HIRE
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
