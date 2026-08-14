import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export function CertificatesSection() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24 flex flex-col justify-center p-8 md:p-10 lg:pl-44 relative pointer-events-auto">
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
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold tracking-tight">
              {t.certificates?.title || "CERTIFICATIONS & DEGREES"}
            </h2>
            <div className="h-[1px] bg-outline-variant flex-grow max-w-[200px]"></div>
          </div>

          {/* Certificates Grid */}
          {t.certificates?.items && t.certificates.items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.certificates.items.map((item: any, idx: number) => (
                <div 
                  key={idx} 
                  className="group relative p-6 border border-outline-variant/30 bg-surface-container-low/80 backdrop-blur-sm transition-all duration-300 hover:border-primary-container hover:shadow-lg hover:shadow-primary-container/5 rounded-lg flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-container/10 text-primary-container rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-fixed transition-colors duration-300 shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg text-on-surface font-bold">{item.title}</h3>
                        <CheckCircle2 size={16} className="text-primary-container shrink-0" />
                      </div>
                      <p className="font-mono text-xs text-on-surface-muted uppercase mb-3 font-medium">
                        {item.issuer} • <span className="text-primary-container">{item.date}</span>
                      </p>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 border border-dashed border-outline-variant/40 bg-surface-container-low/50 backdrop-blur-sm flex flex-col items-center justify-center text-center rounded-xl">
              <div className="p-4 bg-primary-container/10 text-primary-container rounded-full mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="font-display text-xl text-on-surface font-semibold mb-2">
                {t.certificates?.title || "CERTIFICATIONS & DEGREES"}
              </h3>
              <p className="font-body text-sm text-on-surface-variant max-w-md">
                {t.certificates?.emptyMessage || "No certifications added yet. Check back soon!"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
