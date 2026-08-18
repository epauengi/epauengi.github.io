import { motion } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { Magnetic } from './Magnetic';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center p-8 md:p-10 lg:pl-24 relative pointer-events-auto">
      <div className="max-w-2xl z-10 mx-auto text-center w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="flex flex-col items-center"
        >
          <h4 className="font-mono text-sm tracking-[0.2em] text-primary-container uppercase mb-4">What's Next?</h4>
          <h2 className="font-display text-4xl md:text-5xl text-on-surface font-bold tracking-tight mb-6">{t.contact.title}</h2>
          
          <p className="text-on-surface-variant text-lg leading-relaxed font-body mb-12">
            {t.contact.text}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Magnetic strength={0.3}>
              <a
                href="mailto:ndphong0602@gmail.com"
                className="bg-primary-container border border-primary-container text-on-primary-fixed px-10 py-5 font-mono text-sm tracking-[0.15em] font-medium hover:bg-transparent hover:text-primary-container transition-all duration-300 text-center inline-block"
              >
                {t.contact.emailBtn}
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href="#"
                className="border border-outline-variant text-on-surface px-10 py-5 font-mono text-sm tracking-[0.15em] font-medium hover:border-primary-container hover:text-primary-container transition-all duration-300 text-center inline-block"
              >
                {t.contact.resumeBtn}
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
      
      <footer className="absolute bottom-0 left-0 w-full p-6 text-center font-mono text-xs text-on-surface-muted font-medium pointer-events-none">
        <p>&copy; {new Date().getFullYear()} Phong Nguyen.</p>
      </footer>
    </section>
  );
}
