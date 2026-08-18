import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '../lib/utils';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} className={cn('spotlight-card', className)} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
