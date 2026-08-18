import { useState, useEffect } from 'react';
import { Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full flex justify-between items-center px-6 md:px-10 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 liquid-glass'
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      {/* Animated Colored Accent Gradient Border on Scroll */}
      <div 
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-primary-container to-cyan-400 transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="font-display text-3xl tracking-tighter text-on-surface font-bold pointer-events-auto">
        <a href="#hero">EPAUENGI.</a>
      </div>
      <nav className="hidden md:flex gap-8 items-center pointer-events-auto">
        <a className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary-container transition-colors font-medium" href="#about">{t.nav.about}</a>
        <a className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary-container transition-colors font-medium" href="#skills">{t.nav.skills}</a>
        <a className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary-container transition-colors font-medium" href="#certificates">{t.nav.certificates}</a>
        <a className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary-container transition-colors font-medium" href="#projects">{t.nav.projects}</a>
        <a className="font-mono text-xs uppercase tracking-[0.15em] text-on-surface hover:text-primary-container transition-colors font-medium" href="#contact">{t.nav.contact}</a>
        <div className="flex gap-4 ml-4 border-l border-outline-variant/40 pl-6 items-center">
          <button 
            onClick={() => setLang(lang === 'en' ? 'jp' : 'en')}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-colors font-mono text-xs font-medium cursor-pointer"
            title="Switch Language"
          >
            <Globe size={16} />
            {lang === 'en' ? 'JP' : 'EN'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-on-surface-variant hover:text-primary-container transition-colors cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

