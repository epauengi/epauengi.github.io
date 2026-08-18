import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center p-8 md:p-10 lg:pl-44 relative bg-background/30 backdrop-blur-sm pointer-events-auto">
      <div className="max-w-5xl z-10 md:ml-12 lg:ml-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold tracking-tight">{t.about.title}</h2>
            <div className="h-[1px] bg-outline-variant flex-grow max-w-[200px]"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-7">
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                {t.about.text}
              </p>
              
              <div className="mt-12">
                <h3 className="font-mono text-sm tracking-[0.2em] text-primary-container uppercase mb-6">{t.about.statsHeading}</h3>
                <div className="flex flex-wrap gap-4">
                  {t.about.stats.map((stat, i) => (
                    <div key={i} className="px-5 py-3 bg-surface/40 backdrop-blur-md border border-outline-variant/40 rounded-full font-mono text-xs tracking-wider text-on-surface">
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
               <div className="w-full max-w-sm aspect-square relative border border-outline-variant/30 p-4">
                 <div className="w-full h-full bg-surface-container-low border border-outline-variant/20 flex flex-col items-center justify-center p-8 text-center pattern-grid-lg">
                    <span className="font-display text-6xl text-outline-variant opacity-30 font-bold mb-4">UIT</span>
                    <p className="font-mono text-xs text-on-surface-variant uppercase tracking-[0.2em]">Student</p>
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute top-0 left-0 w-2 h-2 bg-primary-container -translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute top-0 right-0 w-2 h-2 bg-primary-container translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary-container -translate-x-1/2 translate-y-1/2"></div>
                 <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary-container translate-x-1/2 translate-y-1/2"></div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
