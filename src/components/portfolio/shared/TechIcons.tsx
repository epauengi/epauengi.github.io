import type { SVGProps } from "react";

export function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-11.5 -10.232 23 20.464" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
        <circle cx="90" cy="90" r="90" fill="#000" />
      </mask>
      <g mask="url(#nextjs-mask)">
        <circle cx="90" cy="90" r="90" fill="#000" />
        <path
          d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.141 149.508 157.438Z"
          fill="url(#nextjs-grad)"
        />
        <rect x="115" y="54" width="12" height="72" fill="#fff" />
      </g>
      <defs>
        <linearGradient id="nextjs-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path
        d="M41.7 54.8v45.4h-12V54.8H15.1v-10h41.2v10H41.7zm38.1 46.2c-15.3 0-22.3-8.8-22.3-19.1 0-14.3 11-18.7 20.8-22.7 7.7-3.2 11.2-5.7 11.2-10.7 0-4.6-3.8-7.9-10.1-7.9-7.2 0-12.7 4.1-13.6 10.9h-10.7c1.3-12.8 11.2-19.8 24.3-19.8 14 0 21.6 7.6 21.6 18.2 0 12.8-9.1 17.5-19.7 21.8-8.2 3.4-12.2 6.1-12.2 11.6 0 5.4 4.5 8.9 11.2 8.9 7.7 0 13.9-4.8 15.3-11.9h10.5c-1.6 13.1-11.3 20.7-26.3 20.7z"
        fill="#fff"
      />
    </svg>
  );
}

export function NodejsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M64 8.5L114.5 37.7v58.5L64 125.5 13.5 96.2V37.7L64 8.5z"
        fill="#539E43"
      />
      <path
        d="M64 22L101 43.3v42.7L64 107.3 27 86V43.3L64 22z"
        fill="#333"
      />
      <path
        d="M64 36c-13.3 0-20 6.7-20 16 0 14.7 18.7 14 18.7 21.3 0 3.3-2.7 5.3-6.7 5.3-5.3 0-9.3-2.7-10.7-6.7l-7.3 4c2.7 6.7 8.7 10.7 18 10.7 13.3 0 20-6.7 20-16 0-14.7-18.7-14-18.7-21.3 0-3.3 2.7-5.3 6.7-5.3 4.7 0 8 2 9.3 5.3l7.3-4C78 39.3 72.7 36 64 36z"
        fill="#539E43"
      />
    </svg>
  );
}

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M63.5 10c-28.7 0-27 12.4-27 12.4l.03 12.9h27.5v3.9H25.3S10 37.4 10 66.1c0 28.7 13.3 27.7 13.3 27.7h7.9v-11.1s-.4-13.3 13.1-13.3h27.4s12.7.2 12.7-12.3V22.4S86.2 10 63.5 10zm-15 8.7c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"
        fill="#3776AB"
      />
      <path
        d="M64.5 118c28.7 0 27-12.4 27-12.4l-.03-12.9H63.9v-3.9h38.7s15.3 1.8 15.3-26.9c0-28.7-13.3-27.7-13.3-27.7h-7.9v11.1s.4 13.3-13.1 13.3H56.2s-12.7-.2-12.7 12.3v33.1s-1.8 12.4 21 12.4zm15-8.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"
        fill="#FFD438"
      />
    </svg>
  );
}

export function SpringIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M110.2 60.5C108 43.1 94.6 28.8 77.2 24.3c-23.7-6.1-47.5 7.1-54.7 30.3-2.9 9.3-2.2 19.3 2.1 28.1l-10.4 10.4c-2.2 2.2-2.2 5.8 0 8 2.2 2.2 5.8 2.2 8 0l10.5-10.5c9.2 4.8 19.7 6.1 29.8 3.5 24.3-6.2 40.5-28.9 37.7-53.6zm-44.5 43.1c-19.8 0-35.8-16.1-35.8-35.8s16.1-35.8 35.8-35.8c9.5 0 18.6 3.8 25.3 10.5 6.7 6.7 10.5 15.8 10.5 25.3 0 19.8-16 35.8-35.8 35.8z"
        fill="#6DB33F"
      />
      <path
        d="M65.7 36.8c-14.9 0-27 12.1-27 27s12.1 27 27 27 27-12.1 27-27-12.1-27-27-27zm0 43.2c-8.9 0-16.2-7.3-16.2-16.2 0-8.9 7.3-16.2 16.2-16.2 4.3 0 8.4 1.7 11.5 4.7 3.1 3.1 4.7 7.2 4.7 11.5 0 8.9-7.3 16.2-16.2 16.2z"
        fill="#6DB33F"
      />
    </svg>
  );
}

export function PostgresIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M64 12c-27.6 0-48 18.8-48 45.4 0 18.5 10.2 33.7 25.6 40.8v17.8h12V99.5c3.4.5 6.9.7 10.4.7 27.6 0 48-18.8 48-45.4C112 30.8 91.6 12 64 12zm0 76c-21.4 0-36-13.8-36-30.6 0-16.9 14.6-30.6 36-30.6 21.4 0 36 13.8 36 30.6 0 16.9-14.6 30.6-36 30.6z"
        fill="#336791"
      />
      <circle cx="50" cy="54" r="5" fill="#fff" />
      <circle cx="78" cy="54" r="5" fill="#fff" />
      <path d="M64 64c-6 0-10 3-10 6h20c0-3-4-6-10-6z" fill="#fff" />
    </svg>
  );
}

export function GeminiAIIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="gemini-grad" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4E88D4" />
          <stop offset="0.45" stopColor="#7E60C8" />
          <stop offset="0.85" stopColor="#D96570" />
          <stop offset="1" stopColor="#F39C12" />
        </linearGradient>
      </defs>
      <path
        d="M64 4C64 37.1 37.1 64 4 64c33.1 0 60 26.9 60 60 0-33.1 26.9-60 60-60-33.1 0-60-26.9-60-60z"
        fill="url(#gemini-grad)"
      />
    </svg>
  );
}
