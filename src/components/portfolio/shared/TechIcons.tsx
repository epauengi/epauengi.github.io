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
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M18.488 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
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

export function JavaScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
        fill="#000"
      />
    </svg>
  );
}

export function TailwindIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M64 32c-17.1 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.6 6.3 6.3 13.6 13.8 29.4 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.6C87 49.5 79.8 42 64 42zm-32 32c-17.1 0-27.7 8.5-32 25.6 6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.3 4.7 12.2 8.6 6.3 6.3 13.6 13.8 29.4 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.3-4.7-12.2-8.6C55 81.5 47.8 74 32 74z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function SupabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="supabase-grad" x1="68" y1="20" x2="68" y2="116" gradientUnits="userSpaceOnUse">
          <stop stopColor="#24E395" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
      </defs>
      <path
        d="M71.7 114.6c-2.4 3.1-7.5 1.5-7.7-2.5L62.2 68H106c4.6 0 7.3 5 4.8 8.9L71.7 114.6z"
        fill="#3ECF8E"
      />
      <path
        d="M56.3 13.4c2.4-3.1 7.5-1.5 7.7 2.5L65.8 60H22c-4.6 0-7.3-5-4.8-8.9L56.3 13.4z"
        fill="url(#supabase-grad)"
      />
    </svg>
  );
}

export function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M123.7 57.6L70.4 4.3c-3.7-3.7-9.8-3.7-13.5 0L44 17.2l17.1 17.1c3.9-1.3 8.5-.4 11.6 2.7 3.1 3.1 4 7.6 2.7 11.6l16.5 16.5c3.9-1.3 8.5-.4 11.6 2.7 4.4 4.4 4.4 11.6 0 16-4.4 4.4-11.6 4.4-16 0-3.3-3.3-4.1-8.1-2.5-12.2L72.2 54.3v27.2c1.2.6 2.4 1.4 3.4 2.4 4.4 4.4 4.4 11.6 0 16-4.4 4.4-11.6 4.4-16 0-4.4-4.4-4.4-11.6 0-16 1.3-1.3 2.8-2.2 4.5-2.7V53.7c-1.7-.5-3.2-1.4-4.5-2.7-3.3-3.3-4.1-8.1-2.5-12.2L40.1 21.8 4.3 57.6c-3.7 3.7-3.7 9.8 0 13.5l53.3 53.3c3.7 3.7 9.8 3.7 13.5 0l52.6-52.6c3.7-3.7 3.7-10.4 0-14.2z"
        fill="#F05032"
      />
    </svg>
  );
}
