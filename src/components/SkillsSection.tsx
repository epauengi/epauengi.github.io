import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center p-8 md:p-10 lg:pl-44 relative pointer-events-auto">
      <div className="max-w-5xl z-10 md:ml-12 lg:ml-16 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold tracking-tight">{t.skills.title}</h2>
            <div className="h-[1px] bg-outline-variant flex-grow max-w-[200px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="flex flex-col gap-10">
              {t.skills.categories.slice(0, 3).map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-mono text-xs tracking-[0.2em] text-primary-container uppercase mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.split(', ').map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 text-on-surface-variant font-body text-sm hover:border-primary-container hover:text-primary-container transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col gap-10">
              {t.skills.categories.slice(3).map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-mono text-xs tracking-[0.2em] text-primary-container uppercase mb-4">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.split(', ').map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 text-on-surface-variant font-body text-sm hover:border-primary-container hover:text-primary-container transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-6 border border-outline-variant/20 bg-surface/50 backdrop-blur-sm">
                <h3 className="font-mono text-xs tracking-[0.2em] text-on-surface-muted font-medium uppercase mb-6 text-center">PROFICIENCY</h3>
                <div className="flex flex-col gap-4">
                  {t.skills.levels.map((level: any, i: number) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2">
                      <span className="font-display text-sm text-on-surface font-semibold min-w-[120px]">{level.title}:</span>
                      <span className="font-body text-sm text-on-surface-variant">{level.items}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
