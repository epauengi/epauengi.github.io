import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useLanguage } from '../lib/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

function ProjectCardImage({ project }: { project: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full group relative perspective-[1000px]">
      {/* Vùng sáng mờ bao quanh viền ảnh (Soft Ambient Glow Ring) */}
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-sky-500/40 via-cyan-400/50 to-blue-600/40 opacity-30 blur-2xl group-hover:opacity-100 group-hover:blur-3xl group-hover:scale-105 transition-all duration-500 z-0" />
      
      {/* Border glow accent line */}
      <div className="absolute -inset-[2px] rounded-[12px] bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 opacity-20 group-hover:opacity-80 blur-[2px] transition-opacity duration-500 z-0" />

      {/* Shadow background layer */}
      <div className="absolute inset-0 bg-primary-container/20 dark:bg-sky-200/10 rounded-[10px] translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 z-0" />

      {/* 3D Tilting Card */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        className="relative z-10 aspect-video w-full overflow-hidden rounded-[10px] border border-cyan-500/30 bg-slate-900/90 shadow-[0_10px_30px_-10px_rgba(0,180,255,0.3)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,210,255,0.5)] group-hover:border-cyan-400/60 transition-all duration-300"
      >
        <div className="absolute inset-0 rounded-[10px] bg-[linear-gradient(135deg,rgba(59,130,246,0.9),rgba(34,211,238,0.7),rgba(59,130,246,0.9))] bg-[length:220%_220%] opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-[pulse_2.8s_ease-in-out_infinite]" />
        
        <div className="absolute inset-[1px] rounded-[9px] overflow-hidden bg-surface-container-low">
          <img
            src={`/assets/${project.image}`}
            alt={`${project.name} project preview`}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dynamic Light Reflection / Glare */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 65%)`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 flex flex-col justify-center p-8 md:p-10 lg:pl-44 relative bg-background/30 backdrop-blur-sm pointer-events-auto">
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
            <h2 className="font-display text-3xl md:text-4xl text-on-surface font-bold tracking-tight">{t.projects.title}</h2>
            <div className="h-[1px] bg-outline-variant flex-grow max-w-[300px]"></div>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20 lg:translate-x-[-0.75rem]">
            {t.projects.items.map((project: any, index: number) => (
              <div 
                key={index} 
                className={`flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 !== 0 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
              >
                <ProjectCardImage project={project} />

                <div className={`w-full flex flex-col ${index % 2 !== 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} lg:translate-x-[-0.5rem]`}>
                  <h3 className="font-display text-2xl md:text-3xl text-on-surface font-bold mb-6">{project.name}</h3>
                  <p className="font-mono text-xs text-on-surface-muted font-medium mb-4 uppercase">{project.subtitle}</p>
                  
                  <div className={`w-full bg-surface-container-low border border-outline-variant/20 p-6 z-20 mb-6 drop-shadow-2xl text-left ${index % 2 !== 0 ? '' : ''}`}>
                    <p className="text-on-surface-variant font-body mb-4">{project.desc}</p>
                    <div className="mb-2">
                       <strong className="text-on-surface text-sm font-display">Key Features:</strong>
                       <ul className="list-disc list-inside text-on-surface-variant text-sm mt-2 grid grid-cols-1 md:grid-cols-2 gap-1">
                         {project.features.map((f: string, i: number) => <li key={i}>{f}</li>)}
                       </ul>
                    </div>
                    <div className="mt-4 pt-4 border-t border-outline-variant/20 text-sm text-on-surface-variant">
                      <strong className="text-on-surface font-display inline-block mb-1">My Role:</strong><br/>
                      {project.role}
                    </div>
                  </div>

                  <ul className={`flex flex-wrap gap-x-4 gap-y-2 mb-8 font-mono text-xs text-on-surface-muted font-medium ${index % 2 !== 0 ? 'justify-start' : 'lg:justify-end'}`}>
                    {project.stack.map((tech: string, i: number) => (
                      <li key={i} className="whitespace-nowrap">{tech}</li>
                    ))}
                  </ul>

                  <div className={`flex gap-6 items-center ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.github, "_blank", "noopener,noreferrer");
                      }}
                      className="text-on-surface-variant hover:text-primary-container transition-colors"
                      aria-label="GitHub Link"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.demo, "_blank", "noopener,noreferrer");
                      }}
                      className="text-on-surface-variant hover:text-primary-container transition-colors"
                      aria-label="External Link"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
