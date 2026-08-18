import { Github, Facebook, Linkedin, Mail } from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full flex-col items-center py-10 z-40 border-r border-outline-variant/20 w-24 hidden lg:flex pointer-events-none">
      <div className="flex flex-col gap-14 mt-40 pointer-events-auto w-full items-center">
        <a className="group relative flex items-center justify-center w-full text-on-surface-variant hover:text-primary transition-colors" href="https://github.com/epauengi" target="_blank" rel="noopener noreferrer">
          <Github size={22} />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity bg-surface/70 backdrop-blur-md px-2 py-1 text-[10px] font-mono tracking-[0.15em] ml-2 border border-outline-variant/30 uppercase whitespace-nowrap text-on-surface font-medium">GITHUB</span>
        </a>
        <a className="group relative flex items-center justify-center w-full text-on-surface-variant hover:text-primary transition-colors" href="#contact">
          <Linkedin size={22} />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity bg-surface/70 backdrop-blur-md px-2 py-1 text-[10px] font-mono tracking-[0.15em] ml-2 border border-outline-variant/30 uppercase whitespace-nowrap text-on-surface font-medium">LINKEDIN</span>
        </a>
        <a className="group relative flex items-center justify-center w-full text-on-surface-variant hover:text-primary transition-colors" href="mailto:ndphong0602@gmail.com">
          <Mail size={22} />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity bg-surface/70 backdrop-blur-md px-2 py-1 text-[10px] font-mono tracking-[0.15em] ml-2 border border-outline-variant/30 uppercase whitespace-nowrap text-on-surface font-medium">EMAIL</span>
        </a>
        <a className="group relative flex items-center justify-center w-full text-on-surface-variant hover:text-primary transition-colors" href="https://facebook.com/phong626262" target="_blank" rel="noopener noreferrer">
          <Facebook size={22} />
          <span className="absolute left-16 opacity-0 group-hover:opacity-100 transition-opacity bg-surface/70 backdrop-blur-md px-2 py-1 text-[10px] font-mono tracking-[0.15em] ml-2 border border-outline-variant/30 uppercase whitespace-nowrap text-on-surface font-medium">FACEBOOK</span>
        </a>
      </div>
    </aside>
  );
}
