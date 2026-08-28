"use client";

import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type PointerEvent,
} from "react";

type Ripple = { x: number; y: number; size: number; key: number };

type RippleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  rippleColor?: string;
  duration?: number;
};

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, rippleColor = "var(--color-blue)", duration = 300, onClick, ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const key = useRef(0);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);

    const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const ripple = {
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2,
        size,
        key: key.current++,
      };

      setRipples((current) => [...current, ripple]);
      const timer = setTimeout(() => {
        setRipples((current) => current.filter((item) => item.key !== ripple.key));
      }, duration);
      timers.current.push(timer);
    };

    return (
      <button
        {...props}
        ref={ref}
        className={`ripple-button ${props.className ?? ""}`.trim()}
        onClick={onClick}
        onPointerDown={handlePointerDown}
        style={{ "--ripple-color": rippleColor, "--ripple-duration": `${duration}ms`, ...props.style } as CSSProperties}
      >
        {children}
        <span className="ripple-container" aria-hidden="true">
          {ripples.map((ripple) => (
            <span
              key={ripple.key}
              className="ripple-wave"
              style={{ width: ripple.size, height: ripple.size, top: ripple.y, left: ripple.x }}
            />
          ))}
        </span>
      </button>
    );
  },
);

RippleButton.displayName = "RippleButton";
