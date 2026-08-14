/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion } from "motion/react";
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
import { LanguageProvider } from "./lib/LanguageContext";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
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
            <div className="bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/20 px-8 py-4 flex gap-6 sm:gap-8 rounded-full pointer-events-auto">
              <a href="#about" title="About">
                <User
                  className="text-on-surface-variant hover:text-primary-container transition-colors"
                  size={22}
                />
              </a>
              <a href="#skills" title="Skills">
                <FlaskConical
                  className="text-on-surface-variant hover:text-primary-container transition-colors"
                  size={22}
                />
              </a>
              <a href="#certificates" title="Certificates">
                <Award
                  className="text-on-surface-variant hover:text-primary-container transition-colors"
                  size={22}
                />
              </a>
              <a href="#projects" title="Projects">
                <LayoutGrid
                  className="text-on-surface-variant hover:text-primary-container transition-colors"
                  size={22}
                />
              </a>
              <a href="#contact" title="Contact">
                <Mail
                  className="text-on-surface-variant hover:text-primary-container transition-colors"
                  size={22}
                />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </LanguageProvider>
  );
}
